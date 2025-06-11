import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#f9fafb] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#134e4a] mb-6">
            Connect With Us
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#1f2937] leading-relaxed">
              Need legal assistance or have inquiries about protecting your
              intellectual property?
            </p>
            <p className="text-lg text-[#1f2937] leading-relaxed mt-2">
              Contact us today for professional guidance tailored to your needs.
            </p>
          </div>
        </div>

        {/* Unified Contact Form */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Contact Info */}
              <div className="bg-[#134e4a] p-8 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <h2 className="text-3xl font-bold mb-12 text-[#99f6e4]">
                    Get in touch
                  </h2>

                  <div className="space-y-8 flex-grow">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <Mail className="w-6 h-6 text-[#99f6e4]" />
                      </div>
                      <div>
                        <p className="text-[#99f6e4] text-sm mb-1">Email us</p>
                        <a
                          href="mailto:tracey@pointbreaklegal.com"
                          className="text-white text-lg hover:text-[#99f6e4] transition-colors underline">
                          tracey@pointbreaklegal.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <Phone className="w-6 h-6 text-[#99f6e4]" />
                      </div>
                      <div>
                        <p className="text-[#99f6e4] text-sm mb-1">
                          Phone number
                        </p>
                        <a
                          href="tel:0457-520-504"
                          className="text-white text-lg hover:text-[#99f6e4] transition-colors">
                          0457-520-504
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <MapPin className="w-6 h-6 text-[#99f6e4]" />
                      </div>
                      <div>
                        <p className="text-white text-lg">
                          94 Ducat St, Tweed Heads, NSW
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form Fields */}
              <div className="p-8">
                <form className="space-y-6 h-full flex flex-col">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1f2937] mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Full name"
                      className="w-full bg-[#f9fafb] border-[#e5e7eb] focus:border-[#134e4a] focus:ring-[#134e4a] text-[#1f2937] placeholder:text-[#9ca3af] h-12"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#1f2937] mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      className="w-full bg-[#f9fafb] border-[#e5e7eb] focus:border-[#134e4a] focus:ring-[#134e4a] text-[#1f2937] placeholder:text-[#9ca3af] h-12"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#1f2937] mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-[#f9fafb] border-[#e5e7eb] focus:border-[#134e4a] focus:ring-[#134e4a] text-[#1f2937] placeholder:text-[#9ca3af] h-12"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex-grow">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1f2937] mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your enquiry..."
                      className="w-full bg-[#f9fafb] border-[#e5e7eb] focus:border-[#134e4a] focus:ring-[#134e4a] text-[#1f2937] placeholder:text-[#9ca3af] resize-none min-h-[120px] flex-grow"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#134e4a] hover:bg-[#134e4a]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 h-12">
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
