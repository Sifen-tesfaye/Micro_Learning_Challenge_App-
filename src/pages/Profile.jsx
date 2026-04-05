import { Link } from "react-router-dom";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";

export default function Profile() {
  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#0d1730]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
          Profile
        </p>
        <h1 className="mb-4 font-headline text-4xl font-black text-[#f4f7ff]">
          Your scholar profile is on the way
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#9baad6]">
          This page is now connected from the header and mobile navigation. We
          can build the full profile experience here next.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            className="rounded-full bg-primary px-6 py-3 font-bold text-[#071427] transition hover:brightness-110"
            to="/categories"
          >
            Back to Categories
          </Link>
          <Link
            className="rounded-full border border-white/10 bg-[#142345] px-6 py-3 font-bold text-[#f4f7ff] transition hover:bg-[#1d3261]"
            to="/dashboard"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    </LearningDetailLayout>
  );
}
