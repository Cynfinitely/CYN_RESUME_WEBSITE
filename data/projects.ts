export type ProjectCategory =
  "Product" | "Game" | "Utility" | "Business" | "Community";

export type Project = {
  name: string;
  category: ProjectCategory;
  description: string;
  features: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
};

export const projects: Project[] = [
  {
    name: "Control",
    category: "Product",
    description:
      "Invite-only personal life-management app — todos, goals, budget, health, journal, food, exercise, religious practice, career, networking, and cross-area reports. Cloud PostgreSQL so it works on Mac, desktop, and iPhone.",
    features: [
      "Single-use, expiring invite links",
      "Each user switches modules on and off",
      "Budget with bank CSV import",
      "Health and migraine diary, journal, food logging, and meal planning",
      "Exercise logging and workout programs",
      "Cross-area daily, weekly, and monthly reports",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Cynfinitely/Control",
    liveUrl: "https://control-two-psi.vercel.app",
  },
  {
    name: "Engoryx",
    category: "Product",
    description:
      "Multi-tenant engineering-management platform for leads and developers. Metrics are transparent and evidence-backed, with no developer performance score.",
    features: [
      "Teams, daily updates, and a developer directory",
      "Project roadmaps, goals, and checkpoints",
      "GitHub App integration with pull-request lookup and reports",
      "Career tracks and weekly delivery assessments",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Drizzle",
      "Tailwind CSS",
    ],
    isPrivate: true,
  },
  {
    name: "CynSeat",
    category: "Community",
    description:
      "Free ticketing platform for NGOs and event organizers — a single-event ticket storefront with a clear path from event to checkout. Serving 200+ users and NGOs.",
    features: [
      "Stripe checkout for guests and signed-in users",
      "Admin view with ticket-list download",
      "English, Finnish, and Turkish localization",
      "Used by 200+ users and NGOs",
    ],
    tech: ["Next.js", "TypeScript", "React", "Firebase", "Stripe"],
    githubUrl: "https://github.com/Cynfinitely/cynseat",
    liveUrl: "https://cynseat.vercel.app",
  },
  {
    name: "Rüyamda",
    category: "Business",
    description:
      "Turkish dream-interpretation platform — customers submit a dream, pay at submission, and receive a written interpretation from a human interpreter, not an AI.",
    features: [
      "Dream submission with payment at submission",
      "Written interpretations from a real interpreter",
      "Payments and email behind small provider ports",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Tailwind CSS",
    ],
    liveUrl: "https://dusyora.vercel.app",
    isPrivate: true,
  },
  {
    name: "MTS Security",
    category: "Business",
    description:
      "Responsive one-page marketing website for MTS Security in Augsburg — services, expertise, and contact in a clean, trustworthy layout.",
    features: [
      "Service showcase",
      "Contact form backed by a serverless email function",
      "Production deployment on Vercel with a custom domain",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/Cynfinitely/mtssecurity",
    liveUrl: "https://www.mts-sicherheit.com",
  },
  {
    name: "Craft Master 67",
    category: "Game",
    description:
      "Local-first Path of Exile 2 crafting helper — item and mod browser, materials with live prices, a cost-ranked craft planner, clipboard item paste, and a profit dashboard.",
    features: [
      "Item and mod browser with tag filters",
      "Cost-ranked craft planner with luck and brick reads",
      "Paste in-game items from the clipboard",
      "Saved plans re-priced at today's prices",
      "Profit dashboard with live market prices",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite", "Drizzle"],
    githubUrl: "https://github.com/Cynfinitely/Craft-master-67",
  },
  {
    name: "EchoScribe",
    category: "Utility",
    description:
      "Turn spoken words into accurate text. EchoScribe transcribes video and audio with OpenAI Whisper — timestamps, SRT export, and privacy-first processing with no permanent storage.",
    features: [
      "Audio and video transcription with timestamps",
      "OpenAI Whisper with multiple model sizes",
      "TXT, SRT, and JSON export",
      "FastAPI backend with Docker support",
    ],
    tech: ["Python", "FastAPI", "OpenAI Whisper", "Docker"],
    githubUrl: "https://github.com/Cynfinitely/EchoScribe",
    liveUrl: "https://huggingface.co/spaces/Cynfinitely/EchoScribe",
  },
  {
    name: "AquiReminder",
    category: "Utility",
    description:
      "Chrome extension that reminds you to stay hydrated. Set a timer and get alerts with sound even when the popup is closed.",
    features: [
      "Customizable hydration reminders",
      "Background alerts with sound",
      "Acknowledge, snooze, or pause a reminder",
      "Available in six languages",
    ],
    tech: ["JavaScript", "Chrome Extension API"],
    githubUrl: "https://github.com/Cynfinitely/AquiReminder",
  },
];
