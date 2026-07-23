export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "examunity",
    title: "Examunity",
    tagline: "Collaborative AI-powered learning & exam preparation platform",
    description:
      "A social learning platform designed to help students, trainees, and educators collaborate and prepare for exams more effectively. The platform enables users to access thousands of practice questions, mock exams, flashcards, and shared learning materials while engaging with peers in study groups. It supports both user-generated and curated content, allowing learners to create, share, and review study resources. Built with a scalable full-stack architecture and enhanced with AI-driven features for content analysis, skill mapping, and personalized learning experiences.",
    tech: [
      "React Native",
      "React",
      "TypeScript",
      "GraphQL",
      "Laravel",
      "MySQL",
      "AI Integration",
    ],
    // responsibilities: [
    //   "Developed and maintained frontend features using React Native and React",
    //   "Built and optimized GraphQL APIs for efficient data fetching",
    //   "Implemented backend services and business logic using Laravel",
    //   "Designed and optimized MySQL database structures for scalable learning content",
    //   "Integrated AI features for analyzing course content and mapping skills to activities",
    //   "Collaborated on performance improvements and mobile responsiveness"
    // ],
    // highlights: [
    //   "Thousands of learning materials including exams, flashcards, and quizzes",
    //   "User-generated content system for collaborative learning",
    //   "Course-based organization with shared study groups",
    //   "Cross-platform access (web and mobile)",
    //   "AI-assisted content tagging and skill detection"
    // ],
    live: "https://www.examunity.com/",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    featured: true,
  },

  {
    slug: "job-portal",
    title: "Job Portal Platform",
    tagline: "AI-enhanced job matching and recruitment system",
    description:
      "A full-stack job portal application designed to connect employers and candidates through intelligent matching and streamlined workflows. The platform includes job listings, applicant tracking, and role-based dashboards. Currently under active development with planned AI features for resume parsing and job-candidate matching.",
    tech: ["React", "TypeScript", "Redux", "Redux Toolkit", "Laravel", "MySQL"],
    // responsibilities: [
    //   "Designed and implemented frontend architecture using React and Redux",
    //   "Developed backend APIs and business logic with Laravel",
    //   "Built GraphQL layer for efficient data querying",
    //   "Structured database schema for job listings and applications",
    //   "Planned AI integration for resume parsing and candidate matching",
    // ],
    // status: "In Development",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    slug: "service-management-saas",
    title: "Services Management SaaS",
    tagline: "Service and project operations platform",
    description:
      "A full-stack SaaS platform designed for companies to manage services, projects, subcontractors, and operational analytics in one unified system. The platform enables tracking of service performance, financial metrics, and resource allocation, with advanced reporting and time-based analytics. Built with a scalable architecture using Next.js, NestJS, GraphQL, Prisma, and DataLoader for optimized performance and real-time insights. Ai Integrated for searching into files and creating content depends on its user needs",
    tech: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "DataLoader",
    ],
    // highlights: [
    //   "Advanced reporting dashboard for projects and services",
    //   "Time-based revenue analytics (daily, weekly, monthly, yearly)",
    //   "Service-to-project relationship tracking with pivot metadata",
    //   "Subcontractor performance and cost tracking",
    //   "Document and media management system",
    //   "Optimized GraphQL queries using DataLoader"
    // ],
    // status: "In Development",
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
