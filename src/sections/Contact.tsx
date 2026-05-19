import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      // EmailJS — set VITE_EMAILJS_SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY when ready.
      const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (SERVICE && TEMPLATE && KEY) {
        await emailjs.sendForm(SERVICE, TEMPLATE, formRef.current, { publicKey: KEY });
      } else {
        await new Promise((r) => setTimeout(r, 900)); // demo fallback
      }
      setStatus("ok");
      formRef.current.reset();
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-charcoal text-cream overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-honey/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-honey font-semibold">
              Contact
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Let’s start a{" "}
              <span className="text-gradient-honey italic">conversation</span>.
            </h2>
            <p className="mt-6 text-cream/70 text-lg max-w-md">
              For partnerships, wholesale, or wellness inquiries — we’d love to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              <a href="mailto:hanovalifesciences@gmail.com" className="flex items-start gap-4 group">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-honey-gradient text-charcoal">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cream/50">Email</div>
                  <div className="text-cream group-hover:text-honey transition-colors">
                    hanovalifesciences@gmail.com
                  </div>
                </div>
              </a>
              <a href="tel:+919494630088" className="flex items-start gap-4 group">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-honey-gradient text-charcoal">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cream/50">Phone</div>
                  <div className="text-cream group-hover:text-honey transition-colors">
                    +91 9494630088
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-honey-gradient text-charcoal">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cream/50">Address</div>
                  <div className="text-cream/90 leading-relaxed">
                    1-36, Laxma Reddy Nagar Colony,<br />
                    Uppal Circle under GHMC, Uppal Mandal,<br />
                    Medchal Malkajgiri District,<br />
                    Hyderabad – 500039
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl overflow-hidden border border-white/10">
              <iframe
                title="Hanova Location"
                src="https://www.google.com/maps?q=Uppal+Circle,+Hyderabad&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              />
            </div>
          </div>

          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl glass-dark p-8 sm:p-10 space-y-5 self-start"
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-cream/60">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full bg-transparent border-b border-white/20 py-3 focus:border-honey outline-none placeholder:text-cream/30"
                placeholder="Your full name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-cream/60">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full bg-transparent border-b border-white/20 py-3 focus:border-honey outline-none placeholder:text-cream/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-cream/60">Phone</label>
                <input
                  name="phone"
                  className="mt-2 w-full bg-transparent border-b border-white/20 py-3 focus:border-honey outline-none placeholder:text-cream/30"
                  placeholder="+91"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-cream/60">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full bg-transparent border-b border-white/20 py-3 focus:border-honey outline-none placeholder:text-cream/30 resize-none"
                placeholder="Tell us about your inquiry…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-honey-gradient text-charcoal px-6 py-3.5 font-semibold shadow-honey hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {status === "sending" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "ok" && (
              <p className="text-sm text-honey">Thanks — we’ll be in touch shortly.</p>
            )}
            {status === "err" && (
              <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
