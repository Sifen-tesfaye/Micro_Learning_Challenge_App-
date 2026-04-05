import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";

export default function Dashboard() {
  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-[#0d1730]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-12">
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
        </div>
      </section>
    </LearningDetailLayout>
  );
}
