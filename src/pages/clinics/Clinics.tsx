import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import ServicesBrief from "./ServicesBrief";
import ServiceCards from "./ServicesCards";

const Clinics = () => {
  return (
    <div>
      <Navbar />
      <ServicesBrief />
      <ServiceCards />
      <Footer />
    </div>
  );
};

export default Clinics;
