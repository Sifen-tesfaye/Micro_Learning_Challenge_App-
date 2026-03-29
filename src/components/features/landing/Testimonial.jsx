function Testimonial() {
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
                  "Luminescent Scholar transformed my morning commute. I've
                  learned more about Behavioral Economics in two weeks than I
                  did in a semester of college."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border border-tertiary/30"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrY25ZkApwBNkLh7bx06oLMm6pzVSfjN-nJSI7zmExVLGYdyuqRCDA-8qTHhW7zX8bzShFT8XlM0G_AASoGIMpYlg7CHRwuzXY1QAE8vezCyzI6-MSsqkqfGLubfk9GvgYdqHJW__iCX1inre_hpDeL2JbLMH-UPU0Tb4XVdmYdxFgaDei-9QnRlyZnCgvZcGS1CcA2WoKjFtfBeqcyHM5mbd4CqhlJznKeC2mKRa2nWZKkSTih7pLcPex4h9bEsgLw48RLmMFA"
                  />
                  <div>
                    <p className="font-bold">Dr. Marcus Thorne</p>
                    <p className="text-xs text-on-surface-variant">
                      Cognitive Researcher
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl ml-8">
                <p className="text-lg italic text-on-surface mb-6">
                  "The gamification isn't just fluff—it actually works. The
                  streak system is incredibly motivating for building a
                  consistent learning habit."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border border-secondary/30"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC7PtkPAngQ7mFZzZhzlAKU7MttV2v0v2YOl5_FaoY4Hf3l6z758DTJum_xdDYMhwJJQWi2_HskPW1S986xcwIfLKGvDUlafljxCWDWmOmjQ0UQo3qrRsNngK3R4neIwdUIDV7S4vPvvgwi5iJZ01aksXwx4ZD7S2ResUETWiNIMr-mmvWL6m1X_SMtzgGgXwSgbZsMEiNPuFL3dzC6Vi4w0jiKaF-zAefeFE7z3eKq0lVHKTf_Xw3mRPCTFNtgMbSoR-mx_JzFGE"
                  />
                  <div>
                    <p className="font-bold">Elena Rodriguez</p>
                    <p className="text-xs text-on-surface-variant">
                      Senior Product Designer
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVzhf-3OxBwtJENvj_K9iHoYMg9Fk94AqjOOaB9FGEsBTlddnrx9RL7obiGQMMPbaOJ6Y5HrqcpITnJdtMy22SFghR5Ewab3vyGseaYLEHBJtOolawQ2SwPIVGQp6qzqlyTRklrFWE5CpxKbIrCSJkXoVEX0ISfyowmptCvR-L3Dg6YB6dLlXImOOVTdp4X_8D_tZbyxAYNducoEtKRjTgKVRiaA9_ekM7fUiZ9Fqk4Z9LFs_Jrh_5sSJ4zjXgSL37rnOgIdu-5gg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
