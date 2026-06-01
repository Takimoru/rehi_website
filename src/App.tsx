import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

// Create router instance.
const router = createRouter({
  routeTree,
});

// Register router type for TypeScript.
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// App is only the router wrapper.
// It does not manually render pages.
export function App() {
  return <RouterProvider router={router} />;
}
