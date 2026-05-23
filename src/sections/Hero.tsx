import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroProduct from "@/assets/product-lemon.png";
import heroProductAlt from "@/assets/product-ginger-turmeric.png";
import heroProductThird from "@/assets/product-butterfly-pea.png";


export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 3), 3200);
    return () => clearInterval(t);
  }, []);

  // slot = (i + step) % 3 → 0=Center, 1=Left, 2=Right
  const getSlot = (i: number) => (i + step) % 3;

  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-white">


      {/* Floating honey drops - commented out per request to keep current color combination available 
      <motion.div
        aria-hidden
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-honey/20 blur-3xl animate-float-slow"
      />
      <motion.div
        aria-hidden
        className="absolute top-40 -right-16 w-96 h-96 rounded-full bg-sand/20 blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-cream/50 blur-3xl animate-float-slow"
        style={{ animationDelay: "4s" }}
      />
      */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-[0.25em] uppercase text-charcoal/70"
          >
            <span className="w-2 h-2 rounded-full bg-honey" />
            Premium Functional Wellness
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-charcoal"
          >
            Nature{" "}
            <span className="text-gradient-honey italic">Simplified</span>
            <br />
            For Everyday Life
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Premium functional wellness crafted with nature and science. Plant-based
            honey concentrates, designed for the rhythm of modern living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-honey-gradient text-charcoal px-7 py-4 font-semibold shadow-honey hover:scale-[1.03] transition-transform"
            >
              Explore Products
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/70 backdrop-blur px-7 py-4 font-medium text-charcoal hover:bg-charcoal hover:text-cream transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 max-w-md gap-6"
          >
            {[
              { k: "100%", v: "Natural" },
              { k: "0g", v: "Added Sugar" },
              { k: "24/7", v: "Wellness" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-honey-deep">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-square max-w-sm sm:max-w-md mx-auto"
          >
            <div className="absolute inset-4 rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-honey-gradient shadow-honey animate-float-slow opacity-80" />
            <div
              className="absolute inset-10 rounded-[50%_45%_55%_50%/45%_55%_45%_55%] bg-gradient-to-br from-cream to-sand opacity-70 animate-float-slow"
              style={{ animationDelay: "1.5s" }}
            />

            {/* Carousel: center→left, left→right, right→center */}
            {[
              { src: heroProduct,      alt: "Hanova Lemon Infused Honey" },
              { src: heroProductThird, alt: "Hanova Butterfly Pea Honey" },
              { src: heroProductAlt,   alt: "Hanova Ginger Turmeric Honey" },
            ].map((p, i) => {
              const slot = getSlot(i);
              const isCenter = slot === 0;
              const isLeft   = slot === 1;
              return (
                <motion.img
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  animate={{
                    x: isCenter ? 0 : isLeft ? -118 : 118,
                    y: isCenter ? 0 : 52,
                    scale: isCenter ? 1 : 0.58,
                    rotate: isCenter ? 0 : isLeft ? -12 : 12,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-6 left-1/2 h-full w-auto max-h-[28rem] object-contain drop-shadow-2xl"
                  style={{
                    translateX: "-50%",
                    zIndex: isCenter ? 20 : 10,
                  }}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
