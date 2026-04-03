export default function TrustSignalsSection({
  retentionRate = 98,
  ChallengesCompleted = "5M+",
  skillCategories = 200,
}) {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-around gap-12">
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-black text-on-surface mb-2 tracking-tighter">
            {retentionRate}%
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
            Retention Rate
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-black text-on-surface mb-2 tracking-tighter">
            {ChallengesCompleted}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
            Challenges Completed
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-black text-on-surface mb-2 tracking-tighter">
            {skillCategories}+
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
            Skill Categories
          </p>
        </div>
      </div>
    </section>
  );
}
