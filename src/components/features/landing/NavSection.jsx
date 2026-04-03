import { useState } from "react";
import profilePic from "../../../assets/images/profile_icon.png";

const CompanyName = "Luminescent Scholar";

export default function NavSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleProfile = () => {
    // Placeholder for profile click action
    alert("Profile clicked!");
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto w-full">
        {/* Left — Logo and Links */}
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-on-surface font-headline cursor-pointer hover:opacity-90 transition">
            {CompanyName}
          </span>

          <div className="hidden md:flex gap-6">
            {["Dashboard", "Categories", "Leaderboard"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-on-surface-variant text-sm tracking-tight hover:text-on-surface hover:opacity-90 transition-colors"
              >
                {item}
              </a>
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
              value={searchTerm}
              className="bg-transparent border-none text-xs focus:ring-0 text-on-surface w-48 placeholder-on-surface-variant/50 outline-none"
              placeholder="Search challenges..."
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* ICON BUTTONS */}
          <div className="flex items-center gap-2">
            {[
              { icon: "local_fire_department", label: "Streaks" },
              { icon: "military_tech", label: "Achievements" },
            ].map((item) => (
              <button
                key={item.icon}
                className="p-2 text-on-surface-variant hover:bg-surface-bright/40 rounded-full transition-colors active:scale-95"
                aria-label={item.label}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </button>
            ))}

            {/* PROFILE IMAGE */}
            <div
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition cursor-pointer"
              onClick={handleProfile}
            >
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                src={profilePic}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
