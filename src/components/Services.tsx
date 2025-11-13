import { Card } from "@/components/ui/card";
import { CreditCard, Car, Truck } from "lucide-react";
import portraitAfroColorful from "@/assets/portrait-afro-colorful.jpg";

export const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Vehicle Asset Finance",
      description: "Vehicle Finance facilities are available with qualified F & I Managers to help you secure the perfect financing solution for your needs."
    },
    {
      icon: Car,
      title: "Replacement Courtesy Car",
      description: "Upon authorization of replacement to MBG, a courtesy car is allocated to the client until replacement is complete, ensuring uninterrupted mobility."
    },
    {
      icon: Truck,
      title: "Nation Wide Deliveries",
      description: "Deliveries anywhere in the country with the vehicle(s) comprehensively insured till its designated destination. We provide vehicle inspection and transfer requirements using the best drivers and the latest technology."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${portraitAfroColorful})` }}
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              OUR <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exceptional customer service throughout the replacement journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 bg-card border-border hover:border-primary transition-all hover:-translate-y-2 group"
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
