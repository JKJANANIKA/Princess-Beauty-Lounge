import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Princess Beauty Lounge (4.9★ Google)" },
      {
        name: "description",
        content:
          "Read what our clients say about Princess Beauty Lounge in Nellikuppam — bridal makeup, facials, hair and more. Rated 4.9★ on Google.",
      },
      { property: "og:title", content: "Client Reviews — Princess Beauty Lounge" },
      {
        property: "og:description",
        content: "Loved by hundreds of clients. Read their stories.",
      },
    ],
  }),
  component: Reviews,
});

const REVIEWS = [
  {
    name: "Priya R.",
    role: "Bride · 2024",
    rating: 5,
    text: "Absolutely loved my bridal makeup! The team is so talented and made me feel like a princess on my big day. Highly recommend Princess Beauty Lounge.",
  },
  {
    name: "Divya S.",
    role: "Regular Client",
    rating: 5,
    text: "Best parlour in Nellikuppam. Very hygienic, friendly staff and the facial left my skin glowing for weeks. I'm a customer for life.",
  },
  {
    name: "Lakshmi V.",
    role: "Hair Colour",
    rating: 5,
    text: "The hair styling and colour were beyond my expectations. Premium quality products and very reasonable prices. Loved every visit.",
  },
  {
    name: "Anitha K.",
    role: "Facial & Threading",
    rating: 5,
    text: "Amazing experience! From threading to facial, everything was done with so much care. Will definitely come back.",
  },
  {
    name: "Meena P.",
    role: "Engagement Look",
    rating: 5,
    text: "The makeup artist understood exactly the soft, glowy look I wanted. Got so many compliments at my engagement. Thank you team!",
  },
  {
    name: "Sangeetha M.",
    role: "Mehendi & Nails",
    rating: 5,
    text: "Beautiful mehendi designs and the nail art was on point. Super clean studio and lovely staff. Highly recommended.",
  },
];

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Loved by"
        highlight="Our Clients"
        subtitle="Rated 4.9★ on Google by hundreds of happy clients across Nellikuppam and beyond. Here's what they have to say."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-foreground/80 font-medium">4.9 / 5 on Google</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:border-gold/40 transition"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border/60">
                  <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center font-display text-primary">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-5">Want to be our next happy story?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
            >
              Book Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
