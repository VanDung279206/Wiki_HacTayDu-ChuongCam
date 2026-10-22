# Nguồn nội dung — 20/10/2026

Cập nhật giftcode ngày **22/10/2026**: nhận 24 ảnh thư trong game, mỗi ảnh được người dùng ghi mã tương ứng. Theo lựa chọn của người dùng, chỉ công khai mã và phần thưởng dạng chữ, không đăng 24 ảnh gốc. Bản ghi nguồn tại `public/assets/code-rewards.txt`; ánh xạ phần thưởng nằm trong `codeRewardEvidence` của `src/data.ts`. Ngày hiển thị trên thư là **21/10/2026**, không phải ngày công bố mã. Bảng hiển thị phần thưởng bằng chữ và giữ nguồn công bố chính thức NHANCAN111 cùng nguồn bản ghi phần thưởng.

Chép số lượng hiện rõ; THUANPHAM, VAN97, HOANGDZ không hiện số lượng ở ba ô nên không tự ghi ×1 hoặc ×2. HACTAYDU888 có hộp không hiện số lượng. Phân biệt mảnh khung cam và khung đỏ: DKT10K, DKT30K, DKT50K là khung cam; DKT5K, DKT20K và sáu mã Căn là khung đỏ. DAT100KDKT có Tiên Ngọc ×1.000, mảnh khung đỏ ×25 và mảnh chân dung ×50. Các tên vật phẩm chưa hiện trong ảnh được mô tả theo biểu tượng, không gán tên hoặc nhân vật từ suy đoán. “Thư có hiệu lực 7 ngày” là thời hạn thư; không dùng làm hạn đổi mã và không xác nhận hiệu lực hiện tại từ ảnh cũ.

Theo yêu cầu tăng nét, thêm năm nhóm `portraits-enhanced-1.png` đến `portraits-enhanced-5.png` và ảnh riêng `portrait-hanh-tien-lam-enhanced.png` bằng imagegen. Hai ảnh ban đầu vẫn được giữ nguyên và là nguồn cho tên, tier, nhận dạng. Bản xử lý chỉ dùng hiển thị và có thể thay đổi nét vẽ nhỏ; mỗi hồ sơ có lựa chọn ảnh gốc. Thông số và prompt: [IMAGE_ENHANCEMENT.md](IMAGE_ENHANCEMENT.md).

Người dùng cung cấp nội dung **phiên bản 1.0.2**, với mốc "1 tuần trước" tính tại ngày nhận 20/10/2026. Giữ mốc ước tính này, không gán ngày phát hành cụ thể hoặc suy ra phạm vi server. Bản ghi nguyên văn được lưu tại `public/assets/patch-notes-1.0.2.txt`, ghi rõ là thông tin từ người dùng, chưa phải đường dẫn thông báo nhà phát hành. Liên kết vào ba hồ sơ Thiên Bồng Nguyên Soái, Tam Thái Tử và Bạch Cốt Phu Nhân. Bổ sung bài phiên bản, sự kiện Vân Mộng Tiên Tung, ngoại trang Chiến Thần Lữ Bố Xuất Thế và Hệ thống Thủ hộ. Dần Hổ, Ngọ Mã, Thân Hầu, Thìn Long được ghi là Thủ hộ; không tăng số hồ sơ tướng. Không suy ra nhân vật sử dụng ngoại trang, lịch sự kiện, kỹ năng, chỉ số hoặc danh sách lỗi đã sửa.

Hai ảnh roster mới do người dùng gửi trong chat và xác nhận là bảng đánh giá thử nghiệm nội bộ: `public/assets/tier-than-tuong.png` (31 tên) và `public/assets/tier-thanh-ton.png` (8 tên). Chưa có tác giả, ngày thử nghiệm hoặc phiên bản. Lưu nguyên tệp; chân dung hiển thị bằng vùng nhìn SVG trên ảnh gốc, bản xử lý hiển thị được ghi riêng trong IMAGE_ENHANCEMENT.md. Tier S/A/B/C chỉ phản ánh bảng test, không đổi thành phẩm chất hoặc hiệu ứng chiến đấu.

Đối chiếu danh mục: thêm 13 hồ sơ Thần tướng và 8 hồ sơ Thánh Tôn từ ảnh; tổng 42 hồ sơ gồm 21 hồ sơ có nguồn nhà phát hành và 21 hồ sơ mới chờ đối chiếu. Có 36 hồ sơ dùng được chân dung trong hai ảnh. Đường Tam Tạng dùng hồ sơ Đường Tăng, Trư Ngộ Năng dùng hồ sơ Trư Bát Giới vì đã có nguồn ghi tên này. Ba nhãn **Lý Tịnh**, **Kháng Kim Tinh Quân**, **Hoàng My** khác tên đang dùng **Lý Tinh**, **Cang Kim Tinh Quân**, **Hoàng Mi**; giữ nguyên nhãn trên bảng, chưa gộp hoặc thêm hồ sơ trùng. Không suy ra phe từ màu viền hoặc kiến thức nguyên tác. Không tự gộp các tên Thánh Tôn với tướng thường chỉ vì có cùng danh hiệu trong truyện.

