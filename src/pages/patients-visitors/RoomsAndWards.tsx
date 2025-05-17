import Heading from '@/components/Heading'
import { FC } from 'react'

type RoomsAndWardsProps = object

const RoomsAndWards: FC<RoomsAndWardsProps> = () => {
  return <div>
    <Heading
      image_url="https://cms.thenairobihosp.org/uploads/rooms_and_wards_8fbeb1073c.jpg"
      style="image"
      title="Rooms and Wards"
      description="Explore our comfortable rooms and wards designed for your comfort and recovery."
    />
    <div className="flex flex-col items-center justify-center my-10">
      {/* Add your Rooms and Wards list component here */}
    </div>
  </div>
}

export default RoomsAndWards