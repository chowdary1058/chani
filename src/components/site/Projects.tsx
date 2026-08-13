import { motion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import flavorful from "@/assets/project-flavorful.jpg";
import aurum from "@/assets/project-aurum.jpg";
import cafeaa from "@/assets/project-cafeaa.jpg";

const projects = [
  {
    no: "01",
    title: "FLAVORFUL FEAST 3D",
    category: "3D Restaurant Experience",
    desc: "An immersive restaurant experience where 3D plating, motion and menu storytelling turn browsing into appetite. Built around a clear ordering path and appetising visual hierarchy.",
    url: "https://flavorfulfeast3d.netlify.app/",
    img: flavorful,
  },
  {
    no: "02",
    title: "AURUM JEWELS",
    category: "Luxury Jewelry Experience",
    desc: "A luxury jewellery storefront with editorial pacing, generous whitespace and product-first composition — designed to make each piece feel like a gallery object.",
    url: "https://aurumjewels.netlify.app/",
    img: aurum,
  },
  {
    no: "03",
    title: "CAFE AA",
    category: "Cafe & Food Experience",
    desc: "A warm, tactile cafe brand experience: menu discovery, reservations and story sections tied together with a cohesive type and colour system.",
    url: "https://cafeaa.netlify.app/",
    img: cafeaa,
  },
];

function Case({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const flip = i % 2 === 1;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1100px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid items-center gap-10 lg:grid-cols-2 ${flip ? "lg:[direction:rtl]" : ""}`}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 will-change-transform hover:shadow-[var(--shadow-elegant)] lg:[direction:ltr]"
      >
        <img
          src={p.img}
          alt={`${p.title} — ${p.category} interface design`}
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="glass-panel absolute left-5 top-5 rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-primary">
          PROJECT {p.no}
        </span>
      </div>

      <div className="lg:[direction:ltr]">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary">{p.category.toUpperCase()}</p>
        <h3 className="mt-3 font-serif text-[clamp(2rem,4.6vw,3.6rem)] font-light leading-[1] text-foreground">
          {p.title}
        </h3>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">{p.desc}</p>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
        >
          LIVE PROJECT
          <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-cream-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.25em] text-primary">03 — SELECTED WORK</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]">
          FEATURED <span className="italic text-primary">projects</span>
        </h2>
        <div className="mt-16 space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <Case key={p.no} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
