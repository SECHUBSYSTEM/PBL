import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ConsultationCTAProps {
  backgroundColor?: string;
}

export default function ConsultationCTA({
  backgroundColor = "bg-white",
}: ConsultationCTAProps) {
  return (
    <section className={`py-16 sm:py-24 ${backgroundColor}`}>
      <div className="max-w-4xl items-center justify-center text-center flex flex-col mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#134e4a] mb-4">
          Schedule Your Free 15-Minute Consultation Today
        </h2>
        <p className="text-gray-900 mb-8 text-xl max-w-2xl mx-auto">
          We are committed to understanding your needs and ensuring a seamless
          process that aligns with your vision.
        </p>
        <Link href="/contact">
          <Button className="bg-[#134e4a] cursor-pointer hover:bg-[#0f3730] text-white font-medium px-8 py-6 rounded-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
