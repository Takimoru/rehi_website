/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";

import { BlogDetailPage } from "@/pages/blog/BlogDetailPage";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetailRoute,
});

function BlogDetailRoute() {
  const { slug } = Route.useParams();

  return <BlogDetailPage slug={slug} />;
}
