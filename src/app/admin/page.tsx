"use client";

import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { supabase, type Registration } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import AuthUI from "@/components/AuthUI";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Eye,
  Download,
  Search,
  Users,
  Calendar,
  Mail,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";

export default function AdminDashboard() {
  const { user, loading: authLoading, signOut } = useAuth();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (user) {
      fetchRegistrations();
    }
  }, [user]);

  console.log("User:", user);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error) {
      toast.error("Không thể tải dữ liệu");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: "confirmed" | "declined") => {
    try {
      const { error } = await supabase
        .from("registrations")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      setRegistrations((prev) =>
        prev.map((reg) => (reg.id === id ? { ...reg, status } : reg))
      );
      toast.success("Cập nhật trạng thái thành công");
    } catch (error) {
      toast.error("Không thể cập nhật trạng thái");
      console.error("Error:", error);
    }
  };

  const exportToExcel = () => {
    // Prepare main data for Excel
    const excelData = filteredRegistrations.map((reg, index) => ({
      STT: index + 1,
      Tên: reg.name,
      Email: reg.email,
      "Số điện thoại": reg.phone,
      "Lời chúc": reg.message || "Không có",
      "Trạng thái":
        reg.status === "confirmed"
          ? "Đã xác nhận"
          : reg.status === "declined"
          ? "Từ chối"
          : "Chờ xử lý",
      "Ngày đăng ký": new Date(reg.created_at).toLocaleDateString("vi-VN"),
      "Giờ đăng ký": new Date(reg.created_at).toLocaleTimeString("vi-VN"),
    }));

    // Prepare statistics data
    const statsData = [
      { "Thống kê": "Tổng số đăng ký", "Số lượng": stats.total },
      { "Thống kê": "Đã xác nhận", "Số lượng": stats.confirmed },
      { "Thống kê": "Chờ xử lý", "Số lượng": stats.pending },
      { "Thống kê": "Đã từ chối", "Số lượng": stats.declined },
      { "Thống kê": "", "Số lượng": "" },
      {
        "Thống kê": "Ngày xuất báo cáo",
        "Số lượng": new Date().toLocaleDateString("vi-VN"),
      },
      {
        "Thống kê": "Giờ xuất báo cáo",
        "Số lượng": new Date().toLocaleTimeString("vi-VN"),
      },
    ];

    // Create workbook
    const workbook = XLSX.utils.book_new();

    // Create main worksheet
    const mainWorksheet = XLSX.utils.json_to_sheet(excelData);

    // Set column widths for main sheet
    const columnWidths = [
      { wch: 5 }, // STT
      { wch: 20 }, // Tên
      { wch: 25 }, // Email
      { wch: 15 }, // Số điện thoại
      { wch: 35 }, // Lời chúc
      { wch: 12 }, // Trạng thái
      { wch: 12 }, // Ngày đăng ký
      { wch: 12 }, // Giờ đăng ký
    ];
    mainWorksheet["!cols"] = columnWidths;

    // Create statistics worksheet
    const statsWorksheet = XLSX.utils.json_to_sheet(statsData);
    statsWorksheet["!cols"] = [{ wch: 20 }, { wch: 15 }];

    // Add worksheets to workbook
    XLSX.utils.book_append_sheet(workbook, mainWorksheet, "Danh sách đăng ký");
    XLSX.utils.book_append_sheet(workbook, statsWorksheet, "Thống kê");

    // Generate filename with current date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString("vi-VN").replace(/\//g, "-");
    const timeStr = now.toLocaleTimeString("vi-VN").replace(/:/g, "-");
    const filename = `danh-sach-tot-nghiep-${dateStr}-${timeStr}.xlsx`;

    // Export file
    XLSX.writeFile(workbook, filename);

    toast.success(`Đã xuất file Excel: ${filename}`);
  };

  const filteredRegistrations = registrations.filter(
    (reg) =>
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.phone.includes(searchTerm)
  );

  const stats = {
    total: registrations.length,
    confirmed: registrations.filter((r) => r.status === "confirmed").length,
    pending: registrations.filter((r) => r.status === "pending").length,
    declined: registrations.filter((r) => r.status === "declined").length,
  };

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Đang kiểm tra đăng nhập...</p>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <AuthUI />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Quản lý đăng ký tham dự
            </h1>
            <p className="text-gray-600 mt-2">
              Danh sách khách mời đăng ký tham dự lễ tốt nghiệp
            </p>
            <p className="text-sm text-gray-500 mt-1">Xin chào, {user.email}</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={exportToExcel} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Xuất Excel
            </Button>
            <Button
              onClick={signOut}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Đăng xuất
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tổng đăng ký
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Đã xác nhận</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.confirmed}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chờ xử lý</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {stats.pending}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Từ chối</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {stats.declined}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle>Tìm kiếm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-gray-400" />
              <Input
                placeholder="Tìm theo tên, email hoặc số điện thoại..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
          </CardContent>
        </Card>

        {/* Registrations Table */}
        <Card>
          <CardHeader>
            <CardTitle>
              Danh sách đăng ký ({filteredRegistrations.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Đang tải dữ liệu...</div>
            ) : filteredRegistrations.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Chưa có đăng ký nào
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Điện thoại</TableHead>
                    <TableHead>Lời chúc</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Ngày đăng ký</TableHead>
                    <TableHead>Hành động</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRegistrations.map((registration) => (
                    <TableRow key={registration.id}>
                      <TableCell className="font-medium">
                        {registration.name}
                      </TableCell>
                      <TableCell>{registration.email}</TableCell>
                      <TableCell>{registration.phone}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {registration.message || "Không có"}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            registration.status === "confirmed"
                              ? "default"
                              : registration.status === "declined"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {registration.status === "confirmed"
                            ? "Đã xác nhận"
                            : registration.status === "declined"
                            ? "Từ chối"
                            : "Chờ xử lý"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(registration.created_at).toLocaleDateString(
                          "vi-VN"
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {registration.status !== "confirmed" && (
                            <Button
                              size="sm"
                              onClick={() =>
                                updateStatus(registration.id, "confirmed")
                              }
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Xác nhận
                            </Button>
                          )}
                          {registration.status !== "declined" && (
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                updateStatus(registration.id, "declined")
                              }
                            >
                              Từ chối
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
