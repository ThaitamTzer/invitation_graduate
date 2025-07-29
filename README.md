# 🎓 Trang Web Mời Dự Lễ Tốt Nghiệp

Trang web mời khách tham dự lễ tốt nghiệp được xây dựng với Next.js, shadcn/ui và Supabase. **Đã được tối ưu SEO cho Google Search**.

## 🚀 Tính năng

- **Trang chủ**: Giới thiệu về bản thân và ảnh cá nhân
- **Thông tin sự kiện**: Chi tiết về địa điểm, thời gian và cách thức tham gia
- **Đăng ký tham dự**: Form đăng ký với thông tin cá nhân và lời chúc
- **Admin Dashboard**: Quản lý danh sách đăng ký, xác nhận/từ chối khách mời
- **Responsive Design**: Tối ưu cho mọi thiết bị
- **SEO Optimized**: Cấu hình SEO chuyên nghiệp để Google dễ dàng index

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (Database + Auth)
- **Notifications**: Sonner (Toast)
- **Icons**: Lucide React
- **SEO**: Structured Data, OpenGraph, Twitter Cards, Sitemap

## 🔍 Tính năng SEO

- ✅ **Meta Tags**: Title, Description, Keywords tối ưu
- ✅ **Open Graph**: Hỗ trợ chia sẻ Facebook, LinkedIn
- ✅ **Twitter Cards**: Hiển thị đẹp khi chia sẻ Twitter
- ✅ **Structured Data**: Schema.org Event markup
- ✅ **Sitemap**: Tự động tạo sitemap.xml
- ✅ **Robots.txt**: Hướng dẫn crawler
- ✅ **Canonical URLs**: Tránh duplicate content
- ✅ **Web Manifest**: PWA ready
- ✅ **Performance**: Tối ưu Core Web Vitals

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

## � Hướng dẫn SEO Setup

### 1. Google Search Console

- Đăng ký tại [Google Search Console](https://search.google.com/search-console/)
- Thêm property với domain của bạn
- Verify ownership bằng meta tag hoặc DNS
- Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 2. Environment Variables cần thiết

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
NEXT_PUBLIC_GRADUATE_NAME=Tên của bạn
```

### 3. Hình ảnh SEO

- Thêm `graduation-og.jpg` (1200x630px) vào thư mục `public/`
- Tạo favicon.ico và các icon khác trong `public/`
- Thêm apple-touch-icon.png (180x180px)

### 4. Google Analytics (tùy chọn)

- Tạo GA4 property
- Thêm GoogleAnalytics component vào layout
- Thêm GA_MEASUREMENT_ID vào environment

### 5. Kiểm tra SEO

- Sử dụng [PageSpeed Insights](https://pagespeed.web.dev/)
- Test với [Rich Results Test](https://search.google.com/test/rich-results)
- Kiểm tra [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## �📊 Database Schema

```sql
registrations (
  id: uuid (primary key)
  created_at: timestamp
  name: text
  email: text
  cccd: text
  confirmed: boolean (default false)
  admin_notes: text
)
```

## 🚀 Deployment trên Vercel

1. Push code lên GitHub
2. Import project vào Vercel
3. Thêm environment variables:
   - NEXT_PUBLIC_SITE_URL
   - NEXT_PUBLIC_GRADUATE_NAME
   - NEXT_PUBLIC_GOOGLE_VERIFICATION
   - Các Supabase keys
4. Deploy và test SEO

## 📈 Monitoring SEO

Sau khi deploy, kiểm tra:

- [ ] Sitemap.xml accessible
- [ ] Robots.txt hoạt động
- [ ] Meta tags hiển thị đúng
- [ ] OpenGraph preview trên social media
- [ ] Google Search Console indexing
- [ ] Core Web Vitals scores

**Lưu ý**: Việc Google index website có thể mất từ vài giờ đến vài ngày tùy thuộc vào nhiều yếu tố.
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
```
