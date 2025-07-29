"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const words = ["bạn", "cô chú", "anh chị", "bạn", "cốt", "mọi người"];

  useEffect(() => {
    const wordDurations = [2000, 2000, 2000, 2000, 2000, 4000]; // mọi người giữ lâu nhất (4 giây)

    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        return nextIndex;
      });
    }, wordDurations[currentWordIndex]);

    return () => clearInterval(interval);
  }, [currentWordIndex, words.length]);

  useEffect(() => {
    // Set name animation complete after title animation finishes
    const timer = setTimeout(() => {
      setNameAnimationComplete(true);
    }, 8500); // After title typewriter (3s) + name typewriter (4s) + delay (1.5s)

    return () => clearTimeout(timer);
  }, []);

  const getCurrentWordStyle = () => {
    const currentWord = words[currentWordIndex];

    if (currentWord !== "") {
      return "special-word font-black text-3xl bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl inline-block";
    }

    const colors = [
      "text-yellow-300", // bạn
      "text-pink-300", // cô chú
      "text-blue-300", // anh chị
      "text-green-300", // bạn
      "text-purple-300", // cốt
    ];

    return `font-bold text-xl ${
      colors[currentWordIndex % colors.length]
    } drop-shadow-lg animate-bounce`;
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20" />
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="space-y-4">
              <motion.h1
                className={`text-5xl floating lg:text-7xl font-bold leading-tight ${
                  nameAnimationComplete ? "animation-complete" : "animate-once"
                }`}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.span
                  className="year-appear inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  Lễ Tốt Nghiệp
                </motion.span>
                <motion.span
                  className="block text-yellow-300 year-appear"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  2025
                </motion.span>
              </motion.h1>
              <motion.div
                className="name-container"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 2.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <motion.p
                  className={`name-unique text-3xl lg:text-5xl ${
                    nameAnimationComplete
                      ? "animation-complete"
                      : "animate-once"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    transition: { duration: 0.3 },
                  }}
                >
                  Lê Trần Thái Tâm
                </motion.p>
              </motion.div>
              <motion.p
                className="text-lg text-blue-200 max-w-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                Sau những năm tháng{" "}
                <motion.span
                  className="text-yellow-300 font-bold text-xl drop-shadow-lg"
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                >
                  học tập chăm chỉ
                </motion.span>
                , cuối cùng{" "}
                <motion.span
                  className="animate-pulse text-yellow-300 font-bold text-xl drop-shadow-lg"
                  data-text="Thái Tâm"
                  whileHover={{ scale: 1.2, rotateZ: 5 }}
                >
                  Thái Tâm
                </motion.span>{" "}
                cũng đã{" "}
                <motion.span
                  className="text-pink-300 font-bold text-xl drop-shadow-lg animate-pulse"
                  whileHover={{ scale: 1.1, color: "#f9a8d4" }}
                >
                  hoàn thành
                </motion.span>{" "}
                chương trình đại học. Hân hạnh được mời{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    className={`transition-all duration-500 ease-in-out ${getCurrentWordStyle()}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>{" "}
                tham dự{" "}
                <motion.span
                  className="font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  buổi lễ tốt nghiệp đặc biệt
                </motion.span>{" "}
                này.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ x: 100, opacity: 0, rotateY: 45 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-80 h-80 lg:w-full lg:h-full rounded-full overflow-hidden border-8 border-white/20 shadow-2xl"
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/me.jpg"
                    alt="Ảnh tốt nghiệp"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60"
                animate={{
                  rotate: -360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              {/* Vietnam Flag GIF */}
              <motion.div
                className="absolute -top-2 -left-8 z-20"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/Flag_of_Vietnam-Animated.gif"
                    alt="Lá cờ Việt Nam"
                    width={80}
                    height={53}
                    className="rounded border-2 border-white/30 shadow-lg"
                    unoptimized // Cần thiết cho GIF
                  />
                </motion.div>
              </motion.div>
              {/* Second Vietnam Flag GIF */}
              <motion.div
                className="absolute -bottom-8 -right-2 z-20"
                initial={{ x: 50, opacity: 0, rotate: 45 }}
                animate={{ x: 0, opacity: 1, rotate: 15 }}
                transition={{ duration: 1.2, delay: 3 }}
                whileHover={{ scale: 1.3, rotate: 0 }}
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [15, 18, 15],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Image
                    src="/Flag_of_Vietnam-Animated.gif"
                    alt="Lá cờ Việt Nam"
                    width={60}
                    height={40}
                    className="rounded border border-white/20 shadow-md"
                    unoptimized // Cần thiết cho GIF
                  />
                </motion.div>
              </motion.div>
              {/* Third floating Vietnam Flag */}
              <motion.div
                className="absolute top-1/3 -right-12 z-10"
                initial={{ x: 100, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.5, delay: 4 }}
              >
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <Image
                    src="/Flag_of_Vietnam-Animated.gif"
                    alt="Lá cờ Việt Nam"
                    width={45}
                    height={30}
                    className="rounded border border-white/15 shadow-sm opacity-75"
                    unoptimized
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
