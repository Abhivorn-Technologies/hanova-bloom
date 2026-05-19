import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Hanova Life Sciences" },
      {
        name: "description",
        content:
          "Get in touch with Hanova Life Sciences — Hyderabad. Partnerships, wholesale, or product enquiries.",
      },
      { property: "og:title", content: "Contact Hanova Life Sciences" },
    ],
  }),
});

function ContactPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Let's create something pure."
        subtitle="Partnerships, wholesale, retail enquiries, or just a hello — we'd love to hear from you."
      />
      <Contact />
    </Layout>
  );
}
