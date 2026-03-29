export default function ChallengeCard({ title, children, description }) {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto bg-surface-container-high rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-12 lg:p-20 z-10">
          <span className="text-tertiary font-bold text-sm tracking-widest uppercase mb-4 block">
            Challenge of the Day
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {children ||
              "Unlock Your Potential: Today's Challenge Awaits Your Brilliance!"}
          </h2>
          <p className="text-on-surface-variant text-lg mb-8 max-w-md">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <button className="px-8 py-4 bg-secondary text-on-secondary font-bold rounded-2xl hover:brightness-110 transition-all">
              Start Now
            </button>
            <span className="text-on-surface-variant text-sm font-medium">
              10 Min Duration
            </span>
          </div>
        </div>
        <div className="md:w-1/2 relative h-[400px] md:h-full w-full">
          <img
            alt="Challenge Visual"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeLblt0RN0KjD70l-g2xmUMKg2Hp9d9uV9ecZI24rUUoIbWfVdQBlOIzy4RWbbzTlzJubAcQIy9ZEwdmoMHu-DpVb5MKUk51RNFI_wNBrLVyN6J7Mf3Mys7h2JkszGC0YBXvFDtjso1yK-D7y-xsoMTOFcIIcn7h11fmAE9jAcdfcclAO9CLgf6r3xsflmFEJo2-Wy-A3tWT038XQUJr9cxwlOrGb2HdvS0yeq1Jwx15ZIlB7MuQUJ_XZnQofV4G6JwLa6e2FrA"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
