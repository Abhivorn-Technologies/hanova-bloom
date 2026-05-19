import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import butterflyPea from "@/assets/product-butterfly-pea.jpeg";
import lemon from "@/assets/product-lemon.jpeg";
import gingerTurmeric from "@/assets/product-ginger-turmeric.jpeg";

const products = [
  {
    name: "Butterfly Pea Infused Honey",
    tag: "Calm & Clarity",
    desc: "Indigo butterfly pea blooms steeped in raw honey — restful focus in a single sachet.",
    image: butterflyPea,
    glow: "from-indigo-500/40 to-honey/30",
  },
  {
    name: "Lemon Infused Honey",
    tag: "Refresh",
    desc: "Bright citrus zest meets golden honey for a daily detox ritual.",
    image: lemon,
    glow: "from-yellow-300/50 to-honey/40",
  },
  {
    name: "Ginger Lemon Turmeric Honey",
    tag: "Immunity",
    desc: "Three powerhouse botanicals fused with honey for everyday resilience.",
    image: gingerTurmeric,
    glow: "from-orange-400/40 to-honey-deep/40",
  },
  {
    name: "Butterfly Pea Infused Honey",
    tag: "Calm & Clarity",
    desc: "Portable instant wellness — 8g of plant-forward honey concentrate.",
    image: butterflyPea,
    glow: "from-indigo-500/40 to-honey/30",
  },
];

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 sm:mt-14"
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 140,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-14"
          >
            {products.map((p, i) => (
              <SwiperSlide key={`${p.name}-${i}`} className="!h-auto">
                <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-5 sm:p-6 h-full hover:border-honey/40 transition-colors">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${p.glow} opacity-60 blur-2xl`}
                    />
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="relative z-10 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="text-[11px] tracking-widest uppercase text-honey">
                      {p.tag}
                    </div>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl text-cream">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-cream/70">{p.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
