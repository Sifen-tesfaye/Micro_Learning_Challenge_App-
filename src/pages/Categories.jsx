import { Link } from "react-router-dom";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";
import { categoriesTempData } from "../components/features/moduleDetail/tempData";

export default function Categories() {
  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
            Explore
          </p>
          <h1 className="mb-3 text-4xl font-black tracking-tight text-on-surface md:text-5xl">
            Explore Categories
          </h1>
          <p className="max-w-2xl text-lg text-on-surface-variant">
            Master new dimensions of expertise through curated challenge
            pathways.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoriesTempData.map((cat) => (
            <article
              key={cat.id}
              className="rounded-[1.5rem] border border-white/10 bg-[#0d1730]/95 p-6 transition-colors hover:bg-[#13264a]"
            >
              <h2 className="mb-2 text-2xl font-bold text-on-surface">
                {cat.name}
              </h2>
              <p className="mb-6 text-on-surface-variant">{cat.description}</p>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-secondary">
                  {cat.module_count} Modules
                </span>
                <Link
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-[#041225] transition hover:brightness-110"
                  to={`/categories/${cat.slug}`}
                >
                  View Path
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </LearningDetailLayout>
  );
}
