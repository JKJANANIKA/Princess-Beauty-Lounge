import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MessageCircle, MapPin, Clock, Star, Menu, X, Sparkles,
  Scissors, Brush, Heart, Flower2, Hand, Crown, ShieldCheck, Award, Users, Gem,
  Instagram, Facebook, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import aboutImg from "@/assets/about-salon.jpg";
import gBridal from "@/assets/gallery-bridal.jpg";
import gFacial from "@/assets/gallery-facial.jpg";
import gHair from "@/assets/gallery-hair.jpg";
import gNails from "@/assets/gallery-nails.jpg";

export const Route = createFileRoute("/")({ component: Index });

const PHONE = "+919488477844";
const PHONE_DISPLAY = "+91 94884 77844";
const WHATSAPP = "https://wa.me/919488477844?text=Hi%20Princess%20Beauty%20Lounge%2C%20I%27d%20like%20to%20book%20an%20appointment.";
const ADDRESS = "392, Main Rd, Nellikuppam, Tamil Nadu 607105, India";
const MAPS_EMBED = "https://www.google.com/maps?q=Princess+Beauty+Lounge+Nellikuppam&output=embed";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { icon: Crown, title: "Bridal Makeup", desc: "Signature bridal looks crafted to make your big day unforgettable." },
  { icon: Brush, title: "Party Makeup", desc: "Glam, HD & airbrush makeup for every occasion and celebration." },
  { icon: Scissors, title: "Hair Styling", desc: "Cuts, blowouts, curls, straightening and luxurious hair spa." },
  { icon: Flower2, title: "Facials & Skincare", desc: "Gold, fruit, hydra & anti-ageing facials for a radiant glow." },
  { icon: Sparkles, title: "Threading & Waxing", desc: "Precise threading and gentle wax for silky, smooth skin." },
  { icon: Hand, title: "Manicure & Pedicure", desc: "Spa pedicures, gel polish and detailed nail art finishes." },
  { icon: Heart, title: "Mehendi Design", desc: "Bridal & party mehendi with intricate, long-lasting artistry." },
  { icon: Gem, title: "Hair Colour", desc: "Global colour, highlights, balayage with premium products." },
];

