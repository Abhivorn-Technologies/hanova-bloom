import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const products = [
  {
    name: "Lemon Honey Concentrate",
    tag: "Refresh",
    desc: "Bright citrus with raw honey for daily detox.",
    grad: "from-citrus to-honey",
  },
  {
    name: "Butterfly Pea Wellness",
    tag: "Calm",
    desc: "Indigo blooms and honey for restful clarity.",
    grad: "from-lavender to-honey",
  },
  {
    name: "Bacopa Herbal Blend",
    tag: "Focus",
    desc: "Adaptogenic herbs for sustained cognition.",
    grad: "from-botanical to-honey",
  },
  {
    name: "Citrus Zest Formula",
    tag: "Energy",
    desc: "Zesty vitality, perfect for busy mornings.",
    grad: "from-citrus to-honey-deep",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32 bg-charcoal text-cream overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-honey/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-honey-deep/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.4em] uppercase text-honey font-semibold">
            Our Products
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Functional honey,{" "}
            <span className="text-gradient-honey italic">redefined</span>.
          </h2>
          <p className="mt-5 text-cream/70 text-lg">
            A curated collection of plant-forward honey concentrates — each crafted for a
            specific moment in your day.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14"
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-14"
          >
            {products.map((p) => (
              <SwiperSlide key={p.name} className="!h-auto">
                <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 h-full hover:border-honey/40 transition-colors">
                  <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${p.grad} relative overflow-hidden`}>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-40 h-56 rounded-[2rem] bg-gradient-to-b from-white/30 to-white/5 backdrop-blur-sm border border-white/30 grid place-items-center group-hover:scale-105 transition-transform duration-500">
                        <div className="text-center px-3">
                          <div className="text-[10px] tracking-[0.3em] uppercase text-charcoal/70">
                            Hanova
                          </div>
                          <div className="font-display text-2xl mt-1 text-charcoal leading-tight">
                            {p.name.split(" ")[0]}
                          </div>
                          <div className="mt-2 text-[10px] text-charcoal/70">SACHET · 10g</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="text-xs tracking-widest uppercase text-honey">{p.tag}</div>
                    <h3 className="mt-1 font-display text-2xl text-cream">{p.name}</h3>
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
