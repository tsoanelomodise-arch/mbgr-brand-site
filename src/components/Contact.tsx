import { Card } from "@/components/ui/card";
import { MapPin, Phone, FileText, Mail, Globe } from "lucide-react";

export const Contact = () => {
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
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
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

          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
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
          </Card>
        </div>
      </div>
    </section>
  );
};
