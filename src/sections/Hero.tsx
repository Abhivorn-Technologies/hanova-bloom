import { motion } from "framer-motion";
import heroProduct from "@/assets/product-butterfly-pea.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Floating honey drops */}
      <motion.div
        aria-hidden
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-honey/30 blur-3xl animate-float-slow"
      />
      <motion.div
        aria-hidden
        className="absolute top-40 -right-16 w-96 h-96 rounded-full bg-sand/40 blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-cream blur-3xl animate-float-slow"
        style={{ animationDelay: "4s" }}
      />

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
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-charcoal"
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/70 backdrop-blur px-7 py-4 font-medium text-charcoal hover:bg-charcoal hover:text-cream transition-colors"
            >
              Contact Us
            </a>
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

        <div className="lg:col-span-5 relative">
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
            <motion.img
              src={heroProduct}
              alt="Hanova Butterfly Pea Infused Honey sachet"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
