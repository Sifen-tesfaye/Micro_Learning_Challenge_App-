import { Link } from "react-router-dom";

export default function ModuleDetailSidebar({ sidebar }) {
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
          <Link
            key={item.label}
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
            style={
              item.active
                ? {
                    color: "#919bff",
                    borderLeft: "2px solid #3cddc7",
                    backgroundColor: "rgba(20, 36, 73, 0.3)",
                  }
                : { color: "#9baad6" }
            }
            to={item.to}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}

        <div className="mt-8">
          <button
            className="w-full py-3 px-4 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(145,155,255,0.2)] active:scale-95 transition-transform"
            style={{
              background: "linear-gradient(to right, #919bff, #818cf8)",
              color: "#000b83",
            }}
            type="button"
          >
            {sidebar.ctaLabel}
          </button>
        </div>
      </div>
    </aside>
  );
}
