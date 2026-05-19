import { motion } from "framer-motion";
import { Leaf, Sprout, Zap, FlaskConical, Ban, Sun, Package } from "lucide-react";

const items = [
  { icon: Leaf, title: "100% Natural", text: "Sourced from nature, never synthetic." },
  { icon: Sprout, title: "Plant-Based", text: "Botanical formulations rooted in tradition." },
  { icon: Zap, title: "Instant Wellness", text: "Effortless rituals for daily energy." },
  { icon: FlaskConical, title: "Functional Nutrition", text: "Science-led blends with measurable outcomes." },
  { icon: Ban, title: "No Added Sugar", text: "Pure sweetness from honey and botanicals." },
  { icon: Sun, title: "Daily Energy", text: "Sustained focus for modern lifestyles." },
  { icon: Package, title: "Sachet Convenience", text: "Portable, hygienic, ready when you are." },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 sm:py-32 bg-cream/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold">
            Product Philosophy
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal">
            Crafted with <span className="text-gradient-honey italic">intention</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every ingredient, every drop, every sachet is engineered to deliver outcomes —
            not just nutrition.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl glass p-7 overflow-hidden hover:shadow-honey transition-shadow"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-honey/20 blur-3xl group-hover:bg-honey/40 transition-colors" />
              <div className="relative">
                <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-honey-gradient text-charcoal shadow-honey">
                  <it.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-charcoal">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
