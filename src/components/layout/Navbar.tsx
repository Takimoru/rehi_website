import { Link } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/config/site";
import logo from "@/assets/REHI-02.png";

const navLinkClass =
  "rounded-md px-2 py-2 text-sm font-semibold text-muted-foreground outline-none transition hover:bg-secondary hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50";
const activeNavLinkClass =
  "rounded-md bg-secondary px-2 py-2 text-sm font-semibold text-primary outline-none transition focus-visible:ring-3 focus-visible:ring-ring/50";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="REHI logo" className="h-12 w-auto object-contain" />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-primary sm:inline">
            REHI
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeOptions={{ exact: item.href === "/" }}
              activeProps={{ className: activeNavLinkClass }}
              className={navLinkClass}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild>
            <Link to="/catalog">
              <Download aria-hidden="true" />
              Catalog
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      {isOpen ? (
        <div className="border-t border-border bg-background px-4 pb-4 shadow-sm lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                activeOptions={{ exact: item.href === "/" }}
                activeProps={{ className: activeNavLinkClass }}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <Link to="/catalog" onClick={() => setIsOpen(false)}>
                <Download aria-hidden="true" />
                Catalog
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
