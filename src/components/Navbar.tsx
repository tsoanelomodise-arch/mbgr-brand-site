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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/60 backdrop-blur-sm"
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
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-1">
                About
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => scrollToSection("about")}>
                  About Us
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("key-facts")}>
                  Key Facts
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-1">
                Services
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
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => {}} className="ml-4">
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
                <div className="font-medium text-foreground">About</div>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-foreground hover:text-primary transition-colors text-left block"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("key-facts")}
                    className="text-foreground hover:text-primary transition-colors text-left block"
                  >
                    Key Facts
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-foreground">Services</div>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-foreground hover:text-primary transition-colors text-left block"
                  >
                    Our Services
                  </button>
                  <button
                    onClick={() => scrollToSection("territories")}
                    className="text-foreground hover:text-primary transition-colors text-left block"
                  >
                    Territories
                  </button>
                </div>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left"
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
