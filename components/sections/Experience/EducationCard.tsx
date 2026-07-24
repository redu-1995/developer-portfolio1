import { EducationItem } from "@/data/experience";

export default function EducationCard({ edu }: { edu: EducationItem }) {
  return (
    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-all duration-300">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <span className="text-2xl mb-2 inline-block">🎓</span>
          <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
          <p className="text-sm font-medium text-slate-600">{edu.institution}</p>
        </div>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
          {edu.period}
        </span>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold mb-4">
          GPA: {edu.gpa}
        </div>

        <ul className="space-y-2">
          {edu.achievements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <span className="text-emerald-500 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}