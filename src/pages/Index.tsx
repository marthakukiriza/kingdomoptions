import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Services } from "@/components/sections/Services";
import { Promise } from "@/components/sections/Promise";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Services />
        <Promise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
