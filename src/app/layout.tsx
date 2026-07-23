import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronald Toledo — Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer with 10+ years of experience building scalable applications and APIs with Laravel, Node.js, React, and Next.js across enterprise environments.",
  keywords: ["developer", "full-stack", "senior engineer", "Next.js", "React", "Node.js", "Laravel", "AWS"],
  authors: [{ name: "Ronald Toledo" }],
  openGraph: {
    title: "Ronald Toledo — Senior Full-Stack Engineer",
    description:
      "10+ years building scalable applications and APIs with Laravel, Node.js, React, and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
