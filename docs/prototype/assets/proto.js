/* Prototype Techhomes — dữ liệu mẫu + header/menu/footer dùng chung.
   Bố cục theo phong cách ponagar.co (logo giữa, menu chữ in hoa, lưới sản phẩm kẻ mảnh, ảnh lớn).
   Tên, mã, giá, ảnh sản phẩm lấy từ techhomes.vn (11/2026) để minh hoạ. Bản thật là component Nuxt Shop*. */

const LOGO = 'assets/logo.svg';
const COMPANY = {
  name: 'Techhomes', slogan: 'Home Solutions',
  phone: '0988 128 302', tel: '0988128302', phone2: '0908 523 234', email: 'thamnguyen@techhomes.vn',
  legal: 'Tên pháp nhân & MST: chờ Techhomes cung cấp',
};
const STORES = [
  { name: 'Showroom Phú Nhuận', short: 'Phú Nhuận', note: 'Trụ sở', addr: '132 Nguyễn Trọng Tuyển, Phú Nhuận, TP.HCM' },
  { name: 'Chi nhánh Quận 10', short: 'Q.10', note: 'CN1', addr: '283/57 Cách Mạng Tháng Tám, P.12, Q.10, TP.HCM' },
  { name: 'Chi nhánh Thủ Đức', short: 'Thủ Đức', note: 'CN2', addr: '17 B3 Khu Đông Tăng Long, Thủ Đức, TP.HCM' },
];

const CATS = [
  { key: 'bep', name: 'Thiết bị bếp', types: ['Bếp từ', 'Máy hút mùi', 'Máy rửa chén', 'Lò nướng & vi sóng', 'Chậu & vòi rửa', 'Tủ lạnh & tủ rượu', 'Máy lọc nước'], brands: ['Hafele', 'Bosch', 'Smeg', 'Teka', 'Malloca', 'Miele'] },
  { key: 'blum', name: 'Phụ kiện Blum', types: ['Tay nâng AVENTOS', 'Bản lề CLIP top', 'Ray hộp LEGRABOX', 'Ray hộp TANDEMBOX', 'Tủ đồ khô SPACE TOWER', 'Hệ điện SERVO-DRIVE'], brands: ['Blum'] },
  { key: 'noithat', name: 'Phụ kiện tủ bếp', types: ['Giá bát nâng hạ', 'Rổ góc', 'Giá xoong nồi', 'Thùng gạo', 'Thùng rác âm tủ', 'Phụ kiện tủ áo'], brands: ['Hafele', 'Kesseböhmer', 'Garis', 'Eurogold'] },
  { key: 'cua', name: 'Phụ kiện cửa', types: ['Tay nắm cửa', 'Ruột & thân khóa', 'Bản lề sàn', 'Tay đẩy hơi', 'Cửa trượt Slido', 'Phụ kiện cửa kính'], brands: ['Hafele', 'GEZE', 'Yale', 'Bauma'] },
  { key: 'khoa', name: 'Khóa điện tử', types: ['Khóa Face ID', 'Khóa vân tay', 'Khóa thẻ từ', 'Khóa cửa kính', 'Khóa cửa nhôm', 'Chuông cửa màn hình'], brands: ['Hafele', 'Yale', 'Philips', 'Samsung', 'Kaadas'] },
  { key: 'vesinh', name: 'Thiết bị vệ sinh', types: ['Bồn cầu', 'Bồn tắm', 'Sen vòi', 'Lavabo', 'Phụ kiện phòng tắm'], brands: ['Hafele', 'Hansgrohe', 'Duravit', 'TOTO'] },
];
const BRANDS = ['Häfele', 'Blum', 'Bosch', 'Smeg', 'Miele', 'Teka', 'Hansgrohe', 'Duravit', 'TOTO', 'GEZE', 'Cleansui', 'Yale'];
const PRICES = ['Dưới 2 triệu', '2 – 5 triệu', '5 – 10 triệu', '10 – 20 triệu', 'Trên 20 triệu'];

