import ServiceDetail from "./ServiceDetail";
import woundImage from "@assets/generated_images/Wound_care_treatment_scene_b3aac0c8.png";

export default function WoundCare() {
  return (
    <ServiceDetail
      title="Wound Care"
      description="Our specialized wound care team provides advanced treatment customized to each patient's specific needs. Our trained and certified wound care nurses work closely with our doctors to maximize healing and ensure the best possible outcomes."
      benefits={[
        "State-of-the-art wound care treatments",
        "Certified and experienced wound care nurses",
        "Customized treatment plans for each patient",
        "Advanced healing technologies and techniques",
        "Close collaboration between nurses and physicians",
        "Comprehensive approach to wound management",
      ]}
      image={woundImage}
    />
  );
}
