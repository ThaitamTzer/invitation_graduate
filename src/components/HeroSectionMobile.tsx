"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSectionMobile() {
  return (
    <section className="min-h-screen pt-11 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                <span className="inline-block">Lễ Tốt Nghiệp</span>
                <span className="block text-yellow-300">2025</span>
              </h1>

              <div className="name-container">
                <p className="text-3xl text-white font-bold">
                  Lê Trần Thái Tâm
                </p>
              </div>

              <p className="text-lg text-blue-200 max-w-lg">
                Sau những năm tháng{" "}
                <span className="text-yellow-300 font-bold text-xl drop-shadow-lg">
                  học tập chăm chỉ
                </span>
                , cuối cùng{" "}
                <span className="text-yellow-300 font-bold text-xl drop-shadow-lg">
                  Thái Tâm
                </span>{" "}
                cũng đã{" "}
                <span className="text-pink-300 font-bold text-xl drop-shadow-lg">
                  hoàn thành
                </span>{" "}
                chương trình đại học. Hân hạnh được mời{" "}
                <span className="font-bold text-xl bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl inline-block">
                  mọi người
                </span>{" "}
                tham dự{" "}
                <span className="font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                  buổi lễ tốt nghiệp đặc biệt
                </span>{" "}
                này.
              </p>
            </div>

            <div className="flex flex-col gap-4">
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
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <Image
                  src="/me.jpg"
                  alt="Ảnh tốt nghiệp"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Static emojis for mobile */}
              <div className="absolute -top-8 -right-8 text-4xl z-10">🎓</div>
              <div className="absolute -bottom-6 -left-6 text-3xl z-10">🎉</div>
              <div className="absolute bottom-1/3 -right-10 text-3xl z-10">
                🏆
              </div>
              <div className="absolute top-16 -left-6 text-2xl z-10">🎊</div>
              <div className="absolute top-8 right-1/4 text-xl z-10">🤓</div>
              <div className="absolute bottom-20 left-1/4 text-xl z-10">😄</div>

              {/* Static Vietnam Flag */}
              <div className="absolute -top-2 -left-8 z-20">
                <Image
                  src="/Flag_of_Vietnam-Animated.gif"
                  alt="Lá cờ Việt Nam"
                  width={80}
                  height={53}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
