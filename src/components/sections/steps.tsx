interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepsProps {
  tagline?: string;
  title?: string;
  steps?: Step[];
  backgroundColor?: string;
}

export default function Steps({
  tagline = "Our Copyright Process",
  title = "Our 4 Key Steps To Protect Your Copyright",
  steps = [],
  backgroundColor = "bg-white",
}: StepsProps) {
  // Default copyright steps if none provided
  const defaultSteps = [
    {
      number: "1",
      title: "Proof of Ownership",
      description:
        "Keep detailed records of your work's creation, including drafts or timestamps, to verify your ownership when necessary.",
    },
    {
      number: "2",
      title: "Eligibility Assist",
      description:
        "Ensure your work meets copyright eligibility criteria, such as originality and fixed expression, to qualify for legal protection.",
    },
    {
      number: "3",
      title: "Licensing & Commercialization",
      description:
        "Explore licensing opportunities or other ways to monetize your work, giving you control over its usage while generating income.",
    },
    {
      number: "4",
      title: "Enforcement",
      description:
        "Protect your rights by taking steps to prevent unauthorised use of your work through legal action or other enforcement methods.",
    },
  ];

  const stepsToRender = steps.length > 0 ? steps : defaultSteps;

  return (
    <section className={`py-16 sm:py-24 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-[#134e4a] tracking-wider mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl max-w-lg mx-auto sm:text-4xl font-bold text-[#134e4a] mb-6">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stepsToRender.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center space-y-4 h-full">
              <div className="w-16 h-16 bg-[#a7f3d0] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#134e4a]">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#104210] leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
