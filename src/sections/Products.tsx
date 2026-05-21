import { motion } from "framer-motion";
import butterflyPea from "@/assets/product-butterfly-pea.png";
import lemon from "@/assets/product-lemon.png";
import gingerTurmeric from "@/assets/product-ginger-turmeric.png";

const products = [
  {
    name: "Ginger Lemon Turmeric Honey",
    tag: "Immunity",
    desc: "Three powerhouse botanicals fused with honey for everyday resilience.",
    image: gingerTurmeric,
    glow: "from-orange-400/40 to-honey-deep/40",
  },
  {
    name: "Lemon Infused Honey",
    tag: "Refresh",
    desc: "Bright citrus zest meets golden honey for a daily detox ritual.",
    image: lemon,
    glow: "from-yellow-300/50 to-honey/40",
  },
  {
    name: "Butterfly Pea Infused Honey",
    tag: "Calm & Clarity",
    desc: "Indigo butterfly pea blooms steeped in raw honey — restful focus in a single sachet.",
    image: butterflyPea,
    glow: "from-indigo-500/40 to-honey/30",
  },
];

// Reusable Product Card Component to keep code clean and maintain identical sizes/styles
function ProductCard({ p }: { p: typeof products[0] }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-5 sm:p-6 w-[240px] sm:w-[300px] md:w-[330px] flex-shrink-0 hover:border-honey/40 transition-colors">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/0">
        <div className={`absolute inset-0 bg-gradient-to-br ${p.glow} opacity-60 blur-2xl`} />
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="relative z-10 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="mt-4">
        <div className="text-[11px] tracking-widest uppercase text-honey">
          {p.tag}
        </div>
        <h3 className="mt-1 font-display text-lg sm:text-xl text-cream">
          {p.name}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-cream/70 line-clamp-2">{p.desc}</p>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="relative py-20 sm:py-28 lg:py-32 bg-charcoal text-cream overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-honey/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-honey-deep/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-honey font-semibold">
            Our Products
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl">
            Functional honey,{" "}
            <span className="text-gradient-honey italic">redefined</span>.
          </h2>
          <p className="mt-5 text-cream/70 text-base sm:text-lg">
            A curated collection of plant-forward honey concentrates — each crafted for a
            specific moment in your day.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee strip */}
      <div className="relative w-full overflow-hidden mt-10 sm:mt-14">
        {/* Left and right fade gradients for a premium visual transition */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-charcoal to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-charcoal to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee-three hover:[animation-play-state:paused] py-4 px-4 sm:px-6">
          {/* Set 1 */}
          {products.map((p, i) => (
            <ProductCard key={`set1-${p.tag}-${i}`} p={p} />
          ))}
          {/* Set 2 */}
          {products.map((p, i) => (
            <ProductCard key={`set2-${p.tag}-${i}`} p={p} />
          ))}
          {/* Set 3 */}
          {products.map((p, i) => (
            <ProductCard key={`set3-${p.tag}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
