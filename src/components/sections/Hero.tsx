import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Logo Section - Full screen */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-pattern"
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Giant Logo */}
            <img
              src={logo}
              alt="Kingdom Options Consulting"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] object-contain animate-fade-up"
            />
            
            {/* Brand name below logo */}
            <div className="mt-8">
              <h1 
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                Kingdom Options Consulting
              </h1>
              <p 
                className="text-lg sm:text-xl text-muted-foreground mt-2 animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                Turning Chaos into Clarity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main headline */}
            <h2 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-up"
            >
              Deliver projects with{" "}
              <span className="text-primary relative">
                confidence
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Subheadline */}
            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              We help organizations overcome project challenges by bringing structure, 
              accountability, and clarity to every stage of execution.
            </p>

            {/* CTA */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Book a Consultation
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="subtle" 
                size="xl"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </Button>
            </div>

            {/* Credentials Carousel */}
            <div 
              className="mt-16 pt-8 border-t border-border/50 overflow-hidden"
            >
              <p 
                className="text-sm text-muted-foreground mb-4 text-center animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Certified professionals trusted across industries
              </p>
              <div className="relative">
                <div className="flex animate-scroll-left">
                  {[...Array(3)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="flex shrink-0 gap-8 px-4">
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground/80 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        PMP Certified
                      </span>
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground/80 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Agile Practitioners
                      </span>
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground/80 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        10+ Years Experience
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
