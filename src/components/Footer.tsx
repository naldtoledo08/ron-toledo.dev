import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link
            href="/"
            className="text-sm font-bold text-indigo-600 dark:text-indigo-400"
          >
            Ronald Toledo
          </Link>
          <p className="text-xs text-gray-400 dark:text-slate-600">
            © {year} Ronald Toledo. All rights reserved.
          </p>
        </div>

        <a
          href="mailto:nald.toledo08@gmail.com"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
        >
          nald.toledo08@gmail.com
        </a>
      </div>
    </footer>
  );
}
