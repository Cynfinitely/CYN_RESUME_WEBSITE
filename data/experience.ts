export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Northfina / Etufillari",
    period: "Dec 2024 – Present",
    location: "Espoo, Finland",
    highlights: [
      "Develop Next.js and Azure Functions full-stack applications for bike benefits at Etufillari.",
      "Enhance user experience and functionality to contribute to company growth.",
      "Collaborate with the team to develop new products for the company.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Northfina / Etufillari",
    period: "Jul 2024 – Dec 2024",
    highlights: [
      "Built Next.js and Azure Functions applications for bike benefits platform.",
      "Implemented Redux Toolkit state management for efficient application performance.",
      "Created autonomous documentation using JSDoc file scripts for easy maintenance.",
    ],
  },
  {
    role: "Junior Backend Developer",
    company: "Silcube Software",
    period: "Jun 2023 – Nov 2023",
    location: "Espoo, Finland",
    highlights: [
      "Developed private debt financial software using Vue.js and Java.",
      "Ensured software reliability through JUnit testing.",
      "Streamlined teamwork with Bitbucket and created documentation using Redocly.",
    ],
  },
  {
    role: "Full Stack Developer Trainee",
    company: "Integrify",
    period: "Aug 2022 – Jun 2023",
    location: "Helsinki, Finland",
    highlights: ["Developed full-stack web projects as part of Integrify Academy."],
  },
  {
    role: "Backend Instructor",
    company: "Clarusway",
    period: "Jul 2022 – Jun 2023",
    highlights: [
      "Taught Django to America and Germany cohorts.",
      "Built full-stack web development projects and reviewed academic content.",
      "Facilitated live sessions, prepared materials, and mentored students.",
    ],
  },
  {
    role: "Consultant",
    company: "PwC",
    period: "Jul 2017 – Feb 2018",
    location: "Istanbul, Turkey",
    highlights: [
      "Examined customers' financial reports and worked with accounting departments.",
      "Analyzed financial documents to identify optimization opportunities.",
      "Created reports providing economic advice to clients.",
    ],
  },
];
