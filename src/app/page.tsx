import HeroSection from "@/components/HeroSection";
import VenueSection from "@/components/VenueSection";
import RegistrationForm from "@/components/RegistrationForm";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VenueSection />
      <RegistrationForm />
      <Toaster position="top-right" />
    </main>
  );
}
