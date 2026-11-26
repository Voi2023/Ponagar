/* Prototype Ponagar — dữ liệu mẫu + render header/menu/footer dùng chung.
   Bố cục header / thẻ sản phẩm / footer tham chiếu thienkimhome.com, màu theo logo Ponagar.
   Sản phẩm/giá là dữ liệu mẫu. Bản thật là component Nuxt Shop*. */

const LOGO = 'https://cdn.hstatic.net/themes/1000360703/1001524369/14/ponagar-mark.png?v=535';
const COMPANY = {
  name: 'Công ty TNHH ART 868', mst: '0319090382',
  addr: '166 Hoa Lan, P. Cầu Kiệu, TP.HCM',
  phone: '0909 720 027', tel: '0909720027', email: 'ponagar.co@gmail.com',
};

/* Màu da = dữ liệu sản phẩm (admin nhập mã màu cho từng biến thể), không phải màu giao diện */
const LEATHER = { hong: '#C98B86', nau: '#8A5A3B', do: '#7E2427', reu: '#4F5B3A', bo: '#B98552', den: '#2E2826', xanh: '#3D5A6C', kem: '#CDB894' };

const CATS = [
  { name: 'Túi xách nữ', ic: 'ti-shopping-bag', types: ['Túi đeo chéo', 'Túi tote', 'Túi xách tay', 'Túi mini', 'Balo nữ'] },
  { name: 'Túi xách nam', ic: 'ti-briefcase', types: ['Túi đeo chéo nam', 'Cặp công sở', 'Túi bao tử'] },
  { name: 'Ví da', ic: 'ti-wallet', types: ['Ví nữ dài', 'Ví nữ ngắn', 'Ví nam', 'Ví đựng thẻ'] },
  { name: 'Phụ kiện', ic: 'ti-eyeglass', types: ['Thắt lưng', 'Bao mắt kính', 'Bao hộ chiếu', 'Guốc gỗ quai da', 'Móc khoá'] },
  { name: 'Tranh da', ic: 'ti-photo', types: ['Tranh treo tường', 'Tranh quà tặng'] },
  { name: 'Quà tặng doanh nghiệp', ic: 'ti-gift', types: ['Bộ quà tặng', 'Khắc logo', 'Đơn số lượng lớn'] },
];
const THEMES = ['Đồng quê', 'Hoa & trái', 'Biển & trời', 'Non sông VN', 'Trừu tượng', 'Romance'];
const PRICES = ['Dưới 1,5 triệu', '1,5 – 3 triệu', '3 – 5 triệu', 'Trên 5 triệu'];

