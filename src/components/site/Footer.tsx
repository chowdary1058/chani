import { CONTACT } from "@/lib/contact-config";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-light py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <div>
          <p className="font-serif text-2xl tracking-[0.14em] text-foreground">
            CHANIKYA <span className="italic text-primary">VELIVELA</span>
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
            UI/UX DESIGNER · PRODUCT DESIGNER
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email" },
            { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: CONTACT.github, icon: Github, label: "GitHub" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-full border border-primary/25 p-3 text-primary transition-colors hover:bg-primary/10"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
        <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
          © {new Date().getFullYear()} CHANIKYA VELIVELA
        </p>
      </div>
    </footer>
  );
}
