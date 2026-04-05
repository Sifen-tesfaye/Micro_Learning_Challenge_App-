import { Link } from "react-router-dom";
import avatar1 from "../../../assets/images/avatar1_icon.png";
import avatar2 from "../../../assets/images/avatar2_icon.png";
import avatar3 from "../../../assets/images/avatar3_icon.png";
import streakPreview from "../../../assets/images/streak.png";
import modulePreview from "../../../assets/images/module_main.png";

const defaultHeroContent = {
  badge: "Learn smarter",
  titleLines: ["Build", "daily learning", "momentum"],
  description:
    "Short challenges, visible progress, and friendly competition to help you keep showing up every day.",
  primaryCta: {
    label: "Start challenge",
    to: "/dashboard",
  },
  secondaryCta: {
    label: "Browse categories",
    to: "/categories",
  },
  communityLabel: "12k learners joined this week",
  avatars: [avatar1, avatar2, avatar3],
  streakCard: {
    description: "You're 5 days into your current learning streak.",
    progressWidth: "72%",
  },
  moduleCard: {
    image: modulePreview,
    label: "Featured module",
    moduleName: "Focus Fundamentals",
  },
  leaderboard: [
    { name: "Amina", xp: 1280 },
    { name: "Noah", xp: 1215 },
  ],
  streakImage: streakPreview,
};

export default function HeroSection({
  badge = defaultHeroContent.badge,
  titleLines = defaultHeroContent.titleLines,
  description = defaultHeroContent.description,
  primaryCta = defaultHeroContent.primaryCta,
  secondaryCta = defaultHeroContent.secondaryCta,
  communityLabel = defaultHeroContent.communityLabel,
  avatars = defaultHeroContent.avatars,
  streakCard = defaultHeroContent.streakCard,
  moduleCard = defaultHeroContent.moduleCard,
  leaderboard = defaultHeroContent.leaderboard,
  streakImage = defaultHeroContent.streakImage,
}) {
  const avatarClass =
    "w-10 h-10 rounded-full border-2 border-surface object-cover";
  const [communityCount, ...communityRest] = communityLabel.split(" ");

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden hero-gradient">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/15 border border-tertiary-container/20">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
              {badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-[1.1]">
            {titleLines?.[0]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {titleLines[1]}
            </span>
            <br />
            {titleLines[2]}
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              className="px-8 py-4 bg-gradient-to-r from-[#aeb6ff] via-[#8bf4e6] to-[#d7b0ff] text-[#041085] font-bold rounded-2xl shadow-[0_18px_45px_rgba(139,244,230,0.28)] hover:shadow-[0_22px_55px_rgba(174,182,255,0.38)] hover:brightness-110 transition-all active:scale-95 cursor-pointer"
              to={primaryCta.to}
            >
              {primaryCta.label}
            </Link>

            <Link
              className="px-8 py-4 glass-card text-on-surface font-bold rounded-2xl hover:bg-surface-bright/0 transition-all active:scale-95 cursor-pointer"
              to={secondaryCta.to}
            >
              {secondaryCta.label}
            </Link>
          </div>

          {/* User Avatars */}
          <div className="flex items-center gap-6 pt-8">
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <img
                  key={avatar}
                  alt={`User avatar ${index + 1}`}
                  className={avatarClass}
                  src={avatar}
                />
              ))}
            </div>

            <p className="text-sm text-on-surface-variant">
              <span className="text-secondary font-bold">
                {communityCount}
              </span>{" "}
              {communityRest.join(" ")}
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
                {streakCard.description}
              </p>

              <div className="mt-4 h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary"
                  style={{ width: streakCard.progressWidth }}
                />
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
                src={moduleCard.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  {moduleCard.label}
                </span>
                <h4 className="text-lg font-bold">{moduleCard.moduleName}</h4>
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
