import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import hero1 from "@/assets/AdobeStock_1591119540_Optimised.jpg.asset.json";
import hero2 from "@/assets/AdobeStock_1942224915_Optimised.jpg.asset.json";
import hero3 from "@/assets/AdobeStock_1771150921_Optimized.jpg.asset.json";
import hero4 from "@/assets/AdobeStock_1628191511_Optimised.jpg.asset.json";
import hero5 from "@/assets/AdobeStock_1618442063_Optimised.jpg.asset.json";
import hero6 from "@/assets/AdobeStock_1579748279.jpeg.asset.json";
import hero7 from "@/assets/AdobeStock_1579748297_Optimised.jpg.asset.json";
import hero8 from "@/assets/AdobeStock_1618441962_Optimised.jpg.asset.json";
import hero9 from "@/assets/AdobeStock_1628191496_Optimised.jpg.asset.json";
import mbgLogo from "@/assets/mbg-logo-new.png";

const heroImages = [
  hero1.url,
  hero2.url,
  hero3.url,
  hero4.url,
  hero5.url,
  hero6.url,
  hero7.url,
  hero8.url,
  hero9.url,
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isShuffling, setIsShuffling] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fast shuffle on load, then stop on a random slide
  useEffect(() => {
    const steps = heroImages.length * 2 + Math.floor(Math.random() * heroImages.length);
    let count = 0;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      count += 1;
      if (count >= steps) {
        clearInterval(interval);
        setIsShuffling(false);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isShuffling) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isShuffling]);

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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Images with Parallax */}
      <div className="absolute inset-x-0 -top-24 -bottom-24 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateY(${parallaxOffset}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content with enhanced parallax */}
      <div 
        className="container relative z-10 px-4 py-8 md:py-12"
        style={{
          transform: `translateY(${parallaxOffset * -0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto text-left space-y-4 md:space-y-6 animate-fade-in -mt-8 md:-mt-16">
          <div className="mb-4 md:mb-6">
            <img 
              src={mbgLogo} 
              alt="MY BRAND GROUP - South Africa's leading vehicle replacement specialists" 
              className="h-20 sm:h-28 md:h-48 drop-shadow-2xl"
              loading="eager"
            />
          </div>
          
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold tracking-tight leading-[1.05] drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)]">
            Vehicle<br />
            Replacement<br />
            Specialists
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start items-stretch sm:items-center pt-4 md:pt-6">
            <Button 
              size="lg" 
              className="group text-base"
              onClick={() => scrollToSection("about")}
            >
              Discover More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base bg-white/90 backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
