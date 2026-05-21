import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutHoney from "@/assets/about-honey.png";
import productGingerTurmeric from "@/assets/product-ginger-turmeric.png";
import productButterflyPea from "@/assets/product-butterfly-pea.png";
import productLemon from "@/assets/product-lemon.png";

const floatingProducts = [productGingerTurmeric, productButterflyPea, productLemon];
const floatingAlts = ["Ginger Turmeric", "Butterfly Pea", "Lemon Honey"];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % floatingProducts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Full-width Honey Image */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lg border border-white/40">
            <img
              src={aboutHoney}
              alt="Hanova Premium Honey"
              className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-[1.02] transition-transform duration-700"
            />

            {/* Sachet overlay — inside image, left side */}
            <div className="absolute top-6 left-6 flex flex-col items-center z-10">

              {/* Pure Honey badge */}
              <div className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">
                  Pure Honey
                </span>
              </div>

              {/* Drip stem */}
              <div className="w-px h-7 bg-gradient-to-b from-amber-400 to-amber-500/70" />

              {/* Animated honey drop */}
              <motion.div
                className="w-2 rounded-full bg-amber-400"
                animate={{ height: ["4px", "12px", "4px"], opacity: [0, 1, 0], y: [0, 0, 12] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeIn", repeatDelay: 1 }}
              />

              {/* Floating sachet */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mt-1 w-32 sm:w-40"
              >
                <div className="absolute -bottom-1 inset-x-3 h-3 bg-amber-400/20 blur-md rounded-full" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={productIndex}
                    src={floatingProducts[productIndex]}
                    alt={floatingAlts[productIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="w-full object-contain drop-shadow-2xl"
                  />
                </AnimatePresence>
              </motion.div>


            </div>

            {/* Hyderabad badge — inside image, bottom right */}
            <div className="absolute bottom-5 right-5 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-md z-10">
              <div className="text-[10px] uppercase tracking-widest text-stone-400">Crafted in</div>
              <div className="font-display text-base text-charcoal mt-0.5">Hyderabad, India</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold">
            About Hanova
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal">
            Where <span className="text-gradient-honey italic">wellness</span> meets
            modern ritual.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            HANOVA LIFE SCIENCES is a premium wellness and nutraceutical brand focused on
            delivering natural, plant-based functional honey products that support modern
            lifestyles.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our mission is to bridge wellness, convenience, and science through innovative
            products designed for everyday health rituals.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: 100, s: "%", l: "Natural" },
              { k: 12, s: "+", l: "Botanicals" },
              { k: 5, s: "★", l: "Quality" },
            ].map((i) => (
              <div key={i.l} className="rounded-2xl bg-white/60 backdrop-blur border border-white/80 p-5">
                <div className="font-display text-4xl text-honey-deep">
                  <Counter to={i.k} suffix={i.s} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {i.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
