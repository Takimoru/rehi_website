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
    slug: "",
    categorySlug: "Raw Materials",
    categoryLabel: "Raw Materials",
    name: "Cirebon Dining Chair",
    shortDescription: "Natural rattan poles, cores, peels, and other export-grade raw materials sourced from trusted suppliers across Indonesia",
    moq: "48 pcs",
    finishes: ["Natural", "Honey", "Walnut", "Black wash"],
  },
  {
    slug: "woven-bistro-set",
    categorySlug: "Woven Webbing",
    categoryLabel: "Woven Webbing",
    name: "Woven Bistro Set",
    shortDescription: "Handwoven natural rattan webbing available in various patterns and sizes for furniture, cabinetry, and interior applications.",
    moq: "24 sets",
    finishes: ["Natural clear coat", "White wash", "Custom stain"],
  },
  {
    slug: "mandalika-lounge-chair",
    categorySlug: "Woven Panels",
    categoryLabel: "Woven Panels",
    name: "Mandalika Lounge Chair",
    shortDescription: "Custom-crafted woven rattan panels designed for furniture, wall features, partitions, doors, and architectural interiors.",
    moq: "36 pcs",
    finishes: ["Natural", "Dark brown", "Matte black"],
  },
  {
    slug: "resort-daybed",
    categorySlug: "Furniture",
    categoryLabel: "Furniture",
    name: "Resort Daybed",
    shortDescription: "Handcrafted rattan furniture for residential, hospitality, and commercial projects, combining timeless design with export-quality craftsmanship.",
    moq: "12 pcs",
    finishes: ["Natural", "Outdoor sealant", "Custom cushion fabric"],
  },
  {
    slug: "covered-terrace-armchair",
    categorySlug: "Lighting",
    categoryLabel: "Lighting",
    name: "Covered Terrace Armchair",
    shortDescription: "Artisan-made rattan pendant lamps, floor lamps, table lamps, and custom lighting solutions that bring warmth to any space.",
    moq: "40 pcs",
    finishes: ["Taupe weave", "Charcoal weave", "Sand weave"],
  },
  {
    slug: "balcony-nesting-table",
    categorySlug: "Home Decor",
    categoryLabel: "Home Decor",
    name: "Balcony Nesting Table",
    shortDescription: "Beautiful handcrafted décor including baskets, mirrors, trays, wall décor, and accessories made from natural Indonesian rattan.",
    moq: "30 sets",
    finishes: ["Natural", "Outdoor lacquer", "Custom stain"],
  },
  {
    slug: "pendant-lantern-series",
    categorySlug: "Rattan Bags",
    categoryLabel: "Rattan Bags",
    name: "Pendant Lantern Series",
    shortDescription: "Fashionable handcrafted rattan bags and accessories, perfect for retail collections, resort brands, and private label opportunities.",
    moq: "60 pcs",
    finishes: ["Natural", "Bleached", "Black wash"],
  },
  {
    slug: "woven-mirror-range",
    categorySlug: "Rattan Dolls Furniture",
    categoryLabel: "Rattan Dolls Furniture",
    name: "Woven Mirror Range",
    shortDescription: "Miniature handcrafted rattan furniture designed for dollhouses, children's collections, gifts, and specialty retail markets.",
    moq: "50 pcs",
    finishes: ["Natural", "Honey", "White wash"],
  },
  {
    slug: "oem-hospitality-chair",
    categorySlug: "Rattan Dolls Furniture",
    categoryLabel: "Rattan Dolls Furniture",
    name: "OEM Hospitality Chair",
    shortDescription: "Miniature handcrafted rattan furniture designed for dollhouses, children's collections, gifts, and specialty retail markets.",
    moq: "Project based",
    finishes: ["Buyer specification", "Sample match", "Custom upholstery"],
  },
];
