/* Dữ liệu mẫu dùng chung cho Cổng Kho: admin-kho, admin-stock, admin-picking, admin-transfers, admin-serials.
   Nạp sau proto.js và admin.js. Kho = chỉ số STORES: 0 Phú Nhuận, 1 Q.10, 2 Thủ Đức. Hôm nay 27/11/2026. */

// Mã cần quản lý serial — đề xuất trong tài liệu, chờ Techhomes xác nhận. Phụ kiện nhỏ chỉ theo số lượng.
const SERIAL_TYPES = ['Bếp từ', 'Máy hút mùi', 'Máy rửa chén', 'Lò nướng & vi sóng', 'Tủ lạnh & tủ rượu', 'Máy lọc nước'];
const hasSerial = p => p.cat === 'khoa' || SERIAL_TYPES.includes(p.type);

// Có thể bán theo kho — cùng số với cột "Tồn theo kho" ở admin-products.html
const avail = (p, s) => [(p.id * 3) % 5, (p.id * 7) % 9, p.id % 3][s];
// Đang giữ cho đơn chưa xuất kho: [id sản phẩm, kho, SL, mã đơn] — khớp ORDERS ở admin-orders.html
const HOLDS = [[5, 0, 1, 'TH-20482'], [8, 1, 1, 'TH-20481'], [44, 2, 20, 'TH-20480'], [12, 0, 1, 'TH-20478'], [6, 0, 1, 'TH-20474'], [6, 0, 1, 'TH-20473'], [72, 0, 1, 'TH-20473'], [42, 1, 12, 'TH-20475']];
// Đang về: đã đặt nhà phân phối, chưa nhập kho: [id, kho, SL, nhà phân phối, ngày về, ghi chú]
const INCOMING = [
  [5, 0, 5, 'Häfele Việt Nam', '28/11', 'PO-2611-03 · bếp bán chạy'],
  [6, 0, 4, 'Häfele Việt Nam', '29/11', 'PO-2511-01 · bổ sung tồn'],
  [4, 0, 1, 'Häfele Việt Nam', '01/12', 'Cho đơn TH-20479 (khách đã cọc)'],
  [42, 2, 50, 'Nhà phân phối Blum', '03/12', 'PO-2611-05'],
  [50, 1, 10, 'Nhà phân phối Blum', '03/12', 'PO-2611-05'],
];
const sumQ = (list, p, s) => list.filter(r => r[0] === p.id && (s == null || r[1] === s)).reduce((a, r) => a + r[2], 0);
const held = (p, s) => sumQ(HOLDS, p, s);
const incoming = (p, s) => sumQ(INCOMING, p, s);
const onHand = (p, s) => avail(p, s) + held(p, s);   // Tồn thực = Có thể bán + Đang giữ

// Cảnh báo tồn thấp (Telegram 8:00): [id, kho, mức tối thiểu, gợi ý]
const LOW = [
  [5, 0, 3, 'Đã đặt Häfele 5 chiếc (tính cả TH-20482 đang giữ) · về 28/11'],
  [12, 0, 2, 'Chuyển 1 từ Q.10 (còn 3) · phiếu CK-2611-02 đang đi đường'],
  [6, 2, 2, 'Chuyển 2 từ Phú Nhuận · phiếu nháp CK-2711-01'],
  [42, 2, 20, 'Đã đặt Blum 50 bộ · về 03/12'],
  [63, 1, 2, 'Chuyển 2 từ Phú Nhuận (còn 4)'],
  [21, 2, 1, 'Chuyển 1 từ Q.10 (còn 3)'],
];

