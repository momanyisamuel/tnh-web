import { Pill } from "lucide-react";
import { FlaskConical } from "lucide-react";
import { Radiation } from "lucide-react";
import { Link } from "react-router";

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-center items-center mb-8">
        <div className="">
          <h1 className="text-3xl text-center font-serif font-bold text-red-900">
            Clinical Services
          </h1>
          <p className="text-black text-center mt-2">
            Psychologists employ a variety of research methods, clinical
            techniques.
          </p>
        </div>
        <button className="bg-red-900 text-white mx-15 hidden md:block px-4 py-2 rounded-md font-semibold">
          <Link to={`/clinics`}>All Services</Link>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center space-y-6">
        <Link to={`/service-detail/pharmacy-services`}>
          <div className="md:flex items-start bg-white p-6 py-10 rounded-lg transition duration-300 hover:bg-yellow-400 hover:shadow-md cursor-pointer">
            <div className="flex items-center mr-12">
              <Pill className="mt-2 mr-4 text-red-900 h-8 w-8 md:h-10 w-10" />
              <h2 className="text-2xl md:text-3xl font-serif  text-red-900">
                Pharmacy Services
              </h2>
            </div>
            <div>
              <p className="text-base text-gray-700 mt-1 mx-12 max-w-lg">
                Depression is a mood disorder characterized by persistent
                feelings of sadness, hopelessness, and a lack of interest or
                pleasure in daily activities.
              </p>
            </div>
          </div>
          <hr />
        </Link>

        <Link to={`/service-detail/laboratory-services`}>
          <div className="md:flex items-start bg-white p-6 py-10 rounded-lg transition duration-300 hover:bg-yellow-400 hover:shadow-md cursor-pointer">
            <div className="flex items-center mr-12">
              <FlaskConical className="mt-2 mr-4 text-red-900 h-8 w-8 md:h-10 w-10" />
              <h2 className="text-2xl md:text-3xl font-serif  text-red-900">
                Laboratory Services
              </h2>
            </div>
            <div>
              <p className="text-base text-gray-700 mt-1 mx-12 max-w-lg">
                Depression is a mood disorder characterized by persistent
                feelings of sadness, hopelessness, and a lack of interest or
                pleasure in daily activities.
              </p>
            </div>
          </div>
          <hr />
        </Link>

        <Link to={`/service-detail/radiology-services`}>
          <div className="md:flex items-start bg-white p-6 py-10 rounded-lg transition duration-300 hover:bg-yellow-400 hover:shadow-md cursor-pointer">
            <div className="flex items-center mr-12">
              <Radiation className="mt-2 mr-4 text-red-900 h-8 w-8 md:h-10 w-10" />
              <h2 className="text-2xl md:text-3xl font-serif  text-red-900">
                Radiology Services
              </h2>
            </div>
            <div>
              <p className="text-base text-gray-700 mt-1 mx-12 max-w-lg">
                Depression is a mood disorder characterized by persistent
                feelings of sadness, hopelessness, and a lack of interest or
                pleasure in daily activities.
              </p>
            </div>
          </div>
          <hr />
        </Link>
        <button className="bg-red-900 text-white mx-15 block px-4 py-2 rounded-md font-semibold md:hidden">
          All Services
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
