-- Script tạo bảng registrations mới với schema cập nhật

-- Xóa bảng cũ nếu tồn tại (CẨNTHAN: sẽ mất dữ liệu)
-- DROP TABLE IF EXISTS registrations;

-- Tạo bảng registrations mới
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  cccd VARCHAR(12) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'declined'))
);

-- Tạo index để tăng hiệu suất tìm kiếm
CREATE INDEX idx_registrations_email ON registrations(email);
CREATE INDEX idx_registrations_cccd ON registrations(cccd);
CREATE INDEX idx_registrations_status ON registrations(status);
CREATE INDEX idx_registrations_created_at ON registrations(created_at);

-- Thêm constraint để đảm bảo email unique
ALTER TABLE registrations ADD CONSTRAINT unique_email UNIQUE (email);

-- Thêm constraint để đảm bảo cccd unique
ALTER TABLE registrations ADD CONSTRAINT unique_cccd UNIQUE (cccd);

-- Thêm constraint cho format CCCD (12 số)
ALTER TABLE registrations ADD CONSTRAINT cccd_format CHECK (cccd ~ '^[0-9]{12}$');

-- Cho phép RLS (Row Level Security) nếu cần
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Tạo policy cho anonymous users có thể insert
CREATE POLICY "Allow anonymous insert" ON registrations FOR INSERT TO anon WITH CHECK (true);

-- Tạo policy cho authenticated users có thể select, update, delete
CREATE POLICY "Allow authenticated users full access" ON registrations FOR ALL TO authenticated USING (true);
