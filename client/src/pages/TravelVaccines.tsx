import ServiceDetail from "./ServiceDetail";
import travelImage from "@assets/generated_images/Travel_vaccination_service_e76677c0.png";

export default function TravelVaccines() {
  return (
    <ServiceDetail
      title="Travel Vaccines"
      description="Planning to travel? Our travel medicine specialists provide comprehensive vaccinations, medications, and expert advice to help you stay safe and healthy on your adventures around the world."
      benefits={[
        "Comprehensive travel vaccinations",
        "Expert travel health advice",
        "Preventive medications for your destination",
        "Country-specific health recommendations",
        "Pre-travel consultations",
        "Protection for your international journeys",
      ]}
      image={travelImage}
    />
  );
}
