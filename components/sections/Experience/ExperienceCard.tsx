import { ExperienceItem } from "@/data/experience";

export default function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/80 group">
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 ring-4 ring-emerald-100 group-hover:scale-125 transition-transform" />

      {/* Role Header */}
      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold">
              {exp.type}
            </span>
            <span className="text-xs font-medium text-slate-500">{exp.period}</span>
          </div>
        </div>

        <p className="text-sm font-semibold text-emerald-600 mb-4">{exp.company}</p>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">{exp.description}</p>

        {/* Highlights List */}
        <ul className="space-y-2 mb-6">
          {exp.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}