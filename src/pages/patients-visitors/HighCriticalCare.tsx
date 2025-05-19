import Heading from '@/components/Heading'
import { FC } from 'react'

type HighCriticalCareProps = object

const HighCriticalCare: FC<HighCriticalCareProps> = () => {
  return <div>
    <Heading
      image_url="https://cms.thenairobihosp.org/uploads/high_critical_care_8fbeb1073c.jpg"
      style="image"
      title="High Critical Care"
      description="Explore our high critical care services for patients requiring specialized attention and monitoring."
    />
  </div>
}

export default HighCriticalCare