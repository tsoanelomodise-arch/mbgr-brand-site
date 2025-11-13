import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import bannerBlackMale from "@/assets/banner-black-male.png";
import bannerWhiteMale from "@/assets/banner-white-male.png";
import bannerLady from "@/assets/banner-lady.png";

const heroImages = [bannerBlackMale, bannerWhiteMale, bannerLady];

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Animated Background Images with Parallax */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center 60%",
              transform: `translateY(${parallaxOffset}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
          </div>
        ))}
      </div>
      
      {/* Content with enhanced parallax */}
      <div 
        className="container relative z-10 px-4 py-20"
        style={{
          transform: `translateY(${parallaxOffset * -0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="h-1.5 w-24 bg-primary mx-auto mb-8 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-2xl leading-tight">
            MY BRAND <span className="text-primary animate-pulse">GROUP</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-foreground max-w-3xl mx-auto font-light drop-shadow-lg leading-relaxed tracking-wide bg-background/70 backdrop-blur-md rounded-lg p-6 md:p-8">
            Specializing in the motor industry, offering Brand new and pre-owned vehicles 
            with exceptional customer service throughout the replacement journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
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
