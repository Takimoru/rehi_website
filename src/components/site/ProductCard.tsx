import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { inquiryUrl } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const url = inquiryUrl("I would like to ask about this product.", {
    Product: product.name,
    Category: product.categoryLabel,
    MOQ: product.moq,
  });

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <p className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-foreground">
          {product.categoryLabel}
        </p>
        <p className="text-sm font-medium text-muted-foreground">{product.moq}</p>
      </div>
      <h3 className="mt-5 font-noto-serif text-xl font-semibold text-foreground">
        {product.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
        {product.shortDescription}
      </p>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
          Finish options
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{product.finishes.join(", ")}</p>
      </div>
      <Button asChild className="mt-6 w-full">
        <a href={url} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Inquire on WhatsApp
        </a>
      </Button>
    </article>
  );
}
