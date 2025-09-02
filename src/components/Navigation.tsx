import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // On mount, check system preference or localStorage
    const darkPref = localStorage.getItem("theme");
    if (darkPref === "dark" || (!darkPref && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/refund", label: "Refund" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <img
              src="/TechSphere_Logo_WhiteBG.jpg"
              alt="TechSphere Solutions Logo"
              className="h-10 w-10 rounded-full shadow-md transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-2xl font-bold text-primary dark:text-primary">TechSphere</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/80 text-white dark:bg-primary dark:hover:bg-primary/80">
              Get Started
            </Button>
            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-950 rounded-lg shadow-lg mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-2 bg-primary hover:bg-primary/80 text-white dark:bg-primary dark:hover:bg-primary/80">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
