const RESUME_PATH = "/Ronald-Toledo-Resume.pdf";

interface ResumeButtonProps {
  variant?: "primary" | "outline" | "text";
  className?: string;
}

const variants = {
  primary:
    "rounded-xl bg-indigo-600 px-8 py-3.5 text-sm text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-indigo-500/40",
  outline:
    "rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-sm text-gray-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400",
  text: "text-sm text-gray-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400",
};

export default function ResumeButton({ variant = "primary", className = "" }: ResumeButtonProps) {
  return (
    <a
      href={RESUME_PATH}
      download
      className={`inline-flex w-full items-center justify-center gap-2 font-semibold transition-all sm:w-auto ${variants[variant]} ${className}`}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
        />
      </svg>
      Download Résumé
    </a>
  );
}