/* id = số ảnh trong assets/img/p/ · giá niêm yết (old) và giá bán lấy từ techhomes.vn */
const P = (id, cat, type, brand, name, code, price, old, tags = []) => ({ id, cat, type, brand, name, code, price, old, tags, img: `assets/img/p/${id}.jpg` });
const PRODUCTS = [
  P(5, 'bep', 'Bếp từ', 'Hafele', 'Bếp từ 2 vùng nấu HC-I7326B', '533.09.989', 18472999, 26389999, ['Bán chạy']),
  P(11, 'bep', 'Bếp từ', 'Hafele', 'Bếp từ 2 vùng nấu HC-I73242B', '536.61.857', 13852999, 19789999),
  P(4, 'bep', 'Máy rửa chén', 'Hafele', 'Máy rửa chén độc lập Free-standing', '535.29.700', 21273000, 30390000),
  P(6, 'bep', 'Máy rửa chén', 'Hafele', 'Máy rửa chén độc lập HDW-F60EB', '538.21.310', 17374000, 24820000, ['Mới']),
  P(12, 'bep', 'Lò nướng & vi sóng', 'Hafele', 'Lò vi sóng âm tủ HM-B38C', '538.01.111', 12123999, 17319999),
  P(21, 'bep', 'Máy hút mùi', 'Hafele', 'Máy hút mùi HH-SG70A', '533.89.021', 8322999, 11889999),
  P(26, 'bep', 'Máy hút mùi', 'Hafele', 'Máy hút mùi HH-TG60E', '539.81.073', 6687800, 9554000),
  P(17, 'bep', 'Chậu & vòi rửa', 'Hafele', 'Chậu đá đơn HS-GS7545', '570.30.800', 10241770, 14631100),
  P(61, 'bep', 'Chậu & vòi rửa', 'Hafele', 'Vòi bếp Hydros HT-C456', '570.82.230', 11257329, 16081899),
  P(63, 'bep', 'Chậu & vòi rửa', 'Hafele', 'Vòi bếp HT21-CH1P254', '577.55.200', 2864889, 4092699),
  P(19, 'bep', 'Máy lọc nước', 'Hafele', 'Máy lọc nước HWP-UNT400D', '577.95.700', 9731260, 13901800),
  P(38, 'bep', 'Tủ lạnh & tủ rượu', 'Hafele', 'Tủ lạnh mini cửa kính HC-M48G', '568.30.301', 4204200, 5605600),
  P(44, 'blum', 'Tay nâng AVENTOS', 'Blum', 'Bộ tay nâng AVENTOS HF top 22F1809', '22F1809', 3454920, 4935600, ['Bán chạy']),
  P(50, 'blum', 'Tay nâng AVENTOS', 'Blum', 'Bộ tay nâng AVENTOS HL top 22L1509', '22L1509', 3801923, 5431320),
  P(9, 'blum', 'Tủ đồ khô SPACE TOWER', 'Blum', 'Tủ đồ khô SPACE TOWER LEGRABOX, xám', '1766107', 14208264, 20297520),
  P(35, 'blum', 'Ray hộp LEGRABOX', 'Blum', 'Kệ gia vị SPACE TWIN LEGRABOX 200–300mm', '6400298', 4710636, 6729480),
  P(25, 'blum', 'Hệ điện SERVO-DRIVE', 'Blum', 'Bộ đẩy điện SERVO-DRIVE cho 3 ngăn kéo', '7841868', 6990732, 9986760),
  P(42, 'blum', 'Bản lề CLIP top', 'Blum', 'Bản lề nối cánh giữa CLIP top 134°', '78ZT5500T', 103125, 137500),
  P(7, 'cua', 'Bản lề sàn', 'GEZE', 'Bản lề sàn TS 550NV tải 300kg', '932.10.061', 16927400, 24182000),
  P(34, 'cua', 'Bản lề sàn', 'Hafele', 'Bản lề sàn tải 150kg', '932.84.046', 4741800, 6774000),
  P(39, 'cua', 'Tay đẩy hơi', 'Hafele', 'Cơ cấu đóng cửa âm', '931.84.269', 4143999, 5919999),
  P(56, 'cua', 'Cửa trượt Slido', 'Hafele', 'Cửa trượt đồng bộ Slido Telescopic 80kg', '940.81.140', 2439500, 3485000),
  P(60, 'cua', 'Phụ kiện cửa kính', 'Hafele', 'Tay nắm phòng tắm kính', '903.02.250', 1168999, 1669999),
  P(3, 'cua', 'Cửa trượt Slido', 'Hafele', 'Bộ cửa trượt tự động SL300D', '935.11.022', 24882200, 35546000, ['Mới']),
  P(8, 'khoa', 'Khóa Face ID', 'Hafele', 'Khóa điện tử PP9100 3D Face ID', '912.20.697', 15799699, 22570999, ['Bán chạy']),
  P(20, 'khoa', 'Khóa vân tay', 'Hafele', 'Khóa điện tử PP8100 BLE, màu đen', '912.20.286', 9400000, 14472000),
  P(32, 'khoa', 'Khóa thẻ từ', 'Hafele', 'Khóa điện tử DL6100', '912.20.582', 5386500, 7695000),
  P(83, 'khoa', 'Khóa vân tay', 'Hafele', 'Khóa điện tử Horizon PP2501W', '499.21.224', 15717100, 22453000, ['Mới']),
  P(29, 'khoa', 'Khóa cửa nhôm', 'Hafele', 'Khóa điện tử cho cửa nhôm', '912.20.145', 6078100, 8683000),
  P(77, 'noithat', 'Giá bát nâng hạ', 'Hafele', 'Giá bát nâng hạ Lento', '504.76.010', 7198799, 10283999),
  P(71, 'noithat', 'Thùng gạo', 'Hafele', 'Thùng gạo âm tủ', '549.32.758', 3173099, 4532999),
  P(22, 'noithat', 'Rổ góc', 'Hafele', 'Rổ góc Kosmo Olla', '595.50.804', 7103600, 10148000),
  P(74, 'noithat', 'Giá xoong nồi', 'Hafele', 'Giá xoong nồi inox Cappella', '549.08.034', 2486400, 3552000),
  P(72, 'noithat', 'Thùng rác âm tủ', 'Hafele', 'Thùng rác Viola 400mm 14 lít', '502.24.006', 965300, 1379000),
  P(99, 'vesinh', 'Bồn tắm', 'Hafele', 'Bồn tắm độc lập Nagoya 1700', '588.99.600', 22548539, 32212199),
  P(100, 'vesinh', 'Bồn cầu', 'Hafele', 'Bồn cầu treo tường Sapporo', '588.79.410', 5989549, 8556499),
  P(103, 'vesinh', 'Sen vòi', 'Hafele', 'Thanh sen kết hợp kệ Intensity', '589.23.155', 5064429, 7234899),
  P(105, 'vesinh', 'Phụ kiện phòng tắm', 'Hafele', 'Kệ treo khăn Kyoto', '580.57.210', 3854270, 5506100),
];
const byId = id => PRODUCTS.find(p => p.id === id);
const inCat = k => PRODUCTS.filter(p => p.cat === k);

