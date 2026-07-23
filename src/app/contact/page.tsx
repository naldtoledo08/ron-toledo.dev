import type { Metadata } from "next";
import ResumeButton from "@/components/ResumeButton";

export const metadata: Metadata = {
  title: "Contact — Ronald Toledo",
  description:
    "Get in touch with Ronald Toledo for freelance work, full-time roles, or collaborations.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      {/* ── Header ───────────────────────────────────────── */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Contact
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-slate-50">
          Let&apos;s work together
        </h1>
        <p className="text-base leading-relaxed text-gray-600 dark:text-slate-400">
          Whether you have a project in mind, want to explore a collaboration,
          or just want to say hello — my inbox is always open.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* ── Email CTA ──────────────────────────────────── */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
            <svg
              className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-50">
            Send me an email
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
            The best way to reach me. I typically respond within 24 hours on
            business days. Tell me about your project or idea.
          </p>
          <a
            href="mailto:nald.toledo08@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40"
          >
            nald.toledo08@gmail.com
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* ── Info Cards ─────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-5 text-base font-bold text-gray-900 dark:text-slate-50">
              Details
            </h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
                  Location
                </dt>
                <dd className="text-gray-700 dark:text-slate-300">
                  Philippines · Open to Remote
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
                  Status
                </dt>
                <dd className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                  <span className="text-gray-700 dark:text-slate-300">
                    Available for new projects
                  </span>
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
                  Response time
                </dt>
                <dd className="text-gray-700 dark:text-slate-300">Within 24 hours</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-2 text-base font-bold text-gray-900 dark:text-slate-50">
              Prefer a resume?
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
              Grab a copy of my full résumé — experience, skills, and education
              in one PDF.
            </p>
            <ResumeButton variant="outline" />
          </div>
        </div>
      </div>
    </main>
  );
}
