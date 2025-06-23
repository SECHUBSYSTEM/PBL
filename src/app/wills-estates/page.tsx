import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Steps from "@/components/sections/steps";
import ConsultationCTA from "@/components/sections/consultation";
import HaveQuestions from "@/components/sections/makeCall";
import WhyWillMatters from "@/components/sections/whyWillMatters";

export default function WillsEstatesPage() {
  const willDraftingSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description:
        "Comprehensive discussion of your assets, beneficiaries, and estate planning goals to understand your specific needs.",
    },
    {
      number: "2",
      title: "Will Drafting",
      description:
        "Professional preparation of your will document including all necessary clauses, executor appointments, and asset distribution instructions.",
    },
    {
      number: "3",
      title: "Review and Refinement",
      description:
        "Thorough review of the draft will with you to ensure accuracy and make any necessary amendments.",
    },
    {
      number: "4",
      title: "Execution and Witnessing",
      description:
        "Formal signing ceremony with proper witnessing to ensure your will is legally valid and enforceable.",
    },
  ];

  const probateSteps = [
    {
      number: "1",
      title: "Initial Assessment",
      description:
        "Review of the deceased's will, assets, and circumstances to determine probate requirements and develop a strategy.",
    },
    {
      number: "2",
      title: "Application Preparation",
      description:
        "Preparation and lodgment of all necessary probate court documents and applications.",
    },
    {
      number: "3",
      title: "Asset Management",
      description:
        "Assistance with identifying, valuing, and managing the deceased's assets throughout the probate process.",
    },
    {
      number: "4",
      title: "Distribution and Finalisation",
      description:
        "Coordination of final asset distribution to beneficiaries and completion of all legal requirements.",
    },
  ];

  return (
    <>
      <div className="min-h-screen -mt-28 pt-28 sm:pt-36 bg-gradient-to-br from-[#134e4a] to-[#000000] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover md:bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/leasing.png')",
            backgroundPosition: "center right",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#134e4a]/90 via-[#134e4a]/70 to-[#134e4a]/50" />

        <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24 min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ffffff] leading-tight mb-6 lg:mb-8">
              Wills and Estates
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#ccfbf1] leading-relaxed mb-8 lg:mb-12 max-w-xl">
              We help you protect your legacy and provide peace of mind by
              drafting comprehensive wills, managing estate planning, and
              guiding families through probate with compassionate expertise.
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
      <WhyWillMatters />
      <ConsultationCTA backgroundColor="bg-[#F0FDFA]" />
      <Steps
        tagline="Our Will Drafting Process"
        title="4 Key Steps to Drafting Your Will"
        steps={willDraftingSteps}
        backgroundColor="bg-gray-50"
      />
      <Steps
        tagline="Our Probate Process"
        title="4 Key Steps in Probate"
        steps={probateSteps}
        backgroundColor="bg-white"
      />
      <HaveQuestions
        imageSrc="/copyrightwoman.png"
        imageAlt="Professional woman providing consultation"
      />
    </>
  );
}
