import ConsultationCTA from "@/components/sections/consultation";
import CopyrightProtection from "@/components/sections/copyrightProtection";
import HaveQuestions from "@/components/sections/makeCall";
import Steps from "@/components/sections/steps";
import WhyProtectCopyright from "@/components/sections/whyProtect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CopyrightLaws() {
  return (
    <>
    <div className="min-h-screen -mt-28 pt-28 sm:pt-36 bg-gradient-to-br from-[#134e4a] to-[#000000] relative overflow-hidden">
      {/* Typewriter Background Image */}
      <div
        className="absolute inset-0 bg-cover md:bg-contain bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('/copyright.jpg')",
          backgroundPosition: "center right",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#134e4a]/90 via-[#134e4a]/70 to-[#134e4a]/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ffffff] leading-tight mb-6 lg:mb-8">
            Copyright Law
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#ccfbf1] leading-relaxed mb-8 lg:mb-12 max-w-xl">
            Protect your creative work from unauthorised use and ensure you have
            full control over how it is used and monetised.
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
      <CopyrightProtection />
      <ConsultationCTA backgroundColor="bg-[#F0FDFA]" />
      <WhyProtectCopyright />
      <Steps />
      <HaveQuestions />
    </>
  );
}
