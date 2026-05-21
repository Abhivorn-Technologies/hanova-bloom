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
  className,
  bgImage,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  bgImage?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${className ?? "pt-32 sm:pt-40 pb-16 sm:pb-20"}`}
    >
      {/* Background Image rendered as a standard img tag for robust Vite resolution */}
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      )}

      {/* Background overlay: if bgImage is present, use a smooth gradient from solid cream to transparent so the text remains highly readable */}
      {bgImage ? (
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 sm:via-cream/80 to-cream/10 md:to-transparent z-10" />
      ) : (
        <div className="absolute inset-0 bg-honey-gradient -z-10" />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-20">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] uppercase text-honey-deep font-bold">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl text-charcoal leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-charcoal/80 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
