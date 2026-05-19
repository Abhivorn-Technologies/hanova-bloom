import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout, PageHeader } from "@/components/Layout";
import butterflyPea from "@/assets/product-butterfly-pea.png";
import lemon from "@/assets/product-lemon.png";
import gingerTurmeric from "@/assets/product-ginger-turmeric.png";

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

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — Hanova Functional Honey Sachets" },
      {
        name: "description",
        content:
          "Premium plant-based functional honey sachets — Butterfly Pea, Lemon, and Ginger-Turmeric. Instant wellness in 8g.",
      },
      { property: "og:title", content: "Hanova Functional Honey Sachets" },
      { property: "og:description", content: "Selling outcomes, not blends." },
    ],
  }),
});

function ProductsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Our Products"
        title="Functional honey, redefined."
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
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
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
                <p className="text-xs tracking-[0.35em] uppercase text-honey-deep font-semibold">
                  {p.tag}
                </p>
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
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-honey-gradient text-charcoal px-6 py-3 font-semibold shadow-honey hover:scale-[1.03] transition-transform"
                >
                  Enquire now →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-5xl text-charcoal">
            100% Natural. <span className="text-gradient-honey italic">No added sugar.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every Hanova sachet is plant-based, single-serve, and engineered for outcomes —
            not just ingredients.
          </p>
        </div>
      </section>
    </Layout>
  );
}
