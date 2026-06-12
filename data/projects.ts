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
    name: "CynSeat",
    description:
      "Dynamic ticketing platform that empowers event organizers and excites attendees. Streamlines event creation, ticket sales, and attendee management through a user-friendly digital platform.",
    features: [
      "Event creation and management",
      "Ticket sales workflow",
      "Attendee management dashboard",
      "Responsive, production-ready UI",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/Cynfinitely/cynseat",
    liveUrl: "https://cynseat.vercel.app",
  },
  {
    name: "Craft-master-67",
    description:
      "Crafting helper for Path of Exile 2 — a TypeScript tool that helps players navigate complex crafting mechanics with an intuitive interface.",
    features: [
      "PoE2 crafting guidance",
      "Interactive crafting workflows",
      "Actively maintained and updated",
    ],
    tech: ["TypeScript", "React"],
    githubUrl: "https://github.com/Cynfinitely/Craft-master-67",
  },
  {
    name: "EchoScribe",
    description:
      "Turn spoken words into accurate text. EchoScribe transcribes video and audio into readable text using OpenAI Whisper, with a simple pipeline for developers.",
    features: [
      "Audio and video transcription",
      "OpenAI Whisper integration",
      "Developer-friendly pipeline",
    ],
    tech: ["Python", "OpenAI Whisper"],
    githubUrl: "https://github.com/Cynfinitely/EchoScribe",
  },
  {
    name: "mtssecurity",
    description:
      "Professional security company website showcasing services, expertise, and contact information with a clean, trustworthy design.",
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
      "Water Reminder Chrome extension that helps users stay hydrated throughout the day with customizable reminders and a lightweight interface.",
    features: [
      "Customizable hydration reminders",
      "Chrome extension architecture",
      "Lightweight and unobtrusive UX",
    ],
    tech: ["JavaScript", "Chrome Extension API"],
    githubUrl: "https://github.com/Cynfinitely/AquiReminder",
  },
];
