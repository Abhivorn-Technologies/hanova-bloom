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
      className={`relative overflow-hidden ${className ?? "pt-40 sm:pt-52 pb-24 sm:pb-32"}`}
    >
      {/* Background Image rendered as a standard img tag for robust Vite resolution */}
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      )}

      {/* Overlay: soft cream gradient so text stays readable over bright imagery */}
      {bgImage ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdf6e3]/90 via-[#fdf6e3]/70 to-[#fdf6e3]/10 z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fdf6e3] to-transparent z-10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-honey-gradient -z-10" />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-20">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] uppercase font-bold text-honey-deep">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl text-charcoal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-charcoal/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
