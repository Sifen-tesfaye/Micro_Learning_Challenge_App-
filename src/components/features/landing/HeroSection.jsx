export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden hero-gradient">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/15 border border-tertiary-container/20">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
              New Season Live
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-[1.1]">
            Elevate Your Mind, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              One Daily Challenge
            </span>{" "}
            <br />
            at a Time.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Master new skills through gamified micro-learning. Track your
            streaks, earn points, and climb the global leaderboard.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-2xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
              Get Started
            </button>
            <button className="px-8 py-4 glass-card text-on-surface font-bold rounded-2xl hover:bg-surface-bright/40 transition-all active:scale-95">
              Explore Categories
            </button>
          </div>
          <div className="flex items-center gap-6 pt-8">
            <div className="flex -space-x-3">
              <img
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-4sfCV0SjWDbguEa7XNAj15-9D4sttlIIYWUBPIFMIjkX_W7wMgiWp2eWRZ8nKkqghKlxZnh9LlbOBW9XrolqyLmnSUrHBPP4uoETArsDid8otRZayzZ99dqMdHaqELq_0-kl7ZcsT_RlLiUqha3TwOghmqF0fz1r-E5OAKwWflmwffQhKBbykn7LRjhm7qkPaT3jZEDqHJaPUGtIRzkAZbOhoQp-l6ljsQsEnRaPWRmYAFgSQw3kOxw5Q-Lo-d5Hkz5JEBc_8dY"
              />
              <img
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWH4Su_qDaJTf-pEP6NXcp_j1SNgij5hTDMK-dy4YOOXtrZoMf4wMvHqlst7AmLKvbMmuSXX0gOtODcYEhVLfrWIsJl8FZVn8q3_ASTIm5G9Sc5vpYUSlAIyzo2aIIExMcAlFoFMZYCEsdNb0eGcIsZQcuIzSrB2ZLWH0_4SMj3RkwMWmoG2Sw0pAqIOTXNy3XzAM0JKcRYsJHaEo8BnebQZsvAaQz__O3D_Fe9DbskYt7n7ptiex6jdUibPIsCIuXDlOaU4mCbX8"
              />
              <img
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFEO_tEd3fqemg6rkC6DkG9MGWqqJi23V92f9vWtrkOiBGJBscKGX1BnGToZT_aWPB6ifrknsZEMZYKLzoC6hvouVG66bqSZylu0vkLM3jIUBNn6HbJiOxwSSUHEB4631XELkI0HKKrMsHOQZbXtOxY6cf7AiVEOSRUNaWITgMlavLyLKOJ4BzMsf8tuwS5viFuZ3scWu5pzcPwIuofLUxbtWRBEtPgVokMpAtLIEx4XFYunS4FCiynxMh_TKFTkrqE8nCyr0uNe4"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              <span className="text-secondary font-bold">12k+</span> Scholars
              learning today
            </p>
          </div>
        </div>

        {/* Hero Bento Visual */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl transform translate-y-8">
              <span
                className="material-symbols-outlined text-4xl text-secondary mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
              <h3 className="text-xl font-bold mb-2">Daily Streak</h3>
              <p className="text-sm text-on-surface-variant">
                You've reached a 15-day learning streak. Keep it up!
              </p>
              <div className="mt-4 h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4"></div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden glass-card">
              <img
                alt="Abstract growth"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZ7lu1O325crQxU_NYCPbCosbS9yo4zD7MMibe09fT_re86wJjgevbpHvI4YTM5wD-Y9oHWXhWbQEzuNTdzVpMfbYcvV2d9BQ_irpWfKtN86d_C_qzMxtRWEP2_pQuKHdT3lS1b5hIjIBnzjLW4fvt5giuXGbPeQBnoCKq_NwI-0QjzhzEIzSEamV6I6kfPF8RV0vxEa8Qp1opR8u98PHJOW2atfdCBZv5QdNqKaGkRwFzN7G7TTC2eRj7A8xn-pRXMekibroLaA"
              />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-card relative group">
              <img
                alt="Tech learning"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5D78hTQkkzXme_j2ptWH5ygkyoZ0mA4omukRs2txRspjHk4fjjVAlpWYHGth0lJU3FEpWo1gKHE0tYOHqSgfZhsYS6mrUk0UTDqNzfEIzKOXGpX49JYee7OSv9f-uMZE8SyxzG_DJXH1VkatAeN6hypL6MKQFwsMHiqGyovUQ630KNJAwKxtSMla0LMd8pa4nNIGylaGQKvQ3KEBFZ5TUvb_uL12C433HGwswpT1ff3AVA2jK4Ubll8ZQW2BYOQrkSMUm_aTcK-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Current Task
                </span>
                <h4 className="text-lg font-bold">Quantum Computing 101</h4>
              </div>
            </div>
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
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                    1
                  </div>
                  <span className="text-xs">Jibril Abdi</span>
                  <span className="ml-auto text-xs font-bold">2,450 XP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-bold">
                    2
                  </div>
                  <span className="text-xs">Sarah J.</span>
                  <span className="ml-auto text-xs font-bold">2,100 XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
