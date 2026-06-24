import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { navItems, siteConfig } from "@/config/site";
import { inquiryUrl } from "@/lib/whatsapp";

export function Footer() {
  const whatsappUrl = inquiryUrl("I would like to contact REHI from the website footer.");

  return (
    <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {siteConfig.brand}
          </p>
          <h2 className="mt-3 font-noto-serif text-2xl font-semibold text-foreground">
            {siteConfig.companyName}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold text-foreground">Navigation</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-md py-1 text-sm text-muted-foreground outline-none transition hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md outline-none transition hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50">
              <Phone aria-hidden="true" className="size-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 rounded-md outline-none transition hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50">
              <Mail aria-hidden="true" className="size-4" />
              {siteConfig.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4" />
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
