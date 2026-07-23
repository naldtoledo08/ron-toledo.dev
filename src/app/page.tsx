import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ResumeButton from "@/components/ResumeButton";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);

const topSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Docker",
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-indigo-100/70 blur-3xl dark:bg-indigo-900/20"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Available for new projects
          </span>

          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl dark:text-slate-50">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Ronald Toledo
            </span>
          </h1>

          <p className="mb-4 text-xl font-semibold text-gray-600 sm:text-2xl dark:text-slate-400">
            Senior Full-Stack Engineer · Laravel · React · Node.js
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-slate-500">
            10+ years designing and building scalable applications and APIs
            across enterprise environments — backend systems with Laravel and
            Node.js, modern frontends with React and Next.js, and cloud
            infrastructure on AWS.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ResumeButton variant="primary" />
            <Link
              href="/projects"
              className="w-full rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400 sm:w-auto"
            >
              View My Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg
            className="h-5 w-5 text-gray-300 dark:text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Skills Strip ─────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50 px-4 py-10 dark:border-slate-800/50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-600">
            Core Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {topSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Selected Work
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-slate-50">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="text-sm font-semibold text-indigo-600 dark:text-indigo-400"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-10 text-center shadow-2xl shadow-indigo-500/20">
          <h2 className="mb-3 text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mb-8 text-indigo-200">
            Open to full-time roles, freelance projects, and interesting
            collaborations.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-50 hover:shadow-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
