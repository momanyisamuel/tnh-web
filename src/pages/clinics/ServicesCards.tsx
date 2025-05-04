import { useState } from "react";

import { Link } from "react-router";
import clinicalServices from "@/data/clinicalServices.json";

type AccordionItem = {
  title: string;
  Subject: string;
};

type Clinic = {
  id: string;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type Service = {
  id: string;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  accordionItems?: Record<string, AccordionItem>;
  clinics?: Clinic[];
};

// Cardtitles
const ServiceCards = () => {
  const [VisibleServices, setVisibleServices] = useState(4);
  const handleLoadMore = () => {
    setVisibleServices((prev) => prev + 4);
  };
  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 justify-center mt-8">
      {/* <h1 className="font-bold text-4xl my-10">Clinical Services</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-[5%] gap-6 justify-center">
        {clinicalServices.slice(0, VisibleServices).map((item) => (
          <div
            key={item.name}
            className="max-w-xl bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl border-y-yellow-600"
          >
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src={
                Array.isArray(item.image.src)
                  ? item.image.src[0]
                  : item.image.src
              }
              alt={item.image.alt}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                {item.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>

              <Link
                to={`/service-detail/${item.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-600 dark:bg-red-900 dark:hover:bg-red-900 dark:focus:ring-red-800 shadow-lg shadow-red-900/50 "
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      {clinicalServices.length > VisibleServices && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-4 py-2 text-white bg-yellow-600 rounded-lg hover:bg-red-900"
        >
          More Services
        </button>
      )}
    </div>
  );
};

export default ServiceCards;
