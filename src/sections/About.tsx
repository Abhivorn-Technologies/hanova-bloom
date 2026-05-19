import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative bg-gradient-to-br from-cream via-sand to-honey/60">
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-3/4 aspect-square rounded-full bg-honey-gradient opacity-90 blur-2xl" />
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-7xl md:text-8xl text-charcoal/90">H</div>
                <div className="mt-2 text-xs tracking-[0.4em] uppercase text-charcoal/70">
                  Hanova
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-6 glass rounded-3xl p-6 shadow-xl max-w-[200px]">
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
