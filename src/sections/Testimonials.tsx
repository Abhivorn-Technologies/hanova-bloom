import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

const items = [
  {
    name: "Ananya R.",
    role: "Yoga Instructor, Bangalore",
    quote:
      "Hanova has become my morning ritual. The Lemon Honey Concentrate is the cleanest start to my day.",
  },
  {
    name: "Vikram S.",
    role: "Founder, Mumbai",
    quote:
      "Focus without the crash. The Bacopa blend keeps me sharp through long meetings.",
  },
  {
    name: "Pooja K.",
    role: "Marathoner, Hyderabad",
    quote:
      "Sachet form factor is genius. I carry Hanova wherever I run — instant clean energy.",
  },
  {
    name: "Rahul M.",
    role: "Creative Director, Delhi",
    quote:
      "Premium feel, honest ingredients. It's the wellness brand I've been waiting for.",
  },
];

export function Testimonials() {
  /* watch the whole section — once it enters the viewport, trigger card animations */
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold"
            >
              Voices
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal"
            >
              Loved by the{" "}
              <span className="text-gradient-honey italic">wellness-led</span>.
            </motion.h2>
          </div>
        </div>

        {/* Swiper carousel — horizontal scroll preserved */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!pb-14"
        >
          {items.map((t, idx) => (
            <SwiperSlide key={t.name} className="!h-auto">
              {/* animate prop driven by isInView — no whileInView conflict with Swiper */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full glass rounded-3xl p-8 shadow-lg hover:shadow-honey transition-shadow duration-300"
              >
                <div className="font-display text-5xl text-honey leading-none">"</div>
                <p className="mt-4 text-charcoal/85 leading-relaxed">{t.quote}</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-honey-gradient grid place-items-center text-charcoal font-display text-xl flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
