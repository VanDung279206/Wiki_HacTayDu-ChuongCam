# Tăng nét chân dung — 20/10/2026

Thực hiện theo yêu cầu người dùng bằng skill imagegen, chế độ built-in `image_gen` (không dùng CLI). Hai ảnh nguồn được giữ nguyên. Bản xử lý chỉ dùng để hiển thị chân dung; tên, thứ hạng và tham khảo vẫn lấy từ nguồn gốc. Bản cuối cùng sử dụng năm nhóm chân dung và một ảnh riêng, thay vì phóng cả bảng.

| Ảnh nguồn | Bản tăng nét | Kích thước thực tế bản tăng nét |
| --- | --- | --- |
| Thần tướng 1–9 | `public/assets/portraits-enhanced-1.png` | 1122 × 1402 px |
| Thần tướng 10–18 | `public/assets/portraits-enhanced-2.png` | 1122 × 1402 px |
| Thần tướng 19–27 | `public/assets/portraits-enhanced-3.png` | 1122 × 1402 px |
| Quảng Mục, Kim Giác, Bạch Tượng | `public/assets/portraits-enhanced-4.png` | 1122 × 1402 px |
| Tám Thánh Tôn | `public/assets/portraits-enhanced-5.png` | 1122 × 1402 px |
| Hạnh Tiên Lâm | `public/assets/portrait-hanh-tien-lam-enhanced.png` | 1122 × 1402 px |

Đầu vào là 1024 × 1280 px. Thử tăng nét toàn bộ bảng trả 1122 × 1402 nên không đủ rõ khi phóng chân dung; hai bản thử đó không được dùng trong website. Bản cuối chia 3×3, mỗi chân dung rộng khoảng 350–380px thay vì 104–166px ban đầu. Hạnh Tiên Lâm bị thiếu ở nhóm thứ tư nên được xử lý riêng. Ranh giới ô được đo lại để tránh lẫn ảnh cạnh bên; giữ thứ tự theo ảnh nguồn. Đây là biến thể được xử lý sinh ảnh, không phải bản gốc độ phân giải cao; khuôn mặt và chi tiết nhỏ có thể khác nguồn.

36 hồ sơ có chân dung dùng bản tăng nét mặc định, bao gồm ảnh nhỏ trong danh mục, bảng test và vùng bố trận. Mỗi hồ sơ có nút **Bản tăng nét / Ảnh gốc**. Ảnh lớn giữ đúng tỉ lệ chân dung, tối đa 224px thay vì phóng ngang tới hơn 300px rồi cắt ảnh. Nguồn gốc trong phần tham khảo và ảnh tier đầy đủ vẫn trỏ về tệp ban đầu. Toàn bộ prompt cuối, tên theo thứ tự và tệp đích nằm trong [portrait-enhancement-prompts.json](portrait-enhancement-prompts.json).

Prompt thử tăng nét toàn bộ bảng (không dùng làm bản hiển thị cuối):

> Use case: identity-preserve. This is an image restoration edit for an existing game wiki, NOT a redesign or a new illustration. The provided image is the edit target. Upscale the entire 1024x1280 poster to a high-resolution 4096x5120 portrait image, maintaining its exact 4:5 aspect ratio and proportional registration. Improve the sharpness and legibility of the character portraits only: reduce compression softness, clarify existing ink contours and color edges, keep the original flat illustrated style and palette. Preserve each individual character's identity, face, expression, pose, hair, crown, horns, armor, clothing and accessories. Do not invent new details, replace faces, beautify, or restyle. All portrait windows must remain at exactly the same relative positions and sizes so existing SVG crop coordinates still work. Preserve the complete poster, row/column order, borders, headings, every Vietnamese name and all other lettering verbatim. Do not crop, rearrange, add or remove anything. Avoid halos, ringing, exaggerated contrast, plasticky skin and oversharpening. Output only the restored high-resolution version of this same poster.
