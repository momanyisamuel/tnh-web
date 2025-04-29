import { Pill } from "lucide-react";
import { FlaskConical } from "lucide-react";
import { Radiation } from "lucide-react";
import { Link } from "react-router";

const ServicesSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-serif font-semibold text-red-900">
            Magical Therapy for the People
          </h1>
          <p className="text-blaCK-100 mt-2">
            Psychologists employ a variety of research methods, clinical
            techniques.
          </p>
        </div>
        <button className="bg-red-900 text-white px-4 py-2 rounded-md font-semibold">
          All Services
        </button>
      </div>

      <div className="space-y-6">
        {/* Pharmacy */}
        <Link to={`/service-detail/pharmacy-services`}>
          <div className="flex items-start bg-white p-6 py-10 rounded-lg transition duration-300 hover:bg-yellow-400 hover:shadow-md cursor-pointer">
            <div className="text-red-900 mr-4 mt-1">
              <Pill className=" h-10 w-10" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-semibold text-red-900">
                Pharmacy Services
              </h2>
              <p className="text-base text-gray-700 mt-1">
                Depression is a mood disorder characterized by persistent
                feelings of sadness, hopelessness, and a lack of interest or
                pleasure in daily activities.
              </p>
            </div>
          </div>
          <hr />
        </Link>

        <Link to={`/service-detail/laboratory-services`}>
          <div className="flex items-start transition py-10 duration-300 hover:bg-yellow-400 hover:shadow-md p-6 rounded-lg cursor-pointer">
            <div className="text-3xl mr-4 mt-1">
              <FlaskConical className=" h-10 w-10 text-red-900" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-semibold text-red-900">
                Laboratory Services
              </h2>
              <p className="text-base text-gray-700 mt-1">
                Couple counseling provides a safe and confidential space where
                partners can openly express their thoughts, feelings, and
                concerns.
              </p>
            </div>
          </div>
          <hr />
        </Link>

        <Link to={`/service-detail/radiology-services`}>
          <div className="flex items-start bg-white p-6 py-10 rounded-lg transition duration-300 hover:bg-yellow-400 hover:shadow-md cursor-pointer">
            <div className="text-red-900 mr-4 mt-1">
              <Radiation className=" h-10 w-10" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-semibold text-red-900">
                Radiology Services
              </h2>
              <p className="text-base text-gray-700 mt-1">
                Depression is a mood disorder characterized by persistent
                feelings of sadness, hopelessness, and a lack of interest or
                pleasure in daily activities.
              </p>
            </div>
          </div>
          <hr />
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
