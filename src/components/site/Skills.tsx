import { motion } from "motion/react";
import { useRef } from "react";

const skills = [
  "UI/UX Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Interaction Design",
  "Responsive Design",
];

const tools = ["Figma", "Adobe XD", "Photoshop"];

function TiltCard({ title, index }: { title: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-py * 10}deg) rotateY(${px * 12}deg) translateY(-6px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 will-change-transform hover:shadow-[var(--shadow-elegant)]"
      >
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <p className="font-mono text-[10px] tracking-[0.2em] text-primary/70">
          {String(index + 1).padStart(2, "0")}
        </p>
        <p className="mt-3 font-serif text-2xl text-foreground">{title}</p>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mesh-cream relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.25em] text-primary">02 — CAPABILITIES</p>
        <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]">
          SKILLS &amp; <span className="italic text-primary">craft</span>
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <TiltCard key={s} title={s} index={i} />
          ))}
        </div>

        <div className="mt-14">
          <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground">TOOLS</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/25 bg-cream-light/70 px-6 py-3 font-mono text-[11px] tracking-[0.16em] text-primary backdrop-blur transition-transform hover:-translate-y-1"
              >
                {t.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
