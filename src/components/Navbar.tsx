import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import mbgLogo from "@/assets/mbg-logo-new.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Brands", id: "brands" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={mbgLogo} alt="MBG Logo" className="h-12" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <div className="inline-flex items-center gap-1">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                About Us
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger
                  aria-label="About Us menu"
                  className="rounded-full p-1 text-foreground transition-colors hover:text-primary"
                >
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => scrollToSection("key-facts")}>
                      Key Facts
                    </DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="inline-flex items-center gap-1">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Services
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger
                  aria-label="Services menu"
                  className="rounded-full p-1 text-foreground transition-colors hover:text-primary"
                >
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => scrollToSection("services")}>
                    Our Services
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection("territories")}>
                    Territories
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => {}} className="ml-2">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block rounded-full px-3 py-2 text-left font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  About Us
                </button>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => scrollToSection("key-facts")}
                    className="block rounded-full px-3 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Key Facts
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block rounded-full px-3 py-2 text-left font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Services
                </button>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block rounded-full px-3 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Our Services
                  </button>
                  <button
                    onClick={() => scrollToSection("territories")}
                    className="block rounded-full px-3 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Territories
                  </button>
                </div>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block rounded-full px-3 py-2 text-left font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => {}} className="w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
