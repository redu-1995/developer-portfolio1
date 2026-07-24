// components/ui/Badge.tsx
export default function Badge({ children }: { children: string }) {
  return (
    <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-700 text-xs font-medium rounded-lg">
      {children}
    </span>
  );
}