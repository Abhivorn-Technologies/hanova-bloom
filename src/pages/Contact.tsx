import { useEffect } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { Contact as ContactSection } from "@/sections/Contact";
import contactHeroBg from "@/assets/contact-hero-bg.png";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Hanova Life Sciences";
  }, []);
  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's create something{" "}
            <span className="text-gradient-honey italic font-serif">pure.</span>
          </>
        }
        subtitle="Partnerships, wholesale, retail enquiries, or just a hello — we'd love to hear from you."
        bgImage={contactHeroBg}
      />
      <ContactSection />
    </Layout>
  );
}
