# 🎓 Trang Web Mời Dự Lễ Tốt Nghiệp

Trang web mời khách tham dự lễ tốt nghiệp được xây dựng với Next.js, shadcn/ui và Supabase.

## 🚀 Tính năng

- **Trang chủ**: Giới thiệu về bản thân và ảnh cá nhân
- **Thông tin sự kiện**: Chi tiết về địa điểm, thời gian và cách thức tham gia
- **Đăng ký tham dự**: Form đăng ký với thông tin cá nhân và lời chúc
- **Admin Dashboard**: Quản lý danh sách đăng ký, xác nhận/từ chối khách mời
- **Responsive Design**: Tối ưu cho mọi thiết bị

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (Database + Auth)
- **Notifications**: Sonner (Toast)
- **Icons**: Lucide React

## 📦 Cài đặt

1. **Cài đặt dependencies:**

   ```bash
   npm install
   ```

2. **Cấu hình Supabase:**

   - Tạo project mới trên [Supabase](https://supabase.com)
   - Copy file `.env.local.example` thành `.env.local`
   - Điền thông tin Supabase vào file `.env.local`:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
     ```

3. **Thiết lập Database:**

   - Mở Supabase SQL Editor
   - Chạy script trong file `database/supabase.sql`

4. **Thêm ảnh cá nhân:**

   - Đặt ảnh tốt nghiệp vào thư mục `public/` với tên `me.jpg`

5. **Chạy development server:**
   ```bash
   npm run dev
   ```

## 🎨 Tùy chỉnh

### Thông tin cá nhân

Chỉnh sửa các file component để thay đổi thông tin:

- `src/components/HeroSection.tsx`: Tên, mô tả cá nhân
- `src/components/VenueSection.tsx`: Thông tin sự kiện, địa điểm, thời gian
- `src/app/layout.tsx`: Metadata của trang web

### Styling

- Thay đổi màu sắc theme trong `components.json`
- Tùy chỉnh CSS trong `src/app/globals.css`

## 📱 Sử dụng

### Cho khách mời:

1. Truy cập trang chủ
2. Xem thông tin sự kiện
3. Điền form đăng ký tham dự
4. Nhận thông báo xác nhận

### Cho admin:

1. Truy cập `/admin`
2. Đăng nhập
3. Xem danh sách đăng ký
4. Xác nhận/từ chối khách mời
5. Xuất dữ liệu excel

## 🔐 Bảo mật

- Row Level Security (RLS) được bật trên Supabase
- Anonymous users chỉ có thể INSERT dữ liệu
- Authenticated users có thể SELECT và UPDATE

## 📊 Database Schema

```sql
registrations (
  id: uuid (primary key)
  created_at: timestamp
  name: text
  email: text
  cccd: varchar
  status: enum ('pending', 'confirmed', 'declined')
)
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Thêm environment variables
4. Deploy
