import {
  ClipboardCheck,
  Factory,
  FileText,
  Globe2,
  Layers,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const companyStats = [
  { value: "12+", label: "export markets supported" },
  { value: "35+", label: "product families" },
  { value: "20 ft / 40 ft", label: "container planning" },
  { value: "Cirebon", label: "rattan craft base" },
] as const;

export const productCategories = [
  {
    slug: "dining",
    label: "Dining",
    description: "Dining chairs, benches, and tables for restaurants, villas, and wholesale ranges.",
  },
  {
    slug: "lounge",
    label: "Lounge",
    description: "Accent chairs, daybeds, and living pieces with handwoven rattan detail.",
  },
  {
    slug: "outdoor",
    label: "Outdoor",
    description: "Covered-outdoor furniture using weather-aware construction and finishes.",
  },
  {
    slug: "decor",
    label: "Decor",
    description: "Lighting, baskets, mirrors, and interior accents for retail programs.",
  },
  {
    slug: "custom",
    label: "Custom",
    description: "OEM and project-specific pieces developed from drawings, samples, or mood boards.",
  },
] as const;

export const exportCapabilities = [
  {
    title: "Production Coordination",
    description: "Sample review, production planning, batch grouping, and progress updates for repeatable buyer programs.",
    icon: Factory,
  },
  {
    title: "Quality Control",
    description: "Material inspection, weaving consistency checks, finishing review, and pre-shipment photo reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Export Packing",
    description: "Carton, foam, and protective packing guidance for mixed furniture and decor container loads.",
    icon: PackageCheck,
  },
  {
    title: "Documentation",
    description: "Commercial invoice, packing list, HS code support, COO coordination, and buyer-side document alignment.",
    icon: FileText,
  },
] as const;

export const exportProcess = [
  "Buyer shares target products, quantities, finish direction, and destination market.",
  "REHI confirms feasibility, MOQ, estimated lead time, and sample or quotation needs.",
  "Approved specifications move into production planning with milestone updates.",
  "Quality checks, packing, documentation, and shipment coordination are prepared before handoff.",
] as const;

export const customCapabilities = [
  { title: "Hospitality Furniture", description: "Hotel, resort, villa, restaurant, and cafe programs built around repeatable specifications." },
  { title: "Wholesale Collections", description: "Container-ready SKUs with consistent dimensions, materials, and finishes." },
  { title: "Design Adaptation", description: "Product development from sketches, reference photos, drawings, or existing samples." },
  { title: "Mixed Materials", description: "Rattan combined with wood, metal, upholstery, rope, and natural fibers." },
] as const;

export const customMaterials = [
  "Natural rattan",
  "Synthetic rattan",
  "Teak and mahogany frames",
  "Powder-coated metal",
  "Outdoor rope",
  "Upholstery-grade fabrics",
] as const;

export const customProcess = [
  { title: "Brief", description: "Share use case, drawings, references, quantity range, and target delivery market." },
  { title: "Specification", description: "Confirm dimensions, materials, finish direction, packing needs, and MOQ." },
  { title: "Sample", description: "Develop sample or prototype when the design needs physical confirmation." },
  { title: "Production", description: "Move approved details into batch production with progress and QC updates." },
] as const;

export const companyValues = [
  {
    title: "Reliable communication",
    description: "Clear timelines, honest feasibility, and practical updates for international purchasing teams.",
  },
  {
    title: "Export discipline",
    description: "Furniture is planned around packing, documentation, container loading, and destination requirements.",
  },
  {
    title: "Craft with control",
    description: "Indonesian handwork supported by repeatable specifications, sample discipline, and QC checkpoints.",
  },
  {
    title: "Long-term supply",
    description: "REHI favors durable buyer relationships over one-off transactional work.",
  },
] as const;

export const companyMilestones = [
  { year: "2018", title: "Supplier network formed", description: "REHI begins coordinating rattan production around Cirebon craft capacity." },
  { year: "2020", title: "Export programs expanded", description: "Hospitality and wholesale projects are formalized with clearer QC and packing standards." },
  { year: "2023", title: "Custom project workflow", description: "Sample development and buyer specification review become a dedicated sales path." },
  { year: "2026", title: "Digital catalog launch", description: "Static marketing website launches as the first public buyer evaluation hub." },
] as const;

export const serviceHighlights = [
  { title: "Inquiry to shipment", description: "A guided handoff from brief, quotation, sample, production, QC, packing, and documentation.", icon: Truck },
  { title: "Buyer-ready proof", description: "Products, project references, process clarity, and direct sales access in one shareable site.", icon: Globe2 },
  { title: "Structured product data", description: "Categories, MOQ signals, finish options, and inquiry context are ready for sales follow-up.", icon: Layers },
  { title: "Traceable decisions", description: "Every form and product CTA sends encoded buyer context into WhatsApp.", icon: ClipboardCheck },
] as const;
