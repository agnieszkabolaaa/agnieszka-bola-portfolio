"use client";

import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { dict } = useLanguage();
  const { projects } = dict;

  return (
    <section id="projects" className="section-reveal mx-auto max-w-content px-6 py-10 md:px-10 md:py-16">
      <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
        {projects.eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
        {projects.heading}
      </h2>

      <div className="mt-10 flex flex-col gap-6">
        {projects.items.map((item) => (
          <article
            key={item.title}
            className="grid gap-0 overflow-hidden rounded-md border border-brown/20 bg-bg-card md:grid-cols-[1fr_14rem]"
          >
            {/* Main content */}
            <div className="p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brown-soft">
                {item.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brown-soft">
                {item.detail}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-brown/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-brown-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact stat — accent panel */}
            <div className="flex flex-col items-center justify-center gap-2 border-t border-brown/15 bg-ink p-8 text-center md:border-l md:border-t-0">
              <p className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold uppercase leading-none text-accent">
                {item.impact}
              </p>
              <p className="max-w-[9rem] text-[12px] leading-snug text-cream/60">
                {item.impactDetail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
