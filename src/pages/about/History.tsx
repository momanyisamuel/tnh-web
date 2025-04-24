import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";

// Main History Section
const History: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
            <p>
              <strong>The Nairobi Hospital</strong> has a rich history. The
              foundation stone of what was to become the leading provider of
              healthcare services in the East African region, was laid on the
              morning of 20th October 1952 by none other than Sir Evelyn Baring,
              the then Governor of Kenya Colony. This is the day our
              independence heroes were rounded up and the fight for
              self-determination began in earnest. At that moment of darkness in
              the history of our country, and in spite of the events of the
              night before, The Nairobi Hospital was born. Indeed, this
              historical twist resonates well with the institution’s guiding
              motto ‘Lux in Tenebris’ – Light in Darkness.
            </p>

            <p>
              Opening its doors in 1954 as the European Hospital, the
              institution has grown from humble beginnings to a modern
              high-technology facility with more than 363 bed-capacity, six
              outpatient centers and a global medivac centre.
            </p>

            <p>
              In 1956, The Nairobi Hospital’s Cicely McDonnell School of Nursing
              was established. It was aptly named after Cicely McDonnell who had
              made immense personal contribution to the welfare and health
              Kenyans and set high professional standards for maternity nursing
              in Nairobi. Indeed, most graduates from the School of Nursing are
              absorbed into The Nairobi Hospital’s team.
            </p>

            <p>
              The combination of highly skilled medical specialists and modern
              medical and non-medical technology has placed the hospital in a
              position to undertake a wide range of routine and complex
              investigations and procedures including Open Heart Surgery, Kidney
              Transplants, Trauma Care, Orthopaedic Surgery, Neurosurgery,
              Laparoscopic Surgery, and Cancer Therapy among others.
            </p>

            <p>
              Today, The Nairobi Hospital is renowned for emergency and trauma
              care, disaster response and critical care and has excellent
              facilities for providing high-quality clinical and nursing care.
              The Anderson Specialty Centre opened in 2017 and has a variety of
              Specialty clinics including Orthopaedic, Well Baby and Executive
              Clinic.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-red-700 mt-10 mb-4">
            History of Firsts
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            The Nairobi Hospital is a pacesetter in medical practice in Kenya
            and has recorded several firsts locally and in the East and Central
            African region with milestones that include:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-6">
            <li>First private nursing training college in Kenya</li>
            <li>First institution to offer Diploma in Theatre Nursing</li>
            <li>First hospital to fit a duo chamber pacemaker on a patient</li>
            <li>First institution to offer hip replacement</li>
            <li>First eye bank in East Africa</li>
            <li>First complete video gastroenterology system</li>
            <li>
              First human papillomavirus (HPV) i.e. cancer of the cervix testing
            </li>
            <li>First tumour markers testing facility</li>
            <li>First hospital enterprise resource management system</li>
            <li>First brachytherapy centre</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mb-12 ">
            <img
              src="https://cms.thenairobihosp.org/uploads/key_milestones_2133f54e6e.jpg"
              alt="Milestone Visual"
              className="rounded-md shadow mb-8"
            />
            <div className="  mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Key Milestones
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Since its inception, the Nairobi Hospital has been a “ground
                breaker” medically, as well as socially. Below are some of our
                key milestones:
              </p>
              <MilestoneCarousel />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

// Milestone Carousel Component
const MilestoneCarousel: React.FC = () => {
  const milestones = [
    "1974: We performed the first Kidney transplant in Africa",
    "1981: First private hospital in East Africa to establish a Cardiac Unit",
    "1992: Launched the first Cancer Treatment Centre in the region",
    "2000: Introduced the first digital radiology system in Kenya",
    "2015: Pioneered robotic surgery in private healthcare",
    "2022: Opened the most advanced private ICU in East Africa",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [milestones.length]);

  return (
    <div>
      <div className="border-l-4 border-red-700 pl-4 text-red-700 font-semibold text-sm transition-all duration-500 ease-in-out min-h-[48px]">
        {milestones[current]}
      </div>

      <div className="mt-4 flex space-x-2">
        {milestones.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-red-700" : "bg-gray-300"
            }`}
            aria-label={`Go to milestone ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
