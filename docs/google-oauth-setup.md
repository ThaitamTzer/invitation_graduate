# Hướng dẫn thiết lập Google OAuth cho Admin Login

## 1. Thiết lập Google OAuth

### Bước 1: Tạo Google Cloud Project

1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Tạo project mới hoặc chọn project hiện có
3. Bật Google+ API trong **APIs & Services > Library**

### Bước 2: Tạo OAuth 2.0 Credentials

1. Vào **APIs & Services > Credentials**
2. Click **Create Credentials > OAuth 2.0 Client IDs**
3. Chọn **Application type: Web application**
4. Đặt tên cho OAuth client
5. Thêm **Authorized redirect URIs**:
   - Development: `http://localhost:3001/auth/callback`
   - Production: `https://yourdomain.com/auth/callback`

### Bước 3: Lấy Client ID và Client Secret

- Copy **Client ID** và **Client Secret** để cấu hình Supabase

## 2. Cấu hình Supabase

### Bước 1: Bật Google Provider

1. Mở [Supabase Dashboard](https://supabase.com/dashboard)
2. Vào project của bạn
3. Chọn **Authentication > Settings**
4. Scroll xuống **External OAuth Providers**
5. Bật **Google** provider

### Bước 2: Điền thông tin OAuth

1. **Client ID**: Paste Client ID từ Google Cloud Console
2. **Client Secret**: Paste Client Secret từ Google Cloud Console
3. **Redirect URL**: Để mặc định (Supabase sẽ tự tạo)

### Bước 3: Cấu hình Site URL

1. Trong **Site URL**, nhập:

   - Development: `http://localhost:3001`
   - Production: `https://yourdomain.com`

2. Trong **Redirect URLs**, thêm:
   - `http://localhost:3001/auth/callback`
   - `https://yourdomain.com/auth/callback` (cho production)

## 3. Cấu hình Environment Variables

Tạo file `.env.local` với nội dung:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

## 4. Test Google OAuth

1. Khởi động server: `npm run dev`
2. Truy cập: `http://localhost:3001/admin`
3. Click nút **"Đăng nhập với Google"**
4. Chọn tài khoản Google
5. Cho phép quyền truy cập
6. Sẽ redirect về trang admin sau khi đăng nhập thành công

## 5. Troubleshooting

### Lỗi "redirect_uri_mismatch"

- Kiểm tra URL redirect trong Google Cloud Console
- Đảm bảo URL chính xác: `http://localhost:3001/auth/callback`

### Lỗi "OAuth client not found"

- Kiểm tra Client ID và Client Secret trong Supabase
- Đảm bảo Google+ API đã được bật

### Lỗi "Site URL not allowed"

- Kiểm tra Site URL trong Supabase Settings
- Đảm bảo domain chính xác

## 6. Production Deployment

Khi deploy lên production:

1. Cập nhật redirect URLs trong Google Cloud Console
2. Cập nhật Site URL và Redirect URLs trong Supabase
3. Cập nhật NEXT_PUBLIC_SITE_URL trong environment variables

## 7. Bảo mật

- Chỉ cho phép admin emails cụ thể bằng cách thêm Row Level Security policies
- Có thể tạo whitelist emails trong database
- Sử dụng role-based access control (RBAC) nếu cần
