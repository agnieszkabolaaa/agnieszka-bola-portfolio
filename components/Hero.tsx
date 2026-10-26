"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/context/language-context";

const HeroGraphic = dynamic(() => import("./HeroGraphic"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const { dict } = useLanguage();
  const { hero } = dict;

  return (
    <section id="top" className="section-reveal delay-1 relative mx-auto max-w-content overflow-x-hidden px-6 pb-10 pt-10 md:px-10 md:pb-16 md:pt-12">
      {/* One relative wrapper for the grid + the name banner, so a single
          sphere graphic can span both without being duplicated. */}
      <div className="relative">
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-start">
          {/* z-20: the real headline always renders above the sphere, no
              matter how long the copy runs or how the sphere is sized. */}
          <div className="relative z-20 min-h-[24rem] md:min-h-[34rem]">
            <div className="flex min-h-[22rem] flex-col justify-end pb-4 md:min-h-[34rem] md:pb-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
                {hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-xl font-display text-5xl uppercase leading-[0.95] text-ink sm:text-6xl md:text-7xl">
                {hero.headingPre}
                <span className="text-accent">{hero.headingItalic}</span>
                {hero.headingPost}
              </h1>
            </div>
          </div>

          <div className="section-reveal delay-2 grid min-h-[24rem] min-w-0 overflow-hidden grid-rows-[auto_1fr_auto] border border-ink/12 bg-bg-card/85 backdrop-blur-sm md:min-h-[34rem]">
            <div className="flex items-center border-b border-ink/12 p-6 md:p-8">
              <h2 className="max-w-full break-words [overflow-wrap:anywhere] font-display text-[clamp(1.8rem,5.4vw,3.9rem)] uppercase leading-[0.93] tracking-[-0.01em] text-ink">
                {hero.proof.title}
              </h2>
            </div>
            <div className="grid grid-cols-2 border-b border-ink/12">
              {hero.proof.cards.map((card, index) => (
                <div
                  key={card.label}
                  className={`p-5 ${
                    index % 2 === 0 ? "border-r border-ink/12" : ""
                  } ${index < 2 ? "border-b border-ink/12" : ""}`}
                >
                  <p className="font-display text-3xl uppercase leading-none text-ink md:text-4xl">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brown-soft">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-5 md:p-6">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-sm border border-ink/15 bg-bg px-4 py-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {hero.proof.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Large display text — z-0 so the 3D canvas at z-10 can layer over it */}
        <p className="pointer-events-none relative z-20 mt-4 max-w-full select-none font-display text-[clamp(4rem,13vw,10rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-ink/90 md:mt-2">
          Built Right.
        </p>

        {/* Service strip — three clear answers to "what can you help me with?" */}
        <div className="mt-6 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3 md:mt-4">
          {[
            {
              tag: "01",
              title: "Web Applications",
              detail: "Fast, accessible UIs in React & TypeScript — from greenfield builds to rescuing legacy front-ends.",
            },
            {
              tag: "02",
              title: "Process Automation",
              detail: "Custom scripts and internal tools that cut hours of manual work: data pipelines, reporting, and workflow tooling.",
            },
            {
              tag: "03",
              title: "Product Design",
              detail: "End-to-end Figma work — from initial wireframes to pixel-perfect handoff specs your developers can build from.",
            },
          ].map(({ tag, title, detail }) => (
            <div key={tag} className="flex flex-col gap-2 bg-bg px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{tag}</p>
              <p className="font-display text-[15px] uppercase leading-tight text-ink">{title}</p>
              <p className="text-[13px] leading-relaxed text-brown-soft">{detail}</p>
            </div>
          ))}
        </div>

        {/* 3D graphic — torus knot inside a wireframe ico-cage, both
            auto-rotating independently. Canvas is transparent so the
            page background shows through. Loaded client-side only. */}
        <div
          className="pointer-events-none absolute -left-10 top-4 z-10 h-[30rem] w-[32rem] md:-left-14 md:top-6 md:h-[44rem] md:w-[46rem]"
          aria-hidden="true"
        >
          <HeroGraphic />
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-brown-soft">
        {hero.paragraph}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-sm border border-ink/20 bg-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
        >
          {hero.ctaPrimary}
        </a>
        <a
          href="#build"
          className="rounded-sm border border-brown/30 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-brown transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          {hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
