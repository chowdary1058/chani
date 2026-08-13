import { motion } from "motion/react";

const timeline = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "NRI Institute Of Technology College",
    years: "2024 – 2027",
    score: "CGPA: 8.0",
  },
  {
    degree: "Diploma",
    school: "VKR VNB & AGK College of Engineering Polytechnic College",
    years: "2021 – 2023",
    score: "GPA: 70",
  },
  {
    degree: "SSC",
    school: "Ushodaya English Medium High School",
    years: "2021",
    score: "GPA: 8.8",
  },
];

export function Education() {
  return (
    <section id="education" className="relative bg-cream-light py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.25em] text-primary">05 — BACKGROUND</p>
        <h2 className="mt-4 font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]">
          EDUCA<span className="italic text-primary">tion</span>
        </h2>

        <div className="relative mt-14 pl-8 md:pl-12">
          <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-primary via-burgundy to-beige md:left-[11px]" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.degree}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-6 h-3.5 w-3.5 rounded-full border-2 border-primary bg-cream-light md:-left-12" />
              <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)] md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-primary">{t.years}</span>
                  <span className="rounded-full bg-beige px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-foreground/70">
                    {t.score}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-light text-foreground md:text-3xl">
                  {t.degree}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
