import { createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "@/components/layout/RootLayout";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";

// Root route wraps all pages.
export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <NotFoundPage />,
});
