interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
      {/* Small Eyebrow Badge */}
      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200/60">
        {badge}
      </span>
      
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      
      {/* Optional Subtitle */}
      {description && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}