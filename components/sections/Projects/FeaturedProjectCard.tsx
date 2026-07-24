import Image from "next/image";
import { ProjectItem } from "@/data/projects";

export default function FeaturedProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:border-emerald-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Phone Showcase Frame */}
       {/* Left Column: Full-Height Mobile Mockup */}
<div className="lg:col-span-6 relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] bg-slate-900 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
  
  {/* Badges Floating on Top */}
  <div className="relative z-20 flex gap-2 mb-4">
    <span className="px-3 py-1 rounded-full bg-slate-800/90 text-white text-xs font-semibold border border-slate-700 shadow-md">
      ★ Featured Case Study
    </span>
    <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold shadow-md">
      {project.type}
    </span>
  </div>

  {/* Larger, Responsive Phone Frame */}
  <div className="relative z-10 my-auto flex justify-center items-center py-4">
    <div className="relative w-[260px] sm:w-[300px] lg:w-[320px] aspect-[9/18] rounded-[2.5rem] border-[6px] border-slate-700 bg-slate-950 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
      
      {/* Phone Notch Pill */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full z-20 border border-slate-700/60" />

      {/* Screenshot Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
    </div>
  </div>

  {/* Subtle Ambient Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-emerald-950/20 pointer-events-none" />
</div>

        {/* Right Column: Case Study Details */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Role: {project.role}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
              {project.title}
            </h3>

            {/* Problem / Solution Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-0.5">🎯 The Problem:</span>
                <p className="text-slate-600 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100/80 text-xs sm:text-sm">
                <span className="font-bold text-emerald-900 block mb-0.5">💡 The Solution:</span>
                <p className="text-emerald-800 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-slate-400 mb-2.5 tracking-wider">
                Key Engineering Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Controls & Tech Stack */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-100">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 transition-colors flex items-center gap-2"
              >
                <span>GitHub Code</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}