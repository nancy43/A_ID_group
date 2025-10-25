import ServiceDetail from "./ServiceDetail";
import ivImage from "@assets/generated_images/IV_infusion_center_facility_0110765c.png";

export default function IVInfusion() {
  return (
    <ServiceDetail
      title="IV Infusion Center"
      description="Our IV Infusion Center provides state-of-the-art intravenous medication delivery with direct medical oversight. IV medications often work faster and can be more effective than oral medications, making them an essential treatment option for many conditions."
      benefits={[
        "Direct oversight by our expert medical team",
        "Maximum safety and comfort during treatment",
        "Faster and more effective medication delivery",
        "Comfortable, modern facility open 365 days a year",
        "Experienced nursing staff specialized in infusion therapy",
        "Comprehensive monitoring throughout your treatment",
      ]}
      image={ivImage}
    />
  );
}
