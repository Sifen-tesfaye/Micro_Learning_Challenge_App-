export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 relative bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Built for Continuous{" "}
            <span className="text-secondary">Evolution</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Traditional learning is broken. We use cognitive science to make
            knowledge stick in under 10 minutes a day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Micro-Learning */}
          <div className="glass-card p-10 rounded-2xl group hover:bg-surface-variant/80 hover:shadow-xl transition-all border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-3xl text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Micro-Learning</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Byte-sized modules designed for maximum retention and cognitive
              ease. Learn anywhere, anytime.
            </p>
          </div>

          {/* Daily Challenges */}
          <div className="glass-card p-10 rounded-2xl group hover:bg-surface-variant/80 hover:shadow-xl transition-all border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-3xl text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Daily Challenges</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Gamified daily tasks that keep your curiosity sparked and your
              brain sharp through active recall.
            </p>
          </div>

          {/* Global Leaderboard */}
          <div className="glass-card p-10 rounded-2xl group hover:bg-surface-variant/80 hover:shadow-xl transition-all border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-3xl text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                leaderboard
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Global Leaderboard</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Compete with scholars worldwide. Earn prestigious titles and
              showcase your cognitive mastery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
