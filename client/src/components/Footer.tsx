import { Link } from "wouter";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "IV Infusion Center", href: "/iv-infusion" },
    { name: "Wound Care", href: "/wound-care" },
    { name: "Clinic Consultations", href: "/clinic-consultations" },
    { name: "Longitudinal Care", href: "/longitudinal-care" },
    { name: "Hospital Consultations", href: "/hospital-consultations" },
    { name: "Travel Vaccines", href: "/travel-vaccines" },
  ];

  const resources = [
    { name: "New Patient Registration", href: "#new-patient" },
    { name: "Patient Login", href: "#patient-login" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">American ID Group</h3>
            <p className="text-sm text-muted-foreground">
              Expert infection care when you need it most.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Patient Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon - Fri: 8:00 AM - 4:00 PM</li>
              <li>Infusion Clinic: 365 Days/Year</li>
              <li>
                <a href="mailto:contact@americanidgroup.com" className="hover:text-primary transition-colors">
                  contact@americanidgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} American ID Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
