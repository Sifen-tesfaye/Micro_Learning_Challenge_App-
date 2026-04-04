function Testimonial({ title, highlightedTitle, items, platformImage }) {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-8 leading-tight">
              {title} <span className="text-tertiary">{highlightedTitle}</span>
            </h2>
            <div className="space-y-8">
              {items.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`glass-card p-8 rounded-2xl ${index === 1 ? "ml-8" : ""}`}
                >
                  <p className="text-lg italic text-on-surface mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      alt={testimonial.name}
                      className={`w-12 h-12 rounded-full border ${
                        index === 0 ? "border-tertiary/30" : "border-secondary/30"
                      }`}
                      src={testimonial.avatar}
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-xs text-on-surface-variant">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]"></div>
            <img
              alt="Platform usage"
              className="rounded-[2.5rem] relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              src={platformImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
