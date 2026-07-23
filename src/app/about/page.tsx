import Image from "next/image";
import SkillBadge from "@/components/SkillBadge";
import ResumeButton from "@/components/ResumeButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ronald Toledo",
  description:
    "Ronald Toledo is a Senior Full-Stack Engineer with 10+ years of experience building scalable applications and APIs with Laravel, Node.js, React, and Next.js.",
};

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "Material UI", "Angular", "React Native", "Vue.js"],
  },
  {
    category: "Backend & API",
    skills: ["Node.js (Express, NestJS)", "PHP (Laravel)", "REST APIs", "GraphQL", "WebSockets (Socket.io)", "Auth (OAuth, JWT, SSO)", "Redis", "RabbitMQ"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB"],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: ["Docker", "AWS (EC2, S3, CloudFront)", "Digital Ocean", "Git", "CI/CD", "Swagger / OpenAPI", "Postman", "Jira"],
  },
  {
    category: "AI Engineering",
    skills: ["Claude", "GitHub Copilot", "Model Context Protocol (MCP)", "AI Agents & Tool Calling", "Vector Search & Embeddings"],
  },
];

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "CloudPay Philippines, Inc.",
    period: "Nov 2018 – Present",
    description:
      "Leading development of a calendar/task management platform for enterprise clients, improving performance and scalability through optimized APIs and database queries with Laravel, MySQL, and Docker. Build and maintain scalable backend services with React, Node.js, Express, PostgreSQL, and GraphQL, and develop major features in an Angular + Tailwind dashboard. Drive frontend modernization, system migrations, code reviews, and technical mentorship.",
  },
  {
    role: "Senior PHP Developer",
    company: "Emapta",
    period: "May 2018 – Nov 2018",
    description:
      "Improved PHP Laravel/Angular applications and legacy PHP systems, and partially led deployment processes using Gitflow-based workflows.",
  },
  {
    role: "Application Developer – Web Technologies",
    company: "IBM Solutions Delivery, Inc.",
    period: "Oct 2016 – May 2018",
    description: "Developed custom CMS platforms using CakePHP for enterprise clients.",
  },
  {
    role: "Senior Web Developer",
    company: "Moonline Inc. (cashcashpinoy.com)",
    period: "Jan 2013 – Oct 2016",
    description:
      "Built reporting tools and internal applications with PHP Laravel, MySQL, Backbone.js, and Slim, and managed MySQL database administration. Collaborated with the Analytics team and integrated third-party systems (Smartfocus, NetCore, Anchanto) to support marketing strategy.",
  },
  {
    role: "Earlier Roles",
    company: "iZone Technologies · IntegraIT Solutions · Skyy Services · Allsectech Manila",
    period: "2009 – 2012",
    description:
      "Web Developer and Software Engineer roles building PHP/MySQL web applications.",
  },
];

const education = [
  {
    program: "Bachelor of Technology in Information Technology",
    school: "Technological University of the Philippines – Taguig",
    period: "2008 – 2009",
  },
  {
    program: "Computer Engineering Technology",
    school: "Technological University of the Philippines – Taguig",
    period: "2005 – 2008",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* ── Page Header ──────────────────────────────────── */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          About Me
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-slate-50">
          Crafting software that matters
        </h1>
      </div>

      {/* ── Bio + Avatar ─────────────────────────────────── */}
      <div className="mb-20 grid gap-12 lg:grid-cols-[1fr,auto]">
        <div className="space-y-5 text-base leading-relaxed text-gray-600 dark:text-slate-400">
          <p>
            I&apos;m{" "}
            <strong className="font-semibold text-gray-900 dark:text-slate-100">
              Ronald Toledo
            </strong>
            , a Senior Full-Stack Engineer with 10+ years of experience
            designing and building scalable applications and APIs across
            enterprise environments. Based in the Philippines, open to remote
            work.
          </p>
          <p>
            My background is strongest in backend development with Node.js
            and Laravel, with hands-on experience in microservices, cloud
            infrastructure on AWS, and modern frontend frameworks like React
            and Angular. I&apos;ve spent my career modernizing legacy systems,
            leading feature development, and working with distributed teams
            to ship high-performance solutions.
          </p>

          <div className="flex flex-wrap gap-6 pt-2 text-sm">
            <div>
              <p className="font-semibold text-gray-900 dark:text-slate-100">10+</p>
              <p className="text-gray-500 dark:text-slate-500">Years experience</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-slate-100">8</p>
              <p className="text-gray-500 dark:text-slate-500">Companies &amp; teams</p>
            </div>
          </div>

          <ResumeButton variant="outline" className="mt-2" />
        </div>

        {/* Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-4 border-indigo-100 shadow-xl dark:border-indigo-900/40">
            <Image
              src="/avatar.png"
              alt="Ronald Toledo — Profile photo"
              width={256}
              height={256}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Skills ───────────────────────────────────────── */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-slate-50">
          Skills &amp; Technologies
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-slate-50">
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative border-l-2 border-indigo-100 pl-8 dark:border-indigo-900/50"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-600 bg-white dark:border-indigo-400 dark:bg-slate-950" />

              <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-slate-50">
                  {exp.role}
                </h3>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  @ {exp.company}
                </span>
                <span className="ml-auto text-xs font-medium text-gray-400 dark:text-slate-500">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-slate-50">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-1 rounded-xl border border-gray-200 p-5 dark:border-slate-800"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-slate-50">
                {edu.program}
              </h3>
              <span className="text-sm text-gray-500 dark:text-slate-400">
                — {edu.school}
              </span>
              <span className="ml-auto text-xs font-medium text-gray-400 dark:text-slate-500">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
