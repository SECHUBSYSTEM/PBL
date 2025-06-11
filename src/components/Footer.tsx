import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Tagline and Social Icons */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed max-w-sm">
              Empowering your legal journey with innovative solutions and expert
              guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-4">
              <Link
                href="/"
                className="block hover:text-teal-200 transition-colors">
                Home
              </Link>

              <Link
                href="/pricing"
                className="block hover:text-teal-200 transition-colors">
                Pricing
              </Link>
              <Link
                href="/about"
                className="block hover:text-teal-200 transition-colors">
                About Us
              </Link>
              <Link
                href="/contact"
                className="block hover:text-teal-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Section - Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Subscribe to our newsletter
            </h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 bg-white text-gray-900 py-6 border-0 rounded-r-none focus:ring-2 focus:ring-teal-300"
              />
              <Button
                type="submit"
                className="bg-[#99F6E4] cursor-pointer hover:bg-[#99F6E4/70] text-black py-6 px-6 rounded-l-none border-l-0">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-1 border-white my-8"></div>
        {/* Bottom Section - Logo and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-transparent flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Point Break Legal Logo"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </div>
            <span className="text-xl font-bold tracking-wide">
              POINT BREAK LEGAL
            </span>
          </div>

          <div className="text-base text-white text-center md:text-right">
            &copy; {new Date().getFullYear()} Point Break Legal. All rights
            reserved. |{" "}
            <Link href="#" className="hover:text-[#99F6E4] transition-colors">
              Privacy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-[#99F6E4] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
