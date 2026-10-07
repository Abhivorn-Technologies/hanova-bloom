import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout, PageHeader } from "@/components/Layout";
import { Leaf, ShieldCheck, Activity, Sparkles, Zap, HeartPulse, Brain, Sun } from "lucide-react";
import butterflyPea from "@/assets/product-butterfly-pea-card.png";
import lemon from "@/assets/product-lemon-card.png";
import gingerTurmeric from "@/assets/product-ginger-turmeric-card.png";
import hanovaTumbler from "@/assets/hanova-tumbler.png";

interface Benefit {
  text: string;
  icon?: "leaf" | "digest" | "activity" | "shield" | "sparkles" | "energy" | "throat" | "brain" | "skin";
}

interface ProductItem {
  name: string;
  tag: string;
  desc: string;
  image: string;
  benefits: Benefit[];
  price?: string;
  unit?: string;
  glow: string;
}

const products: ProductItem[] = [
  {
    name: "Blue Botanique Honey",
    tag: "Butterfly Pea, Mint & Lemon",
    desc: "A natural boost for a healthier you. Indigo butterfly pea blooms, fresh lemon, and cooling mint steeped in raw honey.",
    image: butterflyPea,
    benefits: [
      { text: "Rich in antioxidants", icon: "sparkles" },
      { text: "Supports healthy, glowing skin", icon: "skin" },
      { text: "Supports mental well-being", icon: "brain" },
      { text: "Aids digestion", icon: "digest" },
      { text: "Naturally refreshing", icon: "leaf" },
      { text: "Supports natural immunity", icon: "shield" },
    ],
    price: "₹369/-",
    unit: "(30 Sachets)",
    glow: "from-indigo-500/40 to-honey/30",
  },
  {
    name: "Lemon Infused Honey",
    tag: "Refresh",
    desc: "A refreshing blend for everyday wellness. Bright citrus zest meets golden honey — a daily detox ritual in 8g.",
    image: lemon,
    benefits: [
      { text: "Supports weight wellness", icon: "leaf" },
      { text: "Aids healthy digestion", icon: "digest" },
      { text: "Supports active metabolism", icon: "activity" },
      { text: "Supports natural immunity", icon: "shield" },
    ],
    price: "₹351/-",
    unit: "(30 Sachets)",
    glow: "from-yellow-300/50 to-honey/40",
  },
  {
    name: "Ginger Lemon Turmeric Honey",
    tag: "Immunity",
    desc: "A powerful blend for immunity and daily wellness. Three powerhouse botanicals fused with honey for everyday resilience.",
    image: gingerTurmeric,
    benefits: [
      { text: "Supports natural immunity", icon: "shield" },
      { text: "Aids healthy digestion", icon: "digest" },
      { text: "Supports natural energy", icon: "energy" },
      { text: "Rich in antioxidants", icon: "sparkles" },
      { text: "Supports throat wellness", icon: "throat" },
    ],
    price: "₹359/-",
    unit: "(30 Sachets)",
    glow: "from-orange-400/40 to-honey-deep/40",
  },
];

function BenefitIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "leaf":
      return <Leaf className="h-4 w-4 text-emerald-800" />;
    case "digest":
      return (
        <svg
          className="h-4 w-4 text-amber-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 4c2.5 0 4 1.5 4 4v3c0 3.5 2.5 6 6 6s5-2 5-5c0-4-3-6-5-6" />
          <path d="M7 4C4.5 4 3 6 3 9c0 5 3 11 8 11s8-3 8-7" />
        </svg>
      );
    case "activity":
      return <Activity className="h-4 w-4 text-amber-900" />;
    case "energy":
      return <Zap className="h-4 w-4 text-amber-900" />;
    case "shield":
      return <ShieldCheck className="h-4 w-4 text-amber-900" />;
    case "throat":
      return <HeartPulse className="h-4 w-4 text-amber-900" />;
    case "brain":
      return <Brain className="h-4 w-4 text-amber-900" />;
    case "skin":
      return <Sun className="h-4 w-4 text-amber-900" />;
    default:
      return <Sparkles className="h-4 w-4 text-amber-800" />;
  }
}

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
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
                <div className="relative w-full max-w-[220px] sm:max-w-[250px] mx-auto">
                  <div
                    className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${p.glow} blur-2xl opacity-70`}
                  />
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full drop-shadow-xl rounded-2xl object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.35em] uppercase text-honey-deep font-semibold">
                    {p.tag}
                  </p>
                  <h2 className="mt-3 text-3xl sm:text-5xl text-charcoal">{p.name}</h2>
                  <p className="mt-4 text-muted-foreground text-lg">{p.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {p.benefits.map((b) => (
                      <li key={b.text} className="flex items-center gap-3 text-sm sm:text-base text-charcoal/90">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100/90 border border-amber-200/60 shadow-2xs shrink-0">
                          <BenefitIcon icon={b.icon} />
                        </span>
                        <span className="font-medium">{b.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {p.price && (
                      <div className="flex items-center gap-4 py-2.5 px-5 rounded-2xl bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 border border-honey/30 shadow-[0_4px_16px_-4px_rgba(217,119,6,0.12)]">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-honey-deep">Ritual Price</span>
                          <span className="font-display text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                            {p.price}
                          </span>
                        </div>
                        <div className="h-8 w-px bg-honey/25" />
                        <div className="flex flex-col justify-center">
                          <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-honey/15 border border-honey/20 px-2.5 py-0.5 rounded-full">
                            {p.unit}
                          </span>
                          <span className="text-[10px] text-muted-foreground mt-0.5">8g daily sachet</span>
                        </div>
                      </div>
                    )}
                    <a
                      href={`https://wa.me/919494630088?text=${encodeURIComponent(
                        `Hi Hanova! 👋\n\nI came across your website and I would like to enquire / order:\n🍯 *${p.name}* (${p.tag})${p.price ? `\n💰 *Price:* ${p.price} ${p.unit || ""}` : ""}\n\nCould you please guide me on ordering and delivery details?\n\nThank you!`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-honey-gradient text-charcoal px-7 py-3.5 font-semibold shadow-honey hover:scale-[1.03] transition-transform"
                    >
                      Enquire now →
                    </a>
                  </div>
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
            >
              <h2 className="text-3xl sm:text-5xl text-charcoal leading-tight">
                100% Natural. <br />
                <span className="text-gradient-honey italic font-serif">No added sugar.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every Hanova sachet is plant-based, single-serve, and engineered for outcomes — not
                just ingredients. Drop it directly into your favorite hot tea, water, or blend, and
                experience instant wellness with zero mess.
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
              <img
                src={hanovaTumbler}
                alt="Hanova Active Tumbler Infusion"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
