import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingButtons } from "@/components/FloatingButtons";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 bg-honey-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {eyebrow && (
          <p className="text-xs tracking-[0.4em] uppercase text-charcoal/70 font-semibold">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-charcoal/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
