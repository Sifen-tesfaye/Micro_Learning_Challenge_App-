import { Link } from "react-router-dom";

export default function MobileBottomNav({ items = [] }) {
  return (
    <nav className="fixed bottom-0 z-50 flex w-full items-center justify-around border-t border-outline-variant/10 bg-surface/90 px-2 py-4 backdrop-blur-xl md:hidden">
      {items.map((item) => (
        <Link
          key={item.label}
          className={`flex flex-col items-center gap-1 ${
            item.isActive ? "text-primary" : "text-on-surface-variant"
          }`}
          to={item.to}
        >
          <span
            className="material-symbols-outlined"
            style={item.isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {item.icon}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
