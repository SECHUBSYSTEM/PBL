import Image from "next/image";

export default function WhyPropertyLawMatters() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-transparent">
              <Image
                src="/will.jpg"
                width={800}
                height={600}
                alt="Property documents"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] leading-tight">
              Why you should take care with your biggest assets
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Property law encompasses the legal transfer of real estate
              ownership and the creation of commercial tenancy agreements. Our
              conveyancing services handle all aspects of buying and selling
              property, from contract review and title searches to settlement
              coordination, ensuring each transaction complies with legal
              requirements while protecting your interests.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Commercial leasing involves the complex negotiation and
              documentation of business premises rentals, where we draft,
              review, and negotiate lease terms that balance landlord and tenant
              rights while addressing specific commercial needs such as
              permitted use, rent reviews, and lease renewals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
