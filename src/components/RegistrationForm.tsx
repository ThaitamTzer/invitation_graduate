"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cccd: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("registrations").insert([
        {
          name: formData.name,
          email: formData.email,
          cccd: formData.cccd,
          status: "pending",
        },
      ]);

      if (error) throw error;

      toast.success("Đăng ký thành công! Cảm ơn bạn đã tham gia.");
      setFormData({ name: "", email: "", cccd: "" });
    } catch (error) {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Đăng Ký Tham Dự
            </h2>
            <p className="text-lg">
              Nhằm đảm bảo an ninh, nhà trường yêu cầu khách mời{" "}
              <strong>không phải là sinh viên Văn Lang</strong> cần đăng ký
              thông tin để nhận mã QR check-in.
            </p>
            <p className="text-lg mb-2">
              Vui lòng điền đầy đủ thông tin để xác nhận tham dự lễ tốt nghiệp
            </p>
            <p className="text-red-500 text-sm">
              *Số CCCD sẽ được dùng để xác thực danh tính khi tham dự sự kiện.
            </p>
            <p className="text-red-500 text-sm">
              *Thông tin của bạn sẽ được bảo mật và chỉ sử dụng cho sự kiện này.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Thông tin đăng ký</CardTitle>
              <CardDescription>
                Vui lòng điền đầy đủ: Họ tên, Số CCCD và Email. Tất cả đều bắt
                buộc (*)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nhập họ và tên đầy đủ"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cccd">Số CCCD *</Label>
                  <Input
                    id="cccd"
                    name="cccd"
                    type="text"
                    value={formData.cccd}
                    onChange={handleChange}
                    required
                    placeholder="Nhập số căn cước công dân (12 số)"
                    pattern="[0-9]{12}"
                    maxLength={12}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang xử lý..." : "Xác nhận tham dự"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
