import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface ServiceDetailProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export default function ServiceDetail({ title, description, benefits, image }: ServiceDetailProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-80 bg-gradient-to-r from-primary/90 to-primary">
          <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div>
              <Link href="/">
                <a className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4" data-testid="link-back">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </a>
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground">{title}</h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button size="lg" asChild data-testid="button-schedule">
                  <a href="#contact">Schedule an Appointment</a>
                </Button>
              </div>
            </div>

            <div>
              <img
                src={image}
                alt={title}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
