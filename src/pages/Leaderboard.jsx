import LearningDetailLayout from "../components/features/shared/LearningDetailLayout";
import { learningDetailChrome } from "../components/features/shared/learningDetailChrome";

const topThree = [
  {
    rank: 2,
    name: "Elena Vance",
    level: 42,
    title: "Grand Strategist",
    xp: "18,420",
    avatar: "https://picsum.photos/id/64/128/128",
  },
  {
    rank: 1,
    name: "Julian Thorne",
    level: 50,
    title: "Omniscient",
    xp: "24,890",
    avatar: "https://picsum.photos/id/1015/128/128",
  },
  {
    rank: 3,
    name: "Marcus Chen",
    level: 39,
    title: "Sage Initiate",
    xp: "16,150",
    avatar: "https://picsum.photos/id/201/128/128",
  },
];

const leaderboardData = [
  { rank: 4, name: "Sophia Lind", level: 35, title: "Polymath", xp: "14,200" },
  { rank: 5, name: "Arthur Dent", level: 34, title: "Historian", xp: "13,890" },
  {
    rank: 6,
    name: "Alex Mercer (You)",
    level: 42,
    title: "Polymath",
    xp: "9,840",
    isYou: true,
  },
  { rank: 7, name: "Leo Rodriguez", level: 31, title: "Architect", xp: "11,900" },
];

export default function Leaderboard() {
  return (
    <LearningDetailLayout
      streakLabel={`${learningDetailChrome.defaultStreakCount} DAY STREAK`}
    >
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
              Hall of Excellence
            </p>
            <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">
              Global Leaderboard
            </h1>
          </div>

          <div className="flex gap-2">
            {["Weekly", "Monthly", "All-time"].map((period, i) => (
              <button
                key={period}
                className={`rounded-2xl px-5 py-2 text-sm font-medium transition-all ${
                  i === 2
                    ? "bg-secondary text-[#04111d]"
                    : "bg-[#1E2A4A] text-on-surface hover:bg-[#2A3A5A]"
                }`}
                type="button"
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {topThree.map((player) => (
            <div
              key={player.rank}
              className={`relative rounded-3xl border p-8 transition-all ${
                player.rank === 1
                  ? "scale-105 border-secondary bg-gradient-to-b from-[#1E2A4A] to-[#0F1629] shadow-2xl"
                  : "border-[#1E2A4A] bg-[#0F1629]"
              }`}
            >
              {player.rank === 1 ? (
                <div className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-2xl text-black shadow-lg">
                  👑
                </div>
              ) : null}

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="h-28 w-28 overflow-hidden rounded-2xl border-4 border-gray-700">
                    <img
                      alt={player.name}
                      className="h-full w-full object-cover"
                      src={player.avatar}
                    />
                  </div>
                  <div
                    className={`absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-2xl border-4 border-[#0F1629] text-xl font-bold ${
                      player.rank === 1
                        ? "bg-secondary text-[#04111d]"
                        : "bg-[#1E2A4A] text-white"
                    }`}
                  >
                    {player.rank}
                  </div>
                </div>

                <h2 className="mb-1 text-2xl font-semibold text-on-surface">
                  {player.name}
                </h2>
                <p className="text-sm text-secondary">
                  Level {player.level} • {player.title}
                </p>

                <div className="mt-8 w-full rounded-2xl bg-[#1E2A4A] px-8 py-3">
                  <div className="text-xs text-on-surface-variant">
                    TOTAL EXPERIENCE
                  </div>
                  <div className="text-3xl font-bold text-secondary">
                    {player.xp} XP
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0F1629]">
          <div className="grid grid-cols-12 border-b border-white/10 px-8 py-4 text-xs uppercase tracking-widest text-on-surface-variant">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Scholar</div>
            <div className="col-span-3">Title & Level</div>
            <div className="col-span-3 text-right">Total Experience</div>
          </div>

          {leaderboardData.map((entry, index) => (
            <div
              key={entry.rank}
              className={`grid grid-cols-12 items-center border-b border-white/10 px-8 py-5 transition-colors hover:bg-[#1A2339] ${
                entry.isYou ? "bg-[#1E2A4A]/70" : ""
              }`}
            >
              <div className="col-span-1 font-mono text-lg font-medium text-on-surface">
                {String(entry.rank).padStart(2, "0")}
              </div>
              <div className="col-span-5 flex items-center gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10">
                  <img
                    alt={entry.name}
                    className="h-full w-full object-cover"
                    src={
                      entry.isYou
                        ? "https://picsum.photos/id/1015/128/128"
                        : `https://picsum.photos/id/${60 + index}/128/128`
                    }
                  />
                </div>
                <div>
                <div className="font-medium text-on-surface">{entry.name}</div>
                  {entry.isYou ? (
                    <div className="text-xs text-secondary">YOUR CURRENT POSITION</div>
                  ) : null}
                </div>
              </div>
              <div className="col-span-3 text-sm text-on-surface-variant">
                Lvl {entry.level} • {entry.title}
              </div>
              <div className="col-span-3 text-right font-mono font-semibold text-secondary">
                {entry.xp} XP
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-8 rounded-3xl border border-secondary/30 bg-[#1E2A4A] px-10 py-5 text-sm">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📍</div>
              <div>
                <div className="text-secondary">YOUR CURRENT POSITION</div>
                <div className="font-medium text-on-surface">Alex Mercer (You)</div>
              </div>
            </div>
            <div className="font-mono text-secondary">9,840 XP TOTAL</div>
            <button
              className="ml-auto rounded-2xl bg-secondary px-6 py-2.5 text-sm font-medium text-[#04111d] transition-all hover:brightness-110"
              type="button"
            >
              View My Stats
            </button>
          </div>
        </div>
      </section>
    </LearningDetailLayout>
  );
}
