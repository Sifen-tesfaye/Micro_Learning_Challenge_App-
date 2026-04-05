import { Link } from "react-router-dom";

export default function ModuleDetailHeader({ brand, streakLabel, profileImage }) {
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
            <Link
              className="text-sm px-3 py-1 rounded-lg transition-colors duration-300"
              style={{ color: "#9baad6" }}
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="font-bold px-3 py-1 rounded-lg text-sm"
              style={{ color: "#919bff" }}
              to="/categories"
            >
              Categories
            </Link>
            <Link
              className="text-sm px-3 py-1 rounded-lg transition-colors duration-300"
              style={{ color: "#9baad6" }}
              to="/leaderboard"
            >
              Leaderboard
            </Link>
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
          <div
            className="w-8 h-8 rounded-full overflow-hidden border"
            style={{
              backgroundColor: "#818cf8",
              borderColor: "rgba(145, 155, 255, 0.3)",
            }}
          >
            <img alt="User Profile" className="w-full h-full object-cover" src={profileImage} />
          </div>
        </div>
      </div>
    </nav>
  );
}
