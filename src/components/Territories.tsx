import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card } from "./ui/card";
import { MapPin } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";

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
    <section id="territories" className="py-16 md:py-24 px-4 bg-background">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            TERRITORIES WE COVER
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            Our extensive network spans across Southern Africa, providing comprehensive automotive solutions
            across South Africa, Namibia, and Botswana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {territories.map((territory, index) => (
            <Card
              key={territory.name}
              className="p-7 bg-card rounded-2xl shadow-widget hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/70"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-2xl"
                  style={{ backgroundColor: territory.color }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 text-foreground">{territory.name}</h3>
                  <p className="text-muted-foreground">
                    {territory.provinces?.[0] || territory.coverage}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden rounded-3xl border-border/70 shadow-widget">
          <div className="relative w-full h-[350px] md:h-[600px]">
            <InteractiveMap />
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

      </div>
    </section>
  );
};
