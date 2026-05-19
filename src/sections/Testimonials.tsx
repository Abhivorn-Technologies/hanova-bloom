import { motion } from "framer-motion";
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
      "Premium feel, honest ingredients. It’s the wellness brand I’ve been waiting for.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold">
              Voices
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal">
              Loved by the{" "}
              <span className="text-gradient-honey italic">wellness-led</span>.
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
            {items.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto">
                <div className="h-full glass rounded-3xl p-8 shadow-lg hover:shadow-honey transition-shadow">
                  <div className="font-display text-5xl text-honey leading-none">“</div>
                  <p className="mt-4 text-charcoal/85 leading-relaxed">{t.quote}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-honey-gradient grid place-items-center text-charcoal font-display text-xl">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
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
