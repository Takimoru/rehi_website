import { Link } from "@tanstack/react-router";
import { ArrowRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";

type NotFoundPageProps = {
  title?: string;
  description?: string;
};

export function NotFoundPage({
  title = "Page not found",
  description = "The page you are looking for is not available in the REHI marketing site.",
}: NotFoundPageProps) {
  return (
    <main className="mx-auto flex min-h-[65svh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <PageMeta title={`${title} | REHI`} description={description} />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 font-noto-serif text-4xl font-semibold">{title}</h1>
      <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link to="/">
            <Home aria-hidden="true" />
            Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/products">
            Products
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