// Hàng đợi xuất kho cho đơn, xếp theo ngày hẹn giao. lines: [id, SL, vị trí kệ]
const PICKS = [
  { o: 'TH-20478', s: 0, due: '27/11', cus: 'Võ Thị Mai · 0977 ••• 305', lines: [[12, 1, 'B2-04']], ship: 'Giao cùng thợ lắp đặt', inst: '28/11 9:00 · Văn Hùng', st: 'Đang lấy hàng', by: 'NV05' },
  { o: 'TH-20474', s: 0, due: '27/11', cus: 'Trương Thị Lan · 0907 ••• 664', lines: [[6, 1, 'C1-02']], ship: 'Xe Techhomes', inst: '27/11 14:00 · Văn Hùng', st: 'Chờ nhận' },
  { o: 'TH-20475', s: 1, due: '27/11', cus: 'Cty Mộc Gia Huy (nhà thầu)', lines: [[42, 12, 'A3-11']], ship: 'Khách nhận tại showroom', inst: '', st: 'Đủ hàng · chờ xuất', by: 'NV06' },
  { o: 'TH-20473', s: 0, due: '28/11', cus: 'Lý Văn Phúc · 0938 ••• 115', lines: [[6, 1, 'C1-02'], [72, 1, 'D4-01']], ship: 'Hãng vận chuyển', inst: '', st: 'Chờ nhận' },
  { o: 'TH-20480', s: 2, due: '29/11', cus: 'Cty TNHH Nội thất An Phát', lines: [[44, 20, 'A1-05']], ship: 'Xe Techhomes', inst: 'Theo tiến độ công trình', st: 'Chờ nhận' },
];

// Phiếu chuyển kho. lines: [id, SL gửi, SL nhận, serial]
const TRANSFERS = [
  { id: 'CK-2711-01', from: 0, to: 2, st: 'Nháp', lines: [[6, 2, 0, []]], by: 'NV05', at: '27/11 08:15', note: 'Tạo từ cảnh báo tồn thấp' },
  { id: 'CK-2611-02', from: 1, to: 0, st: 'Đang chuyển', lines: [[12, 1, 0, ['HF-B38C-24100392']]], by: 'NV06', at: '26/11 16:20', note: 'Bổ sung tồn Phú Nhuận' },
  { id: 'CK-2511-01', from: 2, to: 1, st: 'Lệch', lines: [[42, 30, 28, []]], by: 'NV04', at: '25/11 10:40', rcv: 'Văn Tài · 25/11 15:05', note: 'Nhận thiếu 2 bộ — treo chờ quản lý xử lý' },
  { id: 'CK-2411-03', from: 0, to: 1, st: 'Đã nhận', lines: [[20, 2, 2, ['HF-PP8100-25070212', 'HF-PP8100-25070213']], [77, 1, 1, []]], by: 'NV05', at: '24/11 09:30', rcv: 'Văn Tài · 24/11 14:10', note: '' },
  { id: 'CK-2011-01', from: 1, to: 2, st: 'Đã nhận', lines: [[50, 6, 6, []]], by: 'NV06', at: '20/11 10:00', rcv: 'Hoàng Long · 20/11 16:45', note: '' },
];

// Phiếu kiểm kê. lines: [id, chênh lệch (đếm − hệ thống; null = chưa đếm), lý do]. Số hệ thống = onHand lúc tạo phiếu.
const STOCKTAKES = [
  { id: 'KK-2711-01', s: 0, scope: 'Ngành hàng · Khóa điện tử', st: 'Đang đếm', by: 'NV05', at: '27/11 07:45', lines: [[8, null, ''], [20, null, ''], [32, null, ''], [83, null, '']] },
  { id: 'KK-2511-02', s: 1, scope: 'Thương hiệu · Blum', st: 'Chờ duyệt', by: 'NV06', at: '25/11 17:30', lines: [[44, 0, ''], [50, -1, 'Một bộ mở hộp làm mẫu trưng bày, chưa lập phiếu'], [42, -1, 'Không tìm thấy, nghi lẫn sang CK-2511-01'], [35, 0, '']] },
  { id: 'KK-3110-01', s: 2, scope: 'Toàn kho', st: 'Đã duyệt', by: 'NV04', at: '31/10 18:00', lines: [[44, 0, ''], [7, 0, ''], [83, 1, 'Hàng nhập PO-1029 quét thiếu serial, đã bổ sung']] },
];

