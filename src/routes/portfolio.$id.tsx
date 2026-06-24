/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";

import { PortfolioDetailPage } from "@/pages/portfolio/PortfolioDetailPage";

export const Route = createFileRoute("/portfolio/$id")({
  component: PortfolioDetailRoute,
});

function PortfolioDetailRoute() {
  const { id } = Route.useParams();

  return <PortfolioDetailPage id={id} />;
}
