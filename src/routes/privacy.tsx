import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Hanova Life Sciences" },
      {
        name: "description",
        content: "How Hanova Life Sciences collects, uses, and protects your personal information.",
      },
    ],
  }),
});

const sections = [
  {
    h: "1. Information We Collect",
    p: "We collect information you provide directly — such as your name, email, phone number, and shipping address when you contact us, subscribe to updates, or place an order.",
  },
  {
    h: "2. How We Use Your Information",
    p: "Your information is used to respond to enquiries, fulfill orders, send order updates, improve our products and services, and — only with your consent — share relevant updates and offers.",
  },
  {
    h: "3. Cookies & Analytics",
    p: "We use minimal cookies to keep the site functioning and to understand aggregate usage. You can disable cookies in your browser settings at any time.",
  },
  {
    h: "4. Data Sharing",
    p: "We do not sell, rent, or trade your personal information. We share data only with trusted service providers (payment gateways, shipping partners) strictly to fulfill your order.",
  },
  {
    h: "5. Data Retention",
    p: "We retain personal information only for as long as needed to provide our services and comply with legal obligations.",
  },
  {
    h: "6. Your Rights",
    p: "You have the right to access, correct, or delete your personal information. Email us at hanovalifesciences@gmail.com to exercise these rights.",
  },
  {
    h: "7. Security",
    p: "We implement appropriate technical and organizational measures to protect your data. See our Security page for more details.",
  },
  {
    h: "8. Children's Privacy",
    p: "Our services are not directed to children under 13. We do not knowingly collect personal information from children.",
  },
  {
    h: "9. Updates to This Policy",
    p: "We may update this Privacy Policy from time to time. The latest version will always be posted on this page.",
  },
];

function PrivacyPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: May 2026" />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl sm:text-2xl text-charcoal font-display">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
