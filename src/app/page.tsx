import HeroSection from "@/components/HeroSection";
import VenueSection from "@/components/VenueSection";
import RegistrationForm from "@/components/RegistrationForm";
import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lễ Tốt Nghiệp 2025 - Lê Trần Thái Tâm",
  description:
    "Trang mời tham dự lễ tốt nghiệp đại học của Lê Trần Thái Tâm năm 2025. Thông tin chi tiết về thời gian, địa điểm và cách đăng ký tham dự.",
  openGraph: {
    title: "Lễ Tốt Nghiệp 2025 - Lê Trần Thái Tâm",
    description: "Mời bạn tham dự lễ tốt nghiệp đại học năm 2025",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen" role="main">
        <HeroSection />
        <VenueSection />
        <RegistrationForm />
      </main>
      <Toaster position="top-right" />
    </>
  );
}
