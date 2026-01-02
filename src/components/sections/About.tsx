import { Target, Eye, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Target, label: "Projects Delivered", value: "50+" },
  { icon: Users, label: "Teams Trained", value: "200+" },
  { icon: TrendingUp, label: "Success Rate", value: "95%" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden section-bg-pattern">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Every organization deserves clarity in its projects
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Kingdom Options Consulting Ltd, we are dedicated to helping teams deliver 
                projects on time, within budget, and with confidence. Founded on the principle 
                of "Turning chaos into clarity."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center gold-ring-hover rounded-2xl p-4 bg-card/50 backdrop-blur-sm">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Story */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-soft gold-ring-hover">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                Over the past decade, we have worked across diverse industries, from education 
                to women-led enterprises, witnessing firsthand the challenges organizations face: 
                missed deadlines, wasted resources, and frustrated teams.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We built Kingdom Options Consulting Ltd to change that narrative.
              </p>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-1 h-full min-h-[60px] bg-accent rounded-full" />
                <p className="text-sm text-foreground italic leading-relaxed">
                  Our certified PMP and Agile professionals bring structured frameworks, 
                  proven methodologies, and practical coaching to ensure projects do not 
                  just get completed, they succeed.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
