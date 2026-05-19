import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold"
          >
            The Hanova Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-display text-5xl sm:text-7xl lg:text-[8rem] leading-[0.95] text-charcoal"
          >
            Selling
            <br />
            <span className="text-gradient-honey italic">outcomes</span>,
            <br />
            not blends.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            We build products around the moments that matter — focus before a meeting, calm
            after a long day, energy on the move. The science is the means; the feeling is
            the product.
          </motion.p>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-2 gap-4"
          >
            {["Focus", "Calm", "Energy", "Glow"].map((label, i) => (
              <div
                key={label}
                className={`relative aspect-[3/4] rounded-3xl overflow-hidden ${
                  i % 2 === 0 ? "translate-y-6" : ""
                }`}
              >
                <div className={`absolute inset-0 ${i === 0 ? "bg-gradient-to-br from-botanical/60 to-honey/80" : i === 1 ? "bg-gradient-to-br from-lavender/60 to-cream" : i === 2 ? "bg-honey-gradient" : "bg-gradient-to-br from-sand to-honey-deep/70"}`} />
                <div className="absolute inset-0 grid place-items-end p-5">
                  <span className="font-display text-3xl text-charcoal/90">{label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
