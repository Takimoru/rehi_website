import { PageMeta } from "@/components/site/PageMeta";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <PageMeta
        title="Portfolio | REHI"
        description="Review REHI project examples across hospitality, wholesale, and decor export programs."
      />

      <SectionHeader
        eyebrow="Portfolio"
        title="Project proof for buyers evaluating export reliability."
        description="Each project highlights the kind of execution details procurement teams care about: location, project type, scope, and export relevance."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
