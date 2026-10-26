"use client";

import { useLanguage } from "@/context/language-context";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#build", label: "build" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const { dict } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bg/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-content items-center justify-between px-8 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-2xl font-semibold uppercase tracking-tight text-ink transition-transform duration-500 hover:-translate-y-0.5"
        >
          Agnieszka Bola
        </a>
        <ul className="hidden items-center gap-4 font-body text-sm text-ink/90 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-sm px-6 py-2 transition-all duration-300 hover:bg-bg-card hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-md border border-ink/20 bg-bg-card px-4 py-2 font-body text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            {dict.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
