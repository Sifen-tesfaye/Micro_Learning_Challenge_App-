import { Link } from "react-router-dom";

export default function ChallengeCard({
  eyebrow,
  title,
  description,
  cta,
  meta,
  challengeImage,
}) {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto bg-surface-container-high rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-12 lg:p-20 z-10">
          <span className="text-tertiary font-bold text-sm tracking-widest uppercase mb-4 block">
            {eyebrow}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-on-surface-variant text-lg mb-8 max-w-md">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <Link
              className="px-8 py-4 bg-secondary text-on-secondary font-bold rounded-2xl hover:brightness-110 transition-all cursor-pointer"
              to={cta.to}
            >
              {cta.label}
            </Link>
            <span className="text-on-surface-variant text-sm font-medium">
              {meta}
            </span>
          </div>
        </div>
        <div className="md:w-1/2 relative h-[400px] md:h-full w-full">
          <img
            alt="Challenge Visual"
            className="w-full h-full object-cover"
            src={challengeImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
