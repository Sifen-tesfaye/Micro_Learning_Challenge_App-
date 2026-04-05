import { Link } from "react-router-dom";

export default function TopNavBar({
  companyName,
  links = [],
  profileImage,
  streakLabel,
}) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#060e20]/80 backdrop-blur-xl shadow-[0_40px_0_0_rgba(222,229,255,0.08)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link className="font-headline text-xl font-bold tracking-tighter text-on-surface" to="/">
            {companyName}
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((item) => (
              <Link
                key={item.label}
                className={`rounded-lg px-3 py-1 text-sm transition-colors duration-300 ${
                  item.isActive
                    ? "font-bold text-primary hover:bg-surface-bright/40"
                    : "font-medium text-on-surface-variant hover:bg-surface-bright/40"
                }`}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container px-3 py-1.5">
            <span
              className="material-symbols-outlined text-sm text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            <span className="text-xs font-bold text-on-surface">{streakLabel}</span>
          </div>
          <img
            alt="User Profile"
            className="h-8 w-8 cursor-pointer rounded-full border border-primary/30 transition-transform active:scale-95"
            src={profileImage}
          />
        </div>
      </div>
    </nav>
  );
}
