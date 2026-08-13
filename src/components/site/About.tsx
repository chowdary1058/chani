import { motion } from "motion/react";

const stats = [
  { k: "3+", v: "LIVE PRODUCTS" },
  { k: "8.0", v: "CURRENT CGPA" },
  { k: "100%", v: "USER-CENTERED" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream-light py-24 md:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-beige blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[11px] tracking-[0.25em] text-primary">01 — INTRODUCTION</p>
            <h2 className="mt-4 font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]">
              ABOUT <span className="italic text-primary">me</span>
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-serif text-3xl text-primary">{s.k}</p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.14em] text-muted-foreground">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            <div className="glass-panel float-slow absolute -left-6 -top-8 hidden rounded-xl px-3 py-2 font-mono text-[9px] tracking-[0.16em] text-primary md:block">
              EMPATHY → INSIGHT → DESIGN
            </div>
            <p className="font-serif text-2xl leading-relaxed text-foreground/90 md:text-[2rem] md:leading-[1.35]">
              I am a passionate UI/UX Designer focused on creating{" "}
              <em className="italic text-primary">intuitive and engaging</em> digital experiences.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              My approach combines user-centered design, creativity, and technology to deliver impactful
              products — from research and wireframes to polished, production-ready interfaces.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Research-led product thinking",
                "Systems over one-off screens",
                "Motion as a usability tool",
                "Craft in every pixel",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground/80"
                >
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
