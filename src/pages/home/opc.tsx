import { Link } from "react-router";
import { malls } from "../outpatient-centers/OpcList";
const Opc = () => {
  return (
    <div className="rounded-lg p-6 md:p-10 text-center bg-grey-50 dark:border-gray-700 shadow-xl mx-[16%] my-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
        Outpatient Clinics
      </h2>
      <div className="flex flex-col md:grid-cols-2 lg:flex-row lg:flex-wrap justify-center gap-4 text-gray-600 ">
        {malls.map((mall) => (
          <Link
            key={mall.id}
            to={`/outpatient-center/${mall.id}`}
            className=" p-2 text-center hover:underline"
          >
            {mall.name}, {mall.location}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Opc;
