import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import teamImage from "@assets/generated_images/Medical_team_group_photo_60211075.png";

export default function About() {
  const highlights = [
    { icon: Clock, label: "365 Days/Year", description: "Always available" },
    { icon: Users, label: "Expert Team", description: "Specialized care" },
    { icon: Shield, label: "Advanced Treatments", description: "Latest technology" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={teamImage}
              alt="American ID Group Medical Team"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              At AIDG, we're dedicated to providing the most advanced medical treatments and setting a new standard of healthcare excellence.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Our goal is to give your family peace of mind, knowing you're receiving the right care for your condition. We treat many types of infections, from common ones like skin and lung infections to more serious ones like HIV, MRSA, and hepatitis C.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-background relative overflow-hidden"
                  data-testid={`stat-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Animated background pulse */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative z-10"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="font-semibold text-foreground mb-1 relative z-10">{item.label}</div>
                  <div className="text-sm text-muted-foreground relative z-10">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
