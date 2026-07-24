import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/80">
          
          {/* Left: Branding & Friendly Closing */}
          <div className="md:col-span-6 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-lg tracking-tight">
              <span>Rediet</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-slate-400 font-normal text-sm">Software Engineer</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Thanks for visiting! Feel free to connect or reach out for collaboration.
            </p>
          </div>

          {/* Right: "Built With" Tech Stack Badges */}
          <div className="md:col-span-6 flex flex-col items-center md:items-end gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Built With
            </span>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs font-medium">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
                <span className="text-white font-semibold">Next.js</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
                <span className="text-blue-400">TypeScript</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
                <span className="text-sky-400">Tailwind CSS</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
                <span className="text-emerald-400">Vercel</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Rediet. All rights reserved.</p>

          <div className="flex items-center gap-6 font-medium text-slate-400">
            <a
              href="https://github.com/redu-1995"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}