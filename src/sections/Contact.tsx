import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  // State to track focused states for label float animations
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      const whatsappText = `*New Inquiry from Hanova website*
*Name:* ${formValues.name}
*Email:* ${formValues.email}
*Phone:* ${formValues.phone || "Not provided"}
*Message:* ${formValues.message}`;

      const encodedText = encodeURIComponent(whatsappText);
      const targetPhone = "919494630088";
      const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus("ok");
      setFormValues({ name: "", email: "", phone: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      setStatus("err");
      console.error("WhatsApp redirect error:", error);
    }
  };

  // Framer Motion animation container & item variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-cream/40 text-charcoal overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-[35rem] h-[35rem] rounded-full bg-honey/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[35rem] h-[35rem] rounded-full bg-sand/15 blur-[120px] pointer-events-none" />

      {/* Subtle Vector Honeycomb Background Graphic */}
      <div className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.06] pointer-events-none text-honey-deep">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="w-full h-full"
        >
          <pattern id="honeycomb" width="16" height="27.71" patternUnits="userSpaceOnUse">
            <path d="M8 0 L16 4.62 L16 13.86 L8 18.48 L0 13.86 L0 4.62 Z" />
            <path d="M0 27.71 L8 23.09 L16 27.71" />
            <path d="M16 13.86 L24 18.48 L24 27.71 L16 32.33 L8 27.71" />
          </pattern>
          <rect width="100" height="100" fill="url(#honeycomb)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact details */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-honey-deep font-semibold">
                Get in touch
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-charcoal font-display">
                Let’s start a <span className="text-gradient-honey italic">conversation</span>.
              </h2>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-md">
                For partnerships, wholesale, or wellness inquiries — we’d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hanovalifesciences@gmail.com"
                className="flex items-center gap-5 p-4 rounded-2xl glass hover:border-honey/60 hover:shadow-md hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-honey-gradient text-charcoal shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    Email
                  </div>
                  <div className="text-charcoal font-medium group-hover:text-honey-deep transition-colors">
                    hanovalifesciences@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919494630088"
                className="flex items-center gap-5 p-4 rounded-2xl glass hover:border-honey/60 hover:shadow-md hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-honey-gradient text-charcoal shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    Phone
                  </div>
                  <div className="text-charcoal font-medium group-hover:text-honey-deep transition-colors">
                    +91 9494630088
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-5 p-4 rounded-2xl glass border border-white/40">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-honey-gradient text-charcoal shadow-sm flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    Address
                  </div>
                  <div className="text-charcoal/80 text-sm leading-relaxed mt-0.5">
                    1-36, Laxma Reddy Nagar Colony,
                    <br />
                    Uppal Circle under GHMC, Uppal Mandal,
                    <br />
                    Medchal Malkajgiri District,
                    <br />
                    Hyderabad – 500039
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/60 shadow-lg shadow-honey/5">
              <iframe
                title="Hanova Location"
                src="https://www.google.com/maps?q=Uppal+Circle,+Hyderabad&output=embed"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "sepia(0.2) contrast(0.95) brightness(0.95)" }}
              />
            </div>
          </div>

          {/* Right Column: Contact form with 3D organic floating honey elements */}
          <div className="relative self-start">
            {/* Floating Organic Honey droplet 1 */}
            <motion.div
              animate={{ y: [0, -18, 0], x: [0, 8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-honey/50 to-honey-deep/60 rounded-full blur-[3px] opacity-40 pointer-events-none -z-10 shadow-lg shadow-honey/20"
            />

            {/* Floating Organic Honey droplet 2 */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -10, 0],
                borderRadius: [
                  "40% 60% 70% 30% / 50% 50% 60% 40%",
                  "60% 40% 30% 70% / 40% 60% 50% 50%",
                  "40% 60% 70% 30% / 50% 50% 60% 40%",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-8 w-28 h-28 bg-gradient-to-br from-honey-deep/50 to-honey/40 blur-[3px] opacity-35 pointer-events-none -z-10 shadow-lg shadow-honey-deep/10"
            />

            <motion.form
              ref={formRef}
              onSubmit={onSubmit}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-[2.2rem] glass py-12 sm:py-14 px-8 sm:px-10 space-y-7 border border-white/70 shadow-2xl shadow-honey/5 relative overflow-hidden"
            >
              {/* Form glass gloss shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />

              {/* Creative Form Header */}
              <motion.div variants={itemVariants} className="pb-4 border-b border-charcoal/10">
                <h3 className="font-display text-2xl sm:text-3xl text-charcoal flex items-center gap-2">
                  Let's craft wellness <span className="animate-bounce inline-block">🍯</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/60 mt-1.5 font-sans tracking-wide">
                  Fill in your details below and we will tailor the perfect honey solution for you.
                </p>
              </motion.div>

              {/* Name Input with floating label animation */}
              <motion.div variants={itemVariants} className="relative">
                <input
                  name="name"
                  required
                  value={formValues.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white/20 border-2 rounded-2xl px-5 pb-3.5 pt-7 outline-none text-charcoal font-medium transition-all ${
                    focusedField === "name"
                      ? "border-honey-deep bg-white/40 shadow-inner shadow-honey/5"
                      : "border-charcoal/10 hover:border-charcoal/20"
                  }`}
                />
                <label
                  className={`absolute left-5 pointer-events-none transition-all duration-300 font-sans tracking-wide ${
                    focusedField === "name" || formValues.name
                      ? "top-2.5 text-[9px] text-honey-deep font-bold uppercase tracking-widest"
                      : "top-5 text-sm text-charcoal/50"
                  }`}
                >
                  Your Full Name
                </label>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email Input with floating label animation */}
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formValues.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-white/20 border-2 rounded-2xl px-5 pb-3.5 pt-7 outline-none text-charcoal font-medium transition-all ${
                      focusedField === "email"
                        ? "border-honey-deep bg-white/40 shadow-inner shadow-honey/5"
                        : "border-charcoal/10 hover:border-charcoal/20"
                    }`}
                  />
                  <label
                    className={`absolute left-5 pointer-events-none transition-all duration-300 font-sans tracking-wide ${
                      focusedField === "email" || formValues.email
                        ? "top-2.5 text-[9px] text-honey-deep font-bold uppercase tracking-widest"
                        : "top-5 text-sm text-charcoal/50"
                    }`}
                  >
                    Email Address
                  </label>
                </motion.div>

                {/* Phone Input with floating label animation */}
                <motion.div variants={itemVariants} className="relative">
                  <input
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-white/20 border-2 rounded-2xl px-5 pb-3.5 pt-7 outline-none text-charcoal font-medium transition-all ${
                      focusedField === "phone"
                        ? "border-honey-deep bg-white/40 shadow-inner shadow-honey/5"
                        : "border-charcoal/10 hover:border-charcoal/20"
                    }`}
                  />
                  <label
                    className={`absolute left-5 pointer-events-none transition-all duration-300 font-sans tracking-wide ${
                      focusedField === "phone" || formValues.phone
                        ? "top-2.5 text-[9px] text-honey-deep font-bold uppercase tracking-widest"
                        : "top-5 text-sm text-charcoal/50"
                    }`}
                  >
                    Phone Number
                  </label>
                </motion.div>
              </div>

              {/* Message Input with floating label animation */}
              <motion.div variants={itemVariants} className="relative">
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formValues.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white/20 border-2 rounded-2xl px-5 pb-4 pt-7 outline-none text-charcoal font-medium transition-all resize-none ${
                    focusedField === "message"
                      ? "border-honey-deep bg-white/40 shadow-inner shadow-honey/5"
                      : "border-charcoal/10 hover:border-charcoal/20"
                  }`}
                />
                <label
                  className={`absolute left-5 pointer-events-none transition-all duration-300 font-sans tracking-wide ${
                    focusedField === "message" || formValues.message
                      ? "top-2.5 text-[9px] text-honey-deep font-bold uppercase tracking-widest"
                      : "top-5 text-sm text-charcoal/50"
                  }`}
                >
                  Tell us about your inquiry…
                </label>
              </motion.div>

              {/* Submit Button with slide hover animation */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-honey-gradient text-charcoal px-8 py-4 font-semibold shadow-honey hover:shadow-xl transition-all cursor-pointer select-none active:scale-95"
                >
                  {status === "sending" ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <Send
                      className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                      size={16}
                    />
                  )}
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </motion.div>

              {status === "ok" && (
                <p className="text-sm text-honey-deep font-semibold">
                  Thanks — redirecting you to WhatsApp shortly.
                </p>
              )}
              {status === "err" && (
                <p className="text-sm text-red-500 font-semibold">
                  Something went wrong. Please try again.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
