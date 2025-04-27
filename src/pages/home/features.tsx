import patient from "@/assets/static/patient-icon.png"

const Features = () => {
  return (
    <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 md:grid-cols-3 text-center">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center space-y-4">
        <img src="https://cdn-icons-png.freepik.com/256/13086/13086360.png?ga=GA1.1.1933680938.1745767924&semt=ais_hybrid" alt="Icon 1" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800"> Find a doctor</h3>
        
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center space-y-4">
          <img src= {patient} alt="Icon 2" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800"> Patient registration</h3>
        
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center space-y-4">
        <img src="https://cdn-icons-png.freepik.com/256/9903/9903607.png?ga=GA1.1.1933680938.1745767924&semt=ais_hybrid" alt="Icon 3" className="h-12 w-12" />
        <h3 className="text-lg font-semibold text-gray-800"> Getting to the hospital</h3>
       
      </div>

    </div>
  </div>
</section>

  )
}

export default Features