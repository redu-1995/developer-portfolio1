import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-white via-emerald-50/40 to-white">
      {/* Background Decorative Glow Effect */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-10 -z-10 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Frontend Opportunities
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building Modern <span className="text-emerald-600">Web Experiences</span> That Solve Real Problems.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-slate-900">Rediet</span> — a Frontend Developer specializing in 
              React, Next.js, and TypeScript. I craft clean, responsive interfaces with performance and UX in mind.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              
              <a
                href="/Rediet_Abreham_CV.pdf"
                download
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 transition-all duration-200 shadow-sm hover:border-slate-300"
              >
                Download CV
              </a>
            </div>

            {/* Tech Stack Indicators */}
            <div className="mt-12 border-t border-slate-200/80 pt-6 w-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Tech Stack
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Django"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image & Tech Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative group">
              
              {/* Outer Decorative Ring & Shadow */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-8 ring-emerald-100/80 transition-transform duration-500 group-hover:scale-105">
                {/* Replace with your photo inside public/images/portrait.jpg */}
                <Image
                  src="/images/rediet.png"
                  alt="Rediet - Frontend Developer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating Skill Badge 1 (React) */}
              <div className="absolute -top-3 -left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800 animate-bounce duration-1000">
                <span className="text-cyan-500 text-base">⚛</span> React
              </div>

              {/* Floating Skill Badge 2 (Next.js) */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                <span className="text-black text-base">▲</span> Next.js
              </div>

              {/* Floating Skill Badge 3 (Tailwind) */}
              <div className="absolute -bottom-2 left-6 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                <span className="text-sky-400 text-base">🎨</span> Tailwind
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}