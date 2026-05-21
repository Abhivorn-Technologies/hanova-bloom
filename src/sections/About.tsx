import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutHoney from "@/assets/about-honey.png";
import hanovaTube from "@/assets/hanova-tube.png";

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
          {/* Main Honey Image */}
          <img
            src={aboutHoney}
            alt="Hanova Premium Honey"
            className="w-full h-[380px] sm:h-[450px] object-cover rounded-[3rem] hover:scale-[1.02] transition-transform duration-500 shadow-lg border border-white/40"
          />

          {/* Floating Hanova Sachet Tube Overlay */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-6 w-32 sm:w-44 aspect-square rounded-[2rem] bg-gradient-to-br from-cream to-sand/40 backdrop-blur border border-white/80 p-3 shadow-2xl hidden sm:flex items-center justify-center z-10 hover:scale-105 transition-transform"
          >
            <img src={hanovaTube} alt="Hanova Premium Sachet Tube" className="w-full h-full object-contain drop-shadow-xl" />
          </motion.div>

          {/* Hyderabad Info Badge */}
          <div className="absolute -bottom-8 -right-6 glass rounded-3xl p-6 shadow-xl max-w-[200px] z-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Crafted in</div>
            <div className="font-display text-xl text-charcoal mt-1">Hyderabad, India</div>
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
