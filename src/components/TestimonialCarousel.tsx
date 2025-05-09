import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jimmy Wanyangu",
    title: "Entrepreneur",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW3GTYCl5luQDf88tAC-0e8kklmblsInt5VAmbW7JWEfXQoLNs=w72-h72-p-rp-mo-ba3-br100",
    quote:
      "Good customer service,location is perfect within the Hospital's vicinity. Interior decor is superb especially the concrete planters on each table.",
  },
  {
    name: "Jawana Msola",
    title: "Entrepreneur",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWA0bGUvIPliDq8Ry5wTYnwXXuggsy4Uz2-iLsU76N0gIvj6T6H=w72-h72-p-rp-mo-ba2-br100",
    quote:
      "I am absolutely grateful for my experience at The Nairobi Hospital. The staff was professional and helpful beginning at admissions, ER nursing station, and the North Wing.",
  },
  {
    name: "Cate Nyambura",
    title: "Entrepreneur",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUOuxfWm6fzqbcmzhp-1rAs8wv4NgfJ9ixm-gRj-wXmHkqFPz-EMg=w72-h72-p-rp-mo-ba8-br100",
    quote:
      "Great and excellent service. Took less than an hour to get admitted along with the mandatory COVID test. I was admitted in the Presidential St. Michael Suite and the nurses were attentive, supportive with the best service.",
  },
  {
    name: "Geoffrey Nevine",
    title: "Entrepreneur",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVSOn2BETxvkV7Af-j94HirpPBSEzRIE8gKZBPeuGkuOfj21LEoTQ=w72-h72-p-rp-mo-ba4-br100",
    quote:
      "Excellent services. Had a patient there for one week at St John's private ward and the care was phenomenal. Would recommend it to anyone",
  },
  {
    name: "amima sharon",
    title: "Entrepreneur",
    image:
      " https://lh3.googleusercontent.com/a-/ALV-UjUWKHukqY-faT6oAzu1frotgHMUSv9-CTAZx40gw97bP8AbaEme=w72-h72-p-rp-mo-br100",
    quote:
      "Great and excellent service. Took less than an hour to get admitted along with the mandatory COVID test. I was admitted in the Presidential St. Michael Suite and the nurses were attentive, supportive with the best service.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const { name, title, image, quote } = testimonials[index];

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col items-center justify-center p-6 mb-10 mt-10">
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-start justify-between items-center">
          <h2 className="text-3xl text-center md:mr-90 font-semibold  text-red-900 mb-15">
            What Our Clients Say
          </h2>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4 mb-7 ml-10 md:ml-40">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-red-900 hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-red-900 hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-red-900">{name}</h3>
              <p className="text-gray-600">{title}</p>
            </div>
          </div>

          <blockquote className="text-xl ml-25 max-w-xl text-black">
            “{quote}”
          </blockquote>
          <div className="flex  gap-4 mb-7 ml-10 md:ml-40 md:hidden">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-red-900 hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-red-900 hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
