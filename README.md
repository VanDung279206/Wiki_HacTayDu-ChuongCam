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
- 42 hồ sơ: 21 có nguồn nhà phát hành và 21 hồ sơ bổ sung từ ảnh test nội bộ chờ đối chiếu. Lọc Thần tướng/Thánh Tôn, thế lực; tìm tên, danh hiệu và tên gọi đã xác nhận.
- Bảng test nội bộ gồm 31 tên Thần tướng và 8 tên Thánh Tôn; 36 hồ sơ có chân dung lấy vùng hiển thị từ ảnh gốc. Ba nhãn khác tên được giữ riêng để đối chiếu.
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

- `src/data.ts`: hồ sơ nhân vật, cẩm nang, liên kết nguồn.
- `src/App.tsx`: trang và tương tác.
- `src/FormationBuilder.tsx`: vùng bố trận và danh sách tướng theo phe.
- `src/HeroPicture.tsx`: hiển thị chân dung từ vùng ảnh gốc.
- `src/TierList.tsx`: bảng test nội bộ, đối chiếu tên và ảnh nguồn.
- `src/formation.ts`: tọa độ tương đối, phục hồi dữ liệu đội hình cũ và giới hạn di chuyển.
- `src/styles.css`: màu sắc, kiểu chữ, bố cục và responsive.
- `public/assets/`: hình từ CDN chính thức và ảnh do người dùng cung cấp, có ghi nguồn.
- `docs/SOURCES.md`: nguồn, tình trạng xác minh và phạm vi dữ liệu.
- `docs/ui-evidence.json`: kết quả kiểm tra giao diện; hình kiểm tra nằm cùng thư mục.

Danh mục 42 hồ sơ chưa phải toàn bộ tướng trong game. Các hồ sơ mới từ ảnh test và ba tên khác biệt vẫn cần Đồ giám bản chính thức để xác nhận. Hạng test có nguồn riêng và không được dùng làm phẩm chất, kỹ năng hay sát thương. Dương Tiễn, Ngưu Ma Vương và Đường Tăng có thế lực/vai trò/phẩm chất qua hình trên trang chủ. Ngọc Diện Hồ Ly có vai trò hỗ trợ được nêu trong bài giới thiệu. Trường thiếu hiển thị dấu —. Công cụ đội hình không mô phỏng chiến đấu.

Wiki dành cho bản chính thức theo xác nhận của người dùng. Trang Giftcode mặc định có 24 mã khác nhau từ ảnh bộ code tân thủ; `ALPHA3R6` nằm riêng trong bộ lọc lưu trữ Alpha Test. Có thể tìm theo mã hoặc đợt phát. `NHANCAN111` giữ nguồn công bố chính thức từ fanpage. Ngày 22/10/2026 đã bổ sung phần thưởng của 24 mã từ ảnh thư đề ngày 21/10/2026. Theo yêu cầu người cung cấp, chỉ công khai mã và phần thưởng dạng chữ; bản ghi nguồn tại `public/assets/code-rewards.txt`. Bảng hiển thị phần thưởng trực tiếp cùng mã. Vật phẩm chưa có tên đầy đủ được mô tả theo biểu tượng; ô không ghi số không tự gán số lượng. Thời hạn thư 7 ngày được tách khỏi hạn đổi mã; chưa xác nhận các mã còn đổi được hôm nay. Xem `docs/DATA_NEEDED.md` để biết thông tin còn thiếu.

## Đưa lên hosting

Chạy `npm run build`, sau đó triển khai thư mục `dist/` lên hosting tĩnh. Có thể dùng Vercel, Netlify hoặc GitHub Pages. Dự án đặt `base: './'` và dùng điều hướng hash nên hoạt động dưới thư mục con, không cần cấu hình chuyển tiếp route trên server.

Website: [Wiki Hắc Tây Du: Chương Cấm](https://vandung279206.github.io/Wiki_HacTayDu-ChuongCam/).

Workflow `.github/workflows/deploy-pages.yml` tự chạy `npm ci`, kiểm tra, build và triển khai `dist/` lên GitHub Pages khi đẩy lên `main`. Trong Settings → Pages, nguồn triển khai là **GitHub Actions**. Có thể chạy lại bằng **Run workflow** ở tab Actions. Bản mới chỉ được xuất bản sau khi kiểm tra và build thành công.

## Ghi chú

Wiki cộng đồng độc lập, không phải website chính thức của Funtap hoặc Wikimedia. Hình ảnh và nhân vật thuộc chủ sở hữu game. Dùng font hệ thống, không cần tải font bên ngoài.
