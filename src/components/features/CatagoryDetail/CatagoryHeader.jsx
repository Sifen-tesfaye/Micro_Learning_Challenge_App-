import { Link } from "react-router-dom";

export default function CategoryHeader({
  breadcrumbs = [],
  description,
  highlightedTitle,
  progress,
  title,
}) {
  return (
    <header className="relative mb-12">
      <nav className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant">
        {breadcrumbs.map((item, index) => (
          <span key={item.label} className="contents">
            {item.to ? (
              <Link
                className="transition-colors hover:text-tertiary"
                to={item.to}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-on-surface">{item.label}</span>
            )}
            {index < breadcrumbs.length - 1 ? (
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
            ) : null}
          </span>
        ))}
      </nav>

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h1 className="mb-4 font-headline text-4xl font-extrabold leading-tight tracking-tighter text-on-surface md:text-5xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {highlightedTitle}
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-outline-variant/10 bg-surface-container-high p-4">
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {progress?.label}
            </p>
            <p className="text-xl font-black text-secondary">
              {progress?.value}%
            </p>
          </div>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-surface-variant">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 36 36">
              <path
                className="stroke-current text-secondary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeDasharray={`${progress?.value ?? 0}, 100`}
                strokeWidth="3"
              />
            </svg>
            <span
              className="material-symbols-outlined text-sm text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {progress?.icon || "star"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
