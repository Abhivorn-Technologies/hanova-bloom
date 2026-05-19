import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/hanova-logo.png";

export function Footer() {
  return (
    <footer className="relative bg-cream/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src={logo} alt="Hanova" className="h-10 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Premium functional wellness crafted with nature and science. Built for the
              rhythm of everyday life.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-10 h-10 rounded-full bg-charcoal text-cream hover:bg-honey hover:text-charcoal transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-charcoal/60">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["About", "#about"],
                ["Philosophy", "#philosophy"],
                ["Products", "#products"],
                ["Process", "#process"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-honey-deep transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-charcoal/60">Contact</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:hanovalifesciences@gmail.com" className="hover:text-honey-deep">
                  hanovalifesciences@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919494630088" className="hover:text-honey-deep">
                  +91 9494630088
                </a>
              </li>
              <li className="text-muted-foreground">
                1-36, Laxma Reddy Nagar Colony, Uppal Circle, Hyderabad – 500039
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-charcoal/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} HANOVA LIFE SCIENCES. All rights reserved.</div>
          <div>Nature, simplified for everyday life.</div>
        </div>
      </div>
    </footer>
  );
}
