"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`group fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-sm border border-ink/20 bg-bg/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent md:bottom-8 md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="text-ink transition-colors duration-300 group-hover:text-accent"
      >
        <path
          d="M7 11.5V2.5M7 2.5L2.5 7M7 2.5L11.5 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
