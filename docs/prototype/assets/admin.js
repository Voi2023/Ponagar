/* Khung admin dùng chung — menu theo 6 khối của Tài liệu chức năng Techhomes.
   Cần nạp proto.js trước (LOGO, STORES, toast). */
const ADMIN_NAV = [
  ['Bán hàng', [['ti-layout-dashboard', 'Tổng quan'], ['ti-receipt', 'Đơn hàng', 'admin-orders.html', '6'], ['ti-file-invoice', 'Báo giá', '', '3'], ['ti-building-store', 'Bán tại showroom'], ['ti-arrow-back-up', 'Đổi trả'], ['ti-users', 'Khách hàng & bảng giá']]],
  ['Sản phẩm', [['ti-package', 'Sản phẩm', 'admin-products.html'], ['ti-discount-2', 'Khuyến mãi'], ['ti-photo', 'Banner, bài viết, dự án']]],
  ['Kho', [['ti-packages', 'Tồn kho 3 showroom'], ['ti-package-export', 'Xuất kho cho đơn'], ['ti-transfer', 'Chuyển kho'], ['ti-barcode', 'Số serial']]],
  ['Lắp đặt & bảo hành', [['ti-calendar-event', 'Lịch lắp đặt', '', '4'], ['ti-tool', 'Phiếu lắp đặt'], ['ti-shield-check', 'Bảo hành']]],
  ['Nhân sự', [['ti-clock-check', 'Chấm công'], ['ti-coin', 'Hoa hồng & công lắp'], ['ti-cash', 'Bảng lương']]],
  ['Kế toán', [['ti-refresh', 'Đồng bộ MISA', 'admin-orders.html#misa', '1', 'bad'], ['ti-link', 'Khớp mã hàng', 'admin-products.html#misa']]],
  ['Hệ thống', [['ti-shield-lock', 'Tài khoản & quyền'], ['ti-history', 'Nhật ký thao tác']]],
];

function renderAdmin(active) {
  document.getElementById('side').innerHTML = `
    <div class="app-brand"><a class="logo" href="home.html"><img src="${LOGO}" alt="Techhomes"></a>
      <span class="portal-pill"><span class="dot"></span>Quản trị</span></div>
    <nav class="app-nav">${ADMIN_NAV.map(([g, items]) => `
      <div class="app-nav-group"><span>${g}</span></div>
      <div class="app-nav-items">${items.map(([ic, t, href, n, cls]) => `
        <a href="${href || '#'}" class="${href === active ? 'on' : ''}" ${href ? '' : 'onclick="event.preventDefault();toast(\'Màn hình này có trong tài liệu chức năng, chưa dựng prototype\')"'}>
          <i class="ti ${ic}"></i><span>${t}</span>${n ? `<b class="n ${cls || ''}">${n}</b>` : ''}</a>`).join('')}</div>`).join('')}
    </nav>
    <div class="app-user"><span class="avatar">MT</span><div class="who"><b>Minh Thư</b><span>Quản lý · ${STORES[0].name}</span></div><button title="Đăng xuất"><i class="ti ti-logout"></i></button></div>`;
  document.body.insertAdjacentHTML('beforeend', `<div class="proto-bar">${[['index.html', 'Mục lục'], ['home.html', 'Trang chủ'], ['admin-orders.html', 'Đơn hàng'], ['admin-products.html', 'Sản phẩm']]
    .map(([h, t]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${t}</a>`).join('')}</div>`);
}
function toggleSide() { document.getElementById('side').classList.toggle('open'); }
