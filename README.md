# AI Solopreneur Landing Page

Landing page cao cấp, tối giản theo phong cách Apple dành cho chương trình đào tạo AI Solopreneur.

## Đặc điểm kỹ thuật
- **Kiến trúc**: Static Site (Single-file HTML).
- **Công nghệ**: Tailwind CSS (CDN), Vanilla JavaScript.
- **Tính năng**:
    - Responsive 100% (Mobile/Tablet/Desktop).
    - Hiệu ứng cuộn mượt mà (Reveal on Scroll).
    - Tích hợp Google Sheets (thông qua Google Apps Script).
    - Chuyển hướng Zalo Group tự động sau khi đăng ký.

## Hướng dẫn Deploy lên Vercel/GitHub Pages
1. **GitHub**: Upload toàn bộ nội dung repo lên một repository mới.
2. **Vercel**:
    - Import repository.
    - **Framework Preset**: Chọn `Other` (vì không có build step).
    - **Build Command**: Để trống.
    - **Output Directory**: Để mặc định (gốc).
    - Nhấn **Deploy**.
3. **Kết quả**: Trang web sẽ hiển thị ngay lập tức từ file `index.html`.

## Cấu hình Google Sheets
Trong file `index.html`, tìm biến `SCRIPT_URL` và thay thế bằng URL Web App từ Google Apps Script của bạn để lưu thông tin đăng ký.

---
© 2024 AI Solopreneur.