import { useEffect, useState } from "react";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";

const fallbackDashboard = {
  stats: { points: 0, streak: 0, level: 0 },
  feature: {
    title: "Daily Coding Challenge",
    description: "Solve today's prompt to keep your learning momentum alive.",
    tag: "Featured",
    time: "Open all day",
    reward: "+120 XP",
  },
  progress: {
    title: "Choose your next path",
    description: "Start a category to unlock live progress tracking.",
    percent: 0,
  },
  activity: [18, 40, 55, 35, 70, 45, 82],
  achievements: ["First Challenge", "Fast Learner", "Ready for a Streak"],
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState(fallbackDashboard.stats);
  const [feature, setFeature] = useState(fallbackDashboard.feature);
  const [progress, setProgress] = useState(fallbackDashboard.progress);
  const [activity, setActivity] = useState(fallbackDashboard.activity);
  const [achievements, setAchievements] = useState(
    fallbackDashboard.achievements,
  );

  useEffect(() => {
    let isActive = true;

    async function fetchDashboard() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/dashboard/");
        if (!response.ok) {
          throw new Error("Dashboard API is not available yet.");
        }

        const data = await response.json();
        if (!isActive) {
          return;
        }

        setStats(data.stats ?? fallbackDashboard.stats);
        setFeature(data.feature ?? fallbackDashboard.feature);
        setProgress(data.progress ?? fallbackDashboard.progress);
        setActivity(data.activity ?? fallbackDashboard.activity);
        setAchievements(data.achievements ?? fallbackDashboard.achievements);
      } catch (fetchError) {
        if (isActive) {
          setError(fetchError.message);
          setStats(fallbackDashboard.stats);
          setFeature(fallbackDashboard.feature);
          setProgress(fallbackDashboard.progress);
          setActivity(fallbackDashboard.activity);
          setAchievements(fallbackDashboard.achievements);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchDashboard();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-[#0d1730]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
            Dashboard
          </p>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-on-surface md:text-5xl">
            Track your progress
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Keep up with your learning streak, current challenges, and recent
            module activity from one place.
          </p>
          {error ? (
            <p className="mt-4 text-sm text-amber-200">
              {error} Showing fallback dashboard data.
            </p>
          ) : null}
        </div>

        {loading ? (
          <div className="text-center text-on-surface-variant">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d1730]/95 p-6 lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                {feature.tag}
              </span>
              <h2 className="mt-3 text-3xl font-bold text-on-surface">
                {feature.title}
              </h2>
              <p className="mt-3 max-w-2xl text-on-surface-variant">
                {feature.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-primary">
                  {feature.time}
                </span>
                <span className="rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-secondary">
                  {feature.reward}
                </span>
              </div>

              <button
                className="mt-6 rounded-xl bg-primary px-5 py-3 font-bold text-[#041225] transition hover:brightness-110"
                type="button"
              >
                Start Challenge
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-5">
                <p className="text-sm text-on-surface-variant">Points</p>
                <h3 className="mt-2 text-3xl font-black text-on-surface">
                  {stats.points}
                </h3>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-5">
                <p className="text-sm text-on-surface-variant">Streak</p>
                <h3 className="mt-2 text-3xl font-black text-on-surface">
                  {stats.streak} days
                </h3>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-5">
                <p className="text-sm text-on-surface-variant">Level</p>
                <h3 className="mt-2 text-3xl font-black text-on-surface">
                  {stats.level}
                </h3>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-5">
              <h3 className="text-xl font-bold text-on-surface">
                {progress.title}
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                {progress.description}
              </p>

              <div className="mt-5 h-3 w-full rounded-full bg-[#081122]">
                <div
                  className="h-3 rounded-full bg-secondary"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-secondary">
                {progress.percent}% completed
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-5">
              <h3 className="mb-5 text-xl font-bold text-on-surface">
                Weekly Activity
              </h3>

              <div className="flex h-40 items-end gap-3">
                {activity.map((value, index) => (
                  <div
                    key={`${value}-${index}`}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-primary to-secondary"
                    style={{ height: `${Math.max(value, 12)}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-5 lg:col-span-3">
              <h3 className="mb-4 text-xl font-bold text-on-surface">
                Achievements
              </h3>

              <div className="flex flex-wrap gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="rounded-full border border-white/10 bg-[#101a31] px-4 py-2 text-sm text-on-surface"
                  >
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </LearningDetailLayout>
  );
}