// Serial thiết bị. st: Trong kho · Đang đi đường · Đã bán · chờ lắp · Đang bảo hành · Gửi hãng · Hết bảo hành
// in: [phiếu nhập, nhà phân phối, ngày nhập] · sold: [mã đơn, khách, SĐT, ngày xuất] · inst: [ngày lắp, thợ] · wEnd: hết bảo hành
const SERIALS = [
  { sn: 'HF-B38C-24100417', pid: 12, st: 'Trong kho', s: 0, in: ['NK-1810-02', 'Häfele Việt Nam', '18/10/2026'] },
  { sn: 'HF-B38C-24100418', pid: 12, st: 'Trong kho', s: 0, in: ['NK-1810-02', 'Häfele Việt Nam', '18/10/2026'] },
  { sn: 'HF-B38C-24100392', pid: 12, st: 'Đang đi đường', s: 1, in: ['NK-1810-02', 'Häfele Việt Nam', '18/10/2026'], note: 'CK-2611-02 · Q.10 → Phú Nhuận' },
  ...[121, 122, 123, 124, 125].map(n => ({ sn: 'HF-F60EB-25030' + n, pid: 6, st: 'Trong kho', s: 0, in: ['NK-0211-01', 'Häfele Việt Nam', '02/11/2026'] })),
  { sn: 'HF-PP9100-25080041', pid: 8, st: 'Trong kho', s: 1, in: ['NK-0511-03', 'Häfele Việt Nam', '05/11/2026'] },
  { sn: 'HF-PP8100-25070212', pid: 20, st: 'Trong kho', s: 1, in: ['NK-2010-01', 'Häfele Việt Nam', '20/10/2026'], note: 'Nhận từ CK-2411-03' },
  { sn: 'HF-PP2501-25090077', pid: 83, st: 'Đã bán · chờ lắp', s: 2, in: ['NK-2910-04', 'Häfele Việt Nam', '29/10/2026'], sold: ['TH-20471', 'Đặng Ngọc Hân', '0909 ••• 552', '26/11/2026'] },
  { sn: 'HF-SG70A-25040311', pid: 21, st: 'Đang bảo hành', s: 0, in: ['NK-0909-02', 'Häfele Việt Nam', '09/09/2026'], sold: ['TH-20468', 'Bùi Thanh Tâm', '0918 ••• 437', '14/11/2026'], wEnd: '14/11/2028', note: 'Mua tại showroom, không lắp — bảo hành tính từ ngày bán' },
  { sn: 'HF-I7326-25011088', pid: 5, st: 'Đang bảo hành', s: 0, in: ['NK-1509-01', 'Häfele Việt Nam', '15/09/2026'], sold: ['TH-20412', 'Phan Thị Ngọc', '0903 ••• 556', '10/10/2026'], inst: ['12/10/2026', 'Văn Hùng'], wEnd: '12/10/2028' },
  { sn: 'HF-TG60E-24060215', pid: 26, st: 'Gửi hãng', s: 0, in: ['NK-0207-01', 'Häfele Việt Nam', '02/07/2025'], sold: ['TH-20188', 'Nguyễn Văn Lộc', '0932 ••• 270', '20/07/2025'], inst: ['22/07/2025', 'Minh Đức'], wEnd: '22/07/2027', note: 'Bảo hành: gửi Häfele 20/11, hẹn nhận về 04/12' },
  { sn: 'HF-HWP400-23050019', pid: 19, st: 'Hết bảo hành', s: 1, in: ['NK-0205-02', 'Häfele Việt Nam', '02/05/2023'], sold: ['TH-19870', 'Đỗ Minh Quân', '0971 ••• 803', '12/05/2023'], inst: ['15/05/2023', 'Minh Đức'], wEnd: '15/05/2025' },
];
