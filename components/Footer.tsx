"use client";

import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="section-reveal border-t border-brown/10">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 font-mono text-[12px] text-brown-soft md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} Agnieszka Bola</span>
        <span>{dict.footer.builtWith}</span>
      </div>
    </footer>
  );
}
