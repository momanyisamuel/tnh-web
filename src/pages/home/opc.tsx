import { Link } from "react-router";
import opcData from "@/data/opcData.json";

const Opc = () => {
  return (
    <div
      className="rounded-lg p-6 md:p-10 text-center bg-grey-50 dark:border-gray-700 shadow-xl backdrop-blur-md
 mx-[16%] my-10"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-red-900">
        Outpatient Clinics
      </h2>
      <div className="flex flex-col md:grid-cols-2 lg:flex-row lg:flex-wrap justify-center gap-4 text-black ">
        {malls.map((mall) => (
          <Link
            key={opc.id}
            to={`/outpatient-center/${opc.id}`}
            className=" p-2 text-center hover:underline"
          >
            {opc.name}, {opc.location}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Opc;
