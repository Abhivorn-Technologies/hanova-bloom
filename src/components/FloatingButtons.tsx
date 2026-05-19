import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919494630088"
        target="_blank"
        rel="noreferrer"
        className="relative grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <FaWhatsapp size={26} />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid place-items-center w-12 h-12 rounded-full bg-charcoal text-cream shadow-lg hover:bg-honey hover:text-charcoal transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
