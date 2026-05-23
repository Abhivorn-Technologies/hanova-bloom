import { useEffect } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const featuredPost = {
  title: "The Science of Sublingual Absorption: Why Liquid Extracts Work Faster",
  excerpt: "Discover how Hanova's liquid honey sachets bypass the digestive delay, delivering bioavailable botanical benefits exactly when you need them most. Unlike pills or powders, the mucosal absorption begins the moment the honey touches your tongue, providing an immediate energy and wellness boost without the crash.",
  category: "Nutraceutical Science",
  date: "May 18, 2026",
  readTime: "5 min read",
};

const posts = [
  {
    id: 1,
    title: "Saving the Pollinators: Our Sustainable Sourcing Promise",
    excerpt: "Every Hanova sachet supports ethical beekeeping. Learn how our sourcing practices protect vital pollinator ecosystems across India.",
    category: "Sustainability",
    date: "May 12, 2026",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "The Perfect Morning Ritual: Hydration Meets Immunity",
    excerpt: "Swap your morning coffee for hot water with our Lemon Infused Honey. Here is why this simple ritual transforms your daily energy levels.",
    category: "Everyday Rituals",
    date: "May 05, 2026",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Decoding Ginger & Turmeric: Nature's Anti-Inflammatory Powerhouse",
    excerpt: "An in-depth look at the active compounds in our Ginger Turmeric formulation and how they combat systemic inflammation.",
    category: "Botanical Deep Dive",
    date: "April 28, 2026",
    readTime: "6 min read",
  },
];

export default function Blogs() {
  useEffect(() => {
    document.title = "Journal — Hanova Life Sciences";
  }, []);

  return (
    <Layout>
      <div className="bg-white">
        <PageHeader
          eyebrow="Journal"
          title={
            <>
              Insights & <span className="text-gradient-honey italic font-serif">Stories.</span>
            </>
          }
          subtitle="Explore the latest on functional wellness, botanical science, and modern healthy living."
        />
        
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            
            {/* Featured Post - Text Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-[2.5rem] bg-cream/40 border border-honey/10 p-10 sm:p-16 mb-16"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold text-honey-deep mb-6">
                <span className="bg-honey/10 px-4 py-2 rounded-full">{featuredPost.category}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charcoal leading-tight">
                {featuredPost.title}
              </h2>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="mt-8 pt-8 border-t border-charcoal/5 flex items-center gap-6 text-sm text-charcoal/60 font-medium">
                <span className="flex items-center gap-2"><Calendar size={16} /> {featuredPost.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} /> {featuredPost.readTime}</span>
              </div>
            </motion.div>

            {/* Grid Posts - Text Only */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-3xl bg-white border border-charcoal/10 p-8 hover:border-honey/40 transition-colors shadow-sm flex flex-col"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-honey-deep mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-2xl font-display text-charcoal leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-6 border-t border-charcoal/5 flex items-center gap-4 text-xs text-charcoal/50 font-medium">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-honey" />
                    <span>{post.readTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
}
