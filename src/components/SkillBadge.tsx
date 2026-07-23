interface SkillBadgeProps {
  name: string;
  variant?: "default" | "accent";
}

export default function SkillBadge({ name, variant = "default" }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        variant === "accent"
          ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
      }`}
    >
      {name}
    </span>
  );
}
