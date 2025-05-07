
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Jimmy Wanyangu",
    title: "Entrepreneur",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW3GTYCl5luQDf88tAC-0e8kklmblsInt5VAmbW7JWEfXQoLNs=w72-h72-p-rp-mo-ba3-br100", // Replace with actual image path
    quote:
      "Good customer service,location is perfect within the Hospital's vicinity. Interior decor is superb especially the concrete planters on each table.",
  },
  {
    name: "Jimmy Wanyangu",
    title: "Entrepreneur",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW3GTYCl5luQDf88tAC-0e8kklmblsInt5VAmbW7JWEfXQoLNs=w72-h72-p-rp-mo-ba3-br100", // Replace with actual image path
    quote:
      "Good customer service,location is perfect within the Hospital's vicinity. Interior decor is superb especially the concrete planters on each table.",
  },

];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const { name, title, image, quote } = testimonials[index];

  return (
    <section className="flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-semibold text-teal-900 mb-8">
        What Our Clients Say
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-md object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-teal-900">{name}</h3>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>

     
        <blockquote className="text-xl max-w-3xl text-red-900">
          “{quote}”
        </blockquote>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
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
    </section>
  );
}
