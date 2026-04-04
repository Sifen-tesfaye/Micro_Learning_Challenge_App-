export default function ModuleDetailAside({
  moduleData,
  activeLesson,
  onLessonChange,
}) {
  return (
    <div className="md:col-span-4 space-y-6">
      <div
        className="p-6 rounded-3xl border"
        style={{
          backgroundColor: "rgba(20, 36, 73, 0.6)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(56, 71, 109, 0.1)",
        }}
      >
        <h4
          className="text-xs font-black uppercase tracking-[0.2em] mb-4"
          style={{ color: "#3cddc7" }}
        >
          Module Overview
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Status", value: moduleData.status },
            { label: "Level", value: moduleData.level },
            { label: "Time", value: `${moduleData.estimated_time} min` },
            {
              label: "Parts",
              value: `${moduleData.module_total_parts} lessons`,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-4"
              style={{ backgroundColor: "#081329" }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#9baad6" }}>
                {item.label}
              </p>
              <p className="mt-2 text-sm font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="p-6 rounded-3xl border"
        style={{
          backgroundColor: "rgba(20, 36, 73, 0.6)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(56, 71, 109, 0.1)",
        }}
      >
        <h4
          className="text-xs font-black uppercase tracking-[0.2em] mb-4"
          style={{ color: "#3cddc7" }}
        >
          Core Concepts
        </h4>
        <div className="space-y-4">
          {moduleData.module_ui.concepts.map((concept) => (
            <div key={concept.title} className="flex items-start gap-3">
              <span
                className="material-symbols-outlined text-sm mt-1"
                style={{ color: "#919bff" }}
              >
                lens
              </span>
              <div>
                <p className="text-sm font-bold">{concept.title}</p>
                <p className="text-xs" style={{ color: "#9baad6" }}>
                  {concept.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="p-6 rounded-3xl border"
        style={{
          backgroundColor: "rgba(12, 25, 52, 0.9)",
          borderColor: "rgba(56, 71, 109, 0.1)",
        }}
      >
        <h4
          className="text-xs font-black uppercase tracking-[0.2em] mb-4"
          style={{ color: "#3cddc7" }}
        >
          Lesson Stack
        </h4>
        <div className="space-y-3">
          {moduleData.lessons.map((lesson) => {
            const isActive = lesson.id === activeLesson?.id;

            return (
              <button
                key={lesson.id}
                className="w-full rounded-2xl px-4 py-3 text-left transition-all"
                onClick={() => onLessonChange(lesson.id)}
                style={{
                  backgroundColor: isActive ? "rgba(20, 36, 73, 0.95)" : "#081329",
                  border: isActive
                    ? "1px solid rgba(60, 221, 199, 0.3)"
                    : "1px solid rgba(56, 71, 109, 0.15)",
                }}
                type="button"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined mt-0.5"
                    style={{ color: isActive ? "#3cddc7" : "#919bff" }}
                  >
                    {lesson.lesson_kind === "continued_video" ? "queue_play_next" : "play_circle"}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{lesson.title}</p>
                    <p className="text-[11px]" style={{ color: "#9baad6" }}>
                      {lesson.presentation_label}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="p-6 rounded-3xl border flex flex-col items-center text-center"
        style={{
          background: "linear-gradient(to bottom right, #172b54, #0c1934)",
          borderColor: "rgba(56, 71, 109, 0.1)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-3 border"
          style={{
            backgroundColor: "rgba(221, 184, 255, 0.1)",
            borderColor: "rgba(221, 184, 255, 0.3)",
          }}
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={{
              color: "#ddb8ff",
              fontVariationSettings: "'FILL' 1",
            }}
          >
            military_tech
          </span>
        </div>
        <h4 className="text-sm font-bold">{moduleData.module_ui.achievement.title}</h4>
        <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "#9baad6" }}>
          {moduleData.module_ui.achievement.xpLabel}
        </p>
      </div>

      <div
        className="p-6 rounded-3xl border"
        style={{
          backgroundColor: "rgba(20, 36, 73, 0.4)",
          borderColor: "rgba(56, 71, 109, 0.1)",
        }}
      >
        <h4
          className="text-xs font-black uppercase tracking-[0.2em] mb-4"
          style={{ color: "#ddb8ff" }}
        >
          Study Tips
        </h4>
        <div className="space-y-3">
          {moduleData.module_ui.studyTips.map((tip) => (
            <p key={tip} className="text-sm" style={{ color: "#9baad6" }}>
              {tip}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
