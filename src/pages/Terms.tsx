import { useEffect } from "react";
import { Layout, PageHeader } from "@/components/Layout";

const sections = [
  {
    h: "1. Acceptance of Terms",
    p: "By accessing or using the Hanova Life Sciences website or purchasing our products, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
  },
  {
    h: "2. Use of the Website",
    p: "You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of, restrict, or inhibit anyone else's use of the website.",
  },
  {
    h: "3. Products & Health Claims",
    p: "Hanova products are functional foods, not medicines. Statements about ingredients are based on general nutritional research and are not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use if pregnant, nursing, or under medical supervision.",
  },
  {
    h: "4. Intellectual Property",
    p: "All content on this website — including the Hanova wordmark, product photography, copy, and design — is the property of Hanova Life Sciences and protected by applicable copyright and trademark laws.",
  },
  {
    h: "5. Orders & Payments",
    p: "All orders are subject to acceptance and availability. Prices and product details may change without notice. Payment must be made in full at the time of order.",
  },
  {
    h: "6. Limitation of Liability",
    p: "Hanova Life Sciences shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products.",
  },
  {
    h: "7. Governing Law",
    p: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.",
  },
  {
    h: "8. Changes to These Terms",
    p: "We reserve the right to update these Terms at any time. Continued use of the website after changes constitutes acceptance of the revised Terms.",
  },
];

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service — Hanova Life Sciences";
  }, []);
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="Last updated: May 2026" />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl sm:text-2xl text-charcoal font-display">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
          <p className="text-sm text-muted-foreground pt-4 border-t border-charcoal/10">
            Questions? Email{" "}
            <a className="text-honey-deep underline" href="mailto:hanovalifesciences@gmail.com">
              hanovalifesciences@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
