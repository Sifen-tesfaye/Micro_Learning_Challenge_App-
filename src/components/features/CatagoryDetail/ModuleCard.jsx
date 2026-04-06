import { Link } from "react-router-dom";

export default function ModuleCard({ module }) {
  const {
    avatars = [],
    buttonText = "Resume Learning",
    colSpan = "md:col-span-4",
    completedModules = null,
    ctaTo = "/modules/focus-fundamentals",
    description = "Module description",
    enrolledCount = 0,
    imageUrl = null,
    isLocked = false,
    prerequisite = "Mastering Flexbox",
    progress = 0,
    status = "Active",
    statusTone = "secondary",
    time = "45 mins",
    title = "Module Title",
    totalModules = null,
    variant = "default",
  } = module;

  if (isLocked) {
    return (
      <div className="glass-card relative rounded-xl border-t border-white/5 p-8 opacity-60 grayscale-[0.5] md:col-span-4">
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="rounded-full border border-outline-variant/30 bg-surface-container/90 p-4 shadow-2xl backdrop-blur-md">
            <span
              className="material-symbols-outlined text-3xl text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lock
            </span>
          </div>
        </div>
        <div className="relative z-10 opacity-40">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-surface-variant px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {status}
            </span>
          </div>
          <h3 className="mb-2 font-headline text-xl font-bold text-on-surface">
            {title}
          </h3>
          <p className="mb-8 text-xs text-on-surface-variant">{description}</p>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">
              lock_clock
            </span>
            Prerequisite: {prerequisite}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "image") {
    return (
      <div
        className={`glass-card flex flex-col gap-8 rounded-xl border border-white/10 bg-[#0d1730]/95 p-8 transition-all duration-300 hover:border-secondary/35 hover:bg-[#15284a] md:flex-row ${colSpan}`}
      >
        <div className="relative h-48 overflow-hidden rounded-xl md:h-auto md:w-1/3">
          <img
            alt={title}
            className="h-full w-full object-cover"
            src={imageUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent" />
        </div>
        <div className="flex flex-col justify-between md:w-2/3">
          <div>
            <h3 className="mb-2 font-headline text-2xl font-bold text-on-surface">
              {title}
            </h3>
            <p className="text-sm text-on-surface-variant">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <img
                  key={`${avatar}-${index}`}
                  alt={`Scholar avatar ${index + 1}`}
                  className="h-8 w-8 rounded-full border-2 border-surface"
                  src={avatar}
                />
              ))}
              {enrolledCount > 0 ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-surface-container-highest text-[10px] font-bold">
                  +{enrolledCount}
                </div>
              ) : null}
            </div>
            <span className="text-xs text-on-surface-variant">
              Scholars currently studying
            </span>
            <div className="ml-auto">
              <Link
                className="rounded-xl border border-secondary/30 bg-secondary px-6 py-2 text-sm font-bold text-[#04111d] shadow-[0_10px_30px_rgba(60,221,199,0.16)] transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(60,221,199,0.3)]"
                to={ctaTo}
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group glass-card relative overflow-hidden rounded-xl border border-white/10 bg-[#0d1730]/95 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-[#15284a] ${colSpan}`}
    >
      <div className="absolute right-0 top-0 p-6 opacity-20 transition-opacity group-hover:opacity-40">
        <span className="material-symbols-outlined text-8xl">view_quilt</span>
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span
              className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
              style={{
                backgroundColor:
                  statusTone === "secondary"
                    ? "rgba(60, 221, 199, 0.1)"
                    : statusTone === "tertiary"
                      ? "rgba(221, 184, 255, 0.1)"
                      : "rgba(145, 155, 255, 0.1)",
                color:
                  statusTone === "secondary"
                    ? "#3cddc7"
                    : statusTone === "tertiary"
                      ? "#ddb8ff"
                      : "#919bff",
                borderColor:
                  statusTone === "secondary"
                    ? "rgba(60, 221, 199, 0.2)"
                    : statusTone === "tertiary"
                      ? "rgba(221, 184, 255, 0.2)"
                      : "rgba(145, 155, 255, 0.2)",
              }}
            >
              {status}
            </span>
            <span className="flex items-center gap-1 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              {time}
            </span>
          </div>
          <h3 className="mb-2 font-headline text-2xl font-bold text-on-surface">
            {title}
          </h3>
          <p className="max-w-md text-sm text-on-surface-variant">
            {description}
          </p>
        </div>
        {progress > 0 || (completedModules && totalModules) ? (
          <div className="mt-8">
            <div className="mb-2 flex items-end justify-between">
              <span className="text-xs font-bold text-on-surface">
                {completedModules}/{totalModules} Modules Completed
              </span>
              <span className="text-xs font-medium text-on-surface-variant">
                {progress}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
              <div
                className="h-full bg-gradient-to-r from-secondary to-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <Link
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-secondary/25 bg-tertiary px-5 py-2.5 text-sm font-bold text-[#041225] shadow-[0_12px_30px_rgba(145,155,255,0.18)] transition-all hover:gap-3 hover:brightness-110"
              to={ctaTo}
            >
              {buttonText}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        ) : (
          <Link
            className="mt-6 block w-full rounded-lg border border-white/10 bg-[#142345] py-2 text-center text-sm font-bold text-[#f3f6ff] transition-colors hover:border-primary/30 hover:bg-[#1d3261]"
            to={ctaTo}
          >
            {buttonText}
          </Link>
        )}
      </div>
      {status === "Active" ? (
        <div className="absolute left-0 top-1/4 h-1/2 w-[2px] rounded-full bg-secondary shadow-[0_0_15px_#3cddc7]" />
      ) : null}
    </div>
  );
}
