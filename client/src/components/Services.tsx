import ServiceCard from "./ServiceCard";
import { Activity, Heart, Stethoscope, Users, Building2, Plane } from "lucide-react";
import { motion } from "framer-motion";
import ivImage from "@assets/generated_images/IV_infusion_center_facility_0110765c.png";
import woundImage from "@assets/generated_images/Wound_care_treatment_scene_b3aac0c8.png";
import clinicImage from "@assets/generated_images/Clinic_consultation_room_b2786bcc.png";
import longitudinalImage from "@assets/generated_images/Longitudinal_care_relationship_02d4ebe1.png";
import hospitalImage from "@assets/generated_images/Hospital_critical_care_consultation_183a0621.png";
import travelImage from "@assets/generated_images/Travel_vaccination_service_e76677c0.png";

const services = [
  {
    icon: Activity,
    title: "IV Infusion Center",
    description: "Direct medical oversight ensuring maximum safety and comfort. Our infusion center provides fast, effective IV medication treatment with expert supervision.",
    href: "/iv-infusion",
    image: ivImage,
  },
  {
    icon: Heart,
    title: "Wound Care",
    description: "State-of-the-art treatment customized to each patient. Our certified wound care nurses work with doctors to maximize healing.",
    href: "/wound-care",
    image: woundImage,
  },
  {
    icon: Stethoscope,
    title: "Clinic Consultations",
    description: "Comprehensive infection care from start to finish. We handle a wide range of infections and strive to accommodate appointments within days.",
    href: "/clinic-consultations",
    image: clinicImage,
  },
  {
    icon: Users,
    title: "Longitudinal Care",
    description: "Building long-term healthcare relationships leads to better health. The same team manages your care over time, preventing issues.",
    href: "/longitudinal-care",
    image: longitudinalImage,
  },
  {
    icon: Building2,
    title: "Hospital Consultations",
    description: "Expert care for critically ill patients with complex conditions like sepsis and severe bone/joint infections. We provide the highest level of specialized treatment.",
    href: "/hospital-consultations",
    image: hospitalImage,
  },
  {
    icon: Plane,
    title: "Travel Vaccines",
    description: "Planning to travel? We provide vaccinations, medications, and expert advice to help you stay safe and healthy on your adventures.",
    href: "/travel-vaccines",
    image: travelImage,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive infection care tailored to your needs, delivered by expert specialists.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
