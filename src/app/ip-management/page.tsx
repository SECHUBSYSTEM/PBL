import ConsultationCTA from "@/components/sections/consultation";
import IpManagementSection from "@/components/sections/IP";
import StrategicIP from "@/components/sections/strategicIP";
import HaveQuestions from "@/components/sections/makeCall";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IPManagement() {
  return (
    <>
    <div className="min-h-screen -mt-28 pt-28 sm:pt-36 bg-gradient-to-br from-[#134e4a] to-[#000000] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover md:bg-contain bg-center bg-repeat md:bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/ip.jpg')",
          backgroundPosition: "center right",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#134e4a]/90 via-[#134e4a]/70 to-[#134e4a]/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ffffff] leading-tight mb-6 lg:mb-8">
            IP Management
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#ccfbf1] leading-relaxed mb-8 lg:mb-12 max-w-xl">
            Safeguard and maximise your intellectual property with expert
            guidance, ensuring long-term value and protection for your business.
          </p>
          <Link href="/contact">
          <Button
            className="bg-[#ffffff] cursor-pointer text-[#134e4a] hover:bg-[#f9fafb] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg group"
            size="lg">
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          </Link>
        </div>
      </div>

      {/* Additional background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#ccfbf1]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#ccfbf1]/3 to-transparent rounded-full blur-2xl" />
      </div>
      <IpManagementSection />
          <ConsultationCTA backgroundColor="bg-[#F0FDFA]" />
          <StrategicIP/>
      <HaveQuestions
        imageSrc="/ip-girl.png"
        imageAlt="Professional lady on phone call in creative workspace"
      />
      </>
  );
}
