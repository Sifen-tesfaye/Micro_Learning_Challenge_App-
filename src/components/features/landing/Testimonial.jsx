import testimonialCover from "../../../assets/images/testimonial_image.png";
import testimonialPlatformCover from "../../../assets/images/testimonial_platform_image.png";
function Testimonial({
  testimonials = [
    {
      name: "Dr. Marcus Thorne",
      role: "Cognitive Researcher",
      quote:
        "Luminescent Scholar transformed my morning commute. I've learned more about Behavioral Economics in two weeks than I did in a semester of college.",
      avatar: { testimonialCover },
    },
    {
      name: "Elena Rodriguez",
      role: "Senior Product Designer",
      quote:
        "The gamification isn't just fluff—it actually works. The streak system is incredibly motivating for building a consistent learning habit.",
      avatar: { testimonialCover },
    },
  ],
}) {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-8 leading-tight">
              Voices from the <span className="text-tertiary">Scholarship</span>
            </h2>
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-lg italic text-on-surface mb-6">
                  {testimonials[0].quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border border-tertiary/30"
                    src={testimonials[0].avatar.testimonialCover}
                  />
                  <div>
                    <p className="font-bold">{testimonials[0].name}</p>
                    <p className="text-xs text-on-surface-variant">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl ml-8">
                <p className="text-lg italic text-on-surface mb-6">
                  {testimonials[1].quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border border-secondary/30"
                    src={testimonials[1].avatar.testimonialCover}
                  />
                  <div>
                    <p className="font-bold">{testimonials[1].name} </p>
                    <p className="text-xs text-on-surface-variant">
                      {testimonials[1].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]"></div>
            <img
              alt="Platform usage"
              className="rounded-[2.5rem] relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              src={testimonialPlatformCover}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
