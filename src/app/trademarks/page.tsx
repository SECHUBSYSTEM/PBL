import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Steps from "@/components/sections/steps";
import TrademarkProtection from "@/components/sections/trademarkProtection";
import ConsultationCTA from "@/components/sections/consultation";
import HaveQuestions from "@/components/sections/makeCall";
import TradeMarkSection from "@/components/sections/protectTrademark";

export default function Trademarks() {
  const trademarkSteps = [
    {
      number: "1",
      title: "Discussion",
      description:
        "We discuss your business and branding goals to determine the best strategy for protecting your trade mark, ensuring it has the right legal coverage.",
    },
    {
      number: "2",
      title: "Preliminary Search",
      description:
        "A thorough search helps identify potential conflicts with existing trademarks. This step reduces the risk of rejection and ensures a smoother registration process.",
    },
    {
      number: "3",
      title: "Application & Preparation",
      description:
        "We carefully prepare and submit your trademark application, ensuring accuracy and compliance with legal requirements to increase approval chances.",
    },
    {
      number: "4",
      title: "Securing Your Trademark",
      description:
        "After submission, we monitor your trade mark status, address any legal issues, and assist with renewals to ensure your protection remains in place.",
    },
  ];

  return (
    <>
      <div className="min-h-screen -mt-28 pt-28 sm:pt-36 bg-gradient-to-br from-[#134e4a] to-[#000000] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover md:bg-contain bg-center bg-no-repeat md:bg-repeat opacity-40"
          style={{
            backgroundImage: "url('/trademark.png')",
            backgroundPosition: "center right",
          }}
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#134e4a]/90 via-[#134e4a]/70 to-[#134e4a]/50" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24 min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ccfbf1] leading-tight mb-6 lg:mb-8">
              Trademarks
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#ffffff] leading-relaxed mb-8 lg:mb-12 max-w-xl">
              Secure exclusive rights to your brand name, logo, and identity
              with a registered trade mark, protecting your business from
              unauthorised use.
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
      <TrademarkProtection />
          <ConsultationCTA backgroundColor="bg-[#F0FDFA]" />
      <TradeMarkSection />
      {/* Steps Section */}
      <Steps
        tagline="Our Trademark Process"
        title="Our 4 Key Steps To Secure Your Trade Mark"
        steps={trademarkSteps}
        backgroundColor="bg-gray-50"
      />
      <HaveQuestions
        imageSrc="/trademark3.png"
        imageAlt="Professional man on phone call in creative workspace"
      />
    </>
  );
}
