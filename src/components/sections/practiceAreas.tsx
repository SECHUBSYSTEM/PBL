import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const practiceAreas = [
  {
    title: "Copyright Law",
    description:
      "Safeguard your creative works and ensure you maintain full rights over your content.",
    image: "/copyright.jpg",
    alt: "Copyright Law services",
  },
  {
    title: "Trade Marks",
    description:
      "Register your trademark the right way and protect your brand from legal risks.",
    image: "/trademark.png",
    alt: "Trademark registration services",
  },
  {
    title: "IP Strategy & Management",
    description:
      "Develop a strong IP strategy to manage and maximize your innovations effectively.",
    image: "/ip.jpg",
    alt: "IP Strategy and Management services",
  },
  {
    title: "Will & Estates",
    description:
      "Protect your legacy and get peace of mind with expert guidance every step forward.",
    image: "/will.jpg",
    alt: "Will and Estate planning services",
  },
  {
    title: "Conveyancing",
    description:
      "We will negotiate favourable lease terms for your venture with clarity and strategy.",
    image: "/Conveyancing.png",
    alt: "Conveyancing legal services",
  },
  {
    title: "Commercial Leasing",
    description:
      "Expert guidance through every step of the transaction for successful outcomes.",
    image: "/leasing.png",
    alt: "Commercial leasing legal services",
  },
];

export default function PracticeAreas() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-[#134e4a] uppercase tracking-wider mb-2">
            Legal Support
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-6">
            Our Practice Areas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We help businesses in Australia navigate the complexities of
            protecting their brand and creative assets, ensuring they make
            informed legal decisions without wasting time or money.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-xl shadow-md h-full">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-5">
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt={area.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-5 text-center flex-grow">
                  {area.description}
                </p>
                <div className="text-center mt-auto">
                  <Link href="/contact">
                    <Button
                      className="bg-[#134e4a] cursor-pointer  hover:bg-[#0f3730] text-white font-medium px-6 py-6 rounded-md"
                      size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