const fmt = v => v.toLocaleString('vi-VN') + 'đ';
const pct = p => p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
const sku = p => p.code;   // mã hàng = mã hãng (Hafele 533.09.989, Blum 22F1809) = mã bên MISA

function cardHTML(p) {
  return `<a class="card" href="product.html">
    <div class="card__media"><img src="${p.img}" alt="${p.name}" loading="lazy">
      ${p.tags.length ? `<span class="card__tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</span>` : ''}</div>
    <span class="card__brand">${p.brand}</span>
    <span class="card__name">${p.name}</span>
    <span class="card__code">Mã ${p.code}</span>
    <span class="card__price"><b>${fmt(p.price)}</b>${p.old ? `<s>${fmt(p.old)}</s><em>−${pct(p)}%</em>` : ''}</span>
  </a>`;
}

const I = n => `<i class="ti ti-${n}" aria-hidden="true"></i>`;

function renderChrome(active) {
  const header = `
  <a class="skip-link" href="#main">Bỏ qua đến nội dung</a>
  <header class="site-header">
    <div class="site-header__bar">
      <div class="site-header__side">
        <button class="icon-btn" aria-label="Menu" onclick="openDrawer('menu')">${I('menu-2')}</button>
        <button class="icon-btn" aria-label="Tìm kiếm" onclick="openDrawer('search')">${I('search')}</button>
        <a class="hdr-hot" href="tel:${COMPANY.tel}">${I('phone')}<span>${COMPANY.phone}</span></a>
      </div>
      <a class="logo" href="home.html"><img src="${LOGO}" alt="Techhomes — Home Solutions"></a>
      <div class="site-header__side site-header__side--end">
        <button class="hdr-link" onclick="openForm('quote')">Báo giá nhà thầu</button>
        <a class="icon-btn" href="#" aria-label="Tài khoản">${I('user')}</a>
        <a class="icon-btn cart-btn" href="cart.html" aria-label="Giỏ hàng">${I('shopping-bag')}<span class="cart-btn__count">2</span></a>
      </div>
    </div>
    <nav class="site-nav" aria-label="Danh mục"><ul class="site-nav__list">
      ${CATS.map((c, i) => `<li class="has-mega"><a class="site-nav__link ${active === 'category.html' && i === 0 ? 'on' : ''}" href="category.html">${c.name}</a>
        <div class="mega"><div class="mega__inner">
          <div><span class="eyebrow">Theo loại</span>${c.types.map(t => `<a href="category.html">${t}</a>`).join('')}</div>
          <div><span class="eyebrow">Thương hiệu</span>${c.brands.map(b => `<a href="category.html">${c.name} ${b}</a>`).join('')}</div>
          <div><span class="eyebrow">Theo mức giá</span>${PRICES.map(t => `<a href="category.html">${t}</a>`).join('')}</div>
          <a class="mega__feat" href="product.html"><img src="${inCat(c.key)[0].img}" alt=""><span>${inCat(c.key)[0].name}</span></a>
        </div></div></li>`).join('')}
      <li><a class="site-nav__link" href="#" onclick="event.preventDefault();openForm('install')">Lắp đặt</a></li>
      <li><a class="site-nav__link" href="#">Dự án</a></li>
    </ul></nav>
  </header>

  <div class="scrim" onclick="closeDrawer()"></div>
  <aside class="drawer drawer--left" id="dr-menu" aria-label="Menu">
    <div class="drawer__head"><span class="eyebrow">Menu</span><button class="icon-btn" onclick="closeDrawer()" aria-label="Đóng">${I('x')}</button></div>
    <nav class="drawer__body menu-tree">
      <a class="menu-tree__link" href="home.html">Trang chủ</a>
      ${CATS.map(c => `<details><summary>${c.name}</summary><a href="category.html">Xem tất cả ${c.name.toLowerCase()}</a>${c.types.map(t => `<a href="category.html">${t}</a>`).join('')}</details>`).join('')}
      <a class="menu-tree__link" href="#" onclick="event.preventDefault();closeDrawer();openForm('install')">Lắp đặt tận nơi</a>
      <a class="menu-tree__link" href="#" onclick="event.preventDefault();closeDrawer();openForm('quote')">Báo giá nhà thầu</a>
      <a class="menu-tree__link" href="#">Dự án & tin tức</a>
      <div class="menu-tree__extra">
        <a href="tel:${COMPANY.tel}">${I('phone')} ${COMPANY.phone}</a>
        <a href="#">${I('message-circle')} Chat Zalo</a>
        ${STORES.map(s => `<a href="#showroom">${I('map-pin')} ${s.addr}</a>`).join('')}
      </div>
    </nav>
  </aside>
  <aside class="drawer drawer--top" id="dr-search" aria-label="Tìm kiếm">
    <form class="search-form container" onsubmit="event.preventDefault();location.href='category.html'">
      ${I('search')}<input class="search-form__input" type="search" placeholder="Tìm tên sản phẩm hoặc mã hàng, ví dụ 533.09.989">
      <button type="button" class="icon-btn" onclick="closeDrawer()" aria-label="Đóng">${I('x')}</button>
    </form>
    <div class="search-sug container">
      <div><span class="eyebrow">Tìm nhiều</span>${['bếp từ hafele', 'tay nâng blum', 'khóa vân tay', 'máy rửa chén', 'bản lề giảm chấn'].map(t => `<a href="category.html">${t}</a>`).join('')}</div>
      <div class="search-sug__p"><span class="eyebrow">Khớp mã hàng</span>${PRODUCTS.slice(0, 3).map(p => `<a href="product.html"><img src="${p.img}" alt=""><span>${p.name}<small>Mã ${p.code}</small></span><b>${fmt(p.price)}</b></a>`).join('')}</div>
    </div>
  </aside>`;

  const footer = `
  <section class="services"><ul class="services__list container">
    ${[['rosette-discount-check', 'Chính hãng 100%', 'Đại lý Häfele, Blum. Hàng có tem, phiếu bảo hành hãng.'],
       ['truck-delivery', 'Giao & lắp đặt', 'Đội thợ Techhomes lắp tận nơi theo biểu phí công khai.'],
       ['shield-check', 'Bảo hành theo hãng', 'Tra bảo hành bằng số serial hoặc số điện thoại.'],
       ['building-skyscraper', 'Giá riêng nhà thầu', 'Bảng chiết khấu theo nhóm khách, báo giá trong ngày.']]
      .map(([ic, t, d]) => `<li class="services__item">${I(ic)}<div><h3 class="services__title">${t}</h3><p>${d}</p></div></li>`).join('')}
  </ul></section>
  <footer class="site-footer" id="showroom">
    <div class="container site-footer__inner">
      <div class="site-footer__brand"><img src="${LOGO}" alt="Techhomes"><p>Đại lý phân phối Häfele & Blum tại TP.HCM. Thiết bị bếp, phụ kiện tủ, phụ kiện cửa, khóa điện tử, thiết bị vệ sinh.</p>
        <nav class="site-footer__social">${[['brand-facebook', 'Facebook'], ['brand-youtube', 'YouTube'], ['brand-tiktok', 'TikTok'], ['message-circle', 'Zalo']].map(([i, t]) => `<a href="#" aria-label="${t}">${I(i)}</a>`).join('')}</nav></div>
      <nav class="site-footer__links"><p class="site-footer__h">Techhomes</p><a href="#">Giới thiệu</a><a href="#">Dự án</a><a href="#">Catalogue Häfele</a><a href="#">Tin tức & cẩm nang</a><a href="#">Tuyển dụng</a></nav>
      <nav class="site-footer__links"><p class="site-footer__h">Chính sách</p><a href="#">Hướng dẫn mua hàng</a><a href="#">Vận chuyển & giao hàng</a><a href="#">Lắp đặt & biểu phí</a><a href="#">Bảo hành</a><a href="#">Thanh toán</a><a href="#">Bảo mật</a></nav>
      <div class="site-footer__contact"><p class="site-footer__h">Liên hệ</p>
        <a href="tel:${COMPANY.tel}">${COMPANY.phone}</a><a href="tel:0908523234">${COMPANY.phone2}</a><a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
        <form class="news" onsubmit="event.preventDefault();toast('Đã đăng ký nhận ưu đãi')"><input type="email" placeholder="Email nhận ưu đãi" required aria-label="Email"><button aria-label="Đăng ký">${I('arrow-right')}</button></form></div>
    </div>
    <div class="container site-footer__stores">${STORES.map(s => `<div><span class="eyebrow">${s.note}</span><b>${s.name}</b><span>${s.addr}</span></div>`).join('')}</div>
    <p class="container site-footer__copy">© 2026 Techhomes — Home Solutions · ${COMPANY.legal} · Prototype, dữ liệu minh hoạ lấy từ techhomes.vn</p>
  </footer>
  <a class="fab fab--zalo" href="#" aria-label="Chat Zalo">Zalo</a>
  <a class="fab fab--call" href="tel:${COMPANY.tel}" aria-label="Gọi">${I('phone')}</a>

  <dialog class="dlg" id="dlg-form"><form method="dialog" class="dlg__body" id="dlg-inner"></form></dialog>
  <div class="proto-bar">${[['index.html', 'Mục lục'], ['home.html', 'Trang chủ'], ['category.html', 'Danh mục'], ['product.html', 'Chi tiết'], ['cart.html', 'Giỏ hàng'], ['admin-orders.html', 'Admin']]
    .map(([h, t]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${t}</a>`).join('')}</div>`;

  document.getElementById('chrome-top').innerHTML = header;
  document.getElementById('chrome-bottom').innerHTML = footer;
}

function openDrawer(k) { document.body.classList.add('drawer-open'); document.getElementById('dr-' + k).classList.add('open'); document.querySelector('#dr-' + k + ' input')?.focus(); }
function closeDrawer() { document.body.classList.remove('drawer-open'); document.querySelectorAll('.drawer.open').forEach(d => d.classList.remove('open')); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* Form "Yêu cầu báo giá" (nhà thầu, tủ bếp) và "Đặt lịch lắp đặt" — 1 dialog dùng chung */
const FORMS = {
  quote: ['Yêu cầu báo giá', 'Nhà thầu, kiến trúc sư, xưởng tủ bếp: gửi danh sách hoặc bản vẽ, Techhomes báo giá theo nhóm khách trong ngày làm việc.',
    `<div class="f2"><label>Họ tên<input required autofocus></label><label>Số điện thoại<input type="tel" required></label></div>
     <label>Bạn là<select><option>Nhà thầu / công ty thi công</option><option>Kiến trúc sư / thiết kế</option><option>Xưởng tủ bếp</option><option>Khách lẻ — báo giá tủ bếp</option></select></label>
     <label>Danh sách cần báo giá<textarea rows="3" placeholder="Ví dụ: 20 bộ tay nâng Blum HF top 22F1809, 40 bản lề CLIP top…"></textarea></label>
     <label>Bản vẽ / file Excel (tuỳ chọn)<input type="file"></label>`, 'Gửi yêu cầu', 'Đã gửi · Techhomes sẽ gọi lại trong giờ làm việc'],
  install: ['Đặt lịch lắp đặt', 'Đội thợ Techhomes lắp tận nơi trong TP.HCM. Phí theo biểu phí lắp đặt, báo trước khi đến.',
    `<div class="f2"><label>Họ tên<input required autofocus></label><label>Số điện thoại<input type="tel" required></label></div>
     <label>Cần lắp<select><option>Bếp từ / hút mùi / máy rửa chén</option><option>Tay nâng, ray, bản lề Blum</option><option>Khóa điện tử</option><option>Phụ kiện cửa, bản lề sàn</option><option>Thiết bị vệ sinh</option></select></label>
     <div class="f2"><label>Ngày mong muốn<input type="date"></label><label>Buổi<select><option>Sáng</option><option>Chiều</option></select></label></div>
     <label>Địa chỉ lắp<input placeholder="Số nhà, đường, phường, quận"></label>`, 'Đặt lịch', 'Đã nhận lịch · điều phối sẽ gọi xác nhận giờ thợ đến'],
};
function openForm(k) {
  const [t, d, body, btn, ok] = FORMS[k];
  document.getElementById('dlg-inner').innerHTML = `<button class="icon-btn dlg__x" value="x" formnovalidate aria-label="Đóng">${I('x')}</button>
    <span class="eyebrow eyebrow--accent">Techhomes</span><h2 class="title">${t}</h2><p class="body-copy">${d}</p>${body}
    <button class="btn btn--dark btn--block" value="ok">${btn}</button>`;
  const dlg = document.getElementById('dlg-form');
  dlg.onclose = () => { if (dlg.returnValue === 'ok') toast(ok); };
  dlg.showModal();
}

function toast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2600);
}
