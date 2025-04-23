import { Link } from "react-router";

const ServicesBrief = () => {
  const ServicesShortList = [
    { name: "Emergency Services", link: "/emergency-services" },
    { name: "Outpatient Services", link: "/outpatient-services" },
    { name: "Surgical Procedures", link: "/surgical-procedures" },
    { name: "Paediatrics", link: "/paediatrics" },
    { name: "Internal Medicine", link: "/internal-medicine" },
    { name: "Maternity Services", link: "/maternity-services" },
    { name: "Pharmacy Services", link: "service-detail/pharmacy-services" },
    { name: "Laboratory Services", link: "/lab-services" },
  ];

  return (
    <div className="rounded-lg p-6 md:p-10 text-center  bg-red-800 dark:border-gray-700 shadow-xl mx-[16%] my-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
        Clinical Services
      </h2>

      <div className="flex flex-col md:grid-cols-2 lg:flex-row lg:flex-wrap justify-center gap-4 text-white ">
        {ServicesShortList.map((item) => (
          <div key={item.name}>
            <Link to={item.link}>
              <li>{item.name}</li>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBrief;
