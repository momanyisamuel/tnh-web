import React, { useState, useEffect } from "react";
import amref from "@/assets/images/Amref.png";
import Uap from "@/assets/images/UAP-LOGO.png";
import cigma from "@/assets/images/cigna.png";
import madison from "@/assets/images/madison.png";
import jubilee from "@/assets/images/jubilee.png";

const images = [
  { src: amref, alt: "Amref" },
  { src: Uap, alt: "UAP" },
  { src: cigma, alt: "Cigna" },
  { src: madison, alt: "Madison" },
  { src: jubilee, alt: "Jubilee" },
];

const OurPartners = () => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Our Insurance Partners</h2>
      <div className="relative w-full max-w-3xl">
        {/* Left Button */}
        <button
          onClick={() => setIndex((index - 1 + totalSlides) % totalSlides)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-500 p-2 rounded-full shadow-md"
        >
          &#8592;
        </button>

        {/* Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-full justify-around">
                {images
                  .slice(
                    slideIndex * itemsPerSlide,
                    (slideIndex + 1) * itemsPerSlide
                  )
                  .map((image, i) => (
                    <div
                      key={i}
                      className="w-1/3 flex items-center justify-center border rounded-lg p-4"
                    >
                      <img src={image.src} alt={image.alt} className="h-12" />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => setIndex((index + 1) % totalSlides)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500 p-2 rounded-full shadow-md"
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-red-700" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
