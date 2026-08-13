import { motion } from "motion/react";
import { Search, Target, Lightbulb, Layers, FlaskConical, Rocket } from "lucide-react";

const steps = [
  { no: "01", title: "DISCOVER", icon: Search, desc: "Research users, business goals and competitive context." },
  { no: "02", title: "DEFINE", icon: Target, desc: "Frame the real problem, success metrics and constraints." },
  { no: "03", title: "IDEATE", icon: Lightbulb, desc: "Explore flows, sketches and bold concept directions." },
  { no: "04", title: "PROTOTYPE", icon: Layers, desc: "Build interactive prototypes and design system pieces." },
  { no: "05", title: "TEST", icon: FlaskConical, desc: "Validate with users, iterate on friction and clarity." },
  { no: "06", title: "DELIVER", icon: Rocket, desc: "Ship polished, documented, developer-ready design." },
];

export function Process() {
  return (
    <section id="process" className="mesh-cream grain relative py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.25em] text-primary">04 — HOW I WORK</p>
        <h2 className="mt-4 font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]">
          DESIGN <span className="italic text-primary">process</span>
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary/70">{s.no}</span>
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-light text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
