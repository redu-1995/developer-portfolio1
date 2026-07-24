import { CertificationItem } from "@/data/experience";

export default function CertificationCard({ cert }: { cert: CertificationItem }) {
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">
      <span className="p-2 rounded-xl bg-amber-50 text-amber-600 text-lg shrink-0">🏆</span>
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{cert.title}</h4>
        <p className="text-xs text-slate-500">{cert.issuer}</p>
      </div>
    </div>
  );
}