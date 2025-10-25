import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden transition-shadow h-full flex flex-col relative" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {/* Animated border glow on hover */}
        <motion.div
          className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {image && (
          <div className="w-full h-48 overflow-hidden relative">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Overlay animation on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
        <CardHeader className="gap-2">
          <motion.div
            className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-2"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <CardDescription className="text-base mb-4 flex-1">{description}</CardDescription>
          <Link href={href}>
            <Button variant="ghost" className="w-full justify-between group" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
