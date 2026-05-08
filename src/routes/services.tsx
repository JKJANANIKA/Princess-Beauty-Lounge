import { createFileRoute } from "@tanstack/react-router";
import {
  Brush,
  Crown,
  Flower2,
  Gem,
  Hand,
  Heart,
  Scissors,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Princess Beauty Lounge" },
      {
        name: "description",
        content:
          "Bridal makeup, hair styling, facials, skincare, mehendi, manicure & more. Explore our complete services menu at Princess Beauty Lounge, Nellikuppam.",
      },
      { property: "og:title", content: "Beauty Services — Princess Beauty Lounge" },
      {
        property: "og:description",
        content: "A complete menu of beauty, bridal and wellness treatments under one elegant roof.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: Crown,
    title: "Bridal & Engagement",
    items: [
      { name: "Signature Bridal Makeup", price: "From ₹8,000" },
      { name: "Reception / Engagement Look", price: "From ₹5,000" },
      { name: "Saree Draping & Hair", price: "From ₹1,500" },
    ],
  },
  {
    icon: Brush,
    title: "Party & HD Makeup",
    items: [
      { name: "Party Makeup", price: "From ₹2,500" },
      { name: "HD / Airbrush Makeup", price: "From ₹4,500" },
      { name: "Pre-Bridal Trial", price: "From ₹2,000" },
    ],
  },
  {
    icon: Scissors,
    title: "Hair Care & Styling",
    items: [
      { name: "Haircut & Blow Dry", price: "From ₹400" },
      { name: "Hair Spa & Treatment", price: "From ₹800" },
      { name: "Smoothing / Keratin", price: "From ₹3,500" },
    ],
  },
  {
    icon: Gem,
    title: "Hair Colour",
    items: [
      { name: "Global Colour", price: "From ₹2,000" },
      { name: "Highlights / Balayage", price: "From ₹3,500" },
      { name: "Root Touch-Up", price: "From ₹900" },
    ],
  },
  {
    icon: Flower2,
    title: "Facials & Skincare",
    items: [
      { name: "Gold / Pearl Facial", price: "From ₹1,200" },
      { name: "Hydra Glow Facial", price: "From ₹1,500" },
      { name: "Anti-Ageing Facial", price: "From ₹1,800" },
    ],
  },
  {
    icon: Sparkles,
    title: "Threading & Waxing",
    items: [
      { name: "Eyebrow & Upper Lip", price: "From ₹60" },
      { name: "Full Arms Wax", price: "From ₹350" },
      { name: "Full Body Wax", price: "From ₹1,800" },
    ],
  },
  {
    icon: Hand,
    title: "Nails & Hands",
    items: [
      { name: "Spa Manicure", price: "From ₹500" },
      { name: "Spa Pedicure", price: "From ₹700" },
      { name: "Gel Polish & Nail Art", price: "From ₹900" },
    ],
  },
  {
    icon: Heart,
    title: "Mehendi Design",
    items: [
      { name: "Bridal Mehendi", price: "From ₹2,500" },
      { name: "Party Mehendi", price: "From ₹500" },
      { name: "Custom Designs", price: "On request" },
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Crafted for"
        highlight="Every You"
        subtitle="A complete menu of beauty, bridal and wellness treatments — delivered with premium products and personal care. Prices are indicative and may vary based on length, look and products."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border hover:border-gold/40 p-8 shadow-soft transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blush/70 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl">{title}</h3>
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-baseline gap-4 pb-3 border-b border-border/60 last:border-0 last:pb-0"
                  >
                    <span className="text-foreground/80">{item.name}</span>
                    <span className="text-sm text-gold font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl px-5 text-center mt-20">
          <p className="text-muted-foreground mb-6">
            Looking for a custom bridal package or group booking? We'd love to craft something
            special for you.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
          >
            Request Custom Quote
          </a>
        </div>
      </section>
    </>
  );
}
