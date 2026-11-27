/* Khung admin dùng chung — 3 cổng, mỗi cổng một màu:
   Quản trị bán hàng (đỏ, ADMIN_NAV) · Cổng Kho (xanh ngọc) · Cổng Nhân sự (tím).
   renderAdmin(trang) tự nhận ra trang thuộc cổng nào và đổi menu + màu (class portal-* trên body).
   Cần nạp proto.js trước (LOGO, STORES, PRODUCTS, fmt, toast). */
const ADMIN_NAV = [
  ['Bán hàng', [['ti-layout-dashboard', 'Tổng quan', 'admin-dashboard.html'], ['ti-receipt', 'Đơn hàng', 'admin-orders.html', '6'], ['ti-file-invoice', 'Báo giá', 'admin-quotes.html', '3'], ['ti-building-store', 'Bán tại showroom', 'admin-pos.html'], ['ti-arrow-back-up', 'Đổi trả', 'admin-returns.html'], ['ti-users', 'Khách hàng & bảng giá', 'admin-customers.html']]],
  ['Sản phẩm', [['ti-package', 'Sản phẩm', 'admin-products.html'], ['ti-discount-2', 'Khuyến mãi', 'admin-promotions.html'], ['ti-photo', 'Banner, bài viết, dự án', 'admin-content.html']]],
  ['Kho', [['ti-building-warehouse', 'Cổng Kho', 'admin-kho.html', '5']]],
  ['Lắp đặt & bảo hành', [['ti-calendar-event', 'Lịch lắp đặt', 'admin-install-calendar.html', '4'], ['ti-tool', 'Phiếu lắp đặt', 'admin-install-tickets.html'], ['ti-shield-check', 'Bảo hành', 'admin-warranty.html', '2']]],
  ['Nhân sự', [['ti-users-group', 'Cổng Nhân sự', 'admin-ns.html']]],
  ['Kế toán', [['ti-refresh', 'Đồng bộ MISA', 'admin-misa.html', '1', 'bad'], ['ti-link', 'Khớp mã hàng', 'admin-misa.html#khop']]],
  ['Hệ thống', [['ti-shield-lock', 'Tài khoản & quyền', 'admin-users.html'], ['ti-history', 'Nhật ký thao tác', 'admin-audit.html']]],
];

const KHO_NAV = [
  ['Kho', [['ti-layout-dashboard', 'Tổng quan kho', 'admin-kho.html'], ['ti-packages', 'Tồn kho 3 showroom', 'admin-stock.html'], ['ti-package-export', 'Xuất kho cho đơn', 'admin-picking.html', '5'], ['ti-transfer', 'Chuyển kho', 'admin-transfers.html'], ['ti-barcode', 'Số serial', 'admin-serials.html']]],
];
const NS_NAV = [
  ['Nhân sự', [['ti-layout-dashboard', 'Tổng quan nhân sự', 'admin-ns.html'], ['ti-clock-check', 'Chấm công', 'admin-attendance.html'], ['ti-coin', 'Hoa hồng & công lắp', 'admin-commission.html'], ['ti-cash', 'Bảng lương', 'admin-payroll.html']]],
];
const PORTALS = [
  { key: 'kho', cls: 'portal-kho', label: 'Cổng Kho', icon: 'ti-building-warehouse', home: 'admin-kho.html', nav: KHO_NAV, user: ['NT', 'Ngọc Trâm', 'Thủ kho · Phú Nhuận'] },
  { key: 'ns', cls: 'portal-ns', label: 'Cổng Nhân sự', icon: 'ti-users-group', home: 'admin-ns.html', nav: NS_NAV, user: ['KO', 'Kim Oanh', 'Kế toán · Nhân sự'] },
  { key: 'ban', cls: 'portal-ban', label: 'Quản trị', icon: 'ti-building-store', home: 'admin-dashboard.html', nav: ADMIN_NAV, user: ['MT', 'Minh Thư', 'Quản lý · Showroom Phú Nhuận'] },
];
const portalOf = page => PORTALS.find(p => p.nav.some(([, items]) => items.some(i => i[2] === page))) || PORTALS[2];

