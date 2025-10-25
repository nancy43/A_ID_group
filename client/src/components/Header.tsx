import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center">
            <Link href="/" data-testid="link-home">
              <span className="text-xl font-semibold text-primary">American ID Group</span>
            </Link>
          </div>

          <div className="hidden md:flex md:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:gap-3">
            <Button variant="outline" size="sm" asChild data-testid="button-patient-login">
              <a href="#patient-login">Patient Login</a>
            </Button>
            <Button size="sm" asChild data-testid="button-new-patient">
              <a href="#new-patient">New Patient</a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 px-3 pt-2">
              <Button variant="outline" asChild data-testid="button-mobile-login">
                <a href="#patient-login">Patient Login</a>
              </Button>
              <Button asChild data-testid="button-mobile-new-patient">
                <a href="#new-patient">New Patient</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
