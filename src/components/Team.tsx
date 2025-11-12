import { Card } from "@/components/ui/card";
import { Users, Briefcase, Settings, Calculator, GraduationCap } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      icon: Users,
      role: "Managing Partner",
      name: "Musa F. Sambo",
      description: "Founder and majority shareholder of My Brand Group. Visionary with years of experience in sales, background in accounting and finance. Also a Board Member and Director of Digicall South Africa."
    },
    {
      icon: Briefcase,
      role: "Director & Digicall Group CEO",
      name: "Ruben Moggee",
      description: "Looks after all businesses under the Digicall Group spanning over 3 continents with over 2,000 employees. Described as an ideal servant leader."
    },
    {
      icon: Settings,
      role: "Operations Manager",
      description: "Comes from a consultancy background working with multinational clients. Vast experience in the short and long term insurance industry, including building systems and managing large teams."
    },
    {
      icon: Users,
      role: "Dream Catchers",
      subtitle: "Client Service Specialists",
      description: "Extensive experience in sales, the motor industry, and client servicing. Highly competent in performing and delivering in their role."
    },
    {
      icon: Calculator,
      role: "Accounting Department",
      description: "Immense understanding in dealing with an automotive business from a tax, VAT, and daily accounting perspective. Ensures transparency and accountability."
    },
    {
      icon: GraduationCap,
      role: "Interns",
      description: "Offered a comprehensive training environment. Take an active role in developing character and leadership qualities."
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <div className="h-1 w-20 bg-primary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              THE <span className="text-primary">TEAM</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A dedicated team with exceptional experience in the automotive and Business Process Outsourcing industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-border hover:border-primary transition-all"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{member.role}</h3>
                      {member.subtitle && (
                        <p className="text-sm text-muted-foreground">{member.subtitle}</p>
                      )}
                      {member.name && (
                        <p className="text-lg font-semibold text-foreground mt-1">{member.name}</p>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Advisory Members */}
          <div className="mt-16 space-y-6">
            <h3 className="text-3xl font-bold text-center">
              NON-EXECUTIVE <span className="text-primary">ADVISORY MEMBERS</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border">
                <h4 className="text-xl font-bold text-primary mb-3">Brand Pretorius</h4>
                <p className="text-muted-foreground text-sm">
                  Currently a Non-executive director at Barclays Africa, Tata Africa Holdings, and Tongaat Hulett. 
                  Previously held the position of CEO of McCarthy motor holdings, and MD of Toyota SA Marketing.
                </p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <h4 className="text-xl font-bold text-primary mb-3">Hendrik Kluever</h4>
                <p className="text-muted-foreground text-sm">
                  A Director on Blue Pie Investments and sits on the Digicall board. 
                  Believes taking responsibility is central to what an Organisation does.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
