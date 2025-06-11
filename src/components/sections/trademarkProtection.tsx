import Image from "next/image";

export default function TrademarkProtection() {
  const trademarkItems = [
    "Business Name",
    "Logos and Symbols",
    "Product Names",
    "Taglines or Slogans",
    "Packaging Designs",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-transparent">
              <Image
                src="/trademark1.png"
                width={800}
                height={600}
                alt="Handshake over contract document"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] leading-tight">
              What is Trade Mark Protection?
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              A registered trade mark helps to distinguish your products or
              services from competitors and builds trust with your customers.
              Trade marks can cover a range of brand elements. The key
              requirement is that your trade mark must be distinctive and not
              similar to any existing marks. The following can be trade marked:
            </p>

            <ul className="space-y-3">
              {trademarkItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#a7f3d0] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
