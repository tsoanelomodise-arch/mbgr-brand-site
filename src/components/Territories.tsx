import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card } from "./ui/card";
import { MapPin } from "lucide-react";

export const Territories = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const territories = [
    {
      name: "South Africa",
      color: "hsl(41, 54%, 61%)", // Primary gold
      provinces: ["All 9 provinces covered"],
    },
    {
      name: "Namibia",
      color: "hsl(41, 54%, 71%)", // Lighter variant
      coverage: "Nationwide coverage",
    },
    {
      name: "Botswana",
      color: "hsl(41, 54%, 51%)", // Darker variant
      coverage: "Nationwide coverage",
    },
  ];

  return (
    <section id="territories" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            TERRITORIES WE COVER
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our extensive network spans across Southern Africa, providing comprehensive automotive solutions
            across South Africa, Namibia, and Botswana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {territories.map((territory, index) => (
            <Card
              key={territory.name}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2"
              style={{
                borderColor: territory.color,
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: territory.color }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{territory.name}</h3>
                  <p className="text-muted-foreground">
                    {territory.provinces?.[0] || territory.coverage}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden border-primary/20 shadow-lg">
          <div className="relative w-full" style={{ height: "600px" }}>
            <iframe
              title="Territories Coverage Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=-24.5,25.5&zoom=5&maptype=terrain"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
          </div>
          
          <div className="p-6 bg-card">
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {territories.map((territory) => (
                <div key={territory.name} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: territory.color }}
                  ></div>
                  <span className="text-sm font-medium text-foreground">{territory.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Contact us to learn more about our services in your region
          </p>
        </div>
      </div>
    </section>
  );
};
