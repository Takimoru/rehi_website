import { productCategories } from "./company";

export type ProductCategorySlug = (typeof productCategories)[number]["slug"];

export type Product = {
  slug: string;
  categorySlug: ProductCategorySlug;
  categoryLabel: string;
  name: string;
  shortDescription: string;
  moq: string;
  finishes: string[];
};

export const products: Product[] = [
  {
    slug: "cirebon-dining-chair",
    categorySlug: "dining",
    categoryLabel: "Dining",
    name: "Cirebon Dining Chair",
    shortDescription: "Stackable rattan dining chair with reinforced frame for restaurant and resort programs.",
    moq: "48 pcs",
    finishes: ["Natural", "Honey", "Walnut", "Black wash"],
  },
  {
    slug: "woven-bistro-set",
    categorySlug: "dining",
    categoryLabel: "Dining",
    name: "Woven Bistro Set",
    shortDescription: "Compact table and chair set for cafes, poolside dining, and boutique hospitality use.",
    moq: "24 sets",
    finishes: ["Natural clear coat", "White wash", "Custom stain"],
  },
  {
    slug: "mandalika-lounge-chair",
    categorySlug: "lounge",
    categoryLabel: "Lounge",
    name: "Mandalika Lounge Chair",
    shortDescription: "Low lounge chair with open cane detail and cushion-ready proportions.",
    moq: "36 pcs",
    finishes: ["Natural", "Dark brown", "Matte black"],
  },
  {
    slug: "resort-daybed",
    categorySlug: "lounge",
    categoryLabel: "Lounge",
    name: "Resort Daybed",
    shortDescription: "Statement daybed for villa suites, pool cabanas, and relaxed hospitality interiors.",
    moq: "12 pcs",
    finishes: ["Natural", "Outdoor sealant", "Custom cushion fabric"],
  },
  {
    slug: "covered-terrace-armchair",
    categorySlug: "outdoor",
    categoryLabel: "Outdoor",
    name: "Covered Terrace Armchair",
    shortDescription: "Synthetic rattan armchair for covered outdoor spaces with durable powder-coated support.",
    moq: "40 pcs",
    finishes: ["Taupe weave", "Charcoal weave", "Sand weave"],
  },
  {
    slug: "balcony-nesting-table",
    categorySlug: "outdoor",
    categoryLabel: "Outdoor",
    name: "Balcony Nesting Table",
    shortDescription: "Space-efficient rattan table set for apartments, resorts, and outdoor lounges.",
    moq: "30 sets",
    finishes: ["Natural", "Outdoor lacquer", "Custom stain"],
  },
  {
    slug: "pendant-lantern-series",
    categorySlug: "decor",
    categoryLabel: "Decor",
    name: "Pendant Lantern Series",
    shortDescription: "Handwoven rattan lighting forms for hospitality corridors, dining rooms, and retail programs.",
    moq: "60 pcs",
    finishes: ["Natural", "Bleached", "Black wash"],
  },
  {
    slug: "woven-mirror-range",
    categorySlug: "decor",
    categoryLabel: "Decor",
    name: "Woven Mirror Range",
    shortDescription: "Wall mirrors with woven frames for interior projects and lifestyle retail assortments.",
    moq: "50 pcs",
    finishes: ["Natural", "Honey", "White wash"],
  },
  {
    slug: "oem-hospitality-chair",
    categorySlug: "custom",
    categoryLabel: "Custom",
    name: "OEM Hospitality Chair",
    shortDescription: "Buyer-specified chair program developed from drawings, sample references, or project mood boards.",
    moq: "Project based",
    finishes: ["Buyer specification", "Sample match", "Custom upholstery"],
  },
];
