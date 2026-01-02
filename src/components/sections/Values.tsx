import { Lightbulb, CheckCircle, Shuffle, Sparkles, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Clarity",
    description: "We simplify complex projects into actionable steps.",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "We ensure visibility and ownership at every stage.",
  },
  {
    icon: Shuffle,
    title: "Adaptability",
    description: "We apply Agile and Lean practices to keep teams flexible.",
  },
  {
    icon: Sparkles,
    title: "Impact",
    description: "We measure success by lasting organizational improvement.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We build trust by demonstrating values in every decision.",
  },
];

export function Values() {
  return (
    <section className="py-24 md:py-32 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Mission & Values
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            Transforming project management from stress to success
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We empower organizations with the tools, skills, and strategies they need.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent/20"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
