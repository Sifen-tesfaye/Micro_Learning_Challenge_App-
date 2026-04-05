import { Link, NavLink, useLocation } from "react-router-dom";
import { isDetailNavActive } from "../shared/detailNav";

export default function ModuleDetailHeader({
  brand,
  links = [],
  streakLabel,
  profileImage,
}) {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060e20]/80 backdrop-blur-xl shadow-[0_40px_0_0_rgba(222,229,255,0.08)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link
            className="text-xl font-bold tracking-tighter hover:opacity-90 transition-opacity"
            style={{ color: "#dee5ff" }}
            to="/"
          >
            {brand}
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            {links.map((item) => (
              <NavLink
                key={item.label}
                className={() =>
                  `rounded-lg px-3 py-1 text-sm transition-all duration-300 ${
                    isDetailNavActive(pathname, item.to)
                      ? "font-bold text-[#919bff] bg-[#142449]/60"
                      : "text-[#9baad6] hover:bg-[#142449]/50 hover:text-[#dee5ff]"
                  }`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="flex items-center px-3 py-1.5 rounded-full border border-outline-variant/20"
            style={{
              backgroundColor: "#101e3e",
              borderColor: "rgba(56, 71, 109, 0.2)",
            }}
          >
            <span
              className="material-symbols-outlined text-sm mr-2"
              style={{ color: "#3cddc7", fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            <span className="text-xs font-bold" style={{ color: "#9baad6" }}>
              {streakLabel}
            </span>
          </div>
          <Link
            className="block h-8 w-8 overflow-hidden rounded-full border transition-transform hover:scale-105 hover:shadow-[0_0_18px_rgba(145,155,255,0.25)]"
            style={{
              backgroundColor: "#818cf8",
              borderColor: "rgba(145, 155, 255, 0.3)",
            }}
            to="/profile"
          >
            <img alt="User Profile" className="w-full h-full object-cover" src={profileImage} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
