import { Link, useParams } from "react-router";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import clinicalServices from "@/data/clinicalServices.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaClock } from "react-icons/fa";

type AccordionItem = {
  title: string;
  Subject: string;
};

type Contact = {
  phone: string;
  location: string;
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
  contact?: Contact;
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = clinicalServices.find(
    (item) => item.id === String(id)
  ) as Service;

  if (!service)
    return (
      <div className="text-center mt-10 text-red-600">Service not found.</div>
    );

  if (service.clinics && service.clinics.length > 0) {
    return (
      <>
        <Navbar />

        <section className="bg-red-900 text-white p-5 md:p-16">
          <div className="grid md:grid-cols gap-2 lg:px-36">
            <div className="flex flex-col justify-center space-y-4 max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {service.name} Clinics
              </h1>
              <p className="text-lg md:text-xl">{service.description}</p>
            </div>
          </div>
        </section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%]">
          {service.clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl"
            >
              <img
                src={clinic.image.src}
                alt={clinic.image.alt}
                className="rounded-t-lg w-full h-56 object-cover"
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-gray-900">
                  {clinic.name}
                </h5>
                <p className="mb-3 text-gray-700">{clinic.description}</p>
                <Link
                  to={`/service-detail/${clinic.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-yellow-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="bg-red-900 text-white p-5 md:p-16  ">
        <div className="grid md:grid-cols  gap-2 lg:px-36">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl">{service.description}</p>
          </div>

          {/* <div className="">
            <img
              src={service.image.src}
              className="rounded-lg  object-fill h-48 w-96 "
              alt="Image 1"
            />
          </div> */}
        </div>
      </section>
      {/* <div className="flex flex-col items-center py-10 px-5 bg-gray-50 min-h-screen">
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
      </div> */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">
              Empowering Personal Growth
            </h2>
            <p className="mt-2 text-gray-700">
              Individual therapy, often referred to as personal therapy, is a
              confidential and collaborative...
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
              <li>Establishing Trust</li>
              <li>Initial Assessment</li>
              <li>Exploring Personal History</li>
              <li>Identifying Goals</li>
              <li>Cognitive Exploration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Emotional Expression</h2>
            <p className="mt-2 text-gray-700">
              Individual therapy provides a space for individuals to express and
              process emotions...
            </p>
          </div>
          <img
            src={service.image.src}
            alt={service.image.alt}
            className="w-full rounded-xl shadow-md object-cover max-h-[300px]"
          />

          {/* Working Hours Section*/}
          <section className="bg-gray-100 py-12 px-6 md:px-16 mt-8 rounded-xl mx-auto max-w-4xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Working Hours
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                We are available to assist you with medical services during
                these hours:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaClock className="text-red-900 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      Regular Hours
                    </h3>
                    <ul className="text-lg text-gray-600 mt-2">
                      <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                      <li>Saturday: 9:00 AM - 4:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaClock className="text-yellow-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      Emergency Services
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">
                      24/7 Availability
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-green-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+254 703082000"
                      className="text-lg text-gray-600 mt-2"
                    >
                      +254 703082000
                    </a>
                  </div>
                </div> */}

                <div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Online Appointment Booking
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">
                    You can book an appointment online through our website or
                    call us directly for assistance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Accordion */}
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {service.accordionItems &&
                Object.keys(service.accordionItems).map((key, index) => {
                  const item = service.accordionItems![key];
                  return (
                    <AccordionItem
                      className="shadow-lg p-3"
                      key={index}
                      value={`item-${index}`}
                    >
                      <AccordionTrigger className=" rounded-3xl text-xl">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>{item.Subject}</AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </div>
        </div>

        {/* Contact Card */}
        <div className="lg:w-[300px] w-full bg-red-50 h-min rounded-xl p-6 shadow-md text-sm text-gray-800">
          <h3 className="font-semibold mb-4 text-xl">
            Have Additional Questions?
          </h3>

          <div className="flex flex-col space-y-2 items-start text-lg">
            <span className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-red-900" aria-label="Phone icon" />{" "}
              <a href="tel:+254 703082000">+254 703082000</a>
            </span>
            <span className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 text-red-900" aria-label="Mail icon" />
              <a href="mailto: hosp@nbihosp.org"> hosp@nbihosp.org</a>
            </span>
            <div className="flex items-center justify-center gap-2">
              <MapPin
                className="h-5 w-5 text-red-900 space-x-2"
                aria-label="Location icon"
              />{" "}
              Argwings Kodhek Road, Nairobi
            </div>
            <Link to="#" className="mt-4 text-green-700 hover:underline">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
      <section className="bg-red-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-red-900">
                Other Services
              </h2>
            </div>
            <button className="bg-red-900 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600">
              All Services
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clinicalServices.slice(0, 2).map((service, index) => (
              // {clinicalServices.slice(0, VisibleServices).map((item) => (
              <div key={index} className="bg-white rounded-xl shadow p-4">
                <Link to={`/service-detail/${service.id}`}>
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    className="rounded-lg mb-4 h-64 w-full object-cover"
                  />
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 mt-2">{service.description}</p>
                  <span className="inline-block mt-4 text-gray-700 font-medium cursor-pointer hover:underline">
                    Learn More →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetails;
