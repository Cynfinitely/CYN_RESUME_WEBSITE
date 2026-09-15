export type Project = {
  name: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Control",
    description:
      "Invite-only personal life-management app — todos, goals, budget, health, journal, food, exercise, religious practice, career, networking, and cross-area reports. Cloud PostgreSQL so it works on Mac, desktop, and iPhone.",
    features: [
      "Invite-only auth with email verification",
      "Modules for todos, goals, food, exercise, career, and networking",
      "Cross-area daily, weekly, and monthly reports",
      "Prisma with cloud PostgreSQL",
      "Deployed on Vercel for every device",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    githubUrl: "https://github.com/Cynfinitely/Control",
    liveUrl: "https://control-two-psi.vercel.app",
  },
  {
    name: "Craft Master 67",
    description:
      "Local-first Path of Exile 2 crafting helper — item and mod browser, materials with live prices, a cost-ranked craft planner, clipboard item paste, and a profit dashboard.",
    features: [
      "Item and mod browser with tag filters",
      "Cost-ranked craft planner with luck and brick reads",
      "Paste in-game items from the clipboard",
      "Profit dashboard with live market prices",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite"],
    githubUrl: "https://github.com/Cynfinitely/Craft-master-67",
  },
  {
    name: "CynSeat",
    description:
      "Free ticketing platform for NGOs and event organizers — event creation, ticket sales, and attendee management without the usual overhead. Serving 200+ users and NGOs.",
    features: [
      "Event creation and management",
      "Ticket sales workflow",
      "Attendee management dashboard",
      "Used by 200+ users and NGOs",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/Cynfinitely/cynseat",
    liveUrl: "https://cynseat.vercel.app",
  },
  {
    name: "EchoScribe",
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
    name: "MTS Security",
    description:
      "Responsive marketing website for MTS Security — services, expertise, and contact in a clean, trustworthy layout, deployed on Vercel.",
    features: [
      "Service showcase",
      "Responsive corporate layout",
      "Production deployment on Vercel",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Cynfinitely/mtssecurity",
    liveUrl: "https://mtssecurity.vercel.app",
  },
  {
    name: "AquiReminder",
    description:
      "Chrome extension that reminds you to stay hydrated. Set a timer, get alerts with sound even when the popup is closed.",
    features: [
      "Customizable hydration reminders",
      "Background alerts with sound",
      "Chrome alarms, storage, and windows APIs",
    ],
    tech: ["JavaScript", "Chrome Extension API"],
    githubUrl: "https://github.com/Cynfinitely/AquiReminder",
  },
];
