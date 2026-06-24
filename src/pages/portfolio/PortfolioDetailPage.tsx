import { Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { portfolioItems } from "@/data/portfolio";
import { inquiryUrl } from "@/lib/whatsapp";

type PortfolioDetailPageProps = {
  id: string;
};

export function PortfolioDetailPage({ id }: PortfolioDetailPageProps) {
  const item = portfolioItems.find((project) => project.id === id);

  if (!item) {
    return (
      <NotFoundPage
        title="Project not found"
        description="This portfolio item is not available in the static MVP data."
      />
    );
  }

  const whatsappUrl = inquiryUrl("I would like to discuss a project similar to this portfolio item.", {
    Project: item.name,
    Location: item.location,
    Type: item.projectType,
  });

  return (
    <main>
      <PageMeta
        title={`${item.name} | REHI Portfolio`}
        description={item.summary}
      />

      <section className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/82 outline-none transition hover:text-primary-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to portfolio
          </Link>
          <div className="mt-10 max-w-4xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              {item.projectType}
            </p>
            <h1 className="mt-4 font-noto-serif text-4xl font-semibold leading-tight sm:text-6xl">
              {item.name}
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/78">{item.location}</p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-primary-foreground/82">
              {item.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <aside className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Scope
          </p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {item.scope.map((scope) => (
              <li key={scope} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                {scope}
              </li>
            ))}
          </ul>
        </aside>
        <div className="space-y-8">
          <article>
            <h2 className="font-noto-serif text-3xl font-semibold">Export relevance</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{item.exportRelevance}</p>
          </article>
          <article>
            <h2 className="font-noto-serif text-3xl font-semibold">Result</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{item.result}</p>
          </article>
          <Button asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Ask about similar work
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
