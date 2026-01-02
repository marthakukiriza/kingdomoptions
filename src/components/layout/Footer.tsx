import logo from "@/assets/logo.jpg";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Promise", href: "#promise" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Kingdom Options Consulting"
              className="h-10 w-auto rounded"
            />
            <div>
              <p className="font-display font-semibold">Kingdom Options Consulting Ltd</p>
              <p className="text-sm text-primary-foreground/70">
                Turning Chaos into Clarity
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Kingdom Options Consulting Ltd. All rights reserved.</p>
          <p>Based in Kampala, Uganda</p>
        </div>
      </div>
    </footer>
  );
}
