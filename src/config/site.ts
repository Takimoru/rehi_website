export const siteConfig = {
  brand: "REHI",
  companyName: "Rattan Export House Indonesia",
  tagline: "Connecting Global Buyers With Indonesia’s Finest Rattan Products",
  whatsappNumber: "6281234567890",
  phoneDisplay: "+62 812 3456 7890",
  email: "sales@rehi.co.id",
  location: "Cirebon, West Java, Indonesia",
  address: "Cirebon rattan production network, West Java, Indonesia",
  catalogLabel: "REHI export catalog",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Export Services", href: "/export-services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
