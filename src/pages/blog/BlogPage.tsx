import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageMeta } from "@/components/site/PageMeta";
import { SectionHeader } from "@/components/site/SectionHeader";
import { blogPosts } from "@/data/blog";

export function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <PageMeta
        title="Blog | REHI"
        description="Read REHI guides for rattan export buyers, hospitality procurement teams, and custom furniture project planning."
      />

      <SectionHeader
        eyebrow="Blog"
        title="Editorial guides for rattan export buyers."
        description="Short, practical articles that help international buyers prepare better inquiries and evaluate rattan furniture production with more confidence."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="flex h-full flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {post.category}
            </p>
            <h2 className="mt-4 font-noto-serif text-xl font-semibold">{post.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {post.date} / {post.readTime}
            </p>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary outline-none transition hover:gap-3 focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Read article
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
