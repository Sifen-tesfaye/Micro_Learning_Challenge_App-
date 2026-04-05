export default function ModuleButtonsNav({
  activeFilterKey,
  items = [],
  onFilterChange,
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <button
          key={item.label}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            item.key === activeFilterKey
              ? "border-secondary/40 bg-secondary/15 text-secondary shadow-[0_0_20px_rgba(60,221,199,0.12)]"
              : "border-white/10 bg-[#101a31] text-[#9baad6] hover:border-primary/30 hover:bg-[#1a294b] hover:text-[#dee5ff]"
          }`}
          onClick={() => onFilterChange?.(item.key)}
          type="button"
        >
          {item.label}
          {typeof item.count === "number" ? (
            <span className="ml-2 text-xs opacity-80">{item.count}</span>
          ) : null}
        </button>
      ))}
    </div>
  );
}
