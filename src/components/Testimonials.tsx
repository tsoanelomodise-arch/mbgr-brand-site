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
    <section id="testimonials" className="py-16 md:py-28 px-4 bg-slate text-slate-foreground">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            WHAT OUR <span className="text-primary">CLIENTS</span> SAY
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl">
            Real stories from policy holders who experienced our vehicle replacement service first-hand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              className="p-8 md:p-10 bg-card rounded-3xl border-transparent shadow-widget hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-9 h-9 text-primary/20" />

              <div className="flex flex-col items-center text-center gap-4">
                <Avatar className="h-20 w-20 ring-2 ring-primary ring-offset-2 ring-offset-card">
                  <AvatarImage src={t.avatar} alt={t.name} loading="lazy" decoding="async" />
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

                <p className="text-muted-foreground leading-relaxed">
                  "{t.quote}"
                </p>

                <div>
                  <p className="font-bold tracking-tight text-foreground">{t.name}</p>
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
