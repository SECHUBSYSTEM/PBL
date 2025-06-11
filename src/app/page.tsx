
import PracticeAreas from "@/components/sections/practiceAreas";
import Hero from "@/components/sections/Hero";
import ConsultationCTA from "@/components/sections/consultation";
import WhyChooseUs from "@/components/sections/whyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <ConsultationCTA />
    </div>
  );
}