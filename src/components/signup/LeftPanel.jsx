import { Brain, Medal } from "lucide-react";

export default function LeftPanel() {
  return (
    <div className="auth-panel hidden min-h-full flex-1 flex-col overflow-hidden lg:flex">
      <div className="flex-1 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.26),transparent_48%),linear-gradient(180deg,rgba(8,19,41,0.98),rgba(12,25,52,0.95))] p-10">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          System Access
        </span>

        <div className="mt-8 max-w-md space-y-5">
          <h2 className="text-4xl font-black leading-tight text-on-surface">
            Elevate your
            <span className="block bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              cognitive reach.
            </span>
          </h2>
          <p className="text-base leading-7 text-on-surface-variant">
            Join an elite circle of scholars mastering complex domains through
            immersive micro-learning challenges.
          </p>
        </div>
      </div>

      <div className="space-y-6 border-t border-outline-variant/20 bg-surface-container px-10 py-8">
        <FeatureItem
          description="Pathways that evolve with your mastery and keep each session sharp."
          icon={Brain}
          title="Adaptive Challenges"
          tone="text-secondary"
        />
        <FeatureItem
          description="Climb prestige rankings and earn recognition for disciplined progress."
          icon={Medal}
          title="Prestige Rankings"
          tone="text-tertiary"
        />
      </div>
    </div>
  );
}

function FeatureItem({ description, icon: Icon, title, tone }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-1 rounded-2xl bg-surface-bright/70 p-3 ${tone}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-on-surface">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}
