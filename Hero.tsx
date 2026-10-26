"use client";

import { useLanguage } from "@/context/language-context";

// Identical ellipses rotated evenly around a shared center — the classic
// "wireframe globe / yarn ball" construction. A displacement filter (below)
// knocks them off-true so it reads as woven fabric, not a CAD render.
const SPHERE_ANGLES = Array.from({ length: 22 }, (_, i) => i * (180 / 22));

const SPHERE_BLOB =
  "M126,296C118,214,132,128,196,84C264,40,364,36,438,80C512,124,556,206,552,290C548,378,494,458,418,500C338,544,240,540,170,488C104,440,134,378,126,296Z";

export default function Hero() {
  const { dict } = useLanguage();
  const { hero } = dict;

  return (
    <section id="top" className="section-reveal delay-1 relative mx-auto max-w-content overflow-x-hidden px-6 pb-10 pt-10 md:px-10 md:pb-16 md:pt-12">
      <div className="relative">
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-start">
          <div className="relative min-h-[24rem] md:min-h-[34rem]">
            <div className="relative z-10 flex min-h-[22rem] flex-col justify-end pb-4 md:min-h-[34rem] md:pb-2">
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

        {/* Signature line — the name is drawn near-solid so the wireframe
            sphere below has something to visibly sit on top of. */}
        <p className="pointer-events-none relative z-0 mt-4 max-w-full select-none font-display text-[clamp(5rem,14vw,11rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-ink/90 md:mt-2">
          Agnieszka
        </p>

        {/* Wireframe sphere: pinned to the top-left, tall enough to spill
            down over the first letters of the name above. */}
        <svg
          className="pointer-events-none absolute -left-14 -top-6 z-20 h-[27rem] w-[34rem] md:-left-16 md:-top-8 md:h-[41rem] md:w-[50rem]"
          viewBox="0 0 600 600"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="sphereClip">
              <path d={SPHERE_BLOB} />
            </clipPath>
            <filter id="sphereCrumple" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <radialGradient id="sphereWash" cx="34%" cy="28%" r="60%">
              <stop offset="0%" stopColor="#FFDDC2" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#FF8A4C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0.42" />
            </radialGradient>
          </defs>

          <g clipPath="url(#sphereClip)">
            <rect width="600" height="600" fill="url(#sphereWash)" />
            <g filter="url(#sphereCrumple)" stroke="#FF6C33" strokeWidth="1.1" fill="none" opacity="0.85">
              {SPHERE_ANGLES.map((angle) => (
                <ellipse key={angle} cx="300" cy="300" rx="256" ry="88" transform={`rotate(${angle} 300 300)`} />
              ))}
            </g>
          </g>

          <path d={SPHERE_BLOB} fill="none" stroke="#FF7A44" strokeOpacity="0.4" strokeWidth="1.4" />
        </svg>
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
