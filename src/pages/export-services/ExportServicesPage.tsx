import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import { SectionHeader } from "@/components/site/SectionHeader";
import { exportCapabilities, exportProcess, serviceHighlights } from "@/data/company";
import { inquiryUrl } from "@/lib/whatsapp";

export function ExportServicesPage() {
  const whatsappUrl = inquiryUrl("I would like to understand REHI export service support.");

  return (
    <main>
      <PageMeta
        title="Export Services | REHI"
        description="Understand how REHI supports rattan furniture buyers from inquiry and quotation to quality checks, packing, documentation, and shipment handoff."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Export services"
          title="A clearer handoff from product inquiry to shipment preparation."
          description="REHI helps international buyers evaluate feasibility, align specifications, prepare production, and coordinate the export details needed before furniture leaves Indonesia."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-0">
          {serviceHighlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <article key={highlight.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <Icon aria-hidden="true" className="size-6 text-primary" />
                <h3 className="mt-4 font-noto-serif text-xl font-semibold">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Capabilities"
            title="Export support buyers can understand before they inquire."
            description="The website explains what REHI can coordinate and what information buyers should prepare."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {exportCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <Icon aria-hidden="true" className="size-6 text-primary" />
                  <h3 className="mt-4 font-noto-serif text-xl font-semibold">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Process"
          title="What happens after a buyer reaches out."
          description="The export workflow should feel concrete enough for procurement teams to know the next step."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {exportProcess.map((step, index) => (
            <article key={step} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <p className="font-noto-serif text-4xl font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Conversion
            </p>
            <h2 className="mt-3 font-noto-serif text-3xl font-semibold">
              Start with your destination country and target order.
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/78">
              REHI can respond faster when your inquiry includes product interest, quantity range, finish needs, and destination market.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
