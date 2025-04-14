import React from "react";
import { useParams } from "react-router";
import dentist from "@/assets/images/dentist.jpg";
import pharmacy from "@/assets/images/Pharmacy.jpg";
import antenatal from "@/assets/images/antenatal.jpg";
import gyne from "@/assets/images/gynecology.jpg";
import { Link } from "react-router";
import Footer from "@/components/footer";
import Header from "@/components/header";
import clinicalServices from "@/data/clinicalServices.json";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = clinicalServices.find((item) => item.id === String(id));

  if (!service)
    return (
      <div className="text-center mt-10 text-red-600">Service not found.</div>
    );

  return (
    <>
      <Header colorChanges="" />
      <section className="bg-red-900 text-white p-5 md:p-16  ">
        <div className="grid md:grid-cols-2 gap-2 px-48">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl">{service.description}</p>
          </div>

          {/* Image Grid */}
          <div className="">
            <img
              src={service.image.src}
              className="rounded-lg  object-fill h-48 w-96 "
              alt="Image 1"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center py-10 px-5 bg-gray-50 min-h-screen">
        <img
          src={service.image.src}
          alt={service.image.alt}
          className="w-full max-w-4xl rounded-lg shadow-md object-cover h-72"
        />
        <h1 className="text-4xl font-bold my-6 text-gray-800">
          {service.name}
        </h1>
        <p className="max-w-3xl text-lg text-gray-700 text-center">
          {service.description}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
