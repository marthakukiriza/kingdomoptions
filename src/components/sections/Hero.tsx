import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-pattern"
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium">Turning Chaos into Clarity</span>
          </div>

          {/* Main headline */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
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
                  className="animate-draw-line"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            We help organizations overcome project challenges by bringing structure, 
            accountability, and clarity to every stage of execution.
          </p>

          {/* CTA */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
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
        className="mt-16 pt-8 border-t border-border/50 animate-fade-up overflow-hidden"
        style={{ animationDelay: "0.4s" }}
      >
        <p className="text-sm text-muted-foreground mb-4 text-center">
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
  );
}
