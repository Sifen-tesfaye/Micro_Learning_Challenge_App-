import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModuleDetailAside from "../components/features/moduleDetail/ModuleDetailAside";
import ModuleDetailContent from "../components/features/moduleDetail/ModuleDetailContent";
import ModuleDetailHero from "../components/features/moduleDetail/ModuleDetailHero";
import ModuleDetailQuiz from "../components/features/moduleDetail/ModuleDetailQuiz";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";
import {
  completeModuleAndUpdateStreak,
  getStoredStreakCount,
} from "../components/features/moduleDetail/streakStorage";
import { fetchModuleDetailById } from "../components/features/moduleDetail/tempData";

export default function ModuleDetail() {
  const { moduleId } = useParams();
  const [moduleData, setModuleData] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [streakCount, setStreakCount] = useState(() =>
    getStoredStreakCount(learningDetailChrome.defaultStreakCount),
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
      learningDetailChrome.defaultStreakCount,
    );

    setStreakCount(result.streakCount);
  }

  const activeLesson =
    moduleData?.lessons.find((lesson) => lesson.id === activeLessonId) ??
    moduleData?.primaryLesson ??
    null;

  return (
    <LearningDetailLayout streakLabel={`${streakCount} DAY STREAK`}>
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
    </LearningDetailLayout>
  );
}
