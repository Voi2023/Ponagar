/* Khung admin dùng chung — menu theo 6 khối của Tài liệu chức năng v0.3.
   Bản thật: AppShell của @dmcl/ui-kit. Cần nạp proto.js trước (LOGO, toast). */
const ADMIN_NAV = [
  ['Bán hàng', [['ti-layout-dashboard', 'Tổng quan'], ['ti-receipt', 'Đơn hàng', 'admin-orders.html', '6'], ['ti-building-store', 'Bán tại quầy'], ['ti-arrow-back-up', 'Đổi trả'], ['ti-users', 'Khách hàng']]],
  ['Sản phẩm', [['ti-shopping-bag', 'Sản phẩm', 'admin-products.html'], ['ti-discount-2', 'Khuyến mãi'], ['ti-photo', 'Banner & bài viết']]],
  ['Kho & xưởng', [['ti-packages', 'Tồn thành phẩm'], ['ti-package-export', 'Đóng gói & xuất'], ['ti-hammer', 'Lệnh sản xuất'], ['ti-leaf', 'Nguyên liệu']]],
  ['Nhân sự', [['ti-clock-check', 'Chấm công'], ['ti-calendar-time', 'Xếp ca'], ['ti-cash', 'Bảng lương']]],
  ['Kế toán', [['ti-refresh', 'Đồng bộ MISA', 'admin-orders.html#misa', '1', 'bad'], ['ti-link', 'Khớp danh mục', 'admin-products.html#misa']]],
  ['Hệ thống', [['ti-shield-lock', 'Tài khoản & quyền'], ['ti-history', 'Nhật ký thao tác']]],
];

function renderAdmin(active) {
  document.getElementById('side').innerHTML = `
    <div class="app-brand"><a class="logo" href="../prototype/home.html"><img src="${LOGO}" alt="">PONAGAR</a>
      <span class="portal-pill"><span class="dot"></span>Quản trị</span></div>
    <nav class="app-nav">${ADMIN_NAV.map(([g, items]) => `
      <div class="app-nav-group"><span>${g}</span></div>
      <div class="app-nav-items">${items.map(([ic, t, href, n, cls]) => `
        <a href="${href || '#'}" class="${href === active ? 'on' : ''}" ${href ? '' : 'onclick="event.preventDefault();toast(\'Màn hình này có trong tài liệu chức năng, chưa dựng prototype\')"'}>
          <i class="ti ${ic}"></i><span>${t}</span>${n ? `<b class="n ${cls || ''}">${n}</b>` : ''}</a>`).join('')}</div>`).join('')}
    </nav>
    <div class="app-user"><span class="avatar">LA</span><div class="who"><b>Lan Anh</b><span>Quản lý · Showroom Hoa Lan</span></div><button title="Đăng xuất"><i class="ti ti-logout"></i></button></div>`;
  document.body.insertAdjacentHTML('beforeend', `<div class="proto-bar">${[['index.html', 'Mục lục'], ['home.html', 'Trang chủ'], ['admin-orders.html', 'Đơn hàng'], ['admin-products.html', 'Sản phẩm']]
    .map(([h, t]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${t}</a>`).join('')}</div>`);
}
function toggleSide() { document.getElementById('side').classList.toggle('open'); }
