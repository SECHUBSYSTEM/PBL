export default function TradeMarkSection() {
  return (
    <section className="bg-[#134e4a] text-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ccfbf1]">
              Why Protect Your Trade Mark?
            </h2>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Exclusive Rights */}
              <div className="pr-8 md:border-r border-[#ccfbf1]/30">
                <h3 className="text-2xl font-semibold mb-4">
                  Exclusive Rights
                </h3>
                <p className="text-[#ccfbf1] leading-relaxed">
                  Registration grants you exclusive rights to use, license, or
                  sell it, ensuring full control over your brand&apos;s identity
                  and protection against unauthorised use.
                </p>
              </div>

              {/* Brand Protection */}
              <div className="pl-0 md:pl-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Brand Protection
                </h3>
                <p className="text-[#ccfbf1] leading-relaxed">
                  A registered trade mark strengthens your brand&apos;s
                  identity, making it easily recognisable to consumers while
                  setting you apart from competitors.
                </p>
              </div>

              {/* Legal Protection */}
              <div className="pr-8 md:border-r border-[#ccfbf1]/30 mt-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Legal Protection
                </h3>
                <p className="text-[#ccfbf1] leading-relaxed">
                  Registration provides a legal avenue to stop others from using
                  your trade mark without permission, reducing the risk of brand
                  dilution or customer confusion.
                </p>
              </div>

              {/* Commercial Leverage */}
              <div className="pl-0 md:pl-8 mt-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Commercial Leverage
                </h3>
                <p className="text-[#ccfbf1] leading-relaxed">
                  Trade marks can increase the value of your business, offering
                  potential for licensing deals or serving as a valuable asset
                  in mergers and acquisitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
