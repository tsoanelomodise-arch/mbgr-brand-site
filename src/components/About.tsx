import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const contentSections = [
    {
      title: "Our Mission",
      text: "My Brand Group is South Africa's leading authority in Insurance Vehicle Replacement. Trusted by leading insurers, banks, and automotive manufacturers to protect customer loyalty at the most critical moment of the ownership journey. We deliver a seamless, premium replacement experience."
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

  const industryCategories = [
    {
      heading: "Replacement Types",
      items: [
        "Passenger Vehicles (Sedan, Hatchback and SUV)",
        "Motorcycles (Motorbikes, Trailers)",
        "Commercial Vehicles (Trucks, AGRI and Yellow Machines)"
      ]
    }
  ];

  const benefits = [
    "Continuation of existing vehicle finance agreement",
    "Courtesy car hire",
    "Full franchise dealership after sales service support",
    "Delivery Nationwide including Botswana"
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Heading */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              About <span className="text-primary">Us</span>
            </h2>
            <div className="max-w-4xl space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                My Brand Group (MBG Africa Holdings) is a specialised mobility-enabling company, purpose-built to keep people moving when their vehicles have been written off. We manage the entire journey, from close collaboration with insurance companies to delivering a seamless, integrated process with minimal disruption and maximum client satisfaction at every step.
              </p>
              <p>
                Our approach to mobility is more than getting a replacement vehicle. It's about restoring independence, continuity, and peace of mind when clients need it most. Our people are committed to delivering a human-centred, seamless experience, tailored to the needs of each person we serve.
              </p>
              <p>
                By partnering with MBG, insurers retain and strengthen customer relationships, reduce costs, and preserve a service model built around efficiency, care, and consistency. Our client-focused approach reinforces trust between insurers and their customers at a critical moment in their journey.
              </p>
              <p>
                We don't just replace vehicles we enable mobility. This is My Brand Group, a Digicall Group company.
              </p>
            </div>
          </div>

          {/* Three content cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contentSections.map((section, index) => (
              <Card key={index} className="p-8 md:p-10 bg-card rounded-2xl border-border/70 shadow-widget transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">{section.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{section.text}</p>
              </Card>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center space-y-2 pt-10 border-t border-border">
            <p className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              This is My Brand Group
            </p>
            <p className="text-sm text-muted-foreground">
              Your Trusted Partner in Vehicle Replacement Excellence
            </p>
          </div>

          {/* Industry Supply & Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 md:p-10 bg-card rounded-3xl border-border/70 shadow-widget transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6 text-foreground">Industry Supply Spans</h3>
              <div className="space-y-5">
                {industryCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">{category.heading}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-card rounded-3xl border-border/70 shadow-widget transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6 text-foreground">Vehicle Replacement Benefit To Policy Holder</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
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
