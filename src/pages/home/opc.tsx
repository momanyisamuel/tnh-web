const Opc = () => {
  return (
    <div className="rounded-lg p-6 md:p-10 text-center bg-grey-50 dark:border-gray-700 shadow-xl mx-[16%] my-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
        Outpatient Clinics
      </h2>
      <div className="flex flex-col md:grid-cols-2 lg:flex-row lg:flex-wrap justify-center gap-4 text-gray-600 ">
        <span>Chandaria A & E Centre, Main Hospital</span>
        <span>Galleria Outpatient Centre, Langata Rd</span>
        <span>Warwick Outpatient Centre, Gigiri</span>
        <span>Capital Outpatient Centre, Mombasa Rd</span>
        <span>Rosslyn Riviera Outpatient Centre, Limuru Rd</span>
        <span>Kiambu OPC Outpatient Centre, Kiambu</span>
        <span>Southfield Outpatient Centre, North Airport Rd</span>
      </div>
    </div>
  );
};

export default Opc;
