import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatBand } from "@/components/site/StatBand";
import { productCategories } from "@/data/company";
import { siteConfig } from "@/config/site";
import { inquiryUrl } from "@/lib/whatsapp";
import heroImage from "@/assets/rattan-workshop-hero.jpg";

export function HomePage() {
  const whatsappUrl = inquiryUrl("I would like to discuss rattan export supply with REHI.");

  return (
    <main>
      <PageMeta
        title="REHI | Rattan Export House Indonesia"
        description="REHI supplies export-ready Indonesian rattan furniture for hospitality, wholesale, and custom projects."
      />

      <section className="relative min-h-[76svh] overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          alt="Indonesian rattan furniture production and woven material detail"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/78 to-primary/20" />
        <div className="relative mx-auto flex min-h-[76svh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              {siteConfig.companyName}
            </p>
            <h1 className="mt-5 font-noto-serif text-4xl font-semibold leading-tight sm:text-6xl">
              Connecting Global Buyers With Indonesia’s Finest Rattan Products
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/82 sm:text-lg">
              REHI is a specialized export company focused exclusively on Indonesia’s rattan industry, connecting international buyers with trusted Indonesian craftmen through end-to-end  sourcing, quality control, project management, and export coordination.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/products">
                  View Collections
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/18">
                <Link to="/catalog">
                  <Download aria-hidden="true" />
                  Download Catalog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Our Products"
            title="Find the Right Products for Your Market"
            description="Explore a wide range of handcrafted rattan furniture, décor, and custom solutions designed to meet the needs of international buyers, distributors, and hospitality brands."
          />
          <div className="flex justify-start lg:justify-end">
            <Button asChild variant="outline">
              <Link to="/products">
                Browse all products
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              to="/products/$slug"
              params={{ slug: category.slug }}
              className="group rounded-lg border border-border bg-card p-5 shadow-sm outline-none transition hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <h3 className="font-noto-serif text-xl font-semibold text-foreground">
                {category.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3">
                View category
                <ArrowRight aria-hidden="true" className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Buyer inquiry
            </p>
            <h2 className="mt-3 font-noto-serif text-3xl font-semibold sm:text-4xl">
              Need pricing, MOQ, or a custom project check?
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/78">
              Send the sales team your product interest, target quantities, and destination country. The inquiry opens directly in WhatsApp with useful context.
            </p>
          </div>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Start WhatsApp Inquiry
            </a>
          </Button>
        </div>
      </section>
       <StatBand />
    </main>
  );
}
