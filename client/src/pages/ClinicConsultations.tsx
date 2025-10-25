import ServiceDetail from "./ServiceDetail";
import clinicImage from "@assets/generated_images/Clinic_consultation_room_b2786bcc.png";

export default function ClinicConsultations() {
  return (
    <ServiceDetail
      title="Clinic Consultations"
      description="We support both you and your primary care provider in treating your infection. Our team handles a wide range of infections, offering comprehensive care from diagnosis to resolution. We strive to accommodate appointments within days of your initial contact."
      benefits={[
        "Comprehensive infection treatment from start to finish",
        "Support for you and your primary care provider",
        "Quick appointment scheduling - often within days",
        "Wide range of infection expertise",
        "Thorough diagnosis and treatment planning",
        "Ongoing communication with your healthcare team",
      ]}
      image={clinicImage}
    />
  );
}
