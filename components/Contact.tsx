"use client";

import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { dict } = useLanguage();
  const { contact } = dict;

  return (
    <section id="contact" className="section-reveal mx-auto max-w-content px-6 py-10 md:px-10 md:py-16">
      <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
        {contact.eyebrow}
      </p>
      <h2 className="mt-3 max-w-xl font-display text-3xl text-ink md:text-4xl">
        {contact.heading}
      </h2>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-brown-soft">
        {contact.paragraph}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="mailto:agnieszkabola.apps@gmail.com"
          className="rounded-sm bg-ink px-6 py-3 font-mono text-[13px] text-cream transition-colors hover:bg-accent"
        >
          agnieszkabola.apps@gmail.com
        </a>
        <a
          href={contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-brown/25 px-6 py-3 font-mono text-[13px] text-brown transition-colors hover:border-accent hover:text-accent"
        >
          {contact.linkedin}
        </a>
      </div>
    </section>
  );
}
