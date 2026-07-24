export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces with modern React ecosystems.",
    icon: "⚛️",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "State Management",
    ],
  },
  {
    title: "Backend Development",
    description: "Creating structured REST APIs and business logic to support client applications.",
    icon: "⚙️",
    skills: ["Django", "Django REST Framework", "Python", "RESTful APIs", ],
  },
  {
    title: "Database & Storage",
    description: "Designing schema structures and managing application data persistence.",
    icon: "🗄️",
    skills: ["PostgreSQL", "SQLite", "ORM / SQL Queries"],
  },
  {
    title: "Tools & Workflow",
    description: "Version control, deployment pipelines, and modern development environments.",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm / pnpm", "Vercel"],
  },
  {
    title: "Engineering Practices",
    description: "Core principles for delivering high-quality, maintainable software.",
    icon: "📐",
    skills: [
      "Responsive Design",
      "Component Architecture",
      "UI/UX Principles",
      "Clean Code",
      "API Integration",
    ],
  },
];

export const CURRENTLY_LEARNING = [
  "Next.js App Router Architecture & Server Actions",
  "Web Performance Optimization & Core Web Vitals",
  "Frontend System Design & Design Systems",
];