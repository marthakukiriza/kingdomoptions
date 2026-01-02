import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const promises = [
  "Deliver results faster and smarter",
  "Build confidence across your team",
  "Establish clear accountability",
  "Achieve measurable project success",
  "Create lasting organizational improvement",
];

export function Promise() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="promise" className="py-24 md:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Our Promise
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                More than consultants — your partner in success
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you partner with Kingdom Options Consulting Ltd, you gain a team 
                committed to helping you achieve results faster, smarter, and with 
                greater confidence.
              </p>
            </div>
          </div>

          {/* Right: Promise List */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                What you can expect
              </h3>
              
              <ul className="space-y-4">
                {promises.map((promise, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors duration-300">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {promise}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <Button variant="hero" className="w-full" onClick={scrollToContact}>
                  Schedule My Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-2xl rotate-12 opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-xl -rotate-12 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
