"use client"
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-md"
          : "bg-white dark:bg-gray-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              {!logoLoaded && (
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
              )}
              <Image
                src="/logo.png"
                alt="SoftSell Logo"
                width={40}
                height={40}
                onLoad={() => setLogoLoaded(true)}
                onError={() => {
                  console.error("Logo failed to load");
                  setLogoLoaded(true);
                }}
                className={`${logoLoaded ? "opacity-100" : "opacity-0"}`}
              />
              {!logoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-600 dark:text-blue-400">
                  S
                </div>
              )}
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              SoftSell
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              size="sm"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign In
            </Button>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
