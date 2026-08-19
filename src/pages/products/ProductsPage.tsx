import { Link } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";

import { PageMeta } from "@/components/site/PageMeta";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { productCategories } from "@/data/company";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductsPageProps = {
  activeCategorySlug?: string;
};

export function ProductsPage({ activeCategorySlug }: ProductsPageProps) {
  const activeCategory = productCategories.find((category) => category.slug === activeCategorySlug);
  const filteredProducts = activeCategory
    ? products.filter((product) => product.categorySlug === activeCategory.slug)
    : activeCategorySlug
      ? []
      : products;

  const heading = activeCategory ? `${activeCategory.label} Products` : "Rattan Solutions for Every Business";

  return (
    <main>
      <PageMeta
        title={`${heading} | REHI`}
        description="Browse REHI rattan furniture categories, MOQ signals, finish options, and WhatsApp inquiry actions."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Products"
          title={heading}
          description="From raw materials and woven components to finished furniture and custom manufacturing, REHI provides end-to-end sourcing for global importers and brands"
        />

        <nav className="mt-10 flex gap-2 overflow-x-auto pb-2" aria-label="Product categories">
          <Link
            to="/products"
            className={cn(
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold outline-none transition focus-visible:ring-3 focus-visible:ring-ring/50",
              !activeCategorySlug
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:bg-secondary"
            )}
          >
            All Products
          </Link>
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              to="/products/$slug"
              params={{ slug: category.slug }}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold outline-none transition focus-visible:ring-3 focus-visible:ring-ring/50",
                activeCategory?.slug === category.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </Link>
          ))}
        </nav>

        {activeCategory ? (
          <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
            {activeCategory.description}
          </p>
        ) : null}

        {filteredProducts.length ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-dashed border-border bg-card p-8 text-center">
            <PackageSearch aria-hidden="true" className="mx-auto size-9 text-muted-foreground" />
            <h2 className="mt-4 font-noto-serif text-2xl font-semibold">
              No products found for this category.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              The category route exists, but no static product data matches it yet. Browse all products or contact REHI with a custom request.
            </p>
            <Link
              to="/products"
              className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground outline-none transition hover:bg-primary/85 focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              View all products
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
