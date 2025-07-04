import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#134e4a] mb-4">
            Transparent Pricing Just For You
          </h1>
          <p className="text-lg text-gray-600">
            Pick a package that suits your needs - plus a free 15-minute
            consultation!
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {/* Trade Mark Applications */}
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2  rounded-lg">
                  <Image
                    src="/mace.png"
                    alt="Mace icon"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#134e4a]">
                  Trade Mark Applications
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-[#134e4a] mb-1">
                  $695 + Government Fees
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Initial consultation and comprehensive search</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Advice from former trade mark examiner
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Australian or international applications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Or contact us for help with self-filing
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="w-full bg-[#134e4a] hover:bg-[#0f3f3c] text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Intellectual Property Actions */}
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2  rounded-lg">
                  <Image
                    src="/balance.png"
                    alt="Balance icon"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#134e4a]">
                  Intellectual Property Actions
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-[#134e4a] mb-1">
                  From $750
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Negotiations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Cease and desist letters
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Licensing abd assignments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    IP stratedy
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="w-full bg-[#134e4a] hover:bg-[#0f3f3c] text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Cease & Desist Action */}


          {/* Licensing & Assignment Contracts */}
          
          {/* Drafting Wills */}
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2  rounded-lg">
                  <Image
                    src="/warning.png"
                    alt="Warning icon"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#134e4a]">
                  Drafting Wills
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-[#134e4a] mb-1">
                  From - $280
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Initial Consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Will Drafting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Review & Refinement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Formal execution & witnessing
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="w-full bg-[#134e4a] hover:bg-[#0f3f3c] text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Probate */}
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg">
                  <Image
                    src="/note.png"
                    alt="Note icon"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#134e4a]">
                  Probate
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-[#134e4a] mb-1">
                  From - $1800
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Estate assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Application preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Asset management throughout probate
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Distribution & finalisation
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="w-full bg-[#134e4a] hover:bg-[#0f3f3c] text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Conveyancing */}
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg">
                  <Image
                    src="/warning.png"
                    alt="Warning icon"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#134e4a]">
                  Conveyancing
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-[#134e4a] mb-1">
                  From - $700
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Initial contract review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Due diligence (comprehensive searches)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Contract management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Settlement completion</span>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="w-full bg-[#134e4a] hover:bg-[#0f3f3c] text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Commercial Leasing */}
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg">
                  <Image
                    src="/note.png"
                    alt="Note icon"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#134e4a]">
                  Commercial Leasing
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-[#134e4a] mb-1">
                  From - $1800
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Initial consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Lease negotiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Documentation review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#134e4a] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Execution & registration
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="w-full bg-[#134e4a] hover:bg-[#0f3f3c] text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
