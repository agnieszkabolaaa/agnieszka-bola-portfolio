export type Lang = "en";

export interface Dict {
  nav: {
    cta: string;
  };
  hero: {
    eyebrow: string;
    headingPre: string;
    headingItalic: string;
    headingPost: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proof: {
      title: string;
      cards: { value: string; label: string }[];
      cta: string;
    };
    code: {
      name: string;
      role: string;
      experience: string;
      industries: [string, string];
      builds: [string, string, string];
      returnLine1: string;
      returnLine2: string;
    };
  };
  experience: {
    eyebrow: string;
    heading: string;
    companies: string[];
    roles: { title: string; sector: string; detail: string }[];
    stat1Title: string;
    stat1Detail: string;
    stat2Title: string;
    stat2Detail: string;
    linkedinCta: string;
    linkedinLabel: string;
    linkedinUrl: string;
  };
  build: {
    eyebrow: string;
    heading: string;
    items: { ext: string; title: string; detail: string }[];
  };
  value: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    points: { title: string; detail: string }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    items: {
      tag: string;
      title: string;
      detail: string;
      impact: string;
      impactDetail: string;
      stack: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    linkedin: string;
    linkedinUrl: string;
    github: string;
  };
  footer: {
    builtWith: string;
  };
}

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "Tech Lead · Engineering Manager · Senior Software Engineer",
      headingPre: "Eight years turning ",
      headingItalic: "corporate complexity",
      headingPost: " into shipped software.",
      paragraph:
        "I'm Agnieszka — I've led teams and written code inside pharmaceutical and FMCG companies for eight years. Now I bring that same discipline to small businesses: UI applications, automation scripts, and product design in Figma, built to make your process faster and your budget go further.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See what I build",
      proof: {
        title: "Delivery Proof",
        cards: [
          { value: "8+", label: "Years in pharma and FMCG" },
          { value: "2", label: "Regulated industries" },
          { value: "Multi", label: "Engineering teams led" },
          { value: "10k+", label: "Lines shipped across products" },
        ],
        cta: "See full experience",
      },
      code: {
        name: "Agnieszka Bola",
        role: "Tech Lead · Engineering Manager · Senior SWE",
        experience: "8 years",
        industries: ["pharma", "fmcg"],
        builds: ["UI applications", "automation scripts", "Figma design"],
        returnLine1: "making pharma & fmcg teams",
        returnLine2: "ship faster and spend less.",
      },
    },
    experience: {
      eyebrow: "experience.ts",
      heading: "From internships to Senior IT Manager.",
      companies: ["Procter & Gamble", "Roche", "Bosch", "Philips Lighting"],
      roles: [
        {
          title: "Senior IT Manager | Software Engineer",
          sector: "Procter & Gamble · Nov 2024 - Present",
          detail:
            "Frontend Tech Lead / Lead Engineer working on integrated media solutions. Leading frontend vision, owning delivery, and managing multiple engineers while supporting onboarding, peer reviews, and cross-functional decisions.",
        },
        {
          title: "IT Manager - Software Engineer",
          sector: "Procter & Gamble · Jun 2021 - Nov 2024",
          detail:
            "Led frontend development on two major solutions, shaped engineering standards, advised stakeholders, and designed testing strategies including Selenium-based automation.",
        },
        {
          title: "IT Professional - Frontend Developer",
          sector: "Roche · Feb 2019 - May 2021",
          detail:
            "Built web applications in Angular 7+, integrating with AWS, GraphQL, and REST APIs. Worked closely with UX designers in agile product teams to deliver production-ready interfaces.",
        },
        {
          title: "Junior IT Professional - Backend Developer",
          sector: "Roche · Feb 2018 - Jan 2019",
          detail:
            "Maintained and developed PPM systems supporting drug development planning workflows used by large organizations.",
        },
        {
          title: ".NET Developer Intern",
          sector: "Bosch · Mar 2017 - Jan 2018",
          detail:
            "Implemented web application features in .NET (WCF, C#, and VB elements) and created VBA scripts integrated with CATIA and product management systems.",
        },
        {
          title: "System Automation Intern",
          sector: "Philips Lighting · Jul 2016 - Oct 2016",
          detail:
            "Designed and implemented an automation system for electrical component testing; the solution was recognized in the Philips Excellence Competition 2016.",
        },
      ],
      stat1Title: "Multiple engineers led",
      stat1Detail:
        "Hands-on frontend leadership with direct team management, mentoring, onboarding, and technical decision support.",
      stat2Title: "10k+ lines of code",
      stat2Detail:
        "Delivered production software across Angular, .NET, AWS integrations, GraphQL, REST APIs, and automation tooling.",
      linkedinLabel: "Complete professional timeline",
      linkedinCta: "View full experience on LinkedIn",
      linkedinUrl: "https://pl.linkedin.com/in/agnieszka-bola-a5a78311a",
    },
    build: {
      eyebrow: "build.ts",
      heading: "What I build, end to end.",
      items: [
        {
          ext: ".tsx",
          title: "UI applications",
          detail:
            "Web interfaces and internal tools that are fast, accessible, and easy for your team to actually use.",
        },
        {
          ext: ".sh",
          title: "Automation scripts",
          detail:
            "The repetitive, manual parts of your workflow, scripted away so your team spends time on the work that matters.",
        },
        {
          ext: ".fig",
          title: "Figma design",
          detail:
            "A working design before a single line of code is written, so we agree on the product early and build the right thing once.",
        },
      ],
    },
    value: {
      eyebrow: "for small businesses",
      heading: "Ship faster. Spend less.",
      paragraph:
        "Small teams rarely have room for wasted engineering hours. I bring corporate-grade process, scoped down to what a small business actually needs.",
      points: [
        {
          title: "Fewer hours on repeat work",
          detail:
            "If your team is doing the same manual task every week, it's usually a script waiting to be written.",
        },
        {
          title: "A design before a rebuild",
          detail:
            "Prototyping in Figma first means we catch the wrong direction before it costs you developer time.",
        },
        {
          title: "One person, full picture",
          detail:
            "Eight years leading teams and writing code means I can plan, build, and ship without a hand-off gap.",
        },
      ],
    },
    projects: {
      eyebrow: "case study",
      heading: "Recent work.",
      items: [
        {
          tag: ".exe · Desktop App",
          title: "File Generation & Management Automation",
          detail:
            "A desktop application built for a cosmetics safety assessors small business. The team was spending multiple days each cycle manually generating, naming, and organising hundreds of output files across client reports and compliance documents. The app replaced the entire workflow with a single interface — staff input parameters, hit run, and the correct files are generated, named, and filed in seconds. Zero formatting errors, no coordination overhead.",
          impact: "Days → Min",
          impactDetail: "Multi-day manual process reduced to minutes per cycle",
          stack: ["Python", "Desktop Application", "File Automation", "Cosmetics Safety"],
        },
      ],
    },
    contact: {
      eyebrow: "contact.ts",
      heading: "Tell me what's slowing your team down.",
      paragraph:
        "Send a short note about your project and I'll reply with next steps — no obligation.",
      linkedin: "LinkedIn",
      linkedinUrl: "https://pl.linkedin.com/in/agnieszka-bola-a5a78311a",
      github: "GitHub",
    },
    footer: {
      builtWith: "Built with Next.js, deployed on Vercel",
    },
  },
};
