import { Card } from "@/components/ui/card";

export const Brands = () => {
  const brands = [
    "Toyota", "Volkswagen", "Suzuki", "Ford", "Hyundai", "GM",
    "Nissan", "BMW", "Mercedes Benz", "Audi", "Honda", "Mazda",
    "Jaguar", "Tata", "Kia", "Jeep", "Renault", "Alfa Romeo",
    "Land Rover", "GWM"
  ];

  return (
    <section id="brands" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              PRODUCT <span className="text-primary">BRANDS</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive selection of the world's leading automotive brands
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors border border-border hover:border-primary"
                >
                  <span className="text-foreground font-medium text-center">{brand}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
