import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const industries = [
    "Insurance industry supply",
    "Retail market",
    "Private Taxi industry",
    "Funeral industry",
    "Corporate entities and the likes"
  ];

  const benefits = [
    "Savings on replacements for insurance companies",
    "Client retention",
    "Peace of mind on getting into a new car",
    "Shortfall saving"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Who Are We */}
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              WHO ARE <span className="text-primary">WE</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              My Brand Group, registered as MBG Africa Holdings, is a company specializing in the motor industry, 
              holding the position of a supplier and retailer, offering a large selection of the finest Brand new 
              and 1 year pre-owned vehicles.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="mt-4">
                  Read More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto border-primary/20">
                <DialogHeader className="space-y-4 pb-6">
                  <div className="mx-auto w-20 h-1 bg-primary rounded-full" />
                  <DialogTitle className="text-4xl font-bold text-center">
                    More About <span className="text-primary">Us</span>
                  </DialogTitle>
                  <p className="text-center text-muted-foreground text-lg">
                    South Africa's Leading Authority in Insurance Vehicle Replacement
                  </p>
                </DialogHeader>
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                    <div className="pl-6 space-y-6">
                      <div className="animate-fade-in">
                        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5" />
                          Our Mission
                        </h3>
                        <p className="text-base leading-relaxed text-foreground">
                          My Brand Group is South Africa's leading authority in Insurance Vehicle Replacement. Trusted by leading insurers, banks, and automotive manufacturers to protect customer loyalty at the most critical moment of the ownership journey. We deliver a seamless, premium replacement experience by securing a like-for-like vehicle, eliminating the need for refinancing or a new procurement process. The result: dramatically reduced friction, faster cycle times, and meaningful savings for both the institution and the customer.
                        </p>
                      </div>
                      
                      <div className="h-px bg-border" />
                      
                      <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5" />
                          Our Value Proposition
                        </h3>
                        <p className="text-base leading-relaxed text-foreground">
                          Our value lies in what we safeguard: relationships, trust, and brand affinity. Insurers and banks benefit from improved retention and a smoother claims process, while OEMs retain customers within their brand ecosystem through a controlled, high-touch replacement journey that reinforces confidence in the brand. We integrate effortlessly into existing operations, becoming an invisible but essential extension of our partners' value chains.
                        </p>
                      </div>
                      
                      <div className="h-px bg-border" />
                      
                      <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5" />
                          Why Choose Us
                        </h3>
                        <p className="text-base leading-relaxed text-foreground">
                          With deep industry relationships, a proven operational engine, and a customer-centric philosophy, My Brand Group delivers reliability at scale. We are the trusted partner behind the scenes—protecting your brand, strengthening your customer relationships, and elevating the experience when it matters most.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mt-8 pt-6 border-t-2 border-primary/20">
                    <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                      <p className="text-2xl font-bold text-primary tracking-wide">
                        This is My Brand Group
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your Trusted Partner in Vehicle Replacement Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Industry Supply */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-primary">Industry Supply Spans</h3>
              <ul className="space-y-4">
                {industries.map((industry, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{industry}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-primary">Vehicle Replacement Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
