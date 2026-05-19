import { motion } from "framer-motion";
import { Leaf, FlaskConical, ShieldCheck, Package, Truck } from "lucide-react";

const steps = [
  { icon: Leaf, title: "Natural Extraction", text: "Cold-pressed botanicals at source." },
  { icon: FlaskConical, title: "Scientific Formulation", text: "Bioavailable blends, lab-validated." },
  { icon: ShieldCheck, title: "Quality Testing", text: "Batch-tested for purity and potency." },
  { icon: Package, title: "Hygienic Packaging", text: "Single-serve sachets, sealed fresh." },
  { icon: Truck, title: "Delivery", text: "From our facility to your daily ritual." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-cream/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold">
            Our Process
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal">
            From <span className="text-gradient-honey italic">bloom</span> to bottle.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px">
            <svg className="w-full h-12" viewBox="0 0 1200 40" preserveAspectRatio="none">
              <motion.path
                d="M0,20 C200,0 400,40 600,20 C800,0 1000,40 1200,20"
                stroke="var(--honey)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </svg>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto w-24 h-24 rounded-full bg-white shadow-honey grid place-items-center">
                  <div className="absolute inset-2 rounded-full bg-honey-gradient grid place-items-center text-charcoal">
                    <s.icon size={28} />
                  </div>
                </div>
                <div className="mt-5 text-xs tracking-widest uppercase text-muted-foreground">
                  Step 0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-xl text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
