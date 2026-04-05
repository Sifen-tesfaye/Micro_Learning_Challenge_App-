import { Link, NavLink, useLocation } from "react-router-dom";
import { isDetailNavActive } from "../shared/detailNav";

export default function ModuleDetailSidebar({ sidebar }) {
  const { pathname } = useLocation();

  return (
    <aside
      className="z-10 h-screen w-64 fixed left-0 top-0 hidden lg:flex flex-col pt-20 border-r"
      style={{
        backgroundColor: "#081329",
        borderColor: "rgba(56, 71, 109, 0.2)",
      }}
    >
      <div className="flex flex-col gap-y-2 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-black" style={{ color: "#dee5ff" }}>
            {sidebar.title}
          </h3>
          <p
            className="text-xs uppercase tracking-widest opacity-70"
            style={{ color: "#9baad6" }}
          >
            {sidebar.subtitle}
          </p>
        </div>

        {sidebar.items.map((item) => (
          <NavLink
            key={item.label}
            className={() =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                isDetailNavActive(pathname, item.to)
                  ? "border-l-2 border-[#3cddc7] bg-[#142449]/60 text-[#919bff]"
                  : "text-[#9baad6] hover:bg-[#142449]/40 hover:text-[#dee5ff]"
              }`
            }
            to={item.to}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-medium text-sm">{item.label}</span>
          </NavLink>
        ))}

        <div className="mt-8">
          <Link
            className="block w-full rounded-xl py-3 px-4 text-center font-bold text-sm shadow-[0_0_20px_rgba(145,155,255,0.2)] active:scale-95 transition-transform"
            style={{
              background: "linear-gradient(to right, #919bff, #818cf8)",
              color: "#000b83",
            }}
            to={sidebar.ctaTo || "/signup"}
          >
            {sidebar.ctaLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
