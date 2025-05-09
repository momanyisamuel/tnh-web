import { Link } from "react-router";
import opcData from "@/data/opcData.json";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Opc = () => {
  return (
    <motion.div
    variants={slideUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="rounded-lg p-6 md:p-10 text-center bg-grey-50 dark:border-gray-700 bg-white shadow-lg shadow-red-900/50
 mx-[16%] my-10 mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-red-900">
          Outpatient Clinics
        </h2>
        <div className="flex flex-col md:grid-cols-2 lg:flex-row lg:flex-wrap justify-center gap-4 text-black text-lg">
          {opcData.map((opc) => (
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
    </motion.div>
  );
};

export default Opc;
