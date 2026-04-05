import { Link } from "react-router-dom";
export default function NavSection({
  companyName,
  links,
  quickActions,
  profileImage,
}) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto w-full">
        {/* Left — Logo and Links */}
        <div className="flex items-center gap-8">
          <Link
            className="text-xl font-bold tracking-tighter text-on-surface font-headline cursor-pointer hover:opacity-90 transition"
            to="/"
          >
            {companyName}
          </Link>

          <div className="hidden md:flex gap-6">
            {links.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-on-surface-variant text-sm tracking-tight hover:text-on-surface hover:opacity-90 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right — Search + Icons + Profile */}
        <div className="flex items-center gap-4">
          {/* SEARCH BAR */}
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20 focus-within:border-primary/40 transition">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none text-xs focus:ring-0 text-on-surface w-48 placeholder-on-surface-variant/50 outline-none"
              placeholder="Search challenges..."
              type="text"
              readOnly
            />
          </div>

          {/* ICON BUTTONS */}
          <div className="flex items-center gap-2">
            {quickActions.map((item) => (
              <button
                key={item.icon}
                className="p-2 text-on-surface-variant hover:bg-surface-bright/40 rounded-full transition-colors active:scale-95"
                aria-label={item.label}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </button>
            ))}

            {/* PROFILE IMAGE */}
            <Link
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition cursor-pointer block"
              to="/login"
            >
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                src={profileImage}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
