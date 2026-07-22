import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-steel/60"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/TechSphere_Logo_WhiteBG.jpg"
              alt="TechSphere Solutions Logo"
              className="h-9 w-9 rounded-full ring-2 ring-primary/40 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="flex items-baseline gap-1.5">
              <span className="text-xl font-heading font-semibold text-text tracking-tight">TechSphere</span>
              <span className="text-xs font-mono text-accent">/solutions</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-primary to-accent text-background font-heading font-semibold rounded-full px-6 hover:opacity-90 transition-opacity" asChild>
              <a href="/#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-full text-text hover:bg-surface transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-surface border border-steel/60 rounded-2xl shadow-2xl mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-muted hover:text-text hover:bg-background/60 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-2 pt-2">
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-background font-heading font-semibold rounded-full" asChild>
                  <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
