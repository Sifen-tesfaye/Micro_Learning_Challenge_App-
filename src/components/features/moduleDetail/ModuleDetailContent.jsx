export default function ModuleDetailContent({
  moduleData,
  activeLesson,
  onLessonChange,
}) {
  const lessonPosition =
    moduleData.lessons.findIndex((lesson) => lesson.id === activeLesson?.id) + 1;

  return (
    <div className="md:col-span-8 flex flex-col gap-8">
      <div
        className="relative group aspect-video rounded-3xl overflow-hidden"
        style={{
          backgroundColor: "#142449",
          border: "1px solid rgba(56, 71, 109, 0.2)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          alt={activeLesson?.title ?? moduleData.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
          src={activeLesson?.thumbnail ?? moduleData.module_ui.hero_image}
        />
        <div
          className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]"
          style={{ backgroundColor: "rgba(6, 14, 32, 0.4)" }}
        >
          <button
            className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
            style={{
              backgroundColor: "rgba(145, 155, 255, 0.2)",
              border: "1px solid rgba(145, 155, 255, 0.5)",
              backdropFilter: "blur(10px)",
            }}
            type="button"
          >
            <span
              className="material-symbols-outlined text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
          </button>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <span
            className="px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase border"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
              borderColor: "rgba(56, 71, 109, 0.1)",
              color: "#9baad6",
            }}
          >
            {`Lesson ${String(lessonPosition).padStart(2, "0")} • ${
              activeLesson?.presentation_label ?? "Module lesson"
            }`}
          </span>
          <div className="flex gap-2">
            <span className="material-symbols-outlined cursor-pointer" style={{ color: "#9baad6" }}>
              subtitles
            </span>
            <span className="material-symbols-outlined cursor-pointer" style={{ color: "#9baad6" }}>
              settings
            </span>
          </div>
        </div>
      </div>

      <div
        className="rounded-3xl border p-5"
        style={{
          backgroundColor: "rgba(12, 25, 52, 0.78)",
          borderColor: "rgba(56, 71, 109, 0.15)",
        }}
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#3cddc7" }}>
              Lesson Flow
            </p>
            <h3 className="mt-2 text-xl font-bold">Move through the module in order</h3>
          </div>
          <p className="text-xs" style={{ color: "#9baad6" }}>
            {`${moduleData.module_completed_parts}/${moduleData.module_total_parts} parts completed`}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {moduleData.lessons.map((lesson) => {
            const isActive = lesson.id === activeLesson?.id;

            return (
              <button
                key={lesson.id}
                className="rounded-2xl border p-4 text-left transition-all"
                onClick={() => onLessonChange(lesson.id)}
                style={{
                  backgroundColor: isActive ? "rgba(20, 36, 73, 0.95)" : "#081329",
                  borderColor: isActive
                    ? "rgba(60, 221, 199, 0.35)"
                    : "rgba(56, 71, 109, 0.2)",
                  boxShadow: isActive ? "0 0 0 1px rgba(60, 221, 199, 0.12)" : "none",
                }}
                type="button"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{
                      backgroundColor: isActive ? "rgba(60, 221, 199, 0.18)" : "#0c1934",
                      color: isActive ? "#3cddc7" : "#9baad6",
                    }}
                  >
                    {String(lesson.order).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold">{lesson.title}</p>
                    <p className="mt-1 text-[11px]" style={{ color: "#9baad6" }}>
                      {lesson.presentation_label}
                    </p>
                    <p className="mt-2 text-xs" style={{ color: "#9baad6" }}>
                      {lesson.summary}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-8 rounded-full" style={{ backgroundColor: "#3cddc7" }} />
          <h2 className="text-2xl font-bold tracking-tight">
            {activeLesson?.title ?? "Lesson Overview"}
          </h2>
        </div>

        <p className="text-sm uppercase tracking-[0.2em]" style={{ color: "#919bff" }}>
          {`${activeLesson?.estimated_minutes ?? 0} minute lesson`}
        </p>

        <p className="leading-relaxed text-lg" style={{ color: "#9baad6" }}>
          {activeLesson?.summary}
        </p>

        <div
          className="rounded-3xl border p-6 md:p-8 space-y-5"
          style={{
            backgroundColor: "rgba(20, 36, 73, 0.52)",
            borderColor: "rgba(56, 71, 109, 0.18)",
          }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border"
              style={{
                borderColor: "rgba(60, 221, 199, 0.25)",
                backgroundColor: "rgba(60, 221, 199, 0.08)",
                color: "#3cddc7",
              }}
            >
              {activeLesson?.presentation_label}
            </span>
            <span
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border"
              style={{
                borderColor: "rgba(145, 155, 255, 0.25)",
                backgroundColor: "rgba(145, 155, 255, 0.08)",
                color: "#919bff",
              }}
            >
              {activeLesson?.video_url ? "CDN stream" : "Uploaded file"}
            </span>
          </div>

          <div
            className="prose prose-invert max-w-none [&_p]:text-[#9baad6] [&_code]:text-[#dee5ff] [&_code]:bg-[#081329] [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded-md"
            style={{ color: "#9baad6" }}
            dangerouslySetInnerHTML={{ __html: activeLesson?.content ?? "" }}
          />
        </div>

        <div
          className="leading-relaxed italic pl-6 py-3 rounded-r-2xl"
          style={{
            color: "#9baad6",
            borderLeft: "2px solid rgba(56, 71, 109, 0.3)",
            backgroundColor: "rgba(8, 19, 41, 0.65)",
          }}
        >
          {activeLesson?.lesson_kind === "continued_video"
            ? "This lesson continues the previous video, so the learner can stay in flow while focusing on the next concept."
            : activeLesson?.video_url
              ? "This lesson opens a fresh video segment, giving the topic its own focused walkthrough."
              : "This lesson uses an uploaded lesson file rather than a streaming URL, which still fits the backend validation rule."}
        </div>
      </div>
    </div>
  );
}
