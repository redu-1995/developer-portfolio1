import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background Glow Accents */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-20 -z-10 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Frontend developer focused on building practical digital solutions that solve real-world problems."
        />

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/20 border border-slate-200/80 hover:border-emerald-300 transition-all duration-300">
            <div className="text-3xl font-extrabold text-emerald-600 mb-1">CS Grad</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Degree & Foundation</div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/20 border border-slate-200/80 hover:border-emerald-300 transition-all duration-300">
            <div className="text-3xl font-extrabold text-slate-900 mb-1">IT Officer</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Real Enterprise Exposure</div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/20 border border-slate-200/80 hover:border-emerald-300 transition-all duration-300">
            <div className="text-3xl font-extrabold text-emerald-600 mb-1">Full Stack</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">React • Next.js • Django</div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p className="text-slate-800 font-medium leading-relaxed">
              I am a <span className="text-emerald-700 font-semibold">Computer Science graduate</span> passionate about creating modern, user-focused web applications using React, Next.js, and modern frontend technologies.
            </p>

            <p>
              My experience as a <span className="text-slate-900 font-medium">Junior IT Officer at Yetem Trading PLC</span> has given me direct exposure to real business workflows, enterprise systems, and the operational challenges organizations face when adopting new technology.
            </p>

            <p>
             I apply these insights to my software projects, building responsive, accessible, and user-focused web applications that solve real problems while delivering an excellent user experience.
            </p>
          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              Quick Facts
            </h3>

            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs hover:translate-x-1 transition-transform">
                <span className="p-2 rounded-lg bg-emerald-100 text-emerald-800 text-base">🎓</span>
                <div>
                  <span className="block text-xs text-slate-400">Education</span>
                  <span className="text-slate-800 font-semibold">BSc Computer Science</span>
                </div>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs hover:translate-x-1 transition-transform">
                <span className="p-2 rounded-lg bg-blue-100 text-blue-800 text-base">💼</span>
                <div>
                  <span className="block text-xs text-slate-400">Current Role</span>
                  <span className="text-slate-800 font-semibold">Junior IT Officer @ Yetem Trading</span>
                </div>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs hover:translate-x-1 transition-transform">
                <span className="p-2 rounded-lg bg-indigo-100 text-indigo-800 text-base">⚡</span>
                <div>
                  <span className="block text-xs text-slate-400">Primary Stack</span>
                  <span className="text-slate-800 font-semibold">React • Next.js • TypeScript • Django</span>
                </div>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs hover:translate-x-1 transition-transform">
                <span className="p-2 rounded-lg bg-amber-100 text-amber-800 text-base">📍</span>
                <div>
                  <span className="block text-xs text-slate-400">Location</span>
                  <span className="text-slate-800 font-semibold">Addis Ababa, Ethiopia</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}