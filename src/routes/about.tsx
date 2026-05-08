import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Gem, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import aboutImg from "@/assets/about-salon.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Princess Beauty Lounge, Nellikuppam" },
      {
        name: "description",
        content:
          "Discover the story behind Princess Beauty Lounge — a trusted beauty parlour in Nellikuppam offering bridal, hair and skincare services with 10+ years of experience.",
      },
      { property: "og:title", content: "About Princess Beauty Lounge" },
      {
        property: "og:description",
        content: "Skilled artists, hygienic studio and premium products — for over a decade.",
      },
    ],
  }),
  component: About,
});

const WHY = [
  { icon: Award, title: "Experienced Beauticians", desc: "Skilled artists with years of bridal & beauty expertise." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Strict sanitisation and single-use tools for every client." },
  { icon: Gem, title: "Premium Products", desc: "Trusted, salon-grade brands for safe, lasting results." },
  { icon: Users, title: "Personalised Care", desc: "Consultations tailored to your skin, hair and style." },
  { icon: Heart, title: "Customer Love", desc: "Rated 4.9★ on Google by our wonderful clients." },
  { icon: Sparkles, title: "Affordable Luxury", desc: "Premium experience at honest, transparent pricing." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Sanctuary of"
        highlight="Beauty & Self-Care"
        subtitle="For over a decade, Princess Beauty Lounge has been the trusted address for women in Nellikuppam who value craft, hygiene and an elevated salon experience."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutImg}
              alt="Beautician at Princess Beauty Lounge"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full h-[520px] object-cover rounded-2xl shadow-soft"
            />
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card border border-gold/30 rounded-2xl p-6 shadow-gold w-44">
              <div className="text-4xl font-display text-gradient-gold">4.9★</div>
              <div className="text-xs text-muted-foreground mt-1">Google Rated</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Our Story</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
              Crafting confidence, <span className="text-gradient-gold italic">one client at a time</span>
            </h2>
            <div className="gold-divider mb-7" />
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Tucked along the Main Road of Nellikuppam,{" "}
              <strong className="text-foreground font-medium">Princess Beauty Lounge</strong> began
              with a simple promise — to make every woman feel celebrated. From timeless bridal
              makeup to soothing facials and signature hair styling, we deliver every service with
              warmth, craft and care.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our beauticians are trained in the latest techniques and we use only premium,
              dermatologist-trusted products. The result? A salon that feels like a sanctuary — and
              clients who keep coming back.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                ["10+", "Years Trust"],
                ["5K+", "Happy Clients"],
                ["20+", "Services"],
              ].map(([n, l]) => (
                <div key={l} className="text-center p-4 rounded-xl bg-secondary/60">
                  <div className="font-display text-2xl text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Why Choose Us</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">
              A Promise of <span className="text-gradient-gold italic">Excellence</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
