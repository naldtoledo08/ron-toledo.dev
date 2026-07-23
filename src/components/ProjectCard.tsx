import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Gradient Thumbnail */}
      <Link href={`/projects/${project.slug}`} className="block" tabIndex={-1} aria-hidden="true">
        <div
          className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-extrabold tracking-tight text-white/90 drop-shadow-sm">
              {project.title}
            </span>
          </div>
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-slate-50 dark:group-hover:text-indigo-400">
            {project.title}
          </h3>
        </Link>
        <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {project.tagline}
        </p>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
          {project.description.slice(0, 115)}…
        </p>

        {/* Tech Stack */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-400"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-400 dark:bg-slate-800 dark:text-slate-500">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-4 dark:border-slate-800">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View Details →
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-600 dark:text-slate-600 dark:hover:text-slate-400"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-600 dark:text-slate-600 dark:hover:text-slate-400"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
