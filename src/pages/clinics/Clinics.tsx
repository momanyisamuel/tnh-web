import Footer from "@/components/footer";
import Header from "@/components/header";
import ServicesBrief from "./ServicesBrief";
import ServiceCards from "./ServicesCards";

const Clinics = () => {
  return (
    <div>
      <Header />
      <ServicesBrief />
      <ServiceCards />
      <Footer />
    </div>
  );
};

export default Clinics;
