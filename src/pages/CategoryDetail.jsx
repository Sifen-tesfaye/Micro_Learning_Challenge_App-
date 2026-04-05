import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryHeader from "../components/features/CatagoryDetail/CatagoryHeader";
import FeaturedChallengeSection from "../components/features/CatagoryDetail/FeaturedChallengeSection";
import ModuleButtonsNav from "../components/features/CatagoryDetail/ModuleButtonsNav";
import ModuleCard from "../components/features/CatagoryDetail/ModuleCard";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";
import {
  fetchCategoryDetailById,
} from "../components/features/CatagoryDetail/categoryDetailData";

export default function CategoryDetail() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilterKey, setActiveFilterKey] = useState("all");

  useEffect(() => {
    let isActive = true;

    async function loadCategoryDetail() {
      setIsLoading(true);
      const data = await fetchCategoryDetailById(id);

      if (isActive) {
        setCategoryData(data);
        setActiveFilterKey("all");
        setIsLoading(false);
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

        {!isLoading && !categoryData ? (
          <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold text-on-surface">
              Category not found
            </h1>
            <p className="max-w-xl text-on-surface-variant">
              No category matched the id <span className="font-semibold">{id}</span> in the
              temporary data source.
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
      </div>
    </LearningDetailLayout>
  );
}
