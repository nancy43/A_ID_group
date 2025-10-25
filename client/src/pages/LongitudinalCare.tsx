import ServiceDetail from "./ServiceDetail";
import longitudinalImage from "@assets/generated_images/Longitudinal_care_relationship_02d4ebe1.png";

export default function LongitudinalCare() {
  return (
    <ServiceDetail
      title="Longitudinal Care"
      description="We believe that building a long-term relationship with your healthcare provider leads to better health outcomes. The same dedicated team will manage your care over time, helping to prevent complications and improve your overall healthcare experience."
      benefits={[
        "Consistent care from the same medical team",
        "Better long-term health outcomes",
        "Prevention-focused approach to care",
        "Deep understanding of your medical history",
        "Continuity in treatment and monitoring",
        "Improved patient-provider relationships",
      ]}
      image={longitudinalImage}
    />
  );
}
