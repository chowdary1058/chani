import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/contact-config";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app to send the message.");
  };

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <section id="contact" className="mesh-cream grain relative py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] text-primary">06 — CONTACT</p>
          <h2 className="mt-4 max-w-4xl font-serif text-[clamp(2.5rem,6.4vw,5rem)] font-light leading-[0.95]">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="italic text-primary">exceptional together</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={submit} className="space-y-4">
            <input
              className={field}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              className={`${field} min-h-40 resize-none`}
              placeholder="Tell me about your project"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-[11px] tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              SEND MESSAGE
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="space-y-3">
            {[
              { icon: Mail, label: "EMAIL", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: Linkedin, label: "LINKEDIN", value: "velivela-chanikya", href: CONTACT.linkedin },
              { icon: Github, label: "GITHUB", value: "Chani1251", href: CONTACT.github },
              { icon: Download, label: "RESUME", value: "Download CV", href: CONTACT.resumeUrl },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="rounded-full bg-beige p-3 text-primary">
                  <c.icon size={16} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="block text-sm text-foreground">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
