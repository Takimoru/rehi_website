export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rattan-export-buyer-checklist",
    title: "A buyer checklist for rattan furniture exports",
    excerpt: "The practical information international buyers should confirm before moving from product interest to shipment planning.",
    category: "Export Guide",
    date: "June 10, 2026",
    readTime: "4 min read",
    paragraphs: [
      "Rattan furniture buying is easier when the early conversation is specific. A good inquiry should include product references, target quantity, destination country, usage environment, and any finish or packing constraints.",
      "MOQ matters because rattan production relies on material preparation, weaving labor, frame setup, finishing, and packing. Buyers who share quantity ranges early help suppliers confirm realistic pricing and lead time.",
      "Export documentation should be discussed before production is completed. Commercial invoice details, packing list format, HS code expectations, and destination requirements can affect how a shipment is organized.",
      "For hospitality projects, samples and finish references are especially important. Approving dimensions, stain tone, cushion assumptions, and carton protection before batch production reduces costly rework later.",
    ],
  },
  {
    slug: "hospitality-rattan-specifications",
    title: "How hospitality teams should specify rattan furniture",
    excerpt: "A short guide for procurement teams preparing rattan furniture briefs for hotels, resorts, villas, and restaurants.",
    category: "Hospitality",
    date: "June 14, 2026",
    readTime: "5 min read",
    paragraphs: [
      "Hospitality furniture specifications need to describe more than appearance. The most useful briefs define the use case, indoor or covered-outdoor placement, guest traffic level, cleaning expectations, and cushion requirements.",
      "Dimensions should be checked against the actual space, not only the reference photo. Seat height, table height, arm height, and stacking requirements can change the frame and weaving approach.",
      "Finish direction should be tied to a sample or physical reference when possible. Natural materials carry variation, so procurement teams should agree on an acceptable range rather than expecting perfect uniformity.",
      "When the project includes many rooms or villas, product naming and carton labeling become operational details. A clear packing plan helps installation teams find the right pieces faster on site.",
    ],
  },
  {
    slug: "custom-rattan-project-process",
    title: "What happens during a custom rattan project",
    excerpt: "From reference image to sample approval, here is how custom rattan development typically moves.",
    category: "Custom Projects",
    date: "June 18, 2026",
    readTime: "3 min read",
    paragraphs: [
      "Custom rattan work starts with a brief: reference images, drawings, target dimensions, quantities, finish direction, destination country, and intended use. The more specific the brief, the faster feasibility can be confirmed.",
      "The specification stage turns the visual idea into production details. Material choice, frame structure, weaving pattern, upholstery assumptions, and packing needs are clarified before pricing is finalized.",
      "Sampling is useful when a buyer needs confidence before a larger order. A sample can confirm proportions, comfort, finish, and construction details that are difficult to judge from a drawing.",
      "After approval, the project moves into production planning. Progress updates, QC photos, and documentation preparation keep the buyer aligned until shipment handoff.",
    ],
  },
] as const;
