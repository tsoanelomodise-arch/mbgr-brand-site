import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                MY BRAND <span className="text-primary">GROUP</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Specializing in the motor industry with exceptional customer service throughout the replacement journey.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
                <a href="#brands" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Brands
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <p className="text-sm text-muted-foreground mb-4">
                110 Conrad Drive, Craighall Park, JHB<br />
                +27 (0) 11 896 0455<br />
                info@mybrandgroup.co.za
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} My Brand Group. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              A level 2 B-BBEE contributor entity with 125% procurement recognition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
