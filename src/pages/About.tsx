import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout, PageHeader } from "@/components/Layout";
import honey from "@/assets/honey-drip.jpg";
import bee from "@/assets/bee-flower.jpg";
import lemon from "@/assets/lemon-honey.jpg";
import hanovaTube from "@/assets/product-tube-transparent.png";

export default function About() {
  useEffect(() => {
    document.title = "About — Hanova Life Sciences";
  }, []);
  return (
    <Layout>
      {/* <div className="bg-transparent"> */}
      <div className="bg-white">
        <PageHeader
          eyebrow="Introduction"
          title={
            <>
              Wellness must be{" "}
              <span className="text-gradient-honey italic font-serif">portable, instant,</span> and{" "}
              <span className="text-gradient-honey italic font-serif">reliable.</span>
            </>
          }
          subtitle="Hanova is a new generation functional honey sachet brand built around the modern reality — busy lifestyles demand instant, hygienic, single-serve wellness."
          className="pt-28 sm:pt-36 pb-12 sm:pb-14"
        />

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-3 gap-6">
            {[honey, lemon, bee].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>

          <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-20 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl text-charcoal">Our Vision</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To become the most trusted functional honey sachet brand — bridging mass
                  accessibility and premium wellness. People don't reject honey. They reject effort,
                  mess, and inconsistency.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h2 className="text-3xl sm:text-4xl text-charcoal">Our Mission</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Honey concentrated with functional ingredients — engineered for instant energy,
                  weight-management support, immunity, and everyday rituals that fit into modern
                  life.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500"
            >
              <img
                src={hanovaTube}
                alt="Hanova Premium Product"
                className="w-full h-auto max-h-[32rem] object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold">
              Product Philosophy
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl text-charcoal max-w-3xl">
              Sachet ={" "}
              <span className="text-gradient-honey italic">
                Convenience × Hygiene × Instant Wellness
              </span>
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  t: "Functional Food / Nutraceutical",
                  d: "Plant-based honey formulation that goes beyond basic nutrition — delivering targeted benefits like instant energy.",
                },
                {
                  t: "Plant-based",
                  d: "Made entirely from natural ingredients derived from plants — no synthetic or artificial additives.",
                },
                {
                  t: "Selling Outcomes, Not Blends",
                  d: "100% natural. No added sugar. Each sachet is engineered for a specific moment in your day.",
                },
                {
                  t: "Built for Daily Rituals",
                  d: "Hanova fits into daily rituals — bridging mass accessibility and premium wellness.",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-charcoal/5 hover:border-honey/40 hover:shadow-[0_15px_30px_rgba(224,163,0,0.12)] transition-all duration-300 cursor-pointer"
                >
                  <div className="text-honey-deep font-semibold text-sm">{c.t}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
