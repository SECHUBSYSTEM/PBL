import Image from "next/image";

export default function WhyWillMatters() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-transparent">
              <Image
                src="/wills-image.jpg" // Re-using image
                width={800}
                height={600}
                alt="Document for wills and estates"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] leading-tight">
              Why Your Will Matters
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Wills and estates law govern how your assets are distributed after
              death, as well as the administration of deceased estates. Our will
              drafting services ensure your final wishes are clearly documented
              and legally binding, so you can have peace of mind that your
              wishes for distributing your assets and guardian appointments will
              be carried out.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              When a loved one passes away, our probate services guide executors
              and beneficiaries through the complex legal process of validating
              wills, settling debts, and distributing assets according to the
              deceased&apos;s wishes and legal requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