const WHY = [
  { icon: Award, title: "Experienced Beauticians", desc: "Skilled artists with years of bridal & beauty expertise." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Strict sanitisation and single-use tools for every client." },
  { icon: Gem, title: "Premium Products", desc: "Trusted, salon-grade brands for safe, lasting results." },
  { icon: Users, title: "Personalised Care", desc: "Consultations tailored to your skin, hair and style." },
  { icon: Heart, title: "Customer Love", desc: "Rated 4.9★ on Google by our wonderful clients." },
  { icon: Sparkles, title: "Affordable Luxury", desc: "Premium experience at honest, transparent pricing." },
];

const REVIEWS = [
  { name: "Priya R.", rating: 5, text: "Absolutely loved my bridal makeup! The team is so talented and made me feel like a princess. Highly recommend Princess Beauty Lounge." },
  { name: "Divya S.", rating: 5, text: "Best parlour in Nellikuppam. Very hygienic, friendly staff and the facial left my skin glowing for weeks." },
  { name: "Lakshmi V.", rating: 5, text: "The hair styling and colour were beyond my expectations. Premium quality products and very reasonable prices." },
  { name: "Anitha K.", rating: 5, text: "Amazing experience! From threading to facial, everything was done with so much care. Will definitely come back." },
];

const GALLERY = [
  { src: gBridal, alt: "Bridal makeup" },
  { src: gHair, alt: "Hair styling" },
  { src: gFacial, alt: "Skincare products" },
  { src: gNails, alt: "Nail art" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-18 py-4">
          <a href="#home" className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-gold" />
            <span className="font-display text-xl md:text-2xl tracking-tight">
              Princess <span className="text-gradient-gold">Beauty</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-foreground/80 hover:text-primary transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all">{n.label}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"><Phone className="w-4 h-4" />{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-soft">Book Now</a>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV.map(n => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-foreground/80 hover:text-primary border-b border-border/50">{n.label}</a>
              ))}
              <a href={`tel:${PHONE}`} className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-border">
                <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground">Book Appointment</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Princess Beauty Lounge interior" width={1920} height={1080} className="w-full h-full object-cover" />
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
              Premium beauty, bridal & skincare services crafted with care. Step into Princess Beauty Lounge and discover your most radiant self.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft">
                Book Appointment <ChevronRight className="w-4 h-4" />
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 hover:border-gold hover:text-primary transition">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-sm text-muted-foreground">4.9 from happy clients on Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <img src={aboutImg} alt="Beautician at Princess Beauty Lounge" loading="lazy" width={1200} height={1400} className="w-full h-[520px] object-cover rounded-2xl shadow-soft" />
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card border border-gold/30 rounded-2xl p-6 shadow-gold w-44">
              <div className="text-4xl font-display text-gradient-gold">4.9★</div>
              <div className="text-xs text-muted-foreground mt-1">Google Rated</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">About Us</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
              A Sanctuary of <span className="text-gradient-gold italic">Beauty</span> & Self-Care
            </h2>
            <div className="gold-divider mb-7" />
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Tucked along the Main Road of Nellikuppam, <strong className="text-foreground font-medium">Princess Beauty Lounge</strong> is a trusted destination for women who value quality, hygiene and an elevated beauty experience.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From timeless bridal makeup to soothing facials and signature hair styling, every service is delivered by skilled beauticians using premium, dermatologist-trusted products — so you always leave glowing.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[["10+","Years Trust"],["5K+","Happy Clients"],["20+","Services"]].map(([n,l]) => (
                <div key={l} className="text-center p-4 rounded-xl bg-secondary/60">
                  <div className="font-display text-2xl text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 bg-gradient-blush">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Our Services</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">Crafted for <span className="text-gradient-gold italic">Every You</span></h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-muted-foreground">A complete menu of beauty, bridal and wellness treatments under one elegant roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-7 rounded-2xl bg-card border border-border hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-blush/70 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Why Choose Us</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">A Promise of <span className="text-gradient-gold italic">Excellence</span></h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-7 rounded-2xl bg-secondary/40 border border-border hover:bg-secondary/70 transition">
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

      {/* GALLERY */}
      <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Lookbook</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">Moments of <span className="text-gradient-gold italic">Beauty</span></h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((g, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl ${i % 3 === 0 ? "lg:row-span-2 aspect-[3/4] lg:aspect-[3/5]" : "aspect-[3/4]"}`}>
                <img src={g.src} alt={g.alt} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Testimonials</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">Loved by <span className="text-gradient-gold italic">Our Clients</span></h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map(r => (
              <div key={r.name} className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-5 italic">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center font-display text-primary">{r.name[0]}</div>
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Google Review</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-blush">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70">Visit Us</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-5">Let's <span className="text-gradient-gold italic">Connect</span></h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-soft">
              <div className="space-y-7">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-display text-lg mb-1">Address</div>
                    <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-display text-lg mb-1">Phone</div>
                    <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-primary">{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-display text-lg mb-1">Business Hours</div>
                    <p className="text-sm text-muted-foreground">Monday – Sunday<br />9:30 AM – 9:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white hover:opacity-90 transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft border border-border min-h-[400px]">
              <iframe
                src={MAPS_EMBED}
                title="Princess Beauty Lounge location"
                className="w-full h-full min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground/95 text-background py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-gold" />
                <span className="font-display text-xl">Princess Beauty Lounge</span>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">A premium beauty parlour in Nellikuppam dedicated to making every woman feel her most beautiful self.</p>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4 text-gold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/70">
                {NAV.map(n => <li key={n.href}><a href={n.href} className="hover:text-gold transition">{n.label}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4 text-gold">Get in Touch</h4>
              <p className="text-sm text-background/70 mb-2">{ADDRESS}</p>
              <a href={`tel:${PHONE}`} className="text-sm text-background/70 hover:text-gold block mb-4">{PHONE_DISPLAY}</a>
              <div className="flex gap-3">
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-background/20 hover:border-gold hover:text-gold flex items-center justify-center transition"><Instagram className="w-4 h-4" /></a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-background/20 hover:border-gold hover:text-gold flex items-center justify-center transition"><Facebook className="w-4 h-4" /></a>
                <a href={WHATSAPP} aria-label="WhatsApp" target="_blank" rel="noopener" className="w-9 h-9 rounded-full border border-background/20 hover:border-gold hover:text-gold flex items-center justify-center transition"><MessageCircle className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-background/10 text-center text-xs text-background/50">
            © {new Date().getFullYear()} Princess Beauty Lounge. All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-gold hover:scale-110 transition animate-float"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* MOBILE STICKY CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3 flex gap-2">
        <a href={`tel:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-border text-sm">
          <Phone className="w-4 h-4" /> Call
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium">
          Book Now
        </a>
      </div>
    </div>
  );
}
