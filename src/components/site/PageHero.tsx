import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-gradient-blush overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 text-center animate-fade-up">
        <span className="text-xs tracking-[0.3em] uppercase text-primary/70">{eyebrow}</span>
        <h1 className="font-display text-5xl lg:text-6xl mt-4 leading-tight">
          {title} {highlight && <span className="text-gradient-gold italic">{highlight}</span>}
        </h1>
        <div className="gold-divider mx-auto mt-6 mb-6" />
        {subtitle && (
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground/80">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}
