export default function WhyProtectCopyright() {
  const benefits = [
    {
      title: "Exclusive Control",
      description:
        "You have the right to decide how your work is used, ensuring no one can alter or distribute it without your permission.",
    },
    {
      title: "Monetary Benefits",
      description:
        "You can earn money by licensing, selling, or granting permission for others to use your work legally.",
    },
    {
      title: "Legal Recourse",
      description:
        "Unauthorised use of your work can be challenged legally to protect your rights and ownership.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#134e4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left font-bold text-[#99F6E4] leading-tight">
              Why Protect Your Work with Copyright?
            </h2>
          </div>

          {/* Benefits Cards - Horizontal Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#134e4a] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
