import { createFileRoute } from "@tanstack/react-router";

import { ExportServicesPage } from "@/pages/export-services/ExportServicesPage";

export const Route = createFileRoute("/export-services")({
  component: ExportServicesPage,
});
