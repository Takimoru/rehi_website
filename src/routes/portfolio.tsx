import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/pages/portfolio/PortfolioPage";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});
