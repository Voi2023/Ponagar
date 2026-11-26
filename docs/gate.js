/* Khoá xem dự án Ponagar bằng mật khẩu. Nạp trong <head> của mọi trang, trước script khác.
   Chỉ lưu mã băm SHA-256 của mật khẩu. Nhập đúng một lần, trình duyệt đó nhớ.
   ponytail: khoá chạy ở trình duyệt nên chỉ chặn người xem thông thường; mã nguồn vẫn đọc được
   nếu repo công khai. Cần bảo mật thật thì để repo private hoặc chặn bằng máy chủ. */
(function () {
  var HASH = 'e632dc5029979dfbf45886e3ebd6aa3242b79ead156eea4c96dcc855ee9d57b2';
  var KEY = 'ponagar-gate';
  try { if (localStorage.getItem(KEY) === HASH) return; } catch (e) {}

  var src = document.currentScript && document.currentScript.src;
  var logo = src ? new URL('prototype/assets/logo.png', src).href : '';
  var root = document.documentElement;
  root.classList.add('png-locked');
  var st = document.createElement('style');
  st.textContent =
    'html.png-locked{overflow:hidden}html.png-locked body{visibility:hidden}' +
    '#png-gate{visibility:visible;position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:16px;' +
    'background:linear-gradient(125deg,#611719,#BB2E30 65%,#c9564f);font-family:"Chakra Petch","Segoe UI",system-ui,sans-serif;color:#231F1C}' +
    '#png-gate form{width:100%;max-width:360px;background:#fff;border-radius:16px;padding:26px 24px;box-shadow:0 20px 60px rgba(0,0,0,.3)}' +
    '#png-gate img{height:20px;width:auto;display:block;margin-bottom:16px}' +
    '#png-gate h1{font-size:19px;margin:0 0 4px}#png-gate p{margin:0 0 16px;color:#76695E;font-size:14px}' +
    '#png-gate label{display:block;font-size:12.5px;font-weight:700;color:#76695E;margin-bottom:6px}' +
    '#png-gate input{width:100%;box-sizing:border-box;padding:11px 12px;border:1px solid #ECE4D8;border-radius:9px;font:inherit;font-size:15px;background:#FAF7F2}' +
    '#png-gate input:focus{outline:2px solid #BB2E30;outline-offset:1px;background:#fff}' +
    '#png-gate button{width:100%;margin-top:12px;padding:12px;border:0;border-radius:9px;background:#BB2E30;color:#fff;font:inherit;font-weight:700;font-size:15px;cursor:pointer}' +
    '#png-gate button:hover{background:#89222A}#png-gate .err{color:#c62828;font-size:13px;min-height:18px;margin-top:8px}';
  document.head.appendChild(st);

  function sha256(s) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(function (b) {
      return Array.from(new Uint8Array(b)).map(function (x) { return x.toString(16).padStart(2, '0'); }).join('');
    });
  }

  function show() {
    var g = document.createElement('div');
    g.id = 'png-gate';
    g.innerHTML = '<form>' + (logo ? '<img src="' + logo + '" alt="PONAGAR">' : '<div style="color:#BB2E30;font-weight:700;font-size:22px;letter-spacing:.22em;margin-bottom:14px">PONAGAR</div>') +
      '<h1>Tài liệu dự án</h1><p>Nhập mật khẩu để xem.</p>' +
      '<label for="png-pw">Mật khẩu</label><input id="png-pw" type="password" autocomplete="current-password" required autofocus>' +
      '<div class="err" role="alert"></div><button type="submit">Xem dự án</button></form>';
    document.body.appendChild(g);
    var input = g.querySelector('input'), err = g.querySelector('.err');
    input.focus();
    g.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      if (!window.crypto || !crypto.subtle) { err.textContent = 'Trình duyệt chặn kiểm tra mật khẩu. Hãy mở trang qua https.'; return; }
      sha256(input.value).then(function (h) {
        if (h !== HASH) { err.textContent = 'Mật khẩu chưa đúng.'; input.select(); return; }
        try { localStorage.setItem(KEY, HASH); } catch (e2) {}
        root.classList.remove('png-locked');
        g.remove();
      });
    });
  }
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
