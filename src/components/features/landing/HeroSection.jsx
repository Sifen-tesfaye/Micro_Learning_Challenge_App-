import avatar1 from "../../../assets/images/avatar1_icon.png";
import avatar2 from "../../../assets/images/avatar2_icon.png";
import avatar3 from "../../../assets/images/avatar3_icon.png";
import streakCover from "../../../assets/images/streak.png";
import moduleCover from "../../../assets/images/module_main.png";

export default function HeroSection({
  moduleImage = moduleCover,
  streakImage = streakCover,
  leaderboard = [
    { name: "Jibril Abdi", xp: 2450 },
    { name: "Sarah J.", xp: 2100 },
  ],
  moduleName = "Quantum Computing 101",
}) {
  const avatarClass =
    "w-10 h-10 rounded-full border-2 border-surface object-cover";

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden hero-gradient">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/15 border border-tertiary-container/20">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
              New Season Live
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-[1.1]">
            Elevate Your Mind, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              One Daily Challenge
            </span>
            <br />
            at a Time.
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Master new skills through gamified micro-learning. Track your
            streaks, earn points, and climb the global leaderboard.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-2xl shadow-lg shadow-secondary/20 hover:brightness-110 transition-all active:scale-95 cursor-pointer">
              Get Started
            </button>

            <button className="px-8 py-4 glass-card text-on-surface font-bold rounded-2xl hover:bg-surface-bright/0   transition-all active:scale-95 cursor-pointer ">
              Explore Categories
            </button>
          </div>

          {/* User Avatars */}
          <div className="flex items-center gap-6 pt-8">
            <div className="flex -space-x-3">
              <img alt="User avatar" className={avatarClass} src={avatar1} />
              <img alt="User avatar" className={avatarClass} src={avatar2} />
              <img alt="User avatar" className={avatarClass} src={avatar3} />
            </div>

            <p className="text-sm text-on-surface-variant">
              <span className="text-secondary font-bold">12k+</span> Scholars
              learning today
            </p>
          </div>
        </div>

        {/* Hero Bento Visuals */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            {/* Streak Card */}
            <div className="glass-card p-6 rounded-2xl transform translate-y-8">
              <span
                className="material-symbols-outlined text-4xl text-secondary mb-4 block"
                aria-label="Achivement icon"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>

              <h3 className="text-xl font-bold mb-2">Daily Streak</h3>

              <p className="text-sm text-on-surface-variant">
                You've reached a 15-day learning streak. Keep it up!
              </p>

              <div className="mt-4 h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4" />
              </div>
            </div>

            {/* Abstract Image */}
            <div className="aspect-square rounded-2xl overflow-hidden glass-card">
              <img
                alt="Abstract growth graphic"
                className="w-full h-full object-cover opacity-60"
                src={streakImage}
              />
            </div>
          </div>

          <div className="space-y-4 pt-12">
            {/* Tall Card */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-card relative group">
              <img
                alt="Learning technology"
                className="w-full h-full object-cover"
                src={moduleImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Current Task
                </span>
                <h4 className="text-lg font-bold">{moduleName}</h4>
              </div>
            </div>

            {/* Leaderboard Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
                  Leaderboard
                </span>
                <span className="material-symbols-outlined text-tertiary text-sm">
                  trending_up
                </span>
              </div>

              <div className="space-y-3">
                {/* Item */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                    1
                  </div>
                  <span className="text-xs">{leaderboard[0]?.name}</span>
                  <span className="ml-auto text-xs font-bold">
                    {leaderboard[0]?.xp} XP
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-bold">
                    2
                  </div>
                  <span className="text-xs">{leaderboard[1]?.name}</span>
                  <span className="ml-auto text-xs font-bold">
                    {leaderboard[1]?.xp} XP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
