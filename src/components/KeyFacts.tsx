import { Card } from "@/components/ui/card";
import { Building2, Car, Handshake, Heart, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const KeyFacts = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const facts = [
    {
      icon: Building2,
      title: "Strategic Partnership",
      description: "Partially owned by Digicall Solutions (at 26%)"
    },
    {
      icon: Car,
      title: "10,000+ Vehicles",
      description: "Offering a choice of over 10,000 automobiles"
    },
    {
      icon: Heart,
      title: "Core Values",
      description: "Driven by compassion, integrity, and diligent hard work"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Going the extra mile with innovation at our core"
    },
    {
      icon: Handshake,
      title: "Agreements with current insurers",
      description: "Established agreements in place with leading insurers"
    }
  ];

  return (
    <section id="key-facts" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              KEY <span className="text-primary">FACTS</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              What makes My Brand Group stand out in the automotive industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 bg-card rounded-2xl border-border/70 shadow-widget transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">{fact.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{fact.description}</p>
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
