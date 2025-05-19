
import ServicesBrief from "./ServicesBrief";
import ServiceCards from "./ServicesCards";
import ContactForm from "@/components/ContactForm";
import FAQs from "./FAQs";
import Heading from "@/components/Heading";

const Clinics = () => {
  return (
    <div>
      <Heading 
        title="Clinical Services"
        description="The Nairobi Hospital is a non-profit organization that is leading in medical expertise and service provision, with deservedly earned recognition throughout East Africa and beyond as an advanced diagnostic, treatment and referral centre."
        style="text"
      />
      <ServicesBrief />
      <ServiceCards />
      <ContactForm contactInfo={{
                    phone: "+254 703 082 000",
                    emails: [
                      { type: "general", address: "hosp@nbihosp.org" },
                      { type: "medical", address: "medicalenquiries@nbihosp.org" },
                      { type: "service", address: "customer.service@nbihosp.org" },
                      { type: "clinic", address: "clinic@nbihosp.org" },
                    ],
                  }}/>
      <FAQs />
    </div>
  );
};

export default Clinics;
