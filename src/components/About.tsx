import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const contentSections = [
    {
      title: "Our Mission",
      text: "My Brand Group is South Africa's leading authority in Insurance Vehicle Replacement. Trusted by leading insurers, banks, and automotive manufacturers to protect customer loyalty at the most critical moment of the ownership journey. We deliver a seamless, premium replacement experience by securing a like-for-like vehicle, eliminating the need for refinancing or a new procurement process."
    },
    {
      title: "Our Value Proposition",
      text: "Our value lies in what we safeguard: relationships, trust, and brand affinity. Insurers and banks benefit from improved retention and a smoother claims process, while OEMs retain customers within their brand ecosystem through a controlled, high-touch replacement journey that reinforces confidence in the brand."
    },
    {
      title: "Why Choose Us",
      text: "With deep industry relationships, a proven operational engine, and a customer-centric philosophy, My Brand Group delivers reliability at scale. We are the trusted partner behind the scenes—protecting your brand, strengthening your customer relationships, and elevating the experience when it matters most."
    }
  ];

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
          {/* Heading */}
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              My Brand Group, registered as MBG Africa Holdings, is a company specializing in the motor industry,
              holding the position of a supplier and retailer, offering a large selection of the finest Brand new
              and 1 year pre-owned vehicles.
            </p>
          </div>

          {/* Three content cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contentSections.map((section, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                </div>
                <p className="text-foreground leading-relaxed">{section.text}</p>
              </Card>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center space-y-2 pt-4 border-t-2 border-primary/20">
            <p className="text-2xl font-bold text-primary tracking-wide">
              This is My Brand Group
            </p>
            <p className="text-sm text-muted-foreground">
              Your Trusted Partner in Vehicle Replacement Excellence
            </p>
          </div>

          {/* Industry Supply & Benefits */}
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
