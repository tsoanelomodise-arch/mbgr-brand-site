import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { KeyFacts } from "@/components/KeyFacts";
import { Services } from "@/components/Services";
import { Brands } from "@/components/Brands";
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
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
