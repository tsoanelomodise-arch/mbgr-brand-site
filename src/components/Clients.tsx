import { Card } from "@/components/ui/card";

export const Clients = () => {
  const clients = [
    "Discovery Insure", "Hollard", "OUTsurance", "Momentum Short-term Insurance",
    "MUTUAL & FEDERAL", "MiWay", "Western", "RETHINK INSURANCE",
    "TOYOTA", "Bidvest", "EQSTRA FLEET MANAGEMENT", "UBER",
    "Naked", "Ekurhuleni Metropolitan Municipality", "DIGICALL SOLUTIONS",
    "Telesure Investment Holdings", "Investec", "NFDA (National Funeral Directors Association)"
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              OUR CLIENTS & <span className="text-primary">PARTNERS</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by industry leaders across multiple sectors
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-primary/10 transition-colors border border-border hover:border-primary"
                >
                  <span className="text-foreground font-medium">{client}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
