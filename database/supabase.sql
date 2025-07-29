-- SQL script để tạo bảng registrations trong Supabase
-- Chạy script này trong Supabase SQL Editor

-- Tạo bảng registrations
CREATE TABLE IF NOT EXISTS registrations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'declined'))
);

-- Thêm Row Level Security (RLS)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Tạo policy cho phép INSERT cho anonymous users
CREATE POLICY "Allow anonymous inserts" ON registrations
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Tạo policy cho phép SELECT cho authenticated users (admin)
CREATE POLICY "Allow authenticated select" ON registrations
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Tạo policy cho phép UPDATE cho authenticated users (admin)
CREATE POLICY "Allow authenticated updates" ON registrations
  FOR UPDATE 
  TO authenticated 
  USING (true)
  WITH CHECK (true);

-- Tạo index để tăng performance
CREATE INDEX IF NOT EXISTS registrations_email_idx ON registrations(email);
CREATE INDEX IF NOT EXISTS registrations_status_idx ON registrations(status);
CREATE INDEX IF NOT EXISTS registrations_created_at_idx ON registrations(created_at DESC);

-- Tạo function để tự động tạo profile cho user mới (optional)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Có thể thêm logic tạo profile user ở đây nếu cần
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
