export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "Next.js",
      "React",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "CSS/SASS",
      "Accessibility",
    ],
  },
  {
    name: "Backend & Cloud",
    skills: [
      "Azure Functions",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Java",
      "Spring",
      "Django REST",
      "REST APIs",
      "Prisma",
      "Drizzle",
      "NextAuth",
      "Auth.js",
      "Stripe",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "SQLite", "Cloudflare D1"],
  },
  {
    name: "Practices & Tools",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "GitHub Actions",
      "Docker",
      "AWS",
      "Vercel",
      "Cloudflare Workers",
      "JSDoc",
      "JUnit",
      "Clean Code",
      "Figma",
      "Linux",
      "Documentation-first development",
    ],
  },
];
