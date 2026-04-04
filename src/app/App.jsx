import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl shadow-[0_40px_0_0_rgba(222,229,255,0.08)]">
        <div className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tighter text-on-surface font-headline">
              Luminescent Scholar
            </span>
            <div className="hidden md:flex gap-6">
              <Link
                to="/dashboard"
                className="text-primary font-bold text-sm tracking-tight transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/categories"
                className="text-on-surface-variant text-sm tracking-tight hover:text-on-surface transition-colors"
              >
                Categories
              </Link>
              <Link
                to="/leaderboard"
                className="text-on-surface-variant text-sm tracking-tight hover:text-on-surface transition-colors"
              >
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none text-xs focus:ring-0 text-on-surface w-48 placeholder-on-surface-variant/50"
                placeholder="Search challenges..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-bright/40 rounded-full transition-colors active:scale-95">
                <span className="material-symbols-outlined">
                  local_fire_department
                </span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-bright/40 rounded-full transition-colors active:scale-95">
                <span className="material-symbols-outlined">military_tech</span>
              </button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container/30">
                <img
                  alt="User Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwXXzgv8d2J5YLz_IRAihz92QIEn051eG5gXrHTJGXVlTcDfcjK_WhXit7mFqISSJUV84TnD_R0LTaVQDLHXPJY2-k3tuOcgoM1gM5X8Llrj-iE4pHnAEePglkWPiBFO4nibFLKxHM9Gg8E1l7ZqErzOrk9GjoRVDYl12-L2OHjO8giytdq041NhCjSE-PDL3PqfhY20wEJZyyY7To7Vm6z_c_8xy1eyoArUK8mCNH14hHEK218tRaGMj_2-WKw6hA9ShIwIARUUE"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-28">
        <div className="w-full px-6">
          <Outlet />
          <div className="mt-10 text-center text-on-surface-variant">
            <p>Welcome to Luminescent Scholar. Use the navbar to navigate.</p>
          </div>
        </div>
      </main>
    </>
  );
}
