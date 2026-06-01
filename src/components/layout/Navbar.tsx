import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "../../assets/REHI-02.png";

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'Portofolio', href: '/portfolio' },
    { label: 'Export-service', href: '/export-service' },
    { label: 'Custom-Project', href: '/custom-project' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const navLinkClass = "text-sm font-medium text-gray-600 hover:text-gray-900";
const activeNavLinkClass = "text-sm font-medium text-gray-900";
const routeHrefs = ["/", "/about"] as const;

function isRouteHref(href: string): href is (typeof routeHrefs)[number] {
    return routeHrefs.includes(href as (typeof routeHrefs)[number]);
}

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/" className="flex items-center gap-2">
                    <img 
                    src={logo}
                    alt="REHI Logo" 
                    className="h-14 object-contain" />
                </Link>

                <div className="hidden items-center space-x-4 md:flex">
                    {navItems.map((item) => (
                        isRouteHref(item.href) ? (
                            <Link
                                key={item.href}
                                to={item.href}
                                activeOptions={{ exact: item.href === "/" }}
                                activeProps={{ className: activeNavLinkClass }}
                                className={navLinkClass}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <a
                                key={item.href}
                                href={item.href}
                                className={navLinkClass}
                            >
                                {item.label}
                            </a>
                        )
                    ))}
                </div>

                <div className="hidden md:block">
                    <Button asChild>
                        <a href="/catalog">Download Catalog</a>
                    </Button>
                </div>

                <Button className="md:hidden" aria-label="Open Menu">
                         ☰
                </Button>
                
            </nav>
        </header>
    );
}
