import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import g1 from "@/assets/gallery/g1.png";
import g2 from "@/assets/gallery/g2.png";
import g3 from "@/assets/gallery/g3.png";
import g4 from "@/assets/gallery/g4.png";
import g5 from "@/assets/gallery/g5.png";
import g6 from "@/assets/gallery/g6.png";
import g7 from "@/assets/gallery/g7.png";
import g8 from "@/assets/gallery/g8.png";
import g9 from "@/assets/gallery/g9.png";
import g10 from "@/assets/gallery/g10.png";
import shop1 from "@/assets/gallery/shop1.png";
import shop2 from "@/assets/gallery/shop2.png";
import shop3 from "@/assets/gallery/shop3.png";

const STUDIO = [
  { src: shop1, alt: "Princess Beauty Lounge styling stations" },
  { src: shop2, alt: "Princess Beauty Lounge salon chairs and mirrors" },
  { src: shop3, alt: "Pedicure and spa corner" },
];

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
      { property: "og:image", content: g2 },
    ],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: g1, alt: "Bridal makeup with artist", tag: "Bridal" },
  { src: g2, alt: "Traditional red bridal look", tag: "Bridal" },
  { src: g3, alt: "South Indian bridal hair styling", tag: "Hair" },
  { src: g4, alt: "Eye makeup and jewellery detail", tag: "Makeup" },
  { src: g5, alt: "Reception bridal look", tag: "Reception" },
  { src: g6, alt: "Traditional saree bridal look", tag: "Traditional" },
  { src: g7, alt: "Christian bridal makeup", tag: "Christian Bride" },
  { src: g8, alt: "Engagement bridal look", tag: "Engagement" },
  { src: g9, alt: "Soft glam bridal portrait", tag: "Bridal" },
  { src: g10, alt: "Haldi floral jewellery look", tag: "Haldi" },
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
