import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const features = [
  "Accessible component primitives (shadcn/ui + Radix)",
  "Dark mode ready (next-themes)",
  "Responsive layout with Tailwind",
  "TypeScript-first setup",
  "Ready to connect to .NET API"
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold sm:text-2xl">CompanyName.ProjectName Frontend</h1>
        <ThemeToggle />
      </header>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Next.js + TypeScript + Tailwind + shadcn/ui</h2>
        <p className="mt-3 text-muted-foreground">
          This frontend starter is set up to run alongside your existing .NET backend project and gives you a clean, accessible base you can fully re-skin.
        </p>

        <ul className="mt-6 space-y-3" aria-label="Starter features">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Next.js Docs</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">shadcn/ui Docs</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
