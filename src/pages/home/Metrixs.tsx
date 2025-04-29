import care2 from "@/assets/images/image1.png";

const Metrixs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
  
  <div>
    <img src={care2} alt="People in group therapy" className="rounded-xl shadow-md h-90 w-300"/>
  </div>

 
  <div>
    <h2 className="text-3xl font-semibold text-red-900 mb-4">Our Center</h2>
    <p className="text-gray-700 mb-6">
      Outpatient centers offer a range of clinical services provided by licensed mental health professionals.
      These services may involve care from clinical psychologists, counselors, psychotherapists,
      psychiatrists, and other healthcare specialists focused on supporting clients without the need for overnight stays.
    </p>
    


    <div className="space-y-4">
      <div>
        <span className="text-3xl font-bold text-red-900">68%</span>
        <p className="text-gray-600">
          Educational workshops and support groups may be organized to address specific topics or provide additional resources.
        </p>
      </div>

      <div>
        <span className="text-3xl font-bold text-red-900">17%</span>
        <p className="text-gray-600">
          Our centers adhere to strict confidentiality standards, ensuring that client information is kept private within legal and ethical bounds.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Metrixs