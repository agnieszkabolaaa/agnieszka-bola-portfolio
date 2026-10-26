"use client";

import { useLanguage } from "@/context/language-context";

export default function Experience() {
  const { dict } = useLanguage();
  const { experience } = dict;

  return (
    <section id="experience" className="section-reveal border-t border-brown/10 bg-bg-alt/60">
      <div className="mx-auto max-w-content px-6 py-10 md:px-10 md:py-16">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
          {experience.eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-ink md:text-4xl">
          {experience.heading}
        </h2>
        <a
          href={experience.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-sm border border-ink/15 bg-bg px-4 py-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          {experience.linkedinCta}
        </a>
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[13px] text-brown-soft">
          {experience.companies.map((company, i) => (
            <span key={company}>
              {company}
              {i < experience.companies.length - 1 && (
                <span className="ml-3 text-brown/30">/</span>
              )}
            </span>
          ))}
        </div>

        <div className="relative mt-14 border-l border-brown/20 pl-8 md:pl-10">
          {experience.roles.map((role) => (
            <div key={role.title} className="relative pb-12 transition-transform duration-300 hover:translate-x-1 last:pb-0">
              <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-bg-alt bg-accent md:-left-[49px]" />
              <p className="font-mono text-[12px] uppercase tracking-wider text-brown-soft">
                {role.sector}
              </p>
              <h3 className="mt-1 font-display text-2xl text-ink">
                {role.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brown-soft">
                {role.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-brown/15 pt-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-2xl text-ink">{experience.stat1Title}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-brown-soft">
              {experience.stat1Detail}
            </p>
          </div>
          <div>
            <p className="font-display text-2xl text-ink">{experience.stat2Title}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-brown-soft">
              {experience.stat2Detail}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-md border border-brown/20 bg-bg-card p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brown-soft">
            {experience.linkedinLabel}
          </p>
          <a
            href={experience.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-sm border border-ink/15 bg-bg px-4 py-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            {experience.linkedinCta}
          </a>
        </div>
      </div>
    </section>
  );
}
