import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { KeyFacts } from "@/components/KeyFacts";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Brands } from "@/components/Brands";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <KeyFacts />
        <Services />
        <Team />
        <Brands />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
