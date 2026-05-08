import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Phone,
  Sparkles,
  Star,
  Crown,
  Scissors,
  Brush,
  Flower2,
  Hand,
  ShieldCheck,
  Award,
  Gem,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import gBridal from "@/assets/gallery-bridal.jpg";
import gFacial from "@/assets/gallery-facial.jpg";
import gHair from "@/assets/gallery-hair.jpg";
import gNails from "@/assets/gallery-nails.jpg";
import { PHONE, WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Princess Beauty Lounge — Premium Beauty Parlour in Nellikuppam" },
      {
        name: "description",
        content:
          "Princess Beauty Lounge in Nellikuppam — bridal makeup, hair styling, facials & skincare. Rated 4.9★ on Google. Book your appointment today.",
      },
      { property: "og:title", content: "Princess Beauty Lounge — Nellikuppam" },
      {
        property: "og:description",
        content: "Premium bridal, hair, facial and skincare services. Rated 4.9★.",
      },
    ],
  }),
  component: Home,
});

const FEATURED = [
  { icon: Crown, title: "Bridal Makeup", desc: "Signature bridal looks for your big day.", img: gBridal },
  { icon: Scissors, title: "Hair Styling", desc: "Cuts, colour and luxurious hair spa.", img: gHair },
  { icon: Flower2, title: "Facials & Skincare", desc: "Hydra, gold and anti-ageing facials.", img: gFacial },
  { icon: Hand, title: "Nails & Mehendi", desc: "Spa pedicures, gel polish and mehendi art.", img: gNails },
];

const QUICK_WHY = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: ShieldCheck, label: "Hygienic & Safe" },
  { icon: Gem, label: "Premium Products" },
  { icon: Sparkles, label: "Personalised Care" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Princess Beauty Lounge interior"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 w-full">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush/60 border border-gold/30 text-xs tracking-[0.2em] uppercase text-foreground/80 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" /> Nellikuppam · Rated 4.9★
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Where Every Woman <br />
              <span className="text-gradient-gold italic">Feels Like a Princess</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-9 max-w-lg">
              Premium beauty, bridal & skincare services crafted with care. Step into Princess
              Beauty Lounge and discover your most radiant self.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
              >
                Book Appointment <ChevronRight className="w-4 h-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 hover:border-gold hover:text-primary transition"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">4.9 from happy clients on Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK WHY STRIP */}
      <section className="py-10 border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {QUICK_WHY.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <span className="text-sm font-medium text-foreground/80">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.25em] uppercase text-primary/70">
                Featured Services
              </span>
              <h2 className="font-display text-4xl lg:text-5xl mt-3">
                Crafted for <span className="text-gradient-gold italic">Every You</span>
              </h2>
              <div className="gold-divider mt-5" />
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED.map(({ icon: Icon, title, desc, img }) => (
              <Link
                to="/services"
                key={title}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-blush/70 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gradient-blush">
        <div className="mx-auto max-w-5xl px-5 lg:px-10 text-center">
          <Brush className="w-10 h-10 text-gold mx-auto mb-5" />
          <h2 className="font-display text-3xl lg:text-5xl mb-5">
            Ready to feel <span className="text-gradient-gold italic">absolutely radiant</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Reserve your slot today and let our expert team craft a look that's uniquely you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
            >
              Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 hover:border-gold hover:text-primary transition"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
