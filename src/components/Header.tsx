"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Services",
    hasSubmenu: true,
    submenu: [
      { label: "Copyright Law", href: "/copyright-laws" },
      { label: "Trademarks", href: "/trademarks" },
      { label: "IP Management", href: "/ip-management" },
      { label: "Wills and Estates", href: "/wills-estates" },
      { label: "Conveyancing", href: "/conveyancing" },
    ],
  },
  { label: "Pricing", href: "/pricing", hasSubmenu: false },
  { label: "About Us", href: "/about", hasSubmenu: false },
  { label: "Contact", href: "/contact", hasSubmenu: false },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileSubmenuOpen(false);
    }
  };

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 border-white/90 border-b-1 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-[#134e4a]/95 backdrop-blur-md py-2 shadow-sm"
            : "bg-[#134e4a] py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div
              className={`flex items-center justify-center transition-all duration-300 ${
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              }`}>
              <Image
                src="/logo.png"
                alt="Point Break Legal Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "w-6 h-6" : "w-8 h-8"
                }`}
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-white font-bold tracking-wide leading-tight transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}>
                POINT BREAK LEGAL
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}>
              <button className="flex items-center gap-1 text-white hover:text-[#f0fdfa] font-medium transition-all duration-200 py-2 group">
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Desktop Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 ${
                  isServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}>
                <div className="py-2">
                  {navItems[0].submenu?.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#134e4a] transition-colors">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/pricing"
              className="text-white hover:text-[#f0fdfa] font-medium transition-colors duration-200 py-2">
              Pricing
            </a>
            <a
              href="/about"
              className="text-white hover:text-[#f0fdfa] font-medium transition-colors duration-200 py-2">
              About Us
            </a>
            <a
              href="/contact"
              className="text-white hover:text-[#f0fdfa] font-medium transition-colors duration-200 py-2">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/contact">
            <Button
              className={`hidden lg:flex cursor-pointer bg-white text-[#134e4a] hover:bg-[#f0fdfa] font-semibold rounded-md transition-all duration-300 ${
                isScrolled ? "px-4 py-3 text-sm" : "px-6 py-6 text-base"
              }`}>
              Book a Free Consult
            </Button>
          </Link>

          {/* Minimalist Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle mobile menu">
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-2.5" : ""
                }`}
              />
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 top-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Spacer to prevent content jump */}
      <div className="h-20"></div>

      {/* Minimalist Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}>
        <div className="h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Point Break Legal Logo"
                  className="w-6 h-6 invert"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#134e4a] font-bold text-lg">
                POINT BREAK LEGAL
              </span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 flex items-center justify-center text-gray-500"
              aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-auto">
            {!mobileSubmenuOpen ? (
              <nav className="p-4">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-0">
                    {item.hasSubmenu ? (
                      <button
                        onClick={() => setMobileSubmenuOpen(true)}
                        className="w-full flex items-center justify-between py-5 text-gray-600 font-medium">
                        <span className="text-lg">{item.label}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-5 hover:text-[#134e4a] text-gray-900 font-medium text-lg">
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            ) : (
              <div className="p-4">
                <button
                  onClick={() => setMobileSubmenuOpen(false)}
                  className="flex items-center gap-2 text-gray-500 mb-4">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  <span>Back</span>
                </button>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Services
                </h2>
                <nav>
                  {navItems[0].submenu?.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block hover:text-[#134e4a] py-4 border-b border-gray-100 last:border-0 text-gray-900 font-medium">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 items-center w-full justify-center flex self-center border-t border-gray-100">
            <Button className="w-full max-w-xl mx-auto bg-[#134e4a] hover:bg-[#0f3730] text-white font-medium py-7 cursor-pointer rounded-xl">
              <Link href="/contact">Book a Free Consult</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
