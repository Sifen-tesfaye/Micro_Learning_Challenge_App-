import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModuleDetailAside from "../components/features/moduleDetail/ModuleDetailAside";
import ModuleDetailContent from "../components/features/moduleDetail/ModuleDetailContent";
import ModuleDetailFooter from "../components/features/moduleDetail/ModuleDetailFooter";
import ModuleDetailHeader from "../components/features/moduleDetail/ModuleDetailHeader";
import ModuleDetailHero from "../components/features/moduleDetail/ModuleDetailHero";
import ModuleDetailQuiz from "../components/features/moduleDetail/ModuleDetailQuiz";
import ModuleDetailSidebar from "../components/features/moduleDetail/ModuleDetailSidebar";
import MobileSectionNav from "../components/features/landing/MobileSectionNav";
import { landingPageData } from "../components/features/landing/landingData";
import {
  completeModuleAndUpdateStreak,
  getStoredStreakCount,
} from "../components/features/moduleDetail/streakStorage";
import {
  fetchModuleDetailById,
  moduleDetailChrome,
} from "../components/features/moduleDetail/tempData";

export default function ModuleDetail() {
  const { moduleId } = useParams();
  const [moduleData, setModuleData] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [streakCount, setStreakCount] = useState(() =>
    getStoredStreakCount(moduleDetailChrome.defaultStreakCount),
  );

  useEffect(() => {
    let isActive = true;

    async function loadModuleData() {
      setIsLoading(true);
      const data = await fetchModuleDetailById(moduleId);

      if (isActive) {
        setModuleData(data);
        setActiveLessonId(data?.primaryLesson?.id ?? null);
        setIsLoading(false);
      }
    }

    loadModuleData();

    return () => {
      isActive = false;
    };
  }, [moduleId]);

  function handleModuleCompleted() {
    const result = completeModuleAndUpdateStreak(
      moduleId,
      moduleDetailChrome.defaultStreakCount,
    );

    setStreakCount(result.streakCount);
  }

  const activeLesson =
    moduleData?.lessons.find((lesson) => lesson.id === activeLessonId) ??
    moduleData?.primaryLesson ??
    null;

  return (
    <div
      className="min-h-screen bg-surface text-on-surface"
      style={{ backgroundColor: "#060e20", color: "#dee5ff" }}
    >
      <ModuleDetailHeader
        brand={moduleDetailChrome.brand}
        profileImage={moduleDetailChrome.profileImage}
        streakLabel={`${streakCount} DAY STREAK`}
      />

      <div className="flex pt-20">
        <ModuleDetailSidebar sidebar={moduleDetailChrome.sidebar} />

        <main className="flex-1 lg:ml-64 p-6 pb-32 md:p-12 md:pb-12 w-full">
          {isLoading ? (
            <section className="min-h-[60vh] flex items-center justify-center">
              <p className="text-lg" style={{ color: "#9baad6" }}>
                Loading module...
              </p>
            </section>
          ) : null}

          {!isLoading && !moduleData ? (
            <section className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-3xl font-bold">Module not found</h1>
              <p className="max-w-xl" style={{ color: "#9baad6" }}>
                No module matched the id{" "}
                <span className="font-semibold">{moduleId}</span> in the
                temporary data source.
              </p>
              <Link
                className="px-6 py-3 rounded-full font-bold text-sm"
                style={{
                  background: "linear-gradient(to right, #919bff, #818cf8)",
                  color: "#000b83",
                }}
                to="/categories"
              >
                Back to Categories
              </Link>
            </section>
          ) : null}

          {!isLoading && moduleData ? (
            <>
              <ModuleDetailHero moduleData={moduleData} />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                <ModuleDetailContent
                  activeLesson={activeLesson}
                  moduleData={moduleData}
                  onLessonChange={setActiveLessonId}
                />
                <ModuleDetailAside
                  activeLesson={activeLesson}
                  moduleData={moduleData}
                  onLessonChange={setActiveLessonId}
                />
              </div>

              <ModuleDetailQuiz
                moduleId={moduleId}
                navigation={moduleData.navigation}
                onModuleCompleted={handleModuleCompleted}
                quiz={moduleData.module_ui.quiz}
              />
            </>
          ) : null}
        </main>
      </div>

      <ModuleDetailFooter
        brand={moduleDetailChrome.brand}
        footer={moduleDetailChrome.footer}
      />
      <MobileSectionNav items={landingPageData.mobileNav} />
    </div>
  );
}
