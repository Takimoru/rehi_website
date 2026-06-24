export type PortfolioItem = {
  id: string;
  name: string;
  location: string;
  projectType: string;
  summary: string;
  scope: string[];
  exportRelevance: string;
  result: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "bali-villa-dining",
    name: "Bali Villa Dining Program",
    location: "Bali, Indonesia",
    projectType: "Hospitality villas",
    summary: "A coordinated dining chair and lighting package for a multi-villa hospitality development.",
    scope: ["Dining chairs", "Pendant lanterns", "Finish matching", "Protective packing plan"],
    exportRelevance: "The project required repeated dimensions, consistent stain tone, and carton labeling for phased installation.",
    result: "A unified collection that helped the procurement team approve repeat orders with fewer sample changes.",
  },
  {
    id: "middle-east-resort-lounge",
    name: "Middle East Resort Lounge Supply",
    location: "GCC destination market",
    projectType: "Resort lounge furniture",
    summary: "A covered-outdoor lounge package adapted for warm climate hospitality use.",
    scope: ["Lounge chairs", "Daybeds", "Synthetic weave options", "Container loading guidance"],
    exportRelevance: "REHI aligned finishes, cushion-ready dimensions, and documentation needs before shipment planning.",
    result: "The buyer received a clearer approval path for a mixed container of lounge furniture and decor accents.",
  },
  {
    id: "european-retail-decor",
    name: "European Retail Decor Range",
    location: "Northern Europe",
    projectType: "Wholesale decor program",
    summary: "A repeatable decor assortment built around mirrors, baskets, and woven lighting families.",
    scope: ["Product family grouping", "MOQ planning", "Retail-friendly carton notes", "Photo QC references"],
    exportRelevance: "The assortment was planned around wholesale repeatability and mixed-SKU container efficiency.",
    result: "The importer could present a cohesive seasonal range without developing every SKU from zero.",
  },
] as const;
