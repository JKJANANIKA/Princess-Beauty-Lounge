import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import gBridal from "@/assets/gallery-bridal.jpg";
import gFacial from "@/assets/gallery-facial.jpg";
import gHair from "@/assets/gallery-hair.jpg";
import gNails from "@/assets/gallery-nails.jpg";
import aboutImg from "@/assets/about-salon.jpg";
import heroImg from "@/assets/hero-salon.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Princess Beauty Lounge Lookbook" },
      {
        name: "description",
        content:
          "Browse our lookbook — bridal makeup, hair styling, facials, nail art and more from Princess Beauty Lounge, Nellikuppam.",
      },
      { property: "og:title", content: "Gallery — Princess Beauty Lounge" },
      { property: "og:image", content: gBridal },
    ],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: gBridal, alt: "Bridal makeup look", tag: "Bridal" },
  { src: gHair, alt: "Hair styling and colour", tag: "Hair" },
  { src: gFacial, alt: "Facial and skincare treatment", tag: "Skincare" },
  { src: gNails, alt: "Nail art and manicure", tag: "Nails" },
  { src: aboutImg, alt: "Salon studio", tag: "Studio" },
  { src: heroImg, alt: "Lounge interior", tag: "Interior" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of"
        highlight="Beauty"
        subtitle="A glimpse into our craft — looks, treatments and the calm, elegant studio our clients call their happy place."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {ITEMS.map((g, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${
                  i % 5 === 0 ? "lg:col-span-2 aspect-[4/3]" : "aspect-[3/4]"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition">
                  {g.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
