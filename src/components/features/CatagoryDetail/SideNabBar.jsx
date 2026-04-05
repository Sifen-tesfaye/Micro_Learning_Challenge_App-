import { Link } from "react-router-dom";

export default function SideNavBar({ action, navItems = [], profile }) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-outline-variant/20 bg-surface-container-low pt-24 lg:flex">
      <div className="flex flex-col gap-y-2 p-6">
        <div className="mb-6">
          <p className="font-headline text-lg font-black text-on-surface">
            {profile?.name}
          </p>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant">
            {profile?.title}
          </p>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                item.isActive
                  ? "border-l-2 border-secondary bg-gradient-to-r from-surface-variant to-transparent text-primary"
                  : "rounded-lg text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface"
              }`}
              to={item.to}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
        <Link
          className="mt-8 block w-full rounded-xl bg-gradient-to-r from-primary to-primary-container px-4 py-3 text-center text-sm font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-95"
          to={action?.to || "/signup"}
        >
          {action?.label}
        </Link>
      </div>
    </aside>
  );
}
