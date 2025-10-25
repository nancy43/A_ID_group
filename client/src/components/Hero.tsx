import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Shield, Activity } from "lucide-react";
import heroImage from "@assets/generated_images/Medical_consultation_hero_image_27c983f4.png";

export default function Hero() {
  const floatingIcons = [
    { Icon: Heart, x: "10%", y: "20%", delay: 0 },
    { Icon: Shield, x: "85%", y: "15%", delay: 0.5 },
    { Icon: Activity, x: "15%", y: "70%", delay: 1 },
    { Icon: Heart, x: "80%", y: "75%", delay: 1.5 },
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      {/* Animated floating medical icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.15, 0.15, 0],
            scale: [0, 1, 1, 1.2],
            y: [0, -20, -40, -60],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <item.Icon className="w-12 h-12 text-primary" />
        </motion.div>
      ))}

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Path to Healing is Here
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert infection care when you need it most. Our infection clinic connects you with specialists who bring the latest treatments to you and your family.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-8"
              asChild
              data-testid="button-schedule-consultation"
            >
              <a href="#contact">Schedule Consultation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-background/20"
              asChild
              data-testid="button-learn-more"
            >
              <a href="#services">Learn About Our Services</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
