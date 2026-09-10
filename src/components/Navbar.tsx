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

const SECTION_IDS = [
  "about",
  "key-facts",
  "services",
  "brands",
  "territories",
  "testimonials",
  "contact",
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Brands", id: "brands" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const linkClass = (isActive: boolean) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-foreground hover:bg-primary hover:text-primary-foreground"
    }`;

  const mobileLinkClass = (isActive: boolean) =>
    `block rounded-full px-3 py-2 text-left font-medium transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-foreground hover:bg-primary hover:text-primary-foreground"
    }`;

  const mobileSubClass = (isActive: boolean) =>
    `block rounded-full px-3 py-1.5 text-left text-sm transition-colors ${
      isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
    }`;

  const aboutActive = activeSection === "about" || activeSection === "key-facts";
  const servicesActive = activeSection === "services" || activeSection === "territories";


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
            <img
              src={mbgLogo}
              alt="MBG Logo"
              className={`h-12 transition-opacity duration-300 ${
                isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
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
                className={linkClass(aboutActive)}
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
                className={linkClass(servicesActive)}
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
                className={linkClass(activeSection === link.id)}
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
                  className={mobileLinkClass(aboutActive)}
                >
                  About Us
                </button>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => scrollToSection("key-facts")}
                    className={mobileSubClass(activeSection === "key-facts")}
                  >
                    Key Facts
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className={mobileLinkClass(servicesActive)}
                >
                  Services
                </button>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => scrollToSection("services")}
                    className={mobileSubClass(activeSection === "services")}
                  >
                    Our Services
                  </button>
                  <button
                    onClick={() => scrollToSection("territories")}
                    className={mobileSubClass(activeSection === "territories")}
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
