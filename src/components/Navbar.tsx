import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/hanova-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-lg" : "bg-white/40 backdrop-blur"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Hanova" className="h-8 sm:h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-honey-deep transition-colors relative group ${
                    isActive ? "text-honey-deep" : "text-charcoal/80"
                  }`
                }
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-honey group-hover:w-full transition-all duration-300" />
              </NavLink>
            ))}
          </nav>

          <a
            href="https://api.whatsapp.com/send?phone=919182609080&text=Hi%20Hanova%21%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20website%20and%20I%27m%20really%20interested%20in%20your%20premium%20honey%20wellness%20products.%20%F0%9F%8D%AF%0A%0ACould%20you%20please%20share%20more%20details%20about%20the%20available%20products%2C%20pricing%2C%20and%20how%20I%20can%20place%20an%20order%3F%0A%0ALooking%20forward%20to%20hearing%20from%20you%21"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 justify-center rounded-full bg-charcoal text-cream px-5 py-2.5 text-sm font-medium hover:bg-honey hover:text-charcoal transition-colors"
          >
            Order Now
          </a>

          <button
            className="md:hidden p-2 rounded-full bg-charcoal/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-3xl p-6 shadow-xl"
            >
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-charcoal/90 hover:text-honey-deep"
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href="https://api.whatsapp.com/send?phone=919182609080&text=Hi%20Hanova%21%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20website%20and%20I%27m%20really%20interested%20in%20your%20premium%20honey%20wellness%20products.%20%F0%9F%8D%AF%0A%0ACould%20you%20please%20share%20more%20details%20about%20the%20available%20products%2C%20pricing%2C%20and%20how%20I%20can%20place%20an%20order%3F%0A%0ALooking%20forward%20to%20hearing%20from%20you%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex justify-center rounded-full bg-charcoal text-cream px-5 py-3 text-sm font-medium hover:bg-honey hover:text-charcoal transition-colors"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