/* Dữ liệu mẫu dùng chung cho các trang quản trị (tên người, mã đơn khớp nhau giữa các trang).
   store = chỉ số trong STORES (proto.js): 0 Phú Nhuận, 1 Quận 10, 2 Thủ Đức */
const STAFF = [
  { id: 'NV01', name: 'Minh Thư', role: 'Quản lý showroom', store: 0 },
  { id: 'NV02', name: 'Quốc Bảo', role: 'Bán hàng', store: 0 },
  { id: 'NV03', name: 'Thanh Vy', role: 'Bán hàng', store: 1 },
  { id: 'NV04', name: 'Hoàng Long', role: 'Bán hàng', store: 2 },
  { id: 'NV05', name: 'Ngọc Trâm', role: 'Kho', store: 0 },
  { id: 'NV06', name: 'Văn Tài', role: 'Kho', store: 1 },
  { id: 'NV07', name: 'Thu Hằng', role: 'Điều phối lắp đặt', store: 0 },
  { id: 'NV08', name: 'Văn Hùng', role: 'Thợ lắp đặt', store: 0 },
  { id: 'NV09', name: 'Minh Đức', role: 'Thợ lắp đặt', store: 1 },
  { id: 'NV10', name: 'Công Sơn', role: 'Thợ lắp đặt', store: 2 },
  { id: 'NV11', name: 'Kim Oanh', role: 'Kế toán', store: 0 },
  { id: 'NV00', name: 'Chủ Techhomes', role: 'Chủ', store: 0 },
];
const staff = id => STAFF.find(s => s.id === id);
const storeName = i => STORES[i].short;   // 'Phú Nhuận' | 'Q.10' | 'Thủ Đức'

/* Mở / đóng modal dùng chung: <div class="modal-overlay" id="..." style="display:none"> */
function openModal(id, html) { const o = document.getElementById(id); if (html != null) o.querySelector('.modal').innerHTML = html; o.style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function renderAdmin(active) {
  const P = portalOf(active);
  document.body.classList.add(P.cls);
  const [ini, who, role] = P.user;
  document.getElementById('side').innerHTML = `
    <div class="app-brand"><a class="logo" href="home.html"><img src="${LOGO}" alt="Techhomes"></a>
      <span class="portal-pill"><span class="dot"></span>${P.label}</span></div>
    <nav class="portal-switch" aria-label="Chuyển cổng">${['ban', 'kho', 'ns'].map(k => PORTALS.find(x => x.key === k)).map(x =>
      `<a href="${x.home}" class="${x.cls} ${x === P ? 'on' : ''}" title="${x.label}"><i class="ti ${x.icon}"></i><span>${x.label === 'Quản trị' ? 'Bán hàng' : x.label.replace('Cổng ', '')}</span></a>`).join('')}</nav>
    <nav class="app-nav">${P.nav.map(([g, items]) => `
      <div class="app-nav-group"><span>${g}</span></div>
      <div class="app-nav-items">${items.map(([ic, t, href, n, cls]) => `
        <a href="${href || '#'}" class="${href === active ? 'on' : ''}" ${href ? '' : 'onclick="event.preventDefault();toast(\'Màn hình này có trong tài liệu chức năng, chưa dựng prototype\')"'}>
          <i class="ti ${ic}"></i><span>${t}</span>${n ? `<b class="n ${cls || ''}">${n}</b>` : ''}</a>`).join('')}</div>`).join('')}
    </nav>
    <div class="app-user"><span class="avatar">${ini}</span><div class="who"><b>${who}</b><span>${role}</span></div><button title="Đăng xuất"><i class="ti ti-logout"></i></button></div>`;
  document.body.insertAdjacentHTML('beforeend', `<div class="proto-bar">${[['index.html', 'Mục lục'], ['home.html', 'Website'], ['admin-dashboard.html', 'Bán hàng'], ['admin-kho.html', 'Kho'], ['admin-ns.html', 'Nhân sự']]
    .map(([h, t]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${t}</a>`).join('')}</div>`);
}
function toggleSide() { document.getElementById('side').classList.toggle('open'); }
