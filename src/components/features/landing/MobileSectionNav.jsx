function MobileSectionNav() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] glass-card rounded-2xl flex justify-around p-4 shadow-2xl">
      {/* Dashboard */}
      <a
        href="#"
        className="text-on-surface-variant flex flex-col items-center gap-1"
      >
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          dashboard
        </span>
        <span className="text-[12px] font-bold uppercase tracking-tight">
          Dashboard
        </span>
      </a>

      {/* Categories */}
      <a
        href="#"
        className="text-on-surface-variant flex flex-col items-center gap-1"
      >
        <span className="material-symbols-outlined text-xl">grid_view</span>
        <span className="text-[12px] font-bold uppercase tracking-tight">
          Categories
        </span>
      </a>

      {/* Leaderboard */}
      <a
        href="#"
        className="text-on-surface-variant flex flex-col items-center gap-1"
      >
        <span className="material-symbols-outlined text-xl">emoji_events</span>
        <span className="text-[12px] font-bold uppercase tracking-tight">
          Leaderboard
        </span>
      </a>

      {/* Profile */}
      <a
        href="#"
        className="text-on-surface-variant flex flex-col items-center gap-1"
      >
        <span className="material-symbols-outlined text-xl">person</span>
        <span className="text-[12px] font-bold uppercase tracking-tight">
          Profile
        </span>
      </a>
    </div>
  );
}

export default MobileSectionNav;
