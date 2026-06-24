import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import type { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {item.projectType}
      </p>
      <h3 className="mt-4 font-noto-serif text-xl font-semibold text-foreground">
        {item.name}
      </h3>
      <p className="mt-2 text-sm font-medium text-primary">{item.location}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{item.summary}</p>
      <Link
        to="/portfolio/$id"
        params={{ id: item.id }}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary outline-none transition hover:gap-3 focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        View project
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </article>
  );
}
