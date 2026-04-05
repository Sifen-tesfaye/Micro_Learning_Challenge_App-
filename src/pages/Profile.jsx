import {
  BookOpen,
  Flame,
  Medal,
  Share2,
  Zap,
} from "lucide-react";
import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";

const stats = [
  {
    label: "TOTAL XP",
    value: "142,850",
    sub: "+1,200 today",
    icon: <Zap size={32} className="text-yellow-400" />,
  },
  {
    label: "DAY STREAK",
    value: "142",
    sub: "Personal best",
    icon: <Flame size={32} className="text-orange-400" />,
  },
  {
    label: "MODULES",
    value: "894",
    sub: "87% completion",
    icon: <BookOpen size={32} className="text-cyan-400" />,
  },
  {
    label: "BADGES",
    value: "24",
    sub: "Rare Tier 6",
    icon: <Medal size={32} className="text-purple-400" />,
  },
];

export default function Profile() {
  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-10 lg:flex-row">
          <div className="relative shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-3xl border-4 border-secondary shadow-2xl">
              <img
                alt="Elias Thorne"
                className="h-full w-full object-cover"
                src="https://picsum.photos/id/1015/400/400"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-secondary bg-[#0F1629] px-6 py-1 text-xs font-bold text-secondary">
              GRAND MASTER
            </div>
          </div>

          <div className="flex-1 pt-4">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-5xl font-bold tracking-tight text-on-surface">
                Elias Thorne
              </h1>
              <div className="rounded-full bg-[#1E2A4A] px-4 py-1 text-sm font-medium text-secondary">
                Lv. 84
              </div>
            </div>

            <p className="mt-4 max-w-xl text-lg text-on-surface-variant">
              Polymath in training. Dedicated to the pursuit of linguistic
              mastery and cognitive expansion through daily bite-sized
              challenges.
            </p>

            <button
              className="mt-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#1E2A4A] px-8 py-3 text-sm font-medium text-on-surface transition-all hover:bg-[#2A3A5A]"
              type="button"
            >
              <Share2 size={18} />
              Share Profile
            </button>
          </div>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-[#0F1629] p-6 transition-all hover:border-secondary/30"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="mb-1 text-4xl font-bold text-on-surface">{stat.value}</div>
              <div className="text-sm font-medium text-secondary">{stat.label}</div>
              <div className="mt-1 text-xs text-on-surface-variant">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 xl:grid-cols-12">
          <div className="rounded-3xl border border-white/10 bg-[#0F1629] p-8 xl:col-span-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold text-on-surface">
                  Knowledge Momentum
                </div>
                <div className="text-sm text-on-surface-variant">
                  Daily activity over the last 12 months
                </div>
              </div>
              <div className="rounded-full bg-[#1E2A4A] px-4 py-1 text-xs text-on-surface-variant">
                Year 2024
              </div>
            </div>

            <div
              className="mb-6 grid grid-cols-12 gap-1 sm:grid-cols-16 lg:grid-cols-20 xl:grid-cols-24"
            >
              {Array.from({ length: 144 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 rounded-sm ${
                    i % 7 === 0
                      ? "bg-secondary"
                      : i % 3 === 0
                        ? "bg-cyan-500/60"
                        : "bg-[#1E2A4A]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0F1629] p-8 xl:col-span-4">
            <div className="mb-6 flex justify-between">
              <div className="font-semibold text-on-surface">Badge Gallery</div>
              <div className="text-xs text-secondary">View All</div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {["Century Club", "Thespian", "Daily Grind", "Bite Master", "Zenith", "Locked"].map(
                (badge) => (
                  <div key={badge} className="flex flex-col items-center gap-3">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 text-4xl ${
                        badge === "Locked"
                          ? "bg-gray-800 text-gray-500"
                          : "bg-gradient-to-br from-[#1E2A4A] to-[#2A3A5A]"
                      }`}
                    >
                      {badge === "Locked" ? "🔒" : "🏆"}
                    </div>
                    <div className="text-center text-[10px] font-medium text-on-surface-variant">
                      {badge}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </LearningDetailLayout>
  );
}
