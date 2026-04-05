import { Link } from "react-router-dom";

function MobileSectionNav({ items }) {
  const toneClassNames = {
    primary: "group-hover:text-primary",
    secondary: "group-hover:text-secondary",
    tertiary: "group-hover:text-tertiary",
  };

  const glowClassNames = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/20",
    tertiary: "bg-tertiary/20",
  };

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm">
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-tertiary/15 to-primary/20 rounded-3xl blur-xl opacity-60 animate-pulse"></div>

      {/* Main navigation container */}
      <div className="relative glass-card rounded-3xl p-2 shadow-2xl border border-white/10 backdrop-blur-2xl">
        <div className="flex justify-around items-center py-3 px-2">
          {items.map((item) => (
            <Link
              key={item.label}
              className="group relative flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95"
              to={item.to}
            >
              <div className="relative">
                <span
                  className={`material-symbols-outlined text-2xl text-on-surface-variant transition-all duration-300 group-active:scale-90 ${toneClassNames[item.tone]}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <div
                  className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${glowClassNames[item.tone]}`}
                ></div>
              </div>
              <span
                className={`text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant transition-colors duration-300 ${toneClassNames[item.tone]}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default MobileSectionNav;
