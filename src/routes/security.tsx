import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { Shield, Lock, Server, Mail } from "lucide-react";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Security — Hanova Life Sciences" },
      {
        name: "description",
        content:
          "How Hanova Life Sciences secures customer data, payments, and product integrity across our supply chain and platform.",
      },
    ],
  }),
});

const pillars = [
  {
    icon: Shield,
    h: "Data Protection",
    p: "All personal data is encrypted in transit (TLS 1.2+) and at rest. Access is strictly role-based and audited.",
  },
  {
    icon: Lock,
    h: "Secure Payments",
    p: "Payments are processed through PCI-DSS compliant gateways. We never store full card numbers on our servers.",
  },
  {
    icon: Server,
    h: "Platform Security",
    p: "Regular vulnerability scans, automated patching, and least-privilege access controls keep our infrastructure hardened.",
  },
  {
    icon: Mail,
    h: "Responsible Disclosure",
    p: "Found a vulnerability? Email security@hanovalifesciences.com. We respond within 72 hours and credit responsible reporters.",
  },
];

function SecurityPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Trust"
        title="Security you can rely on."
        subtitle="Hanova takes data, payments, and product integrity seriously. Here's how we protect what matters."
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.h}
              className="rounded-3xl bg-white border border-charcoal/5 p-7 shadow-sm hover:shadow-honey/20 hover:shadow-xl transition-shadow"
            >
              <div className="grid place-items-center w-12 h-12 rounded-full bg-honey-gradient text-charcoal">
                <p.icon size={20} />
              </div>
              <h2 className="mt-5 text-2xl font-display text-charcoal">{p.h}</h2>
              <p className="mt-2 text-muted-foreground">{p.p}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 mt-16 space-y-8">
          <div>
            <h3 className="text-xl text-charcoal font-display">Product Integrity</h3>
            <p className="mt-3 text-muted-foreground">
              Every Hanova batch is produced under FSSAI-licensed facilities with strict
              hygiene protocols. Single-serve sachets eliminate cross-contamination risks
              common to multi-use jars.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-charcoal font-display">Traceability</h3>
            <p className="mt-3 text-muted-foreground">
              Each sachet carries a batch code so we can trace ingredients back to the
              source — protecting both quality and accountability.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
