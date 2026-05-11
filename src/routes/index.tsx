import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Heart,
  Users,
  Quote,
  MapPin,
  Mail,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import aboutImg from "@/assets/about-salon.jpg";
import gBridal from "@/assets/gallery/g1.png";
import gHair from "@/assets/gallery/g3.png";
import gFacial from "@/assets/gallery/g6.png";
import gNails from "@/assets/gallery/g8.png";
import shop1 from "@/assets/gallery/shop1.png";
import shop2 from "@/assets/gallery/shop2.png";
import shop3 from "@/assets/gallery/shop3.png";
import { ADDRESS, EMAIL, MAPS_EMBED, PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/site";

const STUDIO = [
  { src: shop1, alt: "Princess Beauty Lounge styling stations" },
  { src: shop2, alt: "Princess Beauty Lounge salon chairs and mirrors" },
  { src: shop3, alt: "Pedicure and spa corner" },
];

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

const WHY = [
  { icon: Award, title: "Experienced Beauticians", desc: "Skilled artists with years of bridal & beauty expertise." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Strict sanitisation and single-use tools for every client." },
  { icon: Gem, title: "Premium Products", desc: "Trusted, salon-grade brands for safe, lasting results." },
  { icon: Users, title: "Personalised Care", desc: "Consultations tailored to your skin, hair and style." },
  { icon: Heart, title: "Customer Love", desc: "Rated 4.9★ on Google by our wonderful clients." },
  { icon: Sparkles, title: "Affordable Luxury", desc: "Premium experience at honest, transparent pricing." },
];

const SERVICE_DETAILS = [
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
    icon: Flower2,
    title: "Facials & Skincare",
    items: [
      { name: "Gold / Pearl Facial", price: "From ₹1,200" },
      { name: "Hydra Glow Facial", price: "From ₹1,500" },
      { name: "Anti-Ageing Facial", price: "From ₹1,800" },
    ],
  },
];

const REVIEWS = [
  { name: "Priya R.", role: "Bride · 2024", text: "Absolutely loved my bridal makeup! The team is so talented and made me feel like a princess on my big day." },
  { name: "Divya S.", role: "Regular Client", text: "Best parlour in Nellikuppam. Very hygienic, friendly staff and the facial left my skin glowing for weeks." },
  { name: "Lakshmi V.", role: "Hair Colour", text: "The hair styling and colour were beyond my expectations. Premium quality products and reasonable prices." },
];

function Home() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Bridal Makeup", note: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Princess Beauty Lounge%2C%20I%27m%20${encodeURIComponent(
      form.name,
    )}%20(${encodeURIComponent(form.phone)}).%20I%27d%20like%20to%20book%20${encodeURIComponent(
      form.service,
    )}.%20${encodeURIComponent(form.note)}`;
    window.open(`https://wa.me/919488477844?text=${text}`, "_blank");
  };

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

      {/* OUR STORY */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutImg}
              alt="Beautician at Princess Beauty Lounge"
              loading="lazy"
              className="w-full h-[520px] object-cover rounded-2xl shadow-soft"
            />
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card border border-gold/30 rounded-2xl p-6 shadow-soft w-44">
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
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold transition"
              >
                Read full story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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

      {/* SERVICE PRICING PREVIEW */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Pricing</span>
              <h2 className="font-display text-4xl lg:text-5xl mt-3">
                Transparent <span className="text-gradient-gold italic">Service Menu</span>
              </h2>
              <div className="gold-divider mt-5" />
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold transition"
            >
              View full menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICE_DETAILS.map(({ icon: Icon, title, items }) => (
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
        </div>
      </section>

      {/* INSIDE THE STUDIO */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.25em] uppercase text-primary/70">
                Inside The Studio
              </span>
              <h2 className="font-display text-4xl lg:text-5xl mt-3">
                A Calm, Hygienic <span className="text-gradient-gold italic">Sanctuary</span>
              </h2>
              <div className="gold-divider mt-5" />
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold transition"
            >
              See full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STUDIO.map((s) => (
              <div key={s.alt} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
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
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Reviews</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">
              Loved by <span className="text-gradient-gold italic">Our Clients</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-foreground/80 font-medium">4.9 / 5 on Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:border-gold/40 transition"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
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
          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold transition"
            >
              Read all reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Contact</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">
              Let's <span className="text-gradient-gold italic">Connect</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-soft">
              <h3 className="font-display text-2xl mb-2">Get in touch</h3>
              <div className="gold-divider mb-7" />
              <div className="space-y-7">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Address</div>
                    <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-primary">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-primary">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Business Hours</div>
                    <p className="text-sm text-muted-foreground">
                      Monday – Sunday<br />9:30 AM – 9:30 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition text-sm"
                >
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white hover:opacity-90 transition text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 p-8 lg:p-10 rounded-2xl bg-gradient-blush border border-gold/20"
            >
              <h3 className="font-display text-2xl mb-2">Request an appointment</h3>
              <p className="text-sm text-muted-foreground mb-7">
                Fill in your details and we'll confirm via WhatsApp.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">Your Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition"
                    placeholder="e.g. Priya"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">Phone</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition"
                    placeholder="+91 ..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition"
                  >
                    {[
                      "Bridal Makeup",
                      "Party / HD Makeup",
                      "Hair Styling",
                      "Hair Colour",
                      "Facial & Skincare",
                      "Threading & Waxing",
                      "Manicure & Pedicure",
                      "Mehendi",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">Notes (optional)</label>
                  <textarea
                    rows={4}
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition resize-none"
                    placeholder="Preferred date & time, special requests..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
              >
                Send via WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden shadow-soft border border-border">
            <iframe
              src={MAPS_EMBED}
              title="Princess Beauty Lounge location"
              className="w-full h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 lg:py-32 bg-gradient-blush">
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
