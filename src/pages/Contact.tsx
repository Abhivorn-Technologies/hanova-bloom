import { useEffect } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { Contact as ContactSection } from "@/sections/Contact";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Hanova Life Sciences";
  }, []);
  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Let's create something pure."
        subtitle="Partnerships, wholesale, retail enquiries, or just a hello — we'd love to hear from you."
      />
      <ContactSection />
    </Layout>
  );
}
