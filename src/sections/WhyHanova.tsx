import { motion } from "framer-motion";
import { Sparkles, FlaskRound, ShieldCheck, BadgeCheck, Battery, Briefcase } from "lucide-react";

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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-honey/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sand/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold">
              Why Hanova
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal">
              A new ritual for{" "}
              <span className="text-gradient-honey italic">modern wellness</span>.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-muted-foreground">
              We blend ancient botanical wisdom with modern nutraceutical engineering — so
              your wellness routine fits seamlessly into the way you actually live.
            </p>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 rounded-3xl overflow-hidden">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative bg-background p-8 hover:bg-honey/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-charcoal text-cream group-hover:bg-honey group-hover:text-charcoal transition-colors">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-charcoal">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-honey/60 to-transparent w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
