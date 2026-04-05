import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";

const notifications = [
  {
    title: "Daily challenge is ready",
    description: "Jump back in to keep your streak alive today.",
    time: "2 min ago",
  },
  {
    title: "New module unlocked",
    description: "You opened the next step in your Web Architecture path.",
    time: "1 hour ago",
  },
  {
    title: "Leaderboard update",
    description: "You climbed 3 spots after completing your recent quiz.",
    time: "Today",
  },
];

export default function Notifications() {
  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
            Inbox
          </p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">
            Notifications
          </h1>
        </div>

        <div className="space-y-4">
          {notifications.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-6"
            >
              <div className="mb-2 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-on-surface">{item.title}</h2>
                <span className="text-sm text-on-surface-variant">{item.time}</span>
              </div>
              <p className="text-on-surface-variant">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </LearningDetailLayout>
  );
}
