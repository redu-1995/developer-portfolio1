import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-white text-slate-900">
      
      {/* --- BACKGROUND DECORATIVE ELEMENTS --- */}
      {/* 1. Top Ambient Gradient Glow */}
      <div 
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-emerald-200 to-teal-400 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* 2. Soft Emerald Blurred Blobs */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-72 h-72 bg-emerald-100/60 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -z-10" />

      {/* 3. Subtle Grid Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* --- MAIN HERO CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status / Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Full Stack & Frontend Developer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Building Modern <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-800">
                Web Experiences
              </span>
            </h1>

            {/* Subtitle / Niche Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I build responsive business applications using <strong className="font-semibold text-slate-800">React, Next.js, Django,</strong> and <strong className="font-semibold text-slate-800">PostgreSQL</strong>—turning real business workflows into intuitive, high-performance software.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/Rediet_Abreham_CV.pdf"
                download
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200/80 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Tech Stack Quick Badges */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-500">
              <span className="text-slate-400 uppercase tracking-wider text-[11px] font-bold mr-2">Core Tech:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">React</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Next.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Django</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">PostgreSQL</span>
            </div>

          </div>

          {/* Right Column: Profile Image / Visual Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Decorative Ring behind image */}
              <div className="pt-2 absolute inset-0 rounded-3xl bg-linear-to-tr from-emerald-500 to-teal-300 rotate-3 scale-105 opacity-20 blur-xs" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200/80 shadow-xl bg-slate-100 ">
                <Image
                  src="/images/profile.JPG" 
                  alt="Rediet - Developer Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-[center_5%]"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}