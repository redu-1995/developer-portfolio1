export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  role: string;
  featured: boolean;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
 {
  id: "event-management-system",
  title: "Event Management System",
  type: "Web Application",
  role: "Full Stack Developer",
  featured: true,

  description:
    "A web-based event management platform designed to simplify event planning, attendee registration, and event organization through a centralized dashboard.",

  problem:
    "Managing events manually often results in registration errors, scheduling conflicts, and inefficient communication between organizers and attendees.",

  solution:
    "Developed a full-stack web application that enables organizers to create events, manage registrations, track attendees, and monitor event information through an intuitive dashboard.",

  features: [
    "Event creation and management",
    "Attendee registration and ticket management",
    "Secure user authentication and role-based access",
    "Interactive dashboard for event monitoring",
    "Responsive interface optimized for desktop and mobile",
    "RESTful API integration for seamless frontend-backend communication"
  ],

  techStack: [
    "React",
    "Django",
    "PostgreSQL",
    "Tailwind CSS",
    "REST API"
  ],

  image: "/images/projects/event.jpg",

  liveUrl: "https://event-management-system-ashy-seven.vercel.app/",

  githubUrl: "https://github.com/redu-1995/Event_Management_System",
},
  {
    id: "yv-beauty",
    title: "YV Beauty E-Commerce Store",
    type: "Frontend Application",
    role: "Frontend Developer",
    featured: false,
    description: "A modern, highly responsive e-commerce web application tailored for beauty and cosmetics products.",
    problem: "Local cosmetic stores lack accessible online storefronts with seamless product browsing and mobile-friendly layouts.",
    solution: "Designed and built an interactive product catalog with instant category filtering, item modal previews, and cart management.",
    features: [
      "Dynamic product search and taxonomy filtering",
      "Responsive cart drawer state management",
      "Mobile-optimized UI navigation"
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    image: "/images/projects/beauty.jpg",
    liveUrl: "https://yvbeauty.netlify.app/",
    githubUrl: "https://github.com/redu-1995/beauty",
  },
  {
    id: "english-learning-app",
    title: "English Learning & Practice Platform",
    type: "EdTech Application",
    role: "Frontend Developer",
    featured: false,
    description: "An interactive learning app designed to help non-native speakers practice vocabulary and comprehension through bite-sized lessons.",
    problem: "Traditional language learning tools often present rigid lesson structures without immediate visual feedback for learners.",
    solution: "Created an intuitive interactive quiz interface with progress indicators, localized context prompts, and instant score evaluation.",
    features: [
      "Interactive multi-choice quiz modules",
      "Gamified progress tracking",
      "Clean, distraction-free UI/UX"
    ],
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/learning_app.jpg",
    liveUrl: "https://offline-learning-8l4p5y4jj-rediets-projects-15e9e9ed.vercel.app/",
    githubUrl: "https://github.com/redu-1995/offline-learning-app",
  },
];