import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#134e4a] -mt-36 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl max-w-lg sm:text-5xl lg:text-6xl font-bold text-[#CCFBF1] leading-tight">
              Protect Your Business, Property and Ideas Easily
            </h1>

            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-md">
              Get expert help with intellectual property, estates and property,
              without stress.
            </p>

            <div className="pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#134e4a] hover:bg-gray-50 font-semibold px-8 cursor-pointer py-6 text-lg rounded-xl transition-all duration-200 group">
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 duration-300 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/main-hero.png"
                  width={600}
                  height={600}
                  alt="Point Break Legal - Professional legal services"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tooltip */}
              <div className="absolute top-3 right-20 sm:-top-2 sm:right-40 bg-[#ccfbf176] backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  Empowering Australian
                  <br />
                  small businesses.
                </p>
              </div>
              {/* Additional Tooltip */}
              <div className="absolute bottom-[13rem] left-24 sm:bottom-56 sm:left-32 bg-[#1e7e7e] backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <p className="text-sm font-medium text-white whitespace-nowrap">
                  Trusted legal support for
                  <br />
                  every journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
