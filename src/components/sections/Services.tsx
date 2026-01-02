import { 
  CalendarCheck, 
  Settings, 
  BarChart3, 
  LineChart, 
  Users, 
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    category: "Planning & Process",
    accent: "primary",
    services: [
      {
        icon: CalendarCheck,
        title: "Project Planning & Scheduling",
        description: "Clear, actionable project plans that keep teams aligned and deadlines achievable. From kickoff to delivery, our scheduling frameworks ensure projects stay on track and within budget.",
      },
      {
        icon: Settings,
        title: "Process Optimization & Workflow Design",
        description: "We analyze existing processes, identify inefficiencies, and redesign workflows that maximize productivity and create seamless collaboration across teams.",
      },
    ],
  },
  {
    category: "Performance & Visibility",
    accent: "accent",
    services: [
      {
        icon: BarChart3,
        title: "Performance Monitoring",
        description: "Real-time visibility into project progress, performance metrics, and risks. Ensuring accountability and informed decision-making at every stage.",
      },
      {
        icon: LineChart,
        title: "Reporting Dashboards",
        description: "Customized dashboards that give stakeholders transparency. We build tools that make tracking simple and strategic decisions data-driven.",
      },
    ],
  },
  {
    category: "People & Leadership",
    accent: "primary",
    services: [
      {
        icon: Users,
        title: "Leadership Coaching for Project Managers",
        description: "One-on-one coaching and mentoring that equips project managers with skills to lead confidently, manage risks, and inspire their teams.",
      },
      {
        icon: GraduationCap,
        title: "Project Management Training",
        description: "Tailored training programs in Agile, Lean, or traditional frameworks. Practical tools and methodologies that empower teams to adapt and succeed.",
      },
    ],
  },
];

export function Services() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-card relative">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            Comprehensive solutions for project success
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From planning to execution, we provide the expertise your organization needs.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-1 h-8 rounded-full ${category.accent === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, servIndex) => (
                  <div
                    key={servIndex}
                    className="group relative bg-secondary rounded-2xl p-8 hover:shadow-card transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      category.accent === 'accent' 
                        ? 'bg-accent/10 group-hover:bg-accent/20' 
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    } transition-colors duration-300`}>
                      <service.icon className={`w-7 h-7 ${
                        category.accent === 'accent' ? 'text-accent' : 'text-primary'
                      }`} />
                    </div>

                    {/* Content */}
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Hover accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      category.accent === 'accent' ? 'bg-accent' : 'bg-primary'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Discuss Your Project
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
