import { createFileRoute } from "@tanstack/react-router";

import { CustomProjectPage } from "@/pages/custom-project/CustomProjectPage";

export const Route = createFileRoute("/custom-project")({
  component: CustomProjectPage,
});
