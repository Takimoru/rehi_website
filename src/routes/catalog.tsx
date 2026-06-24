import { createFileRoute } from "@tanstack/react-router";

import { CatalogPage } from "@/pages/catalog/CatalogPage";

export const Route = createFileRoute("/catalog")({
  component: CatalogPage,
});
