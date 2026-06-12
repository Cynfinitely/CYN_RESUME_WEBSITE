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
      "Java",
      "Spring",
      "Django REST",
      "REST APIs",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    name: "Practices & Tools",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "JSDoc",
      "JUnit",
      "Clean Code",
      "Figma",
      "Linux",
      "Documentation-first development",
    ],
  },
];