| Nguồn | Nội dung sử dụng |
| --- | --- |
| https://hactaydu.funtap.games/ | Hồ sơ Dương Tiễn, Ngưu Ma Vương, Đường Tăng; thế lực, phẩm chất, vai trò từ ảnh chính thức |
| https://hactaydu.funtap.games/huong-dan/gioi-thieu-hac-tay-du-chuong-cam | Cốt truyện, dàn trận, Ngọc Diện Hồ Ly, 3 hoạt động liên server, VIP, điểm danh, ngoại trang |
| https://play.google.com/store/apps/details?id=vn.ftg.hactaydu | Tên nhân vật, lựa chọn tướng ngày đầu, offline, nền tảng |
| https://hactaydu.funtap.games/huong-dan/huong-dan-nhan-giftcode-va-doi-giftcode-game-hac-tay-du-chuong-cam | Hướng dẫn đổi code qua Playfun |
| https://hactaydu.funtap.games/huong-dan/huong-dan-tai-game-hac-tay-du-chuong-cam | Android, iOS, cách chơi PC bằng giả lập |
| https://hactaydu.funtap.games/huong-dan/huong-dan-nap-the-game-hac-tay-du-chuong-cam | Cổng nạp và kiểm tra server/nhân vật/FunID |
| https://hactaydu.funtap.games/huong-dan/huong-dan-nap-ingame-hac-tay-du-chuong-cam | Đường dẫn nạp ở Thành chính |
| https://afkmobi.com/tong-hop-gift-code-game-hac-tay-du-chuong-cam-moi-nhat.html | ALPHA3R6, công bố 23/09/2026; đường dẫn đổi trong game cho Alpha Test |
| https://www.facebook.com/hactaydufuntap/posts/pfbid09WioYcfqV4fPsQVLFFHZ5xXtA2zRXYTTTBKcSaQjPkZprUgDdLWj96a8GPHq4gj6l | Livestream ngày 20/10/2026 20:00, thông báo có code, nhắc Lục Căn |

Không có cơ sở xác nhận ALPHA3R6 còn hiệu lực. Bài livestream không ghi mã cụ thể. Mã NHANCAN111 được tìm thấy trong bài chính thức Khai Nhãn Căn, cho toàn server; chưa nhập thử trong game. Sự kiện kết thúc 10:00 ngày 21/10, không tự suy ra đó là hạn riêng của mã.

Fanpage được người dùng cung cấp. Trình duyệt trong ứng dụng bị chặn khi tải thêm bài cũ; sau đó phiên Chrome hiện có đọc được các bài và bộ ảnh công khai. Danh mục hiện gồm 21 tên có nguồn; không gọi là toàn bộ tướng khi chưa đối chiếu Đồ giám.

Các nguồn mới nằm trong `src/data.ts`, bao gồm đường dẫn cụ thể tới các bài Tiên Gia, Yêu Tộc, Chúng Sinh, mở tải, quà đăng ký, Dev Log #1, tiêu điểm Dương Tiễn, Nhãn Căn và Tị Căn. Đã đọc trực tiếp ảnh mang tên Lý Tinh, Hàng Long Tôn Giả, Trấn Nguyên Tử, Khổng Tước Công Chúa. Không lấy tên từ OCR tự động nếu chưa đối chiếu ảnh.

Bốn kỹ năng Dương Tiễn được diễn giải từ bài tiêu điểm: Phong Khởi Ảnh Động (370% Công), Nhất Khí Lưỡng Nghi (+25% Thủ Vật Lý, +15% Công, +10% Tỷ Lệ Bạo), Thanh Nguyên Diệu Đạo (Khải Minh và tổng 500% Công), Nhục Thân Thành Thánh (miễn chí mạng đầu, khiên 300% Công, thêm 30% sát thương xung quanh). Bài không nêu cấp kỹ năng; wiki ghi rõ giới hạn này.

Mô tả ưu đãi ngày đầu giữa trang chủ và Google Play khác nhau; giữ rõ cả hai nguồn. Không tự thêm kỹ năng, sát thương hoặc thế lực từ kiến thức nguyên tác.

Các hình giới thiệu ban đầu (`art1.png`, `art2.png`, `art3.png`, các ảnh nền và logo) lấy từ CDN chính thức `https://cdn.smobgame.com/template/FT105/images/home/`. Ảnh giftcode và hai bảng test được người dùng cung cấp riêng trong chat. Giữ nguyên tệp, chỉ giới hạn vùng hiển thị bằng CSS/SVG. Quyền hình ảnh thuộc chủ sở hữu tương ứng.

Danh mục cần bổ sung: [DATA_NEEDED.md](DATA_NEEDED.md).

Ảnh **Bộ code tân thủ siêu giá trị** do người dùng cung cấp trong chat ngày 20/10/2026 được lưu nguyên bản tại `public/assets/giftcodes-tan-thu.png`. Đọc 32 ô mã, loại 8 ô lặp, còn 24 chuỗi khác nhau. NHANCAN111 đã có nguồn fanpage nên giữ bản ghi cũ; thêm 23 bản ghi từ ảnh. Tổng cộng 25 mã khi tính cả ALPHA3R6. Hai mã ở mép dưới là DKT50K và DAT100KDKT; chuỗi HOICHIEUTROIMUA được giữ đúng như ảnh. Ảnh không thể chứng minh ngày phát hành, hạn, phần thưởng hay hiệu lực. Không suy ra điều kiện đổi từ tên mã. Nguồn được ghi là ảnh người chơi cung cấp, chưa có đường dẫn bài gốc để xác nhận xuất xứ.
