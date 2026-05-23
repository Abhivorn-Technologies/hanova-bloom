import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout, PageHeader } from "@/components/Layout";
import butterflyPea from "@/assets/product-butterfly-pea.png";
import lemon from "@/assets/product-lemon.png";
import gingerTurmeric from "@/assets/product-ginger-turmeric.png";
import hanovaTumbler from "@/assets/hanova-tumbler.png";

const products = [
  {
    name: "Butterfly Pea Infused Honey",
    tag: "Calm & Clarity",
    desc: "Indigo butterfly pea blooms steeped in raw honey. A restful, focused start — caffeine-free.",
    image: butterflyPea,
    benefits: ["Calm focus", "Antioxidant rich", "Caffeine-free"],
    glow: "from-indigo-500/40 to-honey/30",
  },
  {
    name: "Lemon Infused Honey",
    tag: "Refresh",
    desc: "Bright citrus zest meets golden honey — a daily detox ritual in 8g.",
    image: lemon,
    benefits: ["Daily detox", "Vitamin C boost", "Hydration support"],
    glow: "from-yellow-300/50 to-honey/40",
  },
  {
    name: "Ginger Lemon Turmeric Honey",
    tag: "Immunity",
    desc: "Three powerhouse botanicals fused with honey for everyday resilience.",
    image: gingerTurmeric,
    benefits: ["Immunity support", "Anti-inflammatory", "Digestive aid"],
    glow: "from-orange-400/40 to-honey-deep/40",
  },
];

export default function Products() {
  useEffect(() => {
    document.title = "Products — Hanova Functional Honey Sachets";
  }, []);
  return (
    <Layout>
      {/* <div className="bg-transparent"> */}
      <div className="bg-white">
        <PageHeader
        eyebrow="Ancient Infusion"
        title={
          <>
            Modern,{" "}
            <span className="text-gradient-honey italic font-serif">Wellness.</span>
          </>
        }
        subtitle="A curated collection of plant-forward honey concentrates — each crafted for a specific moment in your day."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-24">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              <div className="relative">
                <div
                  className={`absolute inset-10 rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-gradient-to-br ${p.glow} blur-3xl`}
                />
                <motion.img
                  src={p.image}
                  alt={p.name}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-honey-deep font-semibold">{p.tag}</p>
                <h2 className="mt-3 text-3xl sm:text-5xl text-charcoal">{p.name}</h2>
                <p className="mt-4 text-muted-foreground text-lg">{p.desc}</p>
                <ul className="mt-6 space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-charcoal/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-honey" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=919182609080&text=${encodeURIComponent(
                    `Hi Hanova! 👋\n\nI came across your website and I'm very interested in inquiring about the *${p.name}* (${p.tag}) wellness honey sachets. 🍯✨\n\nCould you please share more details about pricing and availability?\n\nLooking forward to hearing from you!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-honey-gradient text-charcoal px-6 py-3 font-semibold shadow-honey hover:scale-[1.03] transition-transform"
                >
                  Enquire now →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* <section className="py-20 bg-cream"> */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <h2 className="text-3xl sm:text-5xl text-charcoal leading-tight">
              100% Natural. <br />
              <span className="text-gradient-honey italic font-serif">No added sugar.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every Hanova sachet is plant-based, single-serve, and engineered for outcomes — not just ingredients. Drop it directly into your favorite hot tea, water, or blend, and experience instant wellness with zero mess.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-honey-deep bg-honey/10 border border-honey/20 px-3.5 py-2 rounded-full">
                🌿 Plant-Forward Formulation
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-honey-deep bg-honey/10 border border-honey/20 px-3.5 py-2 rounded-full">
                ⚡ Instant Everyday Ritual
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square max-w-sm sm:max-w-md w-full mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-honey/10 hover:scale-[1.01] transition-transform duration-500 bg-white"
          >
            <img src={hanovaTumbler} alt="Hanova Active Tumbler Infusion" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
