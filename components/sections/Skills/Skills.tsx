import SectionTitle from "@/components/ui/SectionTitle";
import { SKILL_CATEGORIES, CURRENTLY_LEARNING } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
      {/* Background Decorative Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-0 -z-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Tech Stack"
          subtitle="Technologies and tools I use to build responsive, maintainable, and user-focused web applications."
        />

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {SKILL_CATEGORIES.map((category, index) => {
            const isFeatured = index === 0; // Highlights Frontend Development

            return (
              <div
                key={category.title}
                className={`
                  relative group p-6 sm:p-7 rounded-3xl border transition-all duration-300 h-auto
                  ${
                    isFeatured
                      ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-emerald-50/30 to-white border-emerald-200 shadow-md shadow-emerald-900/5 hover:border-emerald-400"
                      : "bg-white border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md"
                  }
                  hover:-translate-y-1
                `}
              >
                {/* Decorative Background Glow for Card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                    <span className="p-2 rounded-xl bg-emerald-100/80 text-emerald-700 text-xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    {category.title}
                  </h3>

                  {/* Technology Count Badge */}
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200/60 shrink-0">
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Capability Description */}
                <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        inline-flex items-center px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 leading-normal
                        ${
                          isFeatured
                            ? "bg-white text-slate-800 border border-emerald-200/80 shadow-2xs hover:bg-emerald-600 hover:text-white hover:border-emerald-600 cursor-default"
                            : "bg-slate-100/80 text-slate-700 border border-slate-200/60 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 cursor-default"
                        }
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Featured Badge Footer */}
                {isFeatured && (
                  <div className="mt-6 pt-4 border-t border-emerald-100/80 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Primary Focus & Daily Specialization
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="text-emerald-600">🚀</span> Currently Exploring & Growth Areas
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Topics I am actively researching to deepen my frontend expertise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CURRENTLY_LEARNING.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-medium text-slate-700"
              >
                <span className="text-emerald-500 font-bold">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}