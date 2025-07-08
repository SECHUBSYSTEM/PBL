import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Steps from "@/components/sections/steps";
import ConsultationCTA from "@/components/sections/consultation";
import HaveQuestions from "@/components/sections/makeCall";
import WhyPropertyLawMatters from "@/components/sections/whyPropertyLawMatters";

export default function ConveyancingPage() {
  const conveyancingSteps = [
    {
      number: "1",
      title: "Initial Review",
      description:
        "Examination of the contract of sale and property title to identify any issues or special conditions.",
    },
    {
      number: "2",
      title: "Due Diligence",
      description:
        "Comprehensive searches and inspections including title searches, planning certificates, and other relevant inquiries.",
    },
    {
      number: "3",
      title: "Contract Management",
      description:
        "Liaison with all parties, handling deposit arrangements, and managing settlement timeline requirements.",
    },
    {
      number: "4",
      title: "Settlement Completion",
      description:
        "Attendance at settlement, final document preparation, and registration of transfer with land titles office.",
    },
  ];

  const leasingSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description:
        "Analysis of your leasing requirements or existing lease terms to understand your commercial objectives.",
    },
    {
      number: "2",
      title: "Lease Negotiation",
      description:
        "Drafting or reviewing lease terms, negotiating favourable conditions, and advising on rights and obligations.",
    },
    {
      number: "3",
      title: "Documentation Review",
      description:
        "Thorough examination of all lease documents, disclosure statements, and related agreements.",
    },
    {
      number: "4",
      title: "Execution and Registration",
      description:
        "Finalisation of lease agreements, ensuring proper execution, and handling any required registrations.",
    },
  ];

  return (
    <>
      <div className="min-h-screen -mt-28 pt-28 sm:pt-36 bg-gradient-to-br from-[#134e4a] to-[#000000] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover md:bg-contain bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/leasing.png')",
            backgroundPosition: "center right",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#134e4a]/90 via-[#134e4a]/70 to-[#134e4a]/50" />

        <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24 min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ffffff] leading-tight mb-6 lg:mb-8">
              Conveyancing & Commercial Leasing
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#ccfbf1] leading-relaxed mb-8 lg:mb-12 max-w-xl">
              We provide expert legal guidance for property transactions and
              commercial leases, ensuring your investments are protected with
              meticulous attention to detail and comprehensive due diligence
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

        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#ccfbf1]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#ccfbf1]/3 to-transparent rounded-full blur-2xl" />
      </div>
      <WhyPropertyLawMatters />
      <ConsultationCTA backgroundColor="bg-[#F0FDFA]" />
      <Steps
        tagline="Our Conveyancing Process"
        title="4 Key Steps in Conveyancing"
        steps={conveyancingSteps}
        backgroundColor="bg-gray-50"
      />
      <Steps
        tagline="Our Commercial Leasing Process"
        title="4 Key Steps in Commercial Leasing"
        steps={leasingSteps}
        backgroundColor="bg-white"
      />
      <HaveQuestions
        imageSrc="/leasing1.jpg"
        imageAlt="Commercial leasing discussion"
      />
    </>
  );
}
