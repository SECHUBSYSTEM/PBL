import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HaveQuestionsProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function HaveQuestions({
  imageSrc = "/copyrightwoman.png",
  imageAlt = "Professional woman on phone call in creative workspace",
}: HaveQuestionsProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134e4a] leading-tight">
              Have Any Questions?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Need expert guidance? We are here to help with your legal
              concerns. Get in touch, and let&apos;s find the right solution for
              you.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="bg-[#134e4a] hover:bg-[#0f3730] text-white font-medium px-6 py-5 cursor-pointer rounded-md flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Make A Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
