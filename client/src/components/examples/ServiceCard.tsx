import ServiceCard from '../ServiceCard'
import { Syringe } from 'lucide-react'
import ivImage from "@assets/generated_images/IV_infusion_center_facility_0110765c.png"

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        icon={Syringe}
        title="IV Infusion Center"
        description="Often IV medications work faster and can be more effective in treatment than medications taken by mouth."
        href="/iv-infusion"
        image={ivImage}
      />
    </div>
  )
}
