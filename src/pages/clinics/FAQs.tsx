import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "HOW CAN I BOOK AN APPOINTMENT AT THE NAIROBI HOSPITAL?",
    answer:
      "You can book an appointment online through the hospital’s website or by calling their customer service. Walk-in consultations are also available for certain clinics, depending on the time and demand. Appointments can be made with general physicians or specific specialists. Ensure to have your identification and insurance details ready when booking.",
  },
  {
    question: "DOES THE NAIROBI HOSPITAL ACCEPT INSURANCE?",
    answer:
      "Yes, The Nairobi Hospital accepts a wide range of local and international medical insurance providers. Patients are advised to confirm coverage with their insurer prior to visiting. The hospital’s billing department can assist in verifying insurance benefits. Mobile money and card payments are also accepted for patients without insurance.",
  },
  {
    question: "WHAT ARE THE VISITING HOURS FOR INPATIENTS?",
    answer:
      "Visiting hours are generally from 11:00 AM to 1:00 PM and 4:00 PM to 6:00 PM daily. Special considerations may apply in intensive care or maternity wards. Only a limited number of visitors may be allowed at a time. Visitors must adhere to hospital guidelines for hygiene and safety.",
  },
  {
    question: "WHERE IS THE NAIROBI HOSPITAL LOCATED AND HOW DO I GET THERE?",
    answer:
      "The Nairobi Hospital is located along Argwings Kodhek Road in the Upper Hill area of Nairobi. It is easily accessible by private car, taxi or public transport. There is ample parking space and security for visitors and patients. You can also use ride-hailing apps like Uber or Bolt for convenience.",
  },
];

export default function FAQs() {
  return (
    <section className=" bg-red-50 py-12 px-8 mt-8 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://businesslistingkenya.com/wp-content/uploads/2024/04/nairobi-hospital.jpg"
            alt="nbi hosp entrance"
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Accordion */}
        <div className="w-full md:w-1/2 space-y-4">
          <Accordion
            type="single"
            collapsible
            className="w-full  p-8 rounded-xl"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                className="space-y-4 "
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-xl p-3 rounded-2xl text-white bg-rose-800 font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
