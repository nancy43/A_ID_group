import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-muted-foreground">
            We're here to help. Reach out to schedule your appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <Card data-testid="card-hours" className="relative overflow-hidden">
              {/* Animated background shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 relative z-10">
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Clock className="w-6 h-6 text-primary" />
              </motion.div>
              <CardTitle className="text-lg">Office Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-medium text-foreground">Monday - Friday</div>
                  <div className="text-muted-foreground">8:00 AM - 4:00 PM</div>
                </div>
                <div className="pt-2 border-t">
                  <Badge variant="secondary" className="text-xs">
                    Infusion Clinic Open 365 Days/Year
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <Card data-testid="card-contact" className="relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
              />
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 relative z-10">
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Phone className="w-6 h-6 text-primary" />
              </motion.div>
              <CardTitle className="text-lg">Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="mailto:contact@americanidgroup.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                contact@americanidgroup.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Call for appointment</span>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <Card data-testid="card-location" className="relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
              />
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 relative z-10">
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <MapPin className="w-6 h-6 text-primary" />
              </motion.div>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Corporate Office
              </p>
              <Button variant="outline" className="w-full" asChild data-testid="button-directions">
                <a href="#" onClick={(e) => { e.preventDefault(); console.log('Get directions clicked'); }}>
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
