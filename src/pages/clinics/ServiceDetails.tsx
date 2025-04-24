import { useParams } from "react-router";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import clinicalServices from "@/data/clinicalServices.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionItem = {
  title: string;
  Subject: string;
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

  return (
    <>
      <Navbar />
      <section className="bg-red-900 text-white p-5 md:p-16  ">
        <div className="grid md:grid-cols gap-2 lg:px-36">
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

          {/* Accordion */}
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {service.accordionItems &&
                Object.keys(service.accordionItems).map((key, index) => {
                  const item = service.accordionItems![key];
                  return (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>{item.Subject}</AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </div>
        </div>

        {/* Contact Card */}
        <div className="lg:w-[300px] w-full bg-red-100 h-min rounded-xl p-6 shadow-md text-sm text-gray-800">
          <h3 className="font-semibold mb-4">Have Additional Questions?</h3>
          <ul className="space-y-2">
            <li>📍 Argwing Kodhek Road,Nairobi</li>
            <li>📞 +254 703082000</li>
            <li>✉️ customer.service@nbihosp.org</li>
          </ul>
          <button className="mt-4 text-green-700 hover:underline">
            Contact Us →
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
