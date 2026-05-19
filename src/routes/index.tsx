import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Philosophy } from "@/sections/Philosophy";
import { WhyHanova } from "@/sections/WhyHanova";
import { Products } from "@/sections/Products";
import { Experience } from "@/sections/Experience";
import { Process } from "@/sections/Process";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { HoneyDivider } from "@/components/HoneyDivider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hanova Life Sciences — Nature, Simplified for Everyday Life" },
      {
        name: "description",
        content:
          "Premium functional honey & plant-based nutraceuticals from Hanova Life Sciences. Crafted with nature and science for modern everyday wellness.",
      },
      { property: "og:title", content: "Hanova Life Sciences" },
      {
        property: "og:description",
        content: "Premium functional wellness crafted with nature and science.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <HoneyDivider color="#F5E8C7" />
      <Philosophy />
      <WhyHanova />
      <Products />
      <Experience />
      <HoneyDivider color="#F5E8C7" flip />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
