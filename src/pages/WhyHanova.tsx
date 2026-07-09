import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Zap,
  Award,
  Globe,
  FlaskRound,
  CheckCircle2,
  Box,
  Plane,
  LineChart,
  HeartHandshake,
  TreeDeciduous,
} from "lucide-react";

const certifications = [
  {
    title: "FSSAI Certified",
    text: "Manufactured in compliance with the standards established by the Food Safety and Standards Authority of India, ensuring food safety, hygiene, and regulatory compliance.",
    icon: ShieldCheck,
  },
  {
    title: "GMP Certified",
    text: "Produced in Good Manufacturing Practice (GMP) certified facilities that follow stringent quality control procedures and consistent production standards.",
    icon: Award,
  },
  {
    title: "ISO Certified",
    text: "Operates under internationally recognized ISO-certified quality management systems, reflecting our commitment to continuous improvement and product quality.",
    icon: Globe,
  },
];

const whyChooseUs = [
  {
    icon: Leaf,
    text: "Daily Wellness Made Effortless – One sachet, one minute, one healthy habit.",
  },
  {
    icon: Zap,
    text: "Premium Honey & Botanicals – Carefully selected ingredients with uncompromising quality.",
  },
  {
    icon: FlaskRound,
    text: "Nature Meets Science – Traditional botanicals supported by modern formulation.",
  },
  {
    icon: CheckCircle2,
    text: "Clean & Honest Formulation – No added sugar, no artificial preservatives or colours.",
  },
  { icon: Box, text: "Freshness in Every Sachet – Hygienically sealed single servings." },
  { icon: Plane, text: "Travel Friendly – Carry wellness wherever you go." },
  {
    icon: LineChart,
    text: "Consistent Quality – Every batch is prepared with strict quality standards.",
  },
  { icon: HeartHandshake, text: "Proudly Made in India – Crafted with care for global wellness." },
  {
    icon: ShieldCheck,
    text: "Built on Trust – Transparency, quality and authenticity in every product.",
  },
  {
    icon: TreeDeciduous,
    text: "Sustainable Wellness Mindset – Simple habits for long-term well-being.",
  },
];

const coreValues = [
  "Nature First",
  "Science Driven",
  "Honest Ingredients",
  "Everyday Wellness",
  "Premium Quality",
  "Customer First",
  "Innovation",
  "Integrity",
];

const hanovaDifference = [
  "Instant wellness in convenient sachets",
  "Fresh sealed serving every time",
  "Easy to carry and consume",
  "Designed for modern lifestyles",
  "Functional botanical wellness—not just honey.",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyHanovaPage() {
  return (
    <Layout>
      <main className="min-h-screen pt-24 pb-16 overflow-hidden relative bg-white">
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-honey/20 blur-[100px]" />
          <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-sand/50 blur-[80px]" />
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-honey/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-24 pt-10">
            <motion.div initial="hidden" animate="show" variants={staggerContainer}>
              <motion.p
                variants={fadeUp}
                className="text-sm tracking-[0.3em] uppercase text-honey-deep font-semibold mb-6"
              >
                Welcome to Hanova
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl text-charcoal font-bold leading-tight mb-6"
              >
                Nature. Science.{" "}
                <span className="text-gradient-honey italic font-serif">Simplicity.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                At Hanova, we believe wellness should be simple, enjoyable, and part of everyday
                life. Our products combine premium honey with carefully selected botanical
                ingredients to create convenient daily wellness sachets that fit effortlessly into
                modern lifestyles.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-8 font-serif italic text-2xl text-honey-deep"
              >
                "Nature Simplified. Wellness Amplified."
              </motion.p>
            </motion.div>
          </div>

          {/* Quality & Certifications */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 relative"
          >
            <div className="text-center mb-16">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center justify-center p-3 rounded-full bg-honey/10 text-honey-deep mb-4"
              >
                <ShieldCheck size={32} />
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
              >
                Quality & Certifications
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground max-w-2xl mx-auto text-lg"
              >
                Certified Quality. Trusted Wellness. Every product is developed under strict
                standards to ensure safety, consistency, and customer confidence.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-honey/20 shadow-sm transition-all duration-300 group hover:shadow-xl hover:shadow-honey/10 hover:border-honey/40 hover:bg-white/90 cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-honey/20 to-honey/5 flex items-center justify-center text-honey-deep mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-honey/30 transition-all duration-300">
                    <cert.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 flex items-center gap-2">
                    {cert.title}
                    <CheckCircle2 size={18} className="text-green-500" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Hanova */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32 bg-charcoal text-cream rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-honey/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="text-honey italic font-serif">Hanova?</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-cream/80 text-lg mb-8 leading-relaxed">
                  We are not just selling honey—we are helping people build healthier daily habits
                  through premium, convenient wellness solutions.
                </motion.p>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                    <div className="mt-1 p-2 rounded-full bg-white/10 text-honey flex-shrink-0">
                      <item.icon size={18} />
                    </div>
                    <p className="text-sm text-cream/90 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* The Hanova Difference & Core Values */}
          <section className="mb-32 grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-honey/20 shadow-sm"
            >
              <motion.h3
                variants={fadeUp}
                className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3"
              >
                <Zap className="text-honey-deep" /> The Hanova Difference
              </motion.h3>
              <ul className="space-y-4">
                {hanovaDifference.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-honey" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-honey/20 shadow-sm"
            >
              <motion.h3
                variants={fadeUp}
                className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3"
              >
                <HeartHandshake className="text-honey-deep" /> Our Core Values
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    <span className="font-medium text-charcoal text-sm">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* CTA to Main Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-br from-honey/20 to-sand/40 rounded-[2.5rem] p-12 sm:p-16 max-w-4xl mx-auto border border-honey/30 shadow-sm"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-charcoal">
              Trust Hanova. Trust Quality.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
              Certified Processes. Honest Ingredients. Premium Wellness. Discover the full range of
              functional honeys tailored for your everyday life.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-charcoal text-cream px-8 py-4 text-base font-bold hover:bg-honey hover:text-charcoal hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore All Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
}
