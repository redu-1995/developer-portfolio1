export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "yetem-trading",
    role: "Junior IT Officer",
    company: "Yetem Trading PLC",
    type: "Full-time",
    period: "2026 - Present",
    description: "Bridging business operations and technology by supporting enterprise systems and digital workflows.",
    highlights: [
      "Supported digital transformation initiatives by evaluating software solutions and optimizing daily business workflows.",
      "Participated in Odoo ERP implementation and user training, analyzing operational challenges to improve data collection.",
      "Collaborated across departments to gather requirements and translate business needs into practical technology solutions.",
      "Maintained system reliability and data security to ensure uninterrupted enterprise operations.",
    ],
    technologies: ["Odoo ERP", "Business Systems", "Process Optimization", "REST APIs", "Python"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "act-degree",
    degree: "BSc in Computer Science",
    institution: "American College of Technology",
    period: "2022 - 2025",
    gpa: "3.72 / 4.0",
    achievements: [
      "Graduated with Distinction (GPA: 3.72)",
      "Strong emphasis on Software Engineering and Web Architecture",
      "Completed hands-on practical capstone software project",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "huawei-seeds",
    title: "Huawei Seeds for the Future Program",
    issuer: "Huawei ICT Academy",
  },
  {
    id: "fcc-web-design",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
  },
  {
    id: "ibm-data",
    title: "Data Analysis Fundamentals",
    issuer: "IBM",
  },
  {
    id: "js-cert",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
  },
];