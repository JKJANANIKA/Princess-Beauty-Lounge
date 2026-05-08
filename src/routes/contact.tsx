import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ADDRESS, EMAIL, MAPS_EMBED, PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Princess Beauty Lounge, Nellikuppam" },
      {
        name: "description",
        content:
          "Visit or book Princess Beauty Lounge in Nellikuppam. Call +91 94884 77844 or message us on WhatsApp. Open Monday–Sunday, 9:30 AM – 9:30 PM.",
      },
      { property: "og:title", content: "Contact Princess Beauty Lounge" },
      {
        property: "og:description",
        content: "Call, WhatsApp, or visit us on Main Road, Nellikuppam.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
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
      <PageHero
        eyebrow="Contact"
        title="Let's"
        highlight="Connect"
        subtitle="Reserve your slot, ask a question, or just say hello — we'd love to hear from you."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-5 gap-8">
          {/* INFO */}
          <div className="lg:col-span-2 p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-soft">
            <h2 className="font-display text-2xl mb-2">Get in touch</h2>
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
                  <a
                    href={`tel:${PHONE}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Business Hours</div>
                  <p className="text-sm text-muted-foreground">
                    Monday – Sunday
                    <br />
                    9:30 AM – 9:30 PM
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

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 lg:p-10 rounded-2xl bg-gradient-blush border border-gold/20"
          >
            <h2 className="font-display text-2xl mb-2">Request an appointment</h2>
            <p className="text-sm text-muted-foreground mb-7">
              Fill in your details and we'll confirm via WhatsApp.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">
                  Your Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition"
                  placeholder="e.g. Priya"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">
                  Phone
                </label>
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
                <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">
                  Service
                </label>
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
                <label className="text-xs uppercase tracking-wider text-foreground/70 mb-2 block">
                  Notes (optional)
                </label>
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

        {/* MAP */}
        <div className="mx-auto max-w-7xl px-5 lg:px-10 mt-10">
          <div className="rounded-2xl overflow-hidden shadow-soft border border-border">
            <iframe
              src={MAPS_EMBED}
              title="Princess Beauty Lounge location"
              className="w-full h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
