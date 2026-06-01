import { createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "@/components/layout/RootLayout";

// Root route wraps all pages.
export const Route = createRootRoute({
  component: RootLayout,
});
