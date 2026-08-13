import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest("a, button, input, textarea, [data-cursor]");
      if (ring.current) ring.current.dataset["active"] = interactive ? "true" : "false";
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div ref={dot} className="absolute left-0 top-0 h-2 w-2 rounded-full bg-primary" />
      <div
        ref={ring}
        data-active="false"
        className="absolute left-0 top-0 h-11 w-11 rounded-full border border-primary/40 bg-cream/20 backdrop-blur-[1px] transition-[width,height,opacity,border-color] duration-200 data-[active=true]:border-primary/70 data-[active=true]:bg-primary/10"
      />
    </div>
  );
}
