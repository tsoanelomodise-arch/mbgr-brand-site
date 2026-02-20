import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thabo Molefe",
    role: "Policy Holder, Johannesburg",
    initials: "TM",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    quote:
      "MBG made the entire vehicle replacement process seamless. Within days of my write-off, I had a brand-new like-for-like replacement delivered to my door.",
  },
  {
    name: "Sarah van der Merwe",
    role: "Policy Holder, Cape Town",
    initials: "SV",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "I was dreading the insurance process, but MBG handled everything. The courtesy car kept me mobile, and my new vehicle arrived faster than I expected.",
  },
  {
    name: "Paul Hulley",
    role: "Policy Holder, Durban",
    initials: "PH",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    quote:
      "Professional, efficient, and genuinely caring. MBG ensured my finance agreement continued smoothly and the delivery was flawless.",
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-24 px-4 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <div className="h-1 w-20 bg-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            WHAT OUR <span className="text-primary">CLIENTS</span> SAY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from policy holders who experienced our vehicle replacement service first-hand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              className="p-8 hover:shadow-xl transition-all duration-300 border-border hover:border-primary relative overflow-hidden"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/15" />

              <div className="flex flex-col items-center text-center gap-4">
                <Avatar className="h-20 w-20 border-2 border-primary">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground italic leading-relaxed">
                  "{t.quote}"
                </p>

                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
