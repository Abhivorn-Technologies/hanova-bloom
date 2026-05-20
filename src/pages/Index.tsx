import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Philosophy } from "@/sections/Philosophy";
import { WhyHanova } from "@/sections/WhyHanova";
import { Products } from "@/sections/Products";
import { Experience } from "@/sections/Experience";
import { Process } from "@/sections/Process";
import { Testimonials } from "@/sections/Testimonials";
import { HoneyDivider } from "@/components/HoneyDivider";

export default function Index() {
  useEffect(() => {
    document.title = "Hanova Life Sciences — Nature, Simplified for Everyday Life";
  }, []);
  return (
    <Layout>
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
    </Layout>
  );
}
