import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "@/assets/hanova-logo-new.png";
import honey from "@/assets/honey-drip.jpg";
import lemon from "@/assets/lemon-honey.jpg";
import bee from "@/assets/bee-flower.jpg";
import sachet from "@/assets/sachet-hand.jpg";

const gallery = [
  { src: honey, alt: "Honey drip" },
  { src: lemon, alt: "Lemon honey" },
  { src: bee, alt: "Bee pollination" },
  { src: sachet, alt: "Hanova sachet" },
];

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-cream pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <img src={logo} alt="Hanova" className="h-10 w-auto" />
            <p className="mt-5 text-sm text-cream/70 max-w-sm">
              Nature, simplified for everyday life. Plant-based functional honey sachets crafted for
              instant wellness — convenience × hygiene × pure outcomes.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-10 h-10 rounded-full bg-cream/10 hover:bg-honey hover:text-charcoal transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-honey">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Blogs", "/blogs"],
                ["Contact Us", "/contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-cream/80 hover:text-honey transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-honey">Legal</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Terms of Service", "/terms"],
                ["Privacy Policy", "/privacy"],
                ["Security", "/security"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-cream/80 hover:text-honey transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-honey">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href="mailto:hanovalifesciences@gmail.com" className="hover:text-honey">
                  hanovalifesciences@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919494630088" className="hover:text-honey">
                  +91 9494630088
                </a>
              </li>
              <li className="text-cream/60">
                1-36, Laxma Reddy Nagar Colony, Uppal Circle, Hyderabad – 500039
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-4 gap-2">
              {gallery.map((g) => (
                <div key={g.alt} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-cream/60">
          <div>© {new Date().getFullYear()} HANOVA LIFE SCIENCES. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Developed by</span>
            <a
              href="https://abhivorn.com"
              target="_blank"
              rel="noreferrer"
              className="text-honey hover:underline font-medium"
            >
              Abhivorn Technologies Pvt Ltd
            </a>
            <span className="opacity-50">&amp;</span>
            <a
              href="https://www.digilevelup.in/"
              target="_blank"
              rel="noreferrer"
              className="text-honey hover:underline font-medium"
            >
              DIGI LEVELUP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
