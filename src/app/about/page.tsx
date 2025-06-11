import Image from "next/image";
import { Globe, Scale, User, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const missionItems = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Local Support, Global Reach",
      description:
        "We understand your business to ensure the best IP protection locally and globally. Our expert guidance helps you navigate international and Australian IP laws with confidence.",
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      title: "Expert Lawyers",
      description:
        "Our team of experienced lawyers delivers smart, practical advice to protect your property, enhance your business, and maximize long-term growth potential.",
    },
    {
      icon: <User className="w-6 h-6 text-white" />,
      title: "Personalised Support",
      description:
        "As a family-owned firm, we prioritise integrity, honesty, and fairness. We take the time to understand your needs, offering dedicated and tailored support.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Affordable Solutions",
      description:
        "We offer transparent pricing so you can protect your property without overspending. Our goal is to delivery high quality legal services at a reasonable price, letting you focus on growing your business.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-hero.png"
            alt="about-hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Green Overlay with Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#134e4a69] via-[#134e4a]/95 to-transparent lg:to-[#134e4a]/20">
          <div className="h-full flex items-center justify-start px-6 sm:px-8 lg:px-12">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#99F6E4] mb-8 leading-tight">
                About Us
              </h1>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                We are a dedicated law firm committed to protecting your
                property with expert legal guidance, personalised support, and
                cost-effective solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-6">
              Our Mission Statement
            </h2>
            <p className="text-lg sm:text-xl text-[#000000] max-w-4xl mx-auto leading-relaxed">
              We are a family-run firm based in the Northern Rivers and small
              business runs deep in our veins. Our mission is to make legal
              support accessible and affordable for Australian small businesses.
              We are proud to help businesses protect their property with expert
              guidance. We empower clients to avoid costly mistakes and make
              informed decisions, ensuring long-term brand security and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {missionItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#134e4a] rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#134e4a] hover:bg-[#0f3730] text-white cursor-pointer px-8 py-3 rounded-lg font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
