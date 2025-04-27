import patient from "@/assets/static/patient-icon.png"
import location from "@/assets/static/location-icon.png"
import doctor from "@/assets/static/doctors-icon.png"

const Features = () => {
  return (
    <section className="py-12 bg-white">
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid gap-20  md:grid-cols-3 text-center">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center space-y-4 shadow-xl p-10">
        <img src={doctor} alt="Icon 1" className="h-12 w-12" />
        <h3 className="text-lg  font-semibold text-gray-800"> Find a Doctor</h3>
        
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center space-y-4 shadow-xl p-10">
          <img src= {patient} alt="Icon 2" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800"> Patient Registration</h3>
        
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center space-y-4 shadow-xl p-10">
        <img src={location} alt="Icon 3" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800"> Getting to the Hospital</h3>
       
      </div>

    </div>
  </div>
</section>

  )
}

export default Features