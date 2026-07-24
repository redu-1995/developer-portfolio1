// components/ui/SectionTitle.tsx
export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}