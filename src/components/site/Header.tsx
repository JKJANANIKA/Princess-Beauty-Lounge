import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Crown, Menu, Phone, X } from "lucide-react";
import { NAV, PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Crown className="w-6 h-6 text-gold" />
          <span className="font-display text-xl md:text-2xl tracking-tight">
            Princess <span className="text-gradient-gold">Beauty</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-foreground/80 hover:text-primary transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all data-[status=active]:text-primary data-[status=active]:after:w-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-soft"
          >
            Book Now
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="py-3 text-foreground/80 hover:text-primary border-b border-border/50 data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border"
            >
              <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
