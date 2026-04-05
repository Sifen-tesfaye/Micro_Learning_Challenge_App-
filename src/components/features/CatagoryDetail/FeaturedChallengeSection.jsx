import { Link } from "react-router-dom";

export default function FeaturedChallengeSection({ challenge }) {
  return (
    <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 p-1">
      <div className="flex flex-col items-center gap-12 rounded-[calc(1rem-1px)] bg-surface-container-lowest/90 p-8 backdrop-blur-xl md:flex-row md:p-12">
        <div className="md:w-1/2">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-tertiary">
            {challenge?.eyebrow}
          </span>
          <h2 className="mb-6 font-headline text-3xl font-black leading-tight text-white md:text-4xl">
            {challenge?.title}
          </h2>
          <p className="mb-8 text-lg text-on-surface-variant">
            {challenge?.description}
          </p>
          <Link
            className="flex w-fit items-center gap-2 rounded-full bg-tertiary px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/10 transition-all hover:brightness-110"
            to={challenge?.cta?.to || "/signup"}
          >
            {challenge?.cta?.label}
            <span className="material-symbols-outlined text-primary">bolt</span>
          </Link>
        </div>

        <div className="grid gap-4 md:w-1/2 md:grid-cols-2">
          <div className="space-y-4">
            {challenge?.highlights?.slice(0, 2).map((item, index) => (
              <ChallengeHighlight
                key={`${item.icon || item.image}-${index}`}
                item={item}
              />
            ))}
          </div>
          <div className="space-y-4 pt-8">
            {challenge?.highlights?.slice(2, 4).map((item, index) => (
              <ChallengeHighlight
                key={`${item.icon || item.image}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengeHighlight({ item }) {
  if (item?.image) {
    return (
      <div className="h-48 overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-high">
        <img
          alt="Challenge highlight"
          className={`h-full w-full object-cover ${item.dimmed ? "opacity-50" : ""}`}
          src={item.image}
        />
      </div>
    );
  }

  return (
    <div className="group flex h-32 items-center justify-center rounded-xl border border-outline-variant/20 bg-surface-container-highest transition-colors">
      <span
        className={`material-symbols-outlined text-4xl text-on-surface-variant ${
          item?.tone === "secondary"
            ? "group-hover:text-secondary"
            : item?.tone === "tertiary"
              ? "group-hover:text-tertiary"
              : "group-hover:text-primary"
        }`}
      >
        {item?.icon}
      </span>
    </div>
  );
}
