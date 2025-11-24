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
              src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d7334896.096659863!2d22.5!3d-24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!3m2!1d-26.2041028!2d28.0473051!4m5!1s0x1c34f14cfc72797b%3A0x304cf2f83d2fd90e!2sCape%20Town%2C%20South%20Africa!3m2!1d-33.9248685!2d18.424055299999998!4m5!1s0x1e956318ee3c1175%3A0x3e88c8b6bf1aa23f!2sDurban%2C%20South%20Africa!3m2!1d-29.8586804!2d31.0218404!4m5!1s0x1c0b07b5fc41754f%3A0x41c0b47dc7050f8!2sWindhoek%2C%20Namibia!3m2!1d-22.5608807!2d17.0657549!4m5!1s0x1e9fd05b1e5b8101%3A0x26509f85f56f45ec!2sGaborone%2C%20Botswana!3m2!1d-24.6282411!2d25.9231846!5e0!3m2!1sen!2s!4v1234567890"
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
