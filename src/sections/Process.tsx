import { motion } from "framer-motion";
import { Trees, Flame, Hourglass, ShieldCheck, Lock, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Trees,
    title: "Raw Forest Honey",
    text: "Ethically sourced, unprocessed honey from trusted beekeepers.",
  },
  {
    step: "02",
    icon: Flame,
    title: "Botanical Infusion",
    text: "Slow infusion of lemon, ginger & turmeric for maximum potency.",
  },
  {
    step: "03",
    icon: Hourglass,
    title: "Time-Aged Extraction",
    text: "Ingredients infused over time to unlock deeper nutrition & taste.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Purity & Potency",
    text: "Every batch tested for quality, consistency & natural goodness.",
  },
  {
    step: "05",
    icon: Lock,
    title: "Sachet Fresh Lock",
    text: "Single-serve packs that preserve freshness & convenience.",
  },
  {
    step: "06",
    icon: Sparkles,
    title: "Daily Wellness Ritual",
    text: "Ready-to-use immunity boost for your everyday routine.",
  },
];

const getShiftClass = (index: number) => {
  let classes = "";
  // sm screen (2 columns): shift odd indexes (1, 3, 5)
  if (index % 2 !== 0) {
    classes += " sm:translate-y-12 lg:translate-y-0";
  }
  // lg screen (6 columns): shift odd indexes (1, 3, 5)
  if (index % 2 !== 0) {
    classes += " lg:translate-y-16";
  }
  return classes;
};

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 pb-44 sm:pb-56 bg-[#0B0B0B] text-cream overflow-hidden">
      {/* Ambience Lighting (High-end background glows) */}
      <div className="absolute -top-40 -left-40 w-[45rem] h-[45rem] rounded-full bg-honey/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[45rem] h-[45rem] rounded-full bg-honey-deep/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] rounded-full bg-honey/5 blur-[180px] pointer-events-none" />

      {/* Hexagonal grid overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#181818_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-28">
          <p className="text-xs tracking-[0.5em] uppercase text-honey font-bold">
            Our Process
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display text-cream font-normal">
            From <span className="text-gradient-honey italic">bloom</span> to bottle.
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-honey mx-auto rounded-full" />
        </div>

        <div className="relative mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-16 sm:gap-y-28 lg:gap-y-0 gap-x-6 justify-items-center max-w-[1300px] mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className={`relative flex flex-col items-center w-full ${getShiftClass(i)}`}
              >
                {/* Honeycomb Card Wrapper with Metallic Gold Gradient Border */}
                <div 
                  className="clip-hexagon w-[220px] h-[250px] sm:w-[230px] sm:h-[260px] lg:w-[205px] lg:h-[235px] p-[2px] bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] -mt-[50px] sm:mt-0 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(224,163,0,0.25)] transition-all duration-500 hover:scale-[1.05] group relative z-10"
                >
                  {/* Glassmorphic Inner Hexagon */}
                  <div className="clip-hexagon w-full h-full bg-[#141414]/90 backdrop-blur-xl flex flex-col justify-center items-center p-5 lg:p-4 text-center relative overflow-hidden">
                    
                    {/* Golden Liquid Radial Glow on Hover */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,163,0,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Step label */}
                    <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-honey/80 group-hover:text-honey transition-colors duration-300">
                      STEP {s.step}
                    </span>

                    {/* Mini Hexagon Icon Box (Molten Gold effect) */}
                    <div className="clip-hexagon w-11 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-cream mt-2.5 mb-3 group-hover:bg-honey group-hover:text-charcoal group-hover:border-honey transition-all duration-500 shadow-inner">
                      <s.icon size={18} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sans text-sm lg:text-base text-cream group-hover:text-gradient-honey transition-all duration-300 font-bold leading-snug px-1">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs lg:text-[11px] text-cream/65 leading-relaxed mt-2 px-1 group-hover:text-cream/85 transition-colors duration-300">
                      {s.text}
                    </p>
                  </div>
                </div>

                {/* Connecting lines for Desktop (lg screens) */}
                {i < 5 && (
                  i % 2 === 0 ? (
                    // Down-right connecting line (for even indexes)
                    <svg className="hidden lg:block absolute left-[85%] top-[40%] w-[90px] h-[60px] z-0 overflow-visible pointer-events-none" viewBox="0 0 90 60">
                      <defs>
                        <linearGradient id={`liquidHoneyGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FCF6BA" />
                          <stop offset="50%" stopColor="#E0A300" />
                          <stop offset="100%" stopColor="#B38728" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,15 C25,15 65,45 90,45"
                        fill="none"
                        stroke={`url(#liquidHoneyGrad-${i})`}
                        strokeWidth="3.5"
                        filter="drop-shadow(0px 0px 4px rgba(224, 163, 0, 0.4))"
                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <circle cx="90" cy="45" r="4.5" fill="#FCF6BA" className="animate-pulse shadow-md" />
                    </svg>
                  ) : (
                    // Up-right connecting line (for odd indexes)
                    <svg className="hidden lg:block absolute left-[85%] top-[10%] w-[90px] h-[60px] z-0 overflow-visible pointer-events-none" viewBox="0 0 90 60">
                      <defs>
                        <linearGradient id={`liquidHoneyGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FCF6BA" />
                          <stop offset="50%" stopColor="#E0A300" />
                          <stop offset="100%" stopColor="#B38728" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,45 C25,45 65,15 90,15"
                        fill="none"
                        stroke={`url(#liquidHoneyGrad-${i})`}
                        strokeWidth="3.5"
                        filter="drop-shadow(0px 0px 4px rgba(224, 163, 0, 0.4))"
                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <circle cx="90" cy="15" r="4.5" fill="#FCF6BA" className="animate-pulse shadow-md" />
                    </svg>
                  )
                )}

                {/* Connecting lines for Tablet (sm screens) */}
                {i < 5 && (
                  <div className="hidden sm:block lg:hidden absolute left-[85%] top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-honey/60 to-honey-deep/60 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
