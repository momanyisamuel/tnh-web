import patient from "@/assets/static/patient-icon.png"
import location from "@/assets/static/location-icon.png"
import doctor from "@/assets/static/doctors-icon.png"

const Features = () => {
  return (
    <section className="py-12 bg-white">
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid gap-20  md:grid-cols-3 text-center">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center space-y-2 shadow-xl p-6 md:p-6">
        <img src={doctor} alt="Icon 1" className="h-12 w-12" />
        <h3 className="text-lg  font-semibold text-gray-800 text-red-900"> Find a Doctor</h3>
        <p  className=" mt-2">Connecting you to trusted Doctors anytime, anywhere Wheather you need a routine check-up, Specialist advice, or Urgent Care.  </p>
        
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center space-y-2 shadow-xl p-6">
          <img src= {patient} alt="Icon 2" className="h-12 w-12 " />
        <h3 className="text-lg font-semibold text-gray-800 text-red-900"> Patient Registration</h3>
        <p className="mt-2">  Registering as a patient is the first step toward accessing personalized, quality healthcare.  </p>
        
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center space-y-2 shadow-xl p-6">
        <img src={location} alt="Icon 3" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800 text-red-900"> Getting to the Hospital</h3>
        <p className="mt-2"> We want your visit to be easy.
             Find directions, parking, and transport info.
            Visit our Location & Directions page.  
            </p>
       
      </div>

    </div>
  </div>
</section>

  )
}

export default Features