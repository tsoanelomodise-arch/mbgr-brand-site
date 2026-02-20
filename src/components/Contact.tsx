import { Card } from "@/components/ui/card";
import { MapPin, Phone, FileText, Mail, Globe, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import portraitSunglassesRed from "@/assets/portrait-sunglasses-red.jpg";

export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "110 Conrad Drive, Craighall Park, JHB"
    },
    {
      icon: Phone,
      label: "Telephone",
      value: "+27 (0) 11 896 0455",
      link: "tel:+27118960455"
    },
    {
      icon: FileText,
      label: "Fax",
      value: "+27 (0) 86 527 0342"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@mybrandgroup.co.za",
      link: "mailto:info@mybrandgroup.co.za"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.mybrandgroup.com",
      link: "http://www.mybrandgroup.com"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${portraitSunglassesRed})` }}
      />
      <div className="absolute inset-0 bg-background/85" />
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience exceptional service? Contact us today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8 bg-card border-border h-fit">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-foreground font-medium text-sm">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a 
                      key={index}
                      href={info.link}
                      className="block hover:scale-[1.02] transition-transform"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <ContactForm />
            </Card>
          </div>

          {/* Google Map */}
          <Card className="p-4 bg-card border-border overflow-hidden mt-8">
            <div className="w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBok5Lep0qeiye47t2V0jB0ilOfFMDQODI&q=110+Conrad+Drive+Craighall+Park+Johannesburg&zoom=15&maptype=roadmap"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "hue-rotate(20deg) saturate(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Brand Group Location"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
