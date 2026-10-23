# Hắc Tây Du: Chương Cấm — Wiki cộng đồng

Website tiếng Việt dành cho cộng đồng Hắc Tây Du: Chương Cấm, xây dựng bằng React 19, TypeScript và Vite. Giao diện bách khoa theo bố cục Wikipedia: bài viết, mục lục, bảng thông tin và tham khảo; hỗ trợ máy tính và điện thoại.

## Chạy trên máy

Yêu cầu Node.js 20.19+ hoặc 22.12+ và npm.

```sh
npm ci
npm run dev
```

Mở địa chỉ Vite in ra trong terminal. Tạo và kiểm tra bản phát hành:

```sh
npm run build
npm run preview
```

Chạy kiểm tra bằng `npm test`. Các tình huống dữ liệu hỏng, trình duyệt chặn lưu trữ và hết dung lượng được kiểm tra bằng storage giả lập. Có thêm kiểm tra nguồn, ID bài viết, tìm kiếm tiếng Việt, metadata giftcode và tọa độ đội hình tự do (dữ liệu cũ, vượt biên, chồng vị trí và giữ vị trí khi thay danh sách).

## Chức năng

- Bài tổng quan về game, cốt truyện và lối chơi.
- 52 hồ sơ: 43 tướng được thấy trong video Đồ giám (31 Tuyệt, 6 Đỉnh, 6 Ưu), cùng 8 Thánh Tôn và Bạch Cốt Tinh giữ từ nguồn trước. Thêm 10 tên mới, gộp hồ sơ La Sát Nữ/Thiết Phiến Công Chúa, thống nhất các tên theo Đồ giám. Có bộ lọc phẩm chất và phạm vi đối chiếu. Lọc Thần tướng/Thánh Tôn, thế lực; tìm tên, danh hiệu và tên gọi đã xác nhận.
- 166 kỹ năng của 43 tướng từ video ngày 23/10/2026: cấp Lv.1–3/Lv.1–2/Lv.1 theo popup, hồi chiêu, tooltip và mốc video. Đánh dấu mô tả bị cắt; lọc tướng có/chưa có kỹ năng. Chỉ xuất bản ghi chữ.
- Công cụ Tier list ngay trên wiki: 52 tướng, 51 ảnh Drive được đối chiếu; kéo thả hoặc chọn hạng, đổi thứ tự, sửa tên/màu hạng, thêm/xóa hạng, hoàn tác, tự lưu, xuất PNG và tải/nhập JSON. Bạch Cốt Tinh dùng thẻ tên. Mẫu TierMaker bên ngoài được giữ làm tham khảo.
- Bảng test nội bộ gồm 31 tên Thần tướng và 8 tên Thánh Tôn; 39 hồ sơ có chân dung lấy vùng hiển thị từ ảnh gốc. Giữ nguyên nhãn trên ảnh, liên kết tới tên đã đối chiếu trong Đồ giám.
- Chân dung có bản tăng nét, nút đổi về ảnh gốc và khung ảnh đúng tỉ lệ. Tệp kết quả, prompt và giới hạn xử lý được ghi trong `docs/IMAGE_ENHANCEMENT.md`.
- Tìm kiếm không phân biệt dấu tiếng Việt; phím tắt Ctrl/Cmd + K.
- 20 bài về hệ thống, hoạt động, hướng dẫn và lịch sử cập nhật; mỗi bài và tướng có URL riêng.
- Nội dung 1.0.2 do người dùng cung cấp: ba Thánh Tôn có liên kết lịch sử, Vân Mộng Tiên Tung, ngoại trang giới hạn và bốn Thủ hộ. Thời điểm phát hành được giữ là ước tính.
- Bố trận tự do tối đa 6 tướng trong một vùng giới hạn, cho phép chồng vị trí. Kéo bằng chuột/cảm ứng, chọn rồi đặt, hoặc chỉnh bằng phím mũi tên và thanh ngang/dọc; lưu cả tướng và vị trí.
- Chọn tướng theo phe Tiên Gia, Yêu Tộc, Chúng Sinh và Chưa rõ phe; tìm tên không dấu. Danh sách đội giúp chọn lại tướng bị che.
- Tủ sách yêu thích và giao diện sáng/tối.
- Bảng giftcode có nguồn, ngày công bố, trạng thái, hạn dùng và phản hồi sao chép.
- Thông báo livestream 20/10/2026 từ fanpage người dùng cung cấp.
- Trang liệt kê dữ liệu cần người chơi bổ sung để hoàn thiện wiki.
- Menu mobile, điều khiển bàn phím, focus rõ ràng, hỗ trợ giảm chuyển động.

Dữ liệu đội hình, bài đã lưu và giao diện được giữ bằng `localStorage` trên từng trình duyệt. Không cần tài khoản hoặc backend. Nếu trình duyệt chặn lưu trữ, ứng dụng thông báo và giữ thay đổi trong phiên hiện tại.

## Chỉnh sửa nội dung

