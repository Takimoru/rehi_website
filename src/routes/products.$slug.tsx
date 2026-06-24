/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";

import { ProductsPage } from "@/pages/products/ProductsPage";

export const Route = createFileRoute("/products/$slug")({
  component: ProductCategoryRoute,
});

function ProductCategoryRoute() {
  const { slug } = Route.useParams();

  return <ProductsPage activeCategorySlug={slug} />;
}
