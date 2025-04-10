import React from "react";
import dentist from "@/assets/images/dentist.jpg";
import pharmacy from "@/assets/images/Pharmacy.jpg";
import antenatal from "@/assets/images/antenatal.jpg";
import gyne from "@/assets/images/gynecology.jpg";
import { Link } from "react-router";

const clinicalServices = [
  {
    image: {
      src: [dentist],
      alt: "card-image",
    },
    name: "Dentistry",
    description:
      "Dentistry focuses on oral health, offering services like cleanings, cavity treatments, and dental surgeries. It is practiced by licensed dentists who diagnose, prevent, and treat issues related to teeth, gums, and the mouth.",
  },
  {
    image: {
      src: [pharmacy],
      alt: "card-image",
    },
    name: "Pharmacy",
    description:
      "Pharmacies offer health-related services like vaccinations, wellness check-ups, and over-the-counter medications. It is managed by licensed pharmacists who provide prescriptions, medical advice, and information on drug interactions.",
  },
  {
    image: {
      src: [antenatal],
      alt: "card-image",
    },
    name: "Antenatal Clinic",
    description:
      "The Antenatal Clinic is administered by Obstetricians/Gynecologists and experienced midwives who provide comprehensive care to mothers from conception, all through pregnancy until delivery.",
  },
  {
    image: {
      src: [gyne],
      alt: "card-image",
    },
    name: "Gynecology",
    description:
      "The Antenatal Clinic is administered by Obstetricians/Gynecologists and experienced midwives who provide comprehensive care to mothers from conception, all through pregnancy until delivery.",
  }, {
    image: {
      src: [antenatal],
      alt: "card-image",
    },
    name: "Antenatal Clinic",
    description:
      "The Antenatal Clinic is administered by Obstetricians/Gynecologists and experienced midwives who provide comprehensive care to mothers from conception, all through pregnancy until delivery.",
  }, 

  {
    image: {
      src: [antenatal],
      alt: "card-image",
    },
    name: "Antenatal Clinic",
    description:
      "The Antenatal Clinic is administered by Obstetricians/Gynecologists and experienced midwives who provide comprehensive care to mothers from conception, all through pregnancy until delivery.",
  },

];
// Cardtitles
const Services = () => {
  const servicesToShow = clinicalServices.slice(0, 4);
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold text-4xl my-10">Clinical Services</h1>

      <div className="flex flex-wrap items-center px-[5%] gap-6 justify-center">
        {servicesToShow.map((item) => (
          <div
            key={item.name}
            className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-2xl border-yellow-00 border-y-yellow-600"
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
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-600 dark:bg-red-900 dark:hover:bg-red-900 dark:focus:ring-red-800 bg-red-900 shadow-lg shadow-red-900/50 "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      {clinicalServices.length > 4 && (
        <Link
          to="/clinics"
          className="mt-8 inline-flex items-center px-6 py-3 text-white bg-yellow-600 rounded-lg hover:bg-red-900 text-lg font-semibold transition"
        >
          See more clinics
        </Link>)}
    </div>
  );
};

export default Services;
