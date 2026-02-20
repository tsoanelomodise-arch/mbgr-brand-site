import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import portraitDuoYellow from "@/assets/portrait-duo-yellow.jpg";
import toyotaLogo from "@/assets/brands/toyota.png";
import volkswagenLogo from "@/assets/brands/volkswagen.png";
import suzukiLogo from "@/assets/brands/suzuki.png";
import fordLogo from "@/assets/brands/ford.png";
import hyundaiLogo from "@/assets/brands/hyundai.png";
import gmLogo from "@/assets/brands/gm.png";
import nissanLogo from "@/assets/brands/nissan.png";
import bmwLogo from "@/assets/brands/bmw.png";
import mercedesLogo from "@/assets/brands/mercedes.png";
import audiLogo from "@/assets/brands/audi.png";
import hondaLogo from "@/assets/brands/honda.png";
import mazdaLogo from "@/assets/brands/mazda.png";
import jaguarLogo from "@/assets/brands/jaguar.png";
import tataLogo from "@/assets/brands/tata.png";
import kiaLogo from "@/assets/brands/kia.png";
import jeepLogo from "@/assets/brands/jeep.png";
import renaultLogo from "@/assets/brands/renault.png";
import alfaromeoLogo from "@/assets/brands/alfaromeo.png";
import landroverLogo from "@/assets/brands/landrover.png";
import gwmLogo from "@/assets/brands/gwm.png";

export const Brands = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const brands = [
    { name: "Toyota", logo: toyotaLogo },
    { name: "Volkswagen", logo: volkswagenLogo },
    { name: "Suzuki", logo: suzukiLogo },
    { name: "Ford", logo: fordLogo },
    { name: "Hyundai", logo: hyundaiLogo },
    { name: "GM", logo: gmLogo },
    { name: "Nissan", logo: nissanLogo },
    { name: "BMW", logo: bmwLogo },
    { name: "Mercedes Benz", logo: mercedesLogo },
    { name: "Audi", logo: audiLogo },
    { name: "Honda", logo: hondaLogo },
    { name: "Mazda", logo: mazdaLogo },
    { name: "Jaguar", logo: jaguarLogo },
    { name: "Tata", logo: tataLogo },
    { name: "Kia", logo: kiaLogo },
    { name: "Jeep", logo: jeepLogo },
    { name: "Renault", logo: renaultLogo },
    { name: "Alfa Romeo", logo: alfaromeoLogo },
    { name: "Land Rover", logo: landroverLogo },
    { name: "GWM", logo: gwmLogo },
  ];

  return (
    <section id="brands" className="py-12 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${portraitDuoYellow})` }}
      />
      <div className="absolute inset-0 bg-background/85" />
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
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
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {brands.map((brand, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center p-4 md:p-6 rounded-lg bg-white hover:bg-secondary/50 transition-all hover:scale-105 border border-border hover:border-primary group h-24 md:h-32">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} vehicle replacement brand`}
                        className="w-full h-auto max-w-[100px] md:max-w-[120px] max-h-[60px] md:max-h-[80px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </Card>
        </div>
      </div>
    </section>
  );
};
