import Heading from '@/components/Heading'
import { FC } from 'react'

type AdmissionChargesProps = object

const AdmissionCharges: FC<AdmissionChargesProps> = () => {
  return <div>
    <Heading
      image_url="https://cms.thenairobihosp.org/uploads/admission_charges_8fbeb1073c.jpg"
      style="image"
      title="Admission Charges"
      description="Explore our admission charges and ensure a smooth experience during your stay."
    />
    
  </div>
}

export default AdmissionCharges