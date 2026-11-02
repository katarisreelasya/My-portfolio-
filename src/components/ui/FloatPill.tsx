/** Technology pill that gently floats 4px up/down; `index` staggers the phase. */
export default function FloatPill({ children, index = 0 }: { children: React.ReactNode; index?: number }) {
  return (
    <span
      style={{ animationDelay: `${(index % 6) * 0.45}s` }}
      className="inline-block animate-float rounded-full border border-sky2/40 bg-sky2/5 px-4 py-1.5 text-xs text-sky2 transition-colors hover:bg-sky2/15"
    >
      {children}
    </span>
  );
}
