import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Hospital } from "lucide-react";
import { Link } from "react-router";

type Mall = {
  name: string;
  id: string;
  contact: string;
  location: string;
};

export const malls: Mall[] = [
  {
    name: "Galleria Mall",
    id: "galleria-opc",
    contact: "+254 712 345678",
    location: "Lang'ata Road, Nairobi",
  },
  {
    name: "Warwick Centre",
    id: "warwick-opc",
    contact: "+254 722 123456",
    location: "Gigiri, Nairobi",
  },
  {
    name: "Capital Centre",
    id: "capital-opc",
    contact: "+254 733 987654",
    location: "Mombasa Road, Nairobi",
  },
  {
    name: "Rosslyn Riviera",
    id: "rosslyn-opc",
    contact: "+254 701 456789",
    location: "Limuru Road, Nairobi",
  },
  {
    name: "Southfield Mall",
    id: "southfield-opc",
    contact: "+254 729 111222",
    location: "Embakasi, Nairobi",
  },
  {
    name: "Kiambu Mall",
    id: "kiambu-opc",
    contact: "+254 721 888999",
    location: "Kiambu Road, Kiambu",
  },
];

const OpcList: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-10 lg:mx-auto my-20 ">
        <h2 className="text-3xl md:text-4xl text-center  font-bold mb-6 text-gray-800">
          Outpatient Clinics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
          {malls.map((mall, index) => (
            <div
              key={index}
              className="border dark:border-gray-700 shadow-xl rounded-lg p-8 text-center hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                <Hospital className="text-amber-400 w-10 h-10" />
              </div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                {mall.name}
              </h2>
              <p className="text-gray-700 mb-2">{mall.location}</p>

              <Link
                to={`/outpatient-center/${mall.id}`}
                className="bg-yellow-600 hover:bg-red-700 text-white cursor-pointer py-2 px-14 rounded-3xl w-full transition-all"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpcList;
