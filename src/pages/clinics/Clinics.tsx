import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import ServicesBrief from "./ServicesBrief";
import ServiceCards from "./ServicesCards";
import ContactForm from "@/components/ContactForm";
import FAQs from "./FAQs";

const Clinics = () => {
  return (
    <div>
      <Navbar />
      <ServicesBrief />
      <ServiceCards />
      <ContactForm />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Clinics;
