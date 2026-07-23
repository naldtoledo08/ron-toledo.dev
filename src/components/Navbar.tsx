"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ResumeButton from "./ResumeButton";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-indigo-600 transition-opacity hover:opacity-80 dark:text-indigo-400"
        >
          Ronald Toledo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                pathname === link.href
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-slate-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ResumeButton variant="text" />
          <Link
            href="/contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white/95 px-4 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-indigo-400 ${
                  pathname === link.href
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-slate-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ResumeButton variant="outline" className="mt-2 rounded-lg px-4 py-2.5" />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
