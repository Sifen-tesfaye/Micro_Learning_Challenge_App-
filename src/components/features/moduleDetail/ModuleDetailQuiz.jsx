import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ModuleDetailQuiz({
  moduleId,
  quiz,
  navigation,
  onModuleCompleted,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submissionState, setSubmissionState] = useState(null);
  const hasCompletedQuiz =
    submissionState?.status === "correct" ||
    submissionState?.status === "incorrect" ||
    submissionState?.status === "skipped";

  useEffect(() => {
    setSelectedAnswer(null);
    setSubmissionState(null);
  }, [quiz, moduleId]);

  function markModuleCompleted() {
    if (typeof onModuleCompleted === "function") {
      onModuleCompleted();
    }
  }

  function handleSubmit() {
    if (!selectedAnswer) {
      setSubmissionState({
        status: "idle",
        message: "Choose an answer before submitting.",
      });
      return;
    }

    const isCorrect = selectedAnswer === quiz.correctAnswer;

    setSubmissionState({
      status: isCorrect ? "correct" : "incorrect",
      message: isCorrect
        ? "Correct answer. Nice work moving through this module."
        : `Wrong answer. The correct answer is ${quiz.correctAnswer}.`,
    });
    markModuleCompleted();
  }

  function handleSkipLesson() {
    setSelectedAnswer(quiz.correctAnswer);
    setSubmissionState({
      status: "skipped",
      message: `Lesson skipped. The correct answer is ${quiz.correctAnswer}.`,
    });
    markModuleCompleted();
  }

  return (
    <section
      className="mt-16 mb-24 pt-16 border-t"
      style={{ borderColor: "rgba(56, 71, 109, 0.1)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border"
            style={{
              backgroundColor: "rgba(145, 155, 255, 0.1)",
              borderColor: "rgba(145, 155, 255, 0.2)",
              color: "#919bff",
            }}
          >
            Knowledge Check
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{quiz.question}</h3>
        </div>

        <div className="space-y-3">
          {quiz.answers.map((answer) => {
            const isSelected = selectedAnswer === answer.id;
            const isCorrectAnswer = answer.id === quiz.correctAnswer;
            const hasSubmitted =
              submissionState?.status === "correct" ||
              submissionState?.status === "incorrect" ||
              submissionState?.status === "skipped";
            const showCorrectState = hasSubmitted && isCorrectAnswer;
            const showIncorrectState =
              hasSubmitted &&
              isSelected &&
              !isCorrectAnswer &&
              submissionState?.status === "incorrect";

            return (
              <button
                key={answer.id}
                className="group relative p-5 rounded-2xl cursor-pointer transition-all active:scale-[0.99] w-full text-left"
                disabled={hasCompletedQuiz}
                onClick={() => setSelectedAnswer(answer.id)}
                style={{
                  backgroundColor: "#081329",
                  border: showCorrectState
                    ? "2px solid rgba(60, 221, 199, 0.5)"
                    : showIncorrectState
                      ? "2px solid rgba(253, 111, 133, 0.6)"
                      : isSelected
                        ? "2px solid rgba(60, 221, 199, 0.5)"
                        : "1px solid rgba(56, 71, 109, 0.2)",
                  boxShadow: isSelected || showCorrectState
                    ? "0 0 30px rgba(60,221,199,0.1)"
                    : "none",
                  cursor: hasCompletedQuiz ? "default" : "pointer",
                }}
                type="button"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: showCorrectState
                        ? "rgba(60, 221, 199, 0.2)"
                        : showIncorrectState
                          ? "rgba(253, 111, 133, 0.15)"
                          : isSelected
                            ? "rgba(60, 221, 199, 0.2)"
                            : "#0c1934",
                      color: showCorrectState
                        ? "#3cddc7"
                        : showIncorrectState
                          ? "#fd6f85"
                          : isSelected
                            ? "#3cddc7"
                            : "#9baad6",
                    }}
                  >
                    {answer.id}
                  </div>
                  <span
                    style={{
                      color: isSelected || showCorrectState || showIncorrectState ? "#dee5ff" : "#9baad6",
                    }}
                  >
                    {answer.text}
                  </span>
                  {showCorrectState ? (
                    <span
                      className="material-symbols-outlined ml-auto"
                      style={{
                        color: "#3cddc7",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      check_circle
                    </span>
                  ) : showIncorrectState ? (
                    <span
                      className="material-symbols-outlined ml-auto"
                      style={{
                        color: "#fd6f85",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      cancel
                    </span>
                  ) : null}
                </div>
                {showCorrectState ? (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full"
                    style={{ backgroundColor: "#3cddc7" }}
                  />
                ) : showIncorrectState ? (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full"
                    style={{ backgroundColor: "#fd6f85" }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        {submissionState ? (
          <div
            className="mt-6 rounded-2xl border px-5 py-4"
            style={{
              backgroundColor:
                submissionState.status === "correct"
                  ? "rgba(60, 221, 199, 0.08)"
                  : submissionState.status === "incorrect"
                    ? "rgba(253, 111, 133, 0.16)"
                    : submissionState.status === "skipped"
                      ? "rgba(145, 155, 255, 0.12)"
                    : "rgba(145, 155, 255, 0.08)",
              borderColor:
                submissionState.status === "correct"
                  ? "rgba(60, 221, 199, 0.25)"
                  : submissionState.status === "incorrect"
                    ? "rgba(253, 111, 133, 0.25)"
                    : submissionState.status === "skipped"
                      ? "rgba(145, 155, 255, 0.25)"
                    : "rgba(145, 155, 255, 0.25)",
              color:
                submissionState.status === "correct"
                  ? "#3cddc7"
                  : submissionState.status === "incorrect"
                    ? "#fd6f85"
                    : submissionState.status === "skipped"
                      ? "#919bff"
                    : "#919bff",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined"
                style={{
                  color:
                    submissionState.status === "correct"
                      ? "#3cddc7"
                      : submissionState.status === "incorrect"
                        ? "#fd6f85"
                        : submissionState.status === "skipped"
                          ? "#919bff"
                        : "#919bff",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                {submissionState.status === "correct" ? "check_circle" : "cancel"}
              </span>
              <p className="text-sm font-semibold">{submissionState.message}</p>
            </div>
          </div>
        ) : null}

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            className="font-bold text-sm flex items-center gap-2 transition-colors"
            style={{ color: "#9baad6" }}
            type="button"
          >
            <span className="material-symbols-outlined text-xl">flag</span>
            Report Issue
          </button>

          <div className="flex gap-4 w-full sm:w-auto">
            <button
              className="flex-1 sm:flex-none px-10 py-4 rounded-full font-bold text-sm transition-colors disabled:cursor-not-allowed"
              disabled={hasCompletedQuiz}
              onClick={handleSkipLesson}
              style={{
                border: "1px solid rgba(56, 71, 109, 0.3)",
                color: hasCompletedQuiz ? "#65759e" : "#dee5ff",
                backgroundColor: hasCompletedQuiz ? "#0c1934" : "transparent",
              }}
              type="button"
            >
              Skip Lesson
            </button>
            <button
              className="flex-1 sm:flex-none px-12 py-4 rounded-full font-black text-sm active:scale-95 transition-all disabled:cursor-not-allowed"
              disabled={!selectedAnswer || hasCompletedQuiz}
              onClick={handleSubmit}
              style={{
                background:
                  !selectedAnswer || hasCompletedQuiz
                    ? "#0c1934"
                    : "linear-gradient(to right, #3cddc7, #22cfba)",
                color: !selectedAnswer || hasCompletedQuiz ? "#65759e" : "#004941",
                boxShadow:
                  !selectedAnswer || hasCompletedQuiz
                    ? "none"
                    : "0 10px 40px -10px rgba(60, 221, 199, 0.5)",
              }}
              type="button"
            >
              SUBMIT ANSWER
            </button>
          </div>
        </div>

        <div
          className="mt-10 rounded-3xl border p-5"
          style={{
            backgroundColor: "rgba(12, 25, 52, 0.75)",
            borderColor: "rgba(56, 71, 109, 0.2)",
          }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#9baad6" }}>
                Continue In
              </p>
              <h4 className="mt-2 text-lg font-bold">{navigation.categoryTitle}</h4>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              {navigation.previousModule ? (
                <Link
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-bold text-center"
                  style={{
                    border: "1px solid rgba(56, 71, 109, 0.3)",
                    color: "#dee5ff",
                  }}
                  to={`/modules/${navigation.previousModule.id}`}
                >
                  {`Previous: ${navigation.previousModule.title}`}
                </Link>
              ) : (
                <button
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-bold text-center cursor-not-allowed"
                  disabled
                  style={{
                    backgroundColor: "#0c1934",
                    border: "1px solid rgba(56, 71, 109, 0.3)",
                    color: "#65759e",
                  }}
                  type="button"
                >
                  Previous Module
                </button>
              )}

              {navigation.nextModule ? (
                <Link
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-bold text-center"
                  style={{
                    background: "linear-gradient(to right, #919bff, #818cf8)",
                    color: "#000b83",
                  }}
                  to={`/modules/${navigation.nextModule.id}`}
                >
                  {`Next: ${navigation.nextModule.title}`}
                </Link>
              ) : (
                <Link
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-bold text-center"
                  style={{
                    background: "linear-gradient(to right, #3cddc7, #22cfba)",
                    color: "#004941",
                  }}
                  to={
                    navigation.categoryId
                      ? `/categories/${navigation.categoryId}`
                      : "/categories"
                  }
                >
                  Finish
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
