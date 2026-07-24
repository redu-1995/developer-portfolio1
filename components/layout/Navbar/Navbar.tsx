"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/navigation";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Scroll-based background elevation & close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // 2. IntersectionObserver to detect and highlight active section dynamically
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section reaches top viewport region
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "h-20 bg-white/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo + Recruiter Availability Indicator */}
        <div className="flex items-center gap-3">
          <Link
            href="#home"
            className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-0.5 group"
          >
            <span>Rediet</span>
            <span className="text-emerald-600 group-hover:text-emerald-700 transition-colors">
              .dev
            </span>
          </Link>

          {/* Availability Badge */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-all duration-200 relative ${
                  isActive
                    ? "text-emerald-600 bg-emerald-50/80 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Resume Call To Action */}
        <div className="hidden md:flex items-center">
          <a
            href="/Rediet_Abreham_CV.pdf"
            download
            className="text-xs lg:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Animated Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-lg border-b border-slate-200 ${
          isOpen ? "max-h-96 opacity-100 shadow-xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-emerald-600 bg-emerald-50 font-bold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-3 border-t border-slate-100">
            <a
              href="/Rediet_Abreham_CV.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}