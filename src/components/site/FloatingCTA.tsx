import { MessageCircle, Phone } from "lucide-react";
import { PHONE, WHATSAPP } from "@/lib/site";

export function FloatingCTA() {
  return (
    <>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 lg:bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-gold hover:scale-110 transition animate-float"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3 flex gap-2">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-border text-sm"
        >
          <Phone className="w-4 h-4" /> Call
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium"
        >
          Book Now
        </a>
      </div>
    </>
  );
}
