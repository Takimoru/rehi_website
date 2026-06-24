import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { routeTree } from "./routeTree.gen";

// Create router instance.
const router = createRouter({
  routeTree,
});

const queryClient = new QueryClient();

// Register router type for TypeScript.
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// App is only the router wrapper.
// It does not manually render pages.
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
