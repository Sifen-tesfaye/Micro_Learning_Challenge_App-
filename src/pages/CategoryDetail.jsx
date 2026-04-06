import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryHeader from "../components/features/CatagoryDetail/CatagoryHeader";
import FeaturedChallengeSection from "../components/features/CatagoryDetail/FeaturedChallengeSection";
import ModuleButtonsNav from "../components/features/CatagoryDetail/ModuleButtonsNav";
import ModuleCard from "../components/features/CatagoryDetail/ModuleCard";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";
import { fetchCategoryDetailById } from "../components/features/CatagoryDetail/categoryDetailData";

function normalizeApiCategory(category, id) {
  return {
    id: category.id ?? id,
    title: category.title ?? category.name ?? "Untitled Category",
    description:
      category.description ?? "Explore the available modules in this category.",
    modules: Array.isArray(category.modules) ? category.modules : [],
  };
}

export default function CategoryDetail() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [apiCategory, setApiCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilterKey, setActiveFilterKey] = useState("all");

  useEffect(() => {
    let isActive = true;

    async function loadCategoryDetail() {
      setIsLoading(true);
      setError("");

      const localCategory = await fetchCategoryDetailById(id);
      if (localCategory) {
        if (isActive) {
          setCategoryData(localCategory);
          setApiCategory(null);
          setActiveFilterKey("all");
          setIsLoading(false);
        }
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categories/${id}/`);
        if (!response.ok) {
          throw new Error("Category not found.");
        }

        const data = await response.json();
        if (isActive) {
          setCategoryData(null);
          setApiCategory(normalizeApiCategory(data, id));
        }
      } catch (fetchError) {
        if (isActive) {
          setCategoryData(null);
          setApiCategory(null);
          setError(fetchError.message);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadCategoryDetail();

    return () => {
      isActive = false;
    };
  }, [id]);

  const filtersWithCounts =
    categoryData?.filters.map((filter) => ({
      ...filter,
      count:
        filter.key === "all"
          ? categoryData.modules.length
          : categoryData.modules.filter((module) =>
              module.filterTags?.includes(filter.key),
            ).length,
    })) ?? [];

  const visibleModules =
    activeFilterKey === "all"
      ? categoryData?.modules ?? []
      : (categoryData?.modules ?? []).filter((module) =>
          module.filterTags?.includes(activeFilterKey),
        );

  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <div className="mx-auto min-h-screen max-w-[1200px] px-0 py-6 md:px-0 md:py-2">
        {isLoading ? (
          <section className="flex min-h-[60vh] items-center justify-center">
            <p className="text-lg text-on-surface-variant">
              Loading category detail...
            </p>
          </section>
        ) : null}

        {!isLoading && !categoryData && !apiCategory ? (
          <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold text-on-surface">
              Category not found
            </h1>
            <p className="max-w-xl text-on-surface-variant">
              {error || (
                <>
                  No category matched the id{" "}
                  <span className="font-semibold">{id}</span>.
                </>
              )}
            </p>
            <Link
              className="rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-3 font-bold text-on-primary"
              to="/categories"
            >
              Back to Categories
            </Link>
          </section>
        ) : null}

        {!isLoading && categoryData ? (
          <>
            <CategoryHeader
              breadcrumbs={categoryData.breadcrumbs}
              description={categoryData.description}
              highlightedTitle={categoryData.highlightedTitle}
              progress={categoryData.progress}
              title={categoryData.title}
            />

            <ModuleButtonsNav
              activeFilterKey={activeFilterKey}
              items={filtersWithCounts}
              onFilterChange={setActiveFilterKey}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {visibleModules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>

            {visibleModules.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#101a31] px-6 py-10 text-center text-[#9baad6]">
                No modules match this filter yet.
              </div>
            ) : null}

            <FeaturedChallengeSection challenge={categoryData.featuredChallenge} />
          </>
        ) : null}

        {!isLoading && apiCategory ? (
          <>
            <section className="rounded-[2rem] border border-white/10 bg-[#0d1730]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <Link
                className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary"
                to="/categories"
              >
                <span className="material-symbols-outlined text-base">
                  arrow_back
                </span>
                Back to Categories
              </Link>

              <h1 className="text-4xl font-black tracking-tight text-on-surface">
                {apiCategory.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-on-surface-variant">
                {apiCategory.description}
              </p>
            </section>

            <section className="mt-8">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-on-surface">Modules</h2>
                <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                  {apiCategory.modules.length} total
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {apiCategory.modules.map((module) => (
                  <article
                    key={module.id}
                    className="rounded-[1.5rem] border border-white/10 bg-[#101a31] p-6 transition-all hover:-translate-y-1 hover:border-secondary/70"
                  >
                    <h3 className="text-xl font-bold text-on-surface">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-on-surface-variant">
                      {module.description ??
                        `This module includes ${module.lessons ?? 0} lessons.`}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4 text-sm">
                      <span className="text-secondary">
                        {module.lessons ?? 0} lessons
                      </span>
                      <button
                        className="rounded-xl bg-primary px-4 py-2 font-bold text-[#041225]"
                        type="button"
                      >
                        Start
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : null}
      </div>
    </LearningDetailLayout>
  );
}
