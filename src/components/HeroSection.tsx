"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Lễ Tốt Nghiệp
                <span className="block text-yellow-300">2025</span>
              </h1>
              <p className="text-2xl lg:text-3xl font-light text-blue-100">
                Nguyễn Văn A
              </p>
              <p className="text-lg text-blue-200 max-w-lg">
                Sau những năm tháng học tập chăm chỉ, cuối cùng tôi cũng đã hoàn
                thành chương trình đại học. Hân hạnh được mời bạn tham dự buổi
                lễ tốt nghiệp đặc biệt này.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
                onClick={() =>
                  document
                    .getElementById("registration")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Đăng ký tham dự
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
                onClick={() =>
                  document
                    .getElementById("venue")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Xem thông tin
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <Image
                  src="/graduation-photo.jpg"
                  alt="Ảnh tốt nghiệp"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