const P = (id, cat, name, theme, ic, sw, sws, price, old, tags = []) => ({ id, cat, name, theme, ic, sw: LEATHER[sw], sws, price, old, tags });
const PRODUCTS = [
  P(1, 'Túi xách nữ', 'Túi Dozza TR-X182', 'Đồng Nội', 'ti-plant', 'bo', ['bo', 'nau', 'den'], 3600000, 4100000, ['Độc bản', 'Bán chạy']),
  P(2, 'Túi xách nữ', 'Túi MiNa Premium H153', 'Sương Hồng', 'ti-flower', 'hong', ['hong', 'kem'], 4900000, 5400000, ['Mới']),
  P(3, 'Túi xách nữ', 'Túi Phương Đông (S) H513', 'Romance', 'ti-heart', 'do', ['do', 'den'], 3990000, 0, ['Độc bản']),
  P(4, 'Túi xách nữ', 'Túi Cát Tường B511', 'Quê Hương', 'ti-home-2', 'nau', ['nau', 'bo'], 4600000, 5100000),
  P(5, 'Túi xách nữ', 'Túi Marina X78-V174', 'Biển', 'ti-sailboat', 'xanh', ['xanh', 'kem'], 6150000, 0, ['Độc bản']),
  P(6, 'Túi xách nữ', 'Túi Crush X193', 'Bóng Chiều', 'ti-sun', 'do', ['do', 'nau'], 4200000, 4800000, ['Bán chạy']),
  P(7, 'Ví da', 'Ví Leaf V174', 'Romance', 'ti-leaf', 'reu', ['reu', 'nau', 'hong'], 1390000, 1550000, ['Mới']),
  P(8, 'Phụ kiện', 'Bao mắt kính K04 H252', 'Hoa Đào', 'ti-flower', 'hong', ['hong', 'den'], 1190000, 0),
  P(9, 'Túi xách nữ', 'Túi Amara C176-C190', 'Làng Hoa', 'ti-plant-2', 'kem', ['kem', 'bo'], 5900000, 6500000, ['Độc bản']),
  P(10, 'Túi xách nữ', 'Túi Eva K179-De33', 'Song Hạc', 'ti-feather', 'den', ['den', 'do'], 4600000, 5200000),
  P(11, 'Túi xách nữ', 'Túi Hoa Cau TR-215', 'Hoa Cau', 'ti-plant', 'reu', ['reu', 'kem'], 3300000, 3700000),
  P(12, 'Túi xách nữ', 'Túi Thu Hà Nội H301', 'Phố Cổ', 'ti-building-arch', 'bo', ['bo', 'do'], 4350000, 0, ['Mới']),
  P(13, 'Ví da', 'Ví dài Hoa Sen V210', 'Sen Hồ', 'ti-flower', 'nau', ['nau', 'hong'], 1290000, 1490000),
  P(14, 'Ví da', 'Ví ngắn Cánh Bướm V118', 'Romance', 'ti-butterfly', 'hong', ['hong', 'kem'], 890000, 990000),
  P(15, 'Ví da', 'Ví nam Đồng Quê VN05', 'Đồng Quê', 'ti-plant-2', 'den', ['den', 'nau'], 990000, 1150000),
  P(16, 'Ví da', 'Ví đựng thẻ Cánh Diều', 'Tuổi Thơ', 'ti-kite', 'xanh', ['xanh', 'bo'], 450000, 0),
  P(17, 'Túi xách nam', 'Túi đeo chéo nam Phố Hội N21', 'Phố Hội', 'ti-building-arch', 'nau', ['nau', 'den'], 2450000, 2800000),
  P(18, 'Túi xách nam', 'Cặp công sở Sông Nước C08', 'Sông Nước', 'ti-sailboat', 'den', ['den', 'nau'], 3900000, 4300000),
  P(19, 'Túi xách nam', 'Túi bao tử Hội An N33', 'Phố Hội', 'ti-lamp', 'bo', ['bo', 'den'], 1650000, 0),
  P(20, 'Túi xách nam', 'Balo da Đường Xưa B12', 'Quê Hương', 'ti-road', 'nau', ['nau', 'reu'], 4800000, 5300000),
  P(21, 'Túi xách nam', 'Clutch nam Mây Trời CL3', 'Biển & trời', 'ti-cloud', 'xanh', ['xanh', 'den'], 1350000, 1500000),
  P(22, 'Phụ kiện', 'Thắt lưng Rồng Mây TL02', 'Non sông VN', 'ti-cloud', 'den', ['den', 'nau'], 990000, 1150000),
  P(23, 'Phụ kiện', 'Bao hộ chiếu Sen Hồng', 'Sen Hồ', 'ti-flower', 'hong', ['hong', 'kem'], 650000, 750000),
  P(24, 'Phụ kiện', 'Móc khoá Áo Dài', 'Non sông VN', 'ti-key', 'do', ['do', 'kem'], 180000, 0),
  P(25, 'Phụ kiện', 'Guốc gỗ quai da Hoa Mai', 'Hoa & trái', 'ti-flower-2', 'bo', ['bo', 'do'], 590000, 690000),
  P(26, 'Tranh da', 'Tranh da Phố Hội 40×60', 'Phố Hội', 'ti-photo', 'bo', ['bo'], 3200000, 0, ['Độc bản']),
  P(27, 'Tranh da', 'Tranh da Sen Quê 30×40', 'Sen Hồ', 'ti-photo', 'kem', ['kem'], 1800000, 2100000),
  P(28, 'Tranh da', 'Tranh da Thuyền Buồm 50×70', 'Biển & trời', 'ti-sailboat', 'xanh', ['xanh'], 4500000, 0),
  P(29, 'Quà tặng doanh nghiệp', 'Bộ quà Ví + Thắt lưng khắc logo', 'Quà tặng', 'ti-gift', 'nau', ['nau', 'den'], 1890000, 2240000),
  P(30, 'Quà tặng doanh nghiệp', 'Sổ da A5 khắc logo', 'Quà tặng', 'ti-notebook', 'do', ['do', 'nau', 'den'], 520000, 600000),
];

const fmt = v => v.toLocaleString('vi-VN') + 'đ';
const pct = p => p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
const reviews = p => (p.id * 7) % 23;
const sku = p => 'SP' + String(p.id).padStart(4, '0');   // mã hàng = mã bên MISA

