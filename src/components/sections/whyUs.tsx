import { Globe, Scale, DollarSign } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: (
      <Image
        src="/user.png"
        alt="Personalised Support"
        width={24}
        height={24}
      />
    ),
    title: "Personalised Support",
    description:
      "Unlock trusted tailored legal solutions for your unique business needs",
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Local & Global Support",
    description: "Access comprehensive IP protection in Australia and beyond.",
  },
  {
    icon: <Scale className="w-6 h-6 text-white" />,
    title: "Expert Lawyers",
    description:
      "Experience expert legal advice backed by years of industry experience.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-white" />,
    title: "Affordable Solutions",
    description:
      "Get affordable legal services with transparency and no hidden fees.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134e4a] leading-tight">
              Why choose us?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide legal solutions that save you time, money, and stress
              while keeping your business secure and competitive.
            </p>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 bg-[#134e4a] rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
