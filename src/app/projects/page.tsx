import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Ronald Toledo",
  description:
    "A curated collection of projects — from full-stack web apps to CLI tools and mobile apps.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* ── Header ───────────────────────────────────────── */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Portfolio
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-slate-50">
          Projects
        </h1>
        <p className="text-base leading-relaxed text-gray-600 dark:text-slate-400">
          A curated selection of projects — both professional and personal —
          showcasing my work across the full stack.
        </p>
      </div>

      {/* ── Projects Grid ────────────────────────────────── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
