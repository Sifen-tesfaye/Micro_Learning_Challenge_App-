import { Brain, Medal } from "lucide-react";

export default function LeftPanel() {
  return (
    <div className="w-[55%] flex flex-col">
      {/* Upper section */}
      <div className="flex-[1.4] p-8 bg-surface-container-low flex flex-col">
        {/* Purple badge */}
        <div className="flex justify-start mb-4">
          <span className="px-3 py-1 text-xs font-semibold text-purple-600 border border-purple-600 rounded-full">
            SYSTEM ACCESS
          </span>
        </div>

        {/* Heading split into two lines */}
        <h2 className="text-4xl font-bold mb-2 text-white">Elevate your</h2>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
          Cognitive reach.
        </h2>

        <p className="text-on-surface-variant">
          Join an elite circle of scholars mastering complex domains through immersive micro-learning challenges.
        </p>
      </div>

      {/* Lower section with subtle dark overlay */}
      <div className="flex-[0.8] p-8 bg-surface-dark space-y-6 relative">
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

        <div className="relative space-y-6">
          {/* Adaptive Challenges */}
          <div className="flex items-start space-x-2">
            <Brain className="w-6 h-6 text-teal-400 mt-1" />
            <div>
              <h3 className="font-semibold">Adaptive Challenges</h3>
              <p className="text-sm text-on-surface-variant">
                Pathways that evolve with your mastery.
              </p>
            </div>
          </div>

          {/* Prestige Rankings */}
          <div className="flex items-start space-x-2">
            <Medal className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-semibold">Prestige Rankings</h3>
              <p className="text-sm text-on-surface-variant">
                Earn your place among the Grand Masters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
