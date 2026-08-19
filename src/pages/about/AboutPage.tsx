import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatBand } from "@/components/site/StatBand";
import { companyMilestones, companyValues } from "@/data/company";
import heroImage from "@/assets/rattan-workshop-hero.jpg";
import { AboutMisiCard, AboutVisiCard } from "./VisiMisiCard";

export function AboutPage() {
  return (
    <main>
      <PageMeta
        title="About REHI | Rattan Export House Indonesia"
        description="Learn how REHI supports international buyers with Indonesian rattan furniture production, export discipline, and custom project capability."
      />

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          alt="Rattan materials and woven furniture details from Indonesia"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/76 to-primary/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Our Story
            </p>
            <h1 className="mt-4 font-noto-serif text-4xl font-semibold leading-tight sm:text-6xl">
              Born in Cirebon, built for international procurement.
            </h1>
            <p className="mt-6 text-base leading-7 text-primary-foreground/82 sm:text-lg">
              REHI exists to make Indonesian rattan easier to evaluate, specify, and ship for serious B2B buyers. The company connects craft capacity with the operational discipline international projects expect.
            </p>
          </div>
        </div>
      </section>

      <StatBand />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          eyebrow="Company profile"
          title="A practical export partner, not just a product catalog."
          description="REHI works with a Cirebon-based production network and supports buyers through product selection, custom development, quality checks, packing decisions, and export documentation coordination."
        />
        <div className="space-y-6 text-base leading-8 text-muted-foreground">
          <p>
            Rattan is a material with real character: flexible, strong, renewable, and deeply connected to Indonesian craft knowledge. For international buyers, the challenge is turning that craft into dependable supply.
          </p>
          <p>
            REHI focuses on the commercial details that make buying easier: clear MOQ signals, finish options, sample discussion, production timelines, photo-based quality review, and shipment handoff. The result is a more confident evaluation path for procurement teams.
          </p>
        </div>
      </section>

      <section className="bg-card px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-primary p-8 text-primary-foreground shadow-sm">
              <div className="mt-4 font-noto-serif text-3xl font-semibold">
                <AboutVisiCard></AboutVisiCard>
              </div>
            </article>
            <article className="rounded-lg border border-border bg-background p-8 shadow-sm">
              <div className="mt-4 font-noto-serif text-3xl font-semibold text-foreground">
                <AboutMisiCard></AboutMisiCard>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core values"
          title="Quiet reliability for high-stakes buying decisions."
          description="The brand should feel credible because the working method is credible."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value) => (
            <article key={value.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <h3 className="font-noto-serif text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Milestones"
            title="A focused path toward export trust."
            description="The MVP presents REHI as a company buyers can quickly understand and contact."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {companyMilestones.map((milestone) => (
              <article key={milestone.year} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <p className="font-noto-serif text-3xl font-semibold text-primary">{milestone.year}</p>
                <h3 className="mt-4 text-lg font-semibold">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-border bg-primary p-8 text-primary-foreground shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Buyer next step
            </p>
            <h2 className="mt-3 font-noto-serif text-3xl font-semibold">
              Review the product range or ask about a custom project.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/products">
                Products
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/custom-project">Custom Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
