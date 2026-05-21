import { motion } from "framer-motion";
import focusImg from "@/assets/focus-outcome.png";
import calmImg from "@/assets/calm-outcome.png";
import energyImg from "@/assets/energy-outcome.png";
import glowImg from "@/assets/glow-outcome.png";

const outcomes = [
  { label: "Focus", img: focusImg },
  { label: "Calm", img: calmImg },
  { label: "Energy", img: energyImg },
  { label: "Glow", img: glowImg }
];

export function Experience() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden bg-cream/20">
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
            {outcomes.map((item, i) => (
              <div
                key={item.label}
                className={`relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  i % 2 === 0 ? "translate-y-6" : ""
                }`}
              >
                {/* Background Image */}
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Overlay Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-tr from-honey/20 to-transparent mix-blend-overlay" />

                {/* Text Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  <span className="text-[10px] uppercase tracking-widest text-honey font-bold">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl text-white group-hover:text-honey transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
