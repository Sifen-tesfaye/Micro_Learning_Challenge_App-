export default function ModuleDetailHero({ moduleData }) {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-end mb-4 gap-6">
        <div>
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "#3cddc7" }}
          >
            {`${moduleData.categoryData?.name ?? "Learning Path"} • Module ${String(
              moduleData.moduleNumber,
            ).padStart(2, "0")} of ${moduleData.totalModules}`}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter mt-1">
            {moduleData.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base" style={{ color: "#9baad6" }}>
            {moduleData.description}
          </p>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-2xl font-black">{`${moduleData.module_progress_percent}%`}</span>
          <p
            className="text-[10px] uppercase tracking-widest font-bold"
            style={{ color: "#9baad6" }}
          >
            Module Progress
          </p>
        </div>
      </div>

      <div
        className="h-1.5 w-full rounded-full overflow-hidden"
        style={{ backgroundColor: "#0c1934" }}
      >
        <div
          className="h-full rounded-full shadow-[0_0_10px_rgba(60,221,199,0.3)]"
          style={{
            width: `${moduleData.module_progress_percent}%`,
            background: "linear-gradient(to right, #3cddc7, #919bff)",
          }}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border"
          style={{
            borderColor: "rgba(60, 221, 199, 0.25)",
            color: "#3cddc7",
            backgroundColor: "rgba(60, 221, 199, 0.08)",
          }}
        >
          {moduleData.level}
        </span>
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border"
          style={{
            borderColor: "rgba(145, 155, 255, 0.25)",
            color: "#919bff",
            backgroundColor: "rgba(145, 155, 255, 0.08)",
          }}
        >
          {`${moduleData.estimated_time} min`}
        </span>
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border"
          style={{
            borderColor: "rgba(221, 184, 255, 0.25)",
            color: "#ddb8ff",
            backgroundColor: "rgba(221, 184, 255, 0.08)",
          }}
        >
          {`${moduleData.lessons.length} lessons`}
        </span>
      </div>
    </div>
  );
}
