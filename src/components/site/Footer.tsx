import { Link } from "@tanstack/react-router";
import { Crown, Facebook, Instagram, MessageCircle } from "lucide-react";
import { ADDRESS, NAV, PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-foreground/95 text-background py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-gold" />
              <span className="font-display text-xl">Princess Beauty Lounge</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              A premium beauty parlour in Nellikuppam dedicated to making every woman feel her most
              beautiful self.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-gold transition">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Get in Touch</h4>
            <p className="text-sm text-background/70 mb-2">{ADDRESS}</p>
            <a
              href={`tel:${PHONE}`}
              className="text-sm text-background/70 hover:text-gold block mb-4"
            >
              {PHONE_DISPLAY}
            </a>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-background/20 hover:border-gold hover:text-gold flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-background/20 hover:border-gold hover:text-gold flex items-center justify-center transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full border border-background/20 hover:border-gold hover:text-gold flex items-center justify-center transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-background/10 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Princess Beauty Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
