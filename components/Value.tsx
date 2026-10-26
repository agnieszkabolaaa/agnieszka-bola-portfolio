"use client";

import { useLanguage } from "@/context/language-context";

export default function Value() {
  const { dict } = useLanguage();
  const { value } = dict;

  return (
    <section id="value" className="section-reveal border-y border-ink/12 bg-bg-alt/70">
      <div className="mx-auto max-w-content px-6 py-10 md:px-10 md:py-16">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
          {value.eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-ink md:text-4xl">
          {value.heading}
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-brown-soft">
          {value.paragraph}
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {value.points.map((point) => (
            <div key={point.title} className="rounded-md border border-ink/12 bg-bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <h3 className="font-display text-lg text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-brown-soft">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
