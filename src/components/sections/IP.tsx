import { Briefcase, MessageCircle, Search, Lightbulb } from "lucide-react";

export default function IpManagementSection() {
  return (
    <section className="bg-white py-20 px-4 mx-auto max-w-7xl md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#134E4A]">
          Intellectual Property (IP) Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portfolio Management */}
          <div className="bg-[#F9FAFB] text-black rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-[#134e4a] p-4 rounded-lg mb-6">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl text-[#134E4A] font-semibold mb-4">
              Portfolio Management
            </h3>
            <p className="text-gray-700">
              We manage your entire IP portfolio, ensuring all your intellectual
              properties are properly maintained and protected.
            </p>
          </div>

          {/* Renewal Tracking */}
          <div className="bg-[#F9FAFB] text-[#134E4A] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-[#134e4a] p-4 rounded-lg mb-6">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Renewal Tracking</h3>
            <p className="text-gray-700">
              Our system tracks and manages renewal deadlines, so you never risk
              losing your valuable intellectual properties.
            </p>
          </div>

          {/* Infringement Monitoring */}
          <div className="bg-[#F9FAFB] text-[#134E4A] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-[#134e4a] p-4 rounded-lg mb-6">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Infringement Monitoring
            </h3>
            <p className="text-gray-700">
              We actively monitor for potential infringements of your
              intellectual property, allowing for swift action when necessary.
            </p>
          </div>

          {/* Strategic Consulting */}
          <div className="bg-[#F9FAFB] text-[#134E4A] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-[#134e4a] p-4 rounded-lg mb-6">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Strategic Consulting
            </h3>
            <p className="text-gray-700">
              Our experts provide strategic advice to maximise the value and
              protection of your intellectual property assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
