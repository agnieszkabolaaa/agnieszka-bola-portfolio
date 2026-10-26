"use client";

import { useLanguage } from "@/context/language-context";

export default function Build() {
  const { dict } = useLanguage();
  const { build } = dict;

  return (
    <section id="build" className="section-reveal mx-auto max-w-content px-6 py-10 md:px-10 md:py-16">
      <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
        {build.eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
        {build.heading}
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {build.items.map((item) => (
          <article
            key={item.title}
            className="rounded-md border border-brown/20 bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_22px_40px_-26px_rgba(28,23,18,0.7)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brown-soft">
              {item.ext}
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-brown-soft">
              {item.detail}
            </p>
          </article>
        ))}

        <div className="rounded-md border border-brown/25 bg-ink p-6 md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
            System Note
          </p>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-cream/80">
            Each project starts with scope framing, then design and implementation in one flow so decisions stay consistent from idea to release.
          </p>
        </div>
      </div>
    </section>
  );
}
