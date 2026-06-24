import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { PageMeta } from "@/components/site/PageMeta";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { blogPosts } from "@/data/blog";

type BlogDetailPageProps = {
  slug: string;
};

export function BlogDetailPage({ slug }: BlogDetailPageProps) {
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <NotFoundPage
        title="Article not found"
        description="This article is not available in the static MVP blog data."
      />
    );
  }

  return (
    <main>
      <PageMeta title={`${post.title} | REHI Blog`} description={post.excerpt} />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary outline-none transition hover:gap-3 focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to blog
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {post.category} / {post.date} / {post.readTime}
        </p>
        <h1 className="mt-5 font-noto-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-10 space-y-7 text-base leading-8 text-foreground/84">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="bg-secondary/55 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          <Link
            to="/products"
            className="rounded-lg border border-border bg-card p-5 text-sm font-semibold text-primary shadow-sm outline-none transition hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Browse product range
            <ArrowRight aria-hidden="true" className="mt-4 size-4" />
          </Link>
          <Link
            to="/export-services"
            className="rounded-lg border border-border bg-card p-5 text-sm font-semibold text-primary shadow-sm outline-none transition hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Understand export services
            <ArrowRight aria-hidden="true" className="mt-4 size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
