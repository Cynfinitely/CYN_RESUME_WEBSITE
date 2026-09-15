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
      "NextAuth",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "SQLite"],
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
      "JSDoc",
      "JUnit",
      "Clean Code",
      "Figma",
      "Linux",
      "Documentation-first development",
    ],
  },
];
