import ServiceDetail from "./ServiceDetail";
import hospitalImage from "@assets/generated_images/Hospital_critical_care_consultation_183a0621.png";

export default function HospitalConsultations() {
  return (
    <ServiceDetail
      title="Hospital Consultations"
      description="We are routinely called upon to care for patients who are critically ill and in urgent need of specialized attention. We handle complex and life-threatening conditions such as sepsis, severe bone and joint infections, stepping in during the most critical moments to provide the highest level of care."
      benefits={[
        "Expert care for critically ill patients",
        "Specialized treatment for complex infections",
        "Management of life-threatening conditions like sepsis",
        "Advanced care for severe bone and joint infections",
        "Immediate response to urgent medical needs",
        "Highest level of infectious disease expertise",
      ]}
      image={hospitalImage}
    />
  );
}