- `src/skillVideo.ts`: kỹ năng và hiệu ứng theo video ngày 23/10/2026.
- `src/data.ts`: hồ sơ nhân vật, cẩm nang, liên kết nguồn.
- `src/videoCatalog.ts`: bản ghi 43 tướng, đối chiếu tên, kỹ năng và thuộc tính cấp 600 của Tôn Ngộ Không từ video.
- `src/App.tsx`: trang và tương tác.
- `src/FormationBuilder.tsx`: vùng bố trận và danh sách tướng theo phe.
- `src/HeroPicture.tsx`: hiển thị chân dung từ vùng ảnh gốc.
- `src/TierList.tsx`: công cụ xếp hạng và các bảng tham khảo.
- `src/TierBuilder.tsx`, `src/tierBoard.ts`, `src/tierExport.ts`: thao tác, lưu/khôi phục và xuất ảnh bảng cá nhân.
- `src/characterArt.json`: ảnh tier list và nguồn Drive cho từng hồ sơ.
- `src/formation.ts`: tọa độ tương đối, phục hồi dữ liệu đội hình cũ và giới hạn di chuyển.
- `src/styles.css`: màu sắc, kiểu chữ, bố cục và responsive.
- `public/assets/`: hình từ CDN chính thức và ảnh do người dùng cung cấp, có ghi nguồn.
- `docs/SOURCES.md`: nguồn, tình trạng xác minh và phạm vi dữ liệu.
- `docs/ui-evidence.json`: kết quả kiểm tra giao diện; hình kiểm tra nằm cùng thư mục.

Danh mục 52 hồ sơ chưa phải toàn bộ tướng trong game. Video nhận ngày 22/10/2026 xác nhận 43 thẻ; tám hồ sơ Thánh Tôn và Bạch Cốt Tinh chưa xuất hiện trong video. Đã khớp tên và chân dung các cặp Thiết Phiến Công Chúa/La Sát Nữ, Lý Tịnh/Lý Tinh, Hoàng My/Hoàng Mi, Cang Kim/Kháng Kim và Đại Bàng/Đại Bằng Vương. Giữ ID, đường dẫn và dữ liệu đội hình cũ khi gộp hồ sơ. Hạng test có nguồn riêng và không được dùng làm phẩm chất, kỹ năng hay sát thương. Dương Tiễn, Ngưu Ma Vương và Đường Tăng có thế lực/vai trò/phẩm chất qua hình trên trang chủ. Ngọc Diện Hồ Ly có vai trò hỗ trợ được nêu trong bài giới thiệu. Trường thiếu hiển thị dấu —. Công cụ đội hình không mô phỏng chiến đấu. Tôn Ngộ Không có bốn kỹ năng Lv.3 với từng mốc Lv.1–3; thuộc tính cấp 600 được ghi riêng, không phải chỉ số gốc. Phần đầu kỹ năng Ngự Vân Càn Nguyệt còn thiếu do bảng mô tả bị khuất trong video. Chỉ công khai bản ghi chữ, không đăng video hoặc khung hình.

Wiki dành cho bản chính thức theo xác nhận của người dùng. Trang Giftcode mặc định có 24 mã khác nhau từ ảnh bộ code tân thủ; `ALPHA3R6` nằm riêng trong bộ lọc lưu trữ Alpha Test. Có thể tìm theo mã hoặc đợt phát. `NHANCAN111` giữ nguồn công bố chính thức từ fanpage. Ngày 22/10/2026 đã bổ sung phần thưởng của 24 mã từ ảnh thư đề ngày 21/10/2026. Theo yêu cầu người cung cấp, chỉ công khai mã và phần thưởng dạng chữ; bản ghi nguồn tại `public/assets/code-rewards.txt`. Bảng hiển thị phần thưởng trực tiếp cùng mã. Vật phẩm chưa có tên đầy đủ được mô tả theo biểu tượng; ô không ghi số không tự gán số lượng. Thời hạn thư 7 ngày được tách khỏi hạn đổi mã; chưa xác nhận các mã còn đổi được hôm nay. Xem `docs/DATA_NEEDED.md` để biết thông tin còn thiếu.

## Đưa lên hosting

Chạy `npm run build`, sau đó triển khai thư mục `dist/` lên hosting tĩnh. Có thể dùng Vercel, Netlify hoặc GitHub Pages. Dự án đặt `base: './'` và dùng điều hướng hash nên hoạt động dưới thư mục con, không cần cấu hình chuyển tiếp route trên server.

Website: [Wiki Hắc Tây Du: Chương Cấm](https://vandung279206.github.io/Wiki_HacTayDu-ChuongCam/).

Workflow `.github/workflows/deploy-pages.yml` tự chạy `npm ci`, kiểm tra, build và triển khai `dist/` lên GitHub Pages khi đẩy lên `main`. Trong Settings → Pages, nguồn triển khai là **GitHub Actions**. Có thể chạy lại bằng **Run workflow** ở tab Actions. Bản mới chỉ được xuất bản sau khi kiểm tra và build thành công.

## Ghi chú

Wiki cộng đồng độc lập, không phải website chính thức của Funtap hoặc Wikimedia. Hình ảnh và nhân vật thuộc chủ sở hữu game. Dùng font hệ thống, không cần tải font bên ngoài.