function cardHTML(p, opt = {}) {
  return `<a class="shop-card" href="product.html">
    ${p.old ? `<span class="off">Giảm ${pct(p)}%</span>` : ''}
    ${opt.compare ? '<label class="cmp" onclick="event.preventDefault();this.querySelector(\'input\').checked^=1"><input type="checkbox"> Yêu thích</label>' : ''}
    <div class="img" style="--sw:${p.sw}"><i class="ti ${p.ic}"></i></div>
    <div class="name">${p.name}</div>
    <div class="shop-price"><span class="now">${fmt(p.price)}</span>${p.old ? `<span class="old">${fmt(p.old)}</span>` : ''}</div>
    <div class="tk-gift"><span class="lb">Tặng thêm</span>
      <div><small>Vẽ tên</small><b>miễn phí</b></div>
      <div><small>Trị giá</small><b class="v">150.000đ</b></div>
    </div>
    <div class="tk-rate"><span class="stars">★★★★★</span>${reviews(p)} đánh giá
      <span class="sws">${p.sws.map(k => `<span style="--sw:${LEATHER[k]}"></span>`).join('')}</span></div>
  </a>`;
}

function renderChrome(active) {
  const header = `
  <header class="shop-header"><div class="shop-wrap">
    <a class="shop-logo" href="home.html"><img src="${LOGO}" alt="Ponagar"><span class="wm"><b>PONAGAR</b><small>Handmade leather</small></span></a>
    <button class="tk-hbtn shop-cat-btn" onclick="toggleMega()"><i class="ti ti-menu-2"></i>Danh mục<i class="ti ti-chevron-down dd"></i></button>
    <button class="tk-hbtn tk-lang"><i class="ti ti-world"></i><span class="t"><small>Ngôn ngữ</small>Tiếng Việt<i class="ti ti-chevron-down dd"></i></span></button>
    <div class="shop-search">
      <i class="ti ti-search si"></i>
      <input type="search" placeholder="Bạn cần tìm gì?">
      <div class="shop-suggest">
        <div class="grp">Từ khoá</div>
        <a href="category.html"><i class="ti ti-search"></i> túi đeo chéo vẽ hoa</a>
        <a href="category.html"><i class="ti ti-search"></i> ví da khắc tên</a>
        <div class="grp">Sản phẩm</div>
        ${PRODUCTS.slice(0, 3).map(p => `<a href="product.html"><span class="th" style="background:${p.sw};color:var(--surface)"><i class="ti ${p.ic}"></i></span>${p.name} – ${p.theme}<span class="p">${fmt(p.price)}</span></a>`).join('')}
        <div class="grp">Bộ sưu tập</div>
        <a href="category.html"><i class="ti ti-palette"></i> Đồng quê (48 mẫu)</a>
      </div>
    </div>
    <a class="tk-hlink" href="tel:${COMPANY.tel}"><i class="ti ti-phone"></i><span class="t">Gọi mua hàng<b>${COMPANY.phone}</b></span></a>
    <a class="tk-hlink" href="#showroom"><i class="ti ti-map-pin"></i><span class="t">Cửa hàng<br>gần bạn</span></a>
    <button class="tk-hbtn tk-guide"><i class="ti ti-book-2"></i><span class="t">Cẩm nang</span><i class="ti ti-chevron-down dd"></i></button>
    <a class="tk-hlink" href="cart.html"><i class="ti ti-shopping-bag"><span class="shop-cart-count">2</span></i><span class="t">Giỏ<br>hàng</span></a>
    <a class="tk-hbtn tk-member" href="#"><i class="ti ti-user-circle"></i><span class="t">Thành viên</span></a>
  </div></header>
  <div class="shop-wrap shop-mega-host"><div class="shop-mega" id="mega">
    <div class="shop-mega-l">${CATS.map((c, i) => `<a href="category.html" class="${i === 0 ? 'on' : ''}" onmouseenter="megaShow(${i},this)"><i class="ti ${c.ic}"></i>${c.name}</a>`).join('')}</div>
    <div class="shop-mega-r" id="megaR"></div>
  </div></div>`;

  const footer = `
  <footer class="shop-footer" id="showroom">
    <div class="shop-wrap cols">
      <div><h4>Thông tin</h4><a href="#">Giới thiệu Ponagar</a><a href="#">Câu chuyện xưởng vẽ</a><a href="#">Hệ thống showroom</a><a href="#">Tuyển dụng</a><a href="#">Quà tặng doanh nghiệp</a><a href="#">Cam kết chất lượng</a></div>
      <div><h4>Liên hệ</h4><a href="tel:${COMPANY.tel}">Gọi mua hàng: <b class="hot">${COMPANY.phone}</b></a><a href="tel:${COMPANY.tel}">Gọi khiếu nại: <b class="hot">${COMPANY.phone}</b></a><a href="#">Zalo: <b class="hot">${COMPANY.phone}</b></a>
        <h4 style="margin-top:14px">Kết nối với chúng tôi</h4><div class="soc"><i class="ti ti-brand-facebook"></i><i class="ti ti-brand-youtube"></i><i class="ti ti-brand-tiktok"></i><i class="ti ti-brand-instagram"></i></div></div>
      <div><h4>Hỗ trợ khách hàng</h4><a href="#">Chính sách thanh toán</a><a href="#">Hướng dẫn mua hàng</a><a href="#">Vận chuyển và giao nhận</a><a href="#">Bảo hành trọn đời</a><a href="#">Đổi trả, hoàn tiền</a><a href="#">Chính sách bảo mật</a><a href="#">Chính sách kiểm hàng</a></div>
      <div><h4>Thông tin khuyến mãi</h4><p>Đăng ký nhận bản tin để không bỏ lỡ mẫu mới và ưu đãi.</p>
        <form class="tk-news" onsubmit="event.preventDefault();toast('Đã đăng ký nhận tin')"><input type="email" placeholder="Email của bạn" required><button>Đăng ký</button></form></div>
    </div>
    <div class="shop-wrap tk-stores">
      <div><h4>Showroom Hoa Lan</h4>${COMPANY.addr}<br>Hotline: <b>${COMPANY.phone}</b><br>Làm việc 9h → 21h hằng ngày<br><a href="#">Bản đồ <i class="ti ti-map-2"></i></a></div>
      <div><h4>Điểm bán sân bay</h4>Địa chỉ do Ponagar cung cấp<br>Giờ mở cửa theo sân bay<br><a href="#">Bản đồ <i class="ti ti-map-2"></i></a></div>
      <div><h4>Xưởng sản xuất</h4>Địa chỉ do Ponagar cung cấp<br>Nhận đặt làm riêng, quà tặng doanh nghiệp<br><a href="#">Bản đồ <i class="ti ti-map-2"></i></a></div>
    </div>
    <div class="copy">© Bản quyền thuộc về Ponagar · ${COMPANY.name} · Số ĐKKD ${COMPANY.mst} · ${COMPANY.addr} · ${COMPANY.email} · Prototype — dữ liệu mẫu</div>
  </footer>
  <div class="shop-contactbar"><a class="call" href="tel:${COMPANY.tel}" title="Gọi"><i class="ti ti-phone"></i></a><a class="zalo" href="#" title="Zalo">Zalo</a><a class="msg" href="#" title="Messenger"><i class="ti ti-brand-messenger"></i></a></div>
  <div class="proto-bar">${[['index.html', 'Mục lục'], ['home.html', 'Trang chủ'], ['category.html', 'Danh mục'], ['product.html', 'Chi tiết'], ['cart.html', 'Giỏ hàng'], ['admin-orders.html', 'Admin']]
    .map(([h, t]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${t}</a>`).join('')}</div>`;

  document.getElementById('chrome-top').innerHTML = header;
  document.getElementById('chrome-bottom').innerHTML = footer;
  megaShow(0);
}

/* Cột phải của menu danh mục (dùng chung cho mega menu và menu trái trang chủ) */
const megaCols = c => `
    <div><h4>Theo kiểu</h4>${c.types.map(t => `<a href="category.html">${t}</a>`).join('')}</div>
    <div><h4>Theo chủ đề tranh</h4>${THEMES.map(t => `<a href="category.html">${c.name} – ${t}</a>`).join('')}</div>
    <div><h4>Theo mức giá</h4>${PRICES.map(p => `<a href="category.html">${p}</a>`).join('')}</div>`;

function megaShow(i, el) {
  document.querySelectorAll('.shop-mega-l a').forEach(a => a.classList.remove('on'));
  if (el) el.classList.add('on'); else document.querySelector('.shop-mega-l a')?.classList.add('on');
  document.getElementById('megaR').innerHTML = megaCols(CATS[i]);
}
function toggleMega() { document.getElementById('mega').classList.toggle('open'); }
document.addEventListener('click', e => {
  const m = document.getElementById('mega');
  if (m && m.classList.contains('open') && !e.target.closest('#mega') && !e.target.closest('.shop-cat-btn')) m.classList.remove('open');
});

function toast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2400);
}
