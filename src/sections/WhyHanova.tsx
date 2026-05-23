import { motion } from "framer-motion";
import { Sparkles, FlaskRound, ShieldCheck, BadgeCheck, Battery, Briefcase } from "lucide-react";
import whyHanovaLifestyle from "@/assets/lifestyle-ginger-turmeric.png";

const points = [
  { icon: Sparkles, title: "Premium Ingredients", text: "Hand-selected botanicals and pure honey at the source." },
  { icon: FlaskRound, title: "Nutraceutical Science", text: "Formulated by experts, validated by results." },
  { icon: ShieldCheck, title: "Hygienic Sachets", text: "Single-serve packaging that preserves potency." },
  { icon: BadgeCheck, title: "Trusted Wellness", text: "Transparent sourcing, traceable batches." },
  { icon: Battery, title: "Instant Energy", text: "A spoonful of focus, anytime, anywhere." },
  { icon: Briefcase, title: "Lifestyle Friendly", text: "Built for movement, travel, and busy mornings." },
];

export function WhyHanova() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Warm ambient background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-honey/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sand/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-honey/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold"
            >
              Why Hanova
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight"
            >
              A new ritual for{" "}
              <span className="text-gradient-honey italic font-serif">modern wellness</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              We blend ancient botanical wisdom with modern nutraceutical engineering — so
              your wellness routine fits seamlessly into the way you actually live.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-honey/15 hover:scale-[1.02] transition-transform duration-500 bg-white"
          >
            <img src={whyHanovaLifestyle} alt="Hanova Premium Sachet Lifestyle" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl bg-white/70 border border-honey/20 backdrop-blur-sm p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(224,163,0,0.15)] hover:border-honey/50 transition-all duration-400 overflow-hidden"
            >
              {/* Subtle honey tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-honey/5 via-transparent to-sand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              {/* Icon badge */}
              <div className="w-12 h-12 rounded-2xl bg-honey-gradient flex items-center justify-center text-charcoal shadow-sm group-hover:scale-110 transition-transform duration-300">
                <p.icon size={20} strokeWidth={2} />
              </div>

              {/* Text */}
              <h3 className="mt-5 font-sans font-bold text-lg text-charcoal group-hover:text-honey-deep transition-colors duration-300">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>

              {/* Bottom honey accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-honey via-honey-deep to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
