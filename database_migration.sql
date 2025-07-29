-- Migration script để cập nhật bảng registrations
-- Thêm cột cccd và xóa cột phone, message

-- Bước 1: Thêm cột cccd
ALTER TABLE registrations ADD COLUMN cccd VARCHAR(12);

-- Bước 2: Cập nhật dữ liệu hiện có (tùy chọn - có thể để NULL hoặc dữ liệu test)
-- UPDATE registrations SET cccd = '000000000000' WHERE cccd IS NULL;

-- Bước 3: Xóa cột phone và message (sau khi đã backup dữ liệu quan trọng)
ALTER TABLE registrations DROP COLUMN phone;
ALTER TABLE registrations DROP COLUMN message;

-- Bước 4: Thêm constraint cho cccd (tùy chọn)
-- ALTER TABLE registrations ADD CONSTRAINT cccd_length CHECK (LENGTH(cccd) = 12);
-- ALTER TABLE registrations ADD CONSTRAINT cccd_format CHECK (cccd ~ '^[0-9]{12}$');

-- Schema mới sẽ có:
-- id: uuid (primary key)
-- created_at: timestamp
-- name: text
-- email: text  
-- cccd: varchar(12)
-- status: text (pending/confirmed/declined)
