import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroCityscape1 from "@/assets/hero-cityscape-1.png";
import heroCarNight from "@/assets/hero-car-night.png";
import heroCarLights from "@/assets/hero-car-lights.png";
import heroCityscape2 from "@/assets/hero-cityscape-2.png";
import heroUrbanDrive from "@/assets/hero-urban-drive.png";
import mbgLogo from "@/assets/mbg-logo-new.png";

const heroImages = [heroCityscape1, heroCarNight, heroCarLights, heroCityscape2, heroUrbanDrive];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Animated Background Images with Parallax */}
      <div className="absolute inset-0" style={{ transform: 'translateY(30px)' }}>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateY(${parallaxOffset}px) ${index === 0 ? 'translateY(50px)' : index === 1 ? 'translateX(35px) translateY(50px)' : index === 2 ? 'translateY(15px)' : ''}`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/90" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-primary w-8"
                : "bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content with enhanced parallax */}
      <div 
        className="container relative z-10 px-4 py-12"
        style={{
          transform: `translateY(${parallaxOffset * -0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto text-left space-y-6 animate-fade-in -mt-16">
          <div className="mb-6">
            <img 
              src={mbgLogo} 
              alt="MY BRAND GROUP" 
              className="h-32 md:h-48 drop-shadow-2xl"
            />
          </div>
          
          <p className="text-5xl md:text-7xl text-white font-bold drop-shadow-[0_0_30px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_8px_rgba(255,255,255,0.5)] tracking-wide">
            Vehicle<br />
            Replacement<br />
            Specialists
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center pt-6">
            <Button 
              size="lg" 
              className="group"
              onClick={() => scrollToSection("about")}
            >
              Discover More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
