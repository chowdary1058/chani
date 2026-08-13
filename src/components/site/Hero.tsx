import { motion } from "motion/react";
import { ArrowDownToLine, ArrowUpRight, Sparkles } from "lucide-react";
import character from "@/assets/chanikya-anime.png";

const floats = [
  { label: "WIREFRAME", top: "8%", left: "-4%", delay: 0 },
  { label: "DESIGN SYSTEM", top: "36%", left: "-10%", delay: 0.6 },
  { label: "USER FLOW", top: "66%", left: "2%", delay: 1.2 },
  { label: "PROTOTYPE", top: "18%", right: "-6%", delay: 0.3 },
  { label: "#8B2635", top: "58%", right: "-8%", delay: 0.9 },
];

export function Hero() {
  return (
    <section id="top" className="mesh-cream grain relative overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-cream-light/70 px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-primary backdrop-blur">
            <Sparkles size={12} /> UI/UX DESIGNER • PRODUCT DESIGNER
          </span>

          <h1 className="mt-7 font-serif leading-[0.86] text-glow">
            <span className="block text-[clamp(3rem,9vw,7.5rem)] font-light tracking-tight text-foreground">
              CHANIKYA
            </span>
            <span className="block text-[clamp(3rem,9.6vw,8rem)] font-light italic text-primary">
              Velivela
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-foreground/80 md:text-3xl">
            Designing digital experiences <em className="italic text-primary">that people love</em>
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            I design intuitive, user-centered digital products that combine creativity, strategy, and
            technology.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              VIEW PROJECTS
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-cream-light/60 px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-primary backdrop-blur transition-colors hover:bg-primary/8"
            >
              DOWNLOAD RESUME <ArrowDownToLine size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              LET&apos;S CONNECT
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-x-6 bottom-6 top-10 rounded-[3rem] bg-gradient-to-b from-beige/70 to-cream-light/40 blur-xl" />
          <img
            src={character}
            width={1024}
            height={1280}
            alt="Anime-style illustration of Chanikya Velivela, UI/UX and product designer"
            className="relative z-10 mx-auto w-full drop-shadow-[0_30px_60px_rgba(139,38,53,0.25)]"
          />
          {floats.map((f, i) => (
            <motion.div
              key={f.label}
              className="glass-panel absolute z-20 hidden rounded-xl px-3 py-2 font-mono text-[9px] tracking-[0.16em] text-primary shadow-[var(--shadow-soft)] md:block"
              style={{ top: f.top, left: f.left, right: f.right }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
            >
              {f.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
