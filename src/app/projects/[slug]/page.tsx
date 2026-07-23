import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ronald Toledo`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      {/* ── Back ─────────────────────────────────────────── */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All Projects
      </Link>

      {/* ── Gradient Hero ────────────────────────────────── */}
      <div
        className={`mb-10 flex h-64 w-full items-center justify-center rounded-3xl bg-gradient-to-br ${project.gradient} shadow-2xl`}
      >
        <span className="text-4xl font-extrabold tracking-tight text-white/90 drop-shadow-md">
          {project.title}
        </span>
      </div>

      {/* ── Action Links ─────────────────────────────────── */}
      {(project.github || project.live) && (
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      )}

      {/* ── Content ──────────────────────────────────────── */}
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-50">
        {project.title}
      </h1>
      <p className="mb-6 text-base font-semibold text-indigo-600 dark:text-indigo-400">
        {project.tagline}
      </p>
      <p className="mb-10 text-base leading-relaxed text-gray-600 dark:text-slate-400">
        {project.description}
      </p>

      {/* ── Tech Stack ───────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Navigation ───────────────────────────────────── */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8 dark:border-slate-800">
        <Link
          href="/projects"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
        >
          ← Back to all projects
        </Link>
        <Link
          href="/contact"
          className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Work with me
        </Link>
      </div>
    </main>
  );
}
