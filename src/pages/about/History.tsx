import Header from "@/components/header";
import Footer from "@/components/footer";
import { FC } from "react";
import React, { useEffect, useState } from "react";

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
      <div className="border-l-4 border-purple-600 pl-4 text-purple-800 font-semibold text-sm transition-all duration-500 ease-in-out min-h-[48px]">
        {milestones[current]}
      </div>

      <div className="mt-4 flex space-x-2">
        {milestones.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-purple-600" : "bg-gray-300"
            }`}
            aria-label={`Go to milestone ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main History Section
const History: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-10xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        
        {/* Column 1: History of Firsts */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-6">
        The Nairobi Hospital has a rich history. The foundation stone of what was to become the leading provider of healthcare services in the East African region, was laid on the morning of 20th October 1952 by none other than Sir Evelyn Baring, the then Governor of Kenya Colony. This is the day our independence heroes were rounded up and the fight for self-determination began in earnest. At that moment of darkness in the history of our country, and in spite of the events of the night before, The Nairobi Hospital was born. Indeed, this historical twist resonates well with the institution’s guiding motto ‘Lux in Tenebris’ – Light in Darkness.</p>
        <p>Opening its doors in 1954 as the European Hospital, the institution has grown from humble beginnings to a modern high-technology facility with more than 363 bed-capacity, six outpatient centers and a global medivac centre.</p>
        <p>In 1956, The Nairobi Hospital’s Cicely McDonnell School of Nursing was established. It was aptly named after Cicely McDonnell who had made immense personal contribution to the welfare and health Kenyans and set high professional standards for maternity nursing in Nairobi. Indeed, most graduates from the School of Nursing are absorbed into The Nairobi Hospital’s team.</p>
        <br />
        <p>The combination of highly skilled medical specialists and modern medical and non-medical technology has placed the hospital in a position to undertake a wide range of routine and complex investigations and procedures including Open Heart Surgery, Kidney Transplants, Trauma Care, Orthopeadic Surgery, Neurosurgery, Laparoscopic Surgery, and Cancer Therapy among others.</p>
        <p>Today, The Nairobi Hospital is renowned for emergency and trauma care, disaster response and critical care and has excellent facilities for providing high-quality clinical and nursing care. The Anderson Specialty Centre opened in 2017 and has a variety of Specialty clinics including Orthopeadic , Well Baby and Executive Clinic.</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">History of Firsts</h2>
          <p className="text-gray-600 mb-6">
            The Nairobi Hospital is a pioneer in medical practices in Kenya and has recorded several firsts in the East and Central African region with collaborative medical leadership:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li>First private nursing college in Kenya</li>
            <li>First hospital to train Enrolled Nurses</li>
            <li>First to allow a patient’s relative to stay with a patient</li>
            <li>First pain control policy</li>
            <li>First palliative care unit</li>
            <li>First private hospital offering dialysis</li>
            <li>First private hospital to perform open-heart surgery</li>
            <li>First paperless electronic medical record system</li>
            <li>First private hospital to perform cardiac catheterization</li>
          </ul>
        </div>

        {/* Column 2: Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://cms.thenairobihosp.org/uploads/key_milestones_2133f54e6e.jpg"
            alt="History Highlight"
            className="rounded-lg shadow-md w-full h-auto object-cover max-h-[400px]"
          />
        </div>

        {/* Column 3: Milestone Carousel */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Milestones</h3>
          <p className="text-gray-600 mb-4">
            Since its inception, the Nairobi Hospital has been a “ground breaker” medically, as well as socially. Below are some of our key milestones:
          </p>

          <MilestoneCarousel />
        </div>
      </div>
    </section>
  );
};

export default History;
