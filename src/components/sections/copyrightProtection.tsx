import { Type, Palette, Music, Video, Theater, FileText } from "lucide-react";

const copyrightCategories = [
  {
    icon: <Type className="w-6 h-6 text-white" />,
    title: "Text & Content",
    description:
      "Original written works such as books, articles, blog posts, and research papers are protected under copyright.",
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Arts",
    description:
      "Visual creations including paintings, drawings, and photography are safeguarded from reproduction.",
  },
  {
    icon: <Music className="w-6 h-6 text-white" />,
    title: "Music",
    description:
      "Musical compositions, including lyrics and melodies, are legally protected against unlicensed use.",
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Film & Radio",
    description:
      "Movies, documentaries, radio broadcasts, and audio-visual content are copyrighted to ensure rights.",
  },
  {
    icon: <Theater className="w-6 h-6 text-white" />,
    title: "Theatre",
    description:
      "Dramatic performances, scripts, choreographic works, and stage designs fall under copyright protection.",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Technical Drawing",
    description:
      "Architectural designs, engineering schematics, and industrial drawings are protected as original works.",
  },
];

export default function CopyrightProtection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134e4a] mb-6">
            Copyright Protection
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            Copyright automatically protects original works of authorship,
            including literary, artistic, musical, and dramatic works. Unlike
            trade marks or patents, copyright protection does not require formal
            registration in Australia; it arises as soon as the work is created
            and recorded in a tangible form.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copyrightCategories.map((category, index) => (
            <div
              key={index}
              className="text-center bg-[#F9FAFB] py-10 px-6 rounded-xl shadow-md space-y-4">
              <div className="w-16 h-16 bg-[#134e4a] rounded-xl flex items-center justify-center mx-auto">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
