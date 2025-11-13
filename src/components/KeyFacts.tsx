import { Card } from "@/components/ui/card";
import { Building2, Globe2, Award, Car, Heart, Zap } from "lucide-react";
import portraitSunglassesRed from "@/assets/portrait-sunglasses-red.jpg";
import portraitAfroColorful from "@/assets/portrait-afro-colorful.jpg";

export const KeyFacts = () => {
  const facts = [
    {
      icon: Globe2,
      title: "Global Agreements",
      description: "In agreement with listed companies operating in over four continents"
    },
    {
      icon: Building2,
      title: "Strategic Partnership",
      description: "Partially owned by Digicall Solutions (at 26%)"
    },
    {
      icon: Award,
      title: "B-BBEE Level 2",
      description: "Level 2 B-BBEE contributor entity with 125% procurement recognition"
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
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div 
        className="absolute top-20 left-0 w-48 h-48 rounded-full opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${portraitSunglassesRed})` }}
      />
      <div 
        className="absolute bottom-20 right-0 w-48 h-48 rounded-full opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${portraitAfroColorful})` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              KEY <span className="text-primary">FACTS</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes My Brand Group stand out in the automotive industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-border hover:border-primary transition-all hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{fact.title}</h3>
                    <p className="text-muted-foreground">{fact.description}</p>
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
