import care1 from "@/assets/images/image2.jpg";
import care2 from "@/assets/images/image1.png";
import care3 from "@/assets/images/image3.png";
import care4 from "@/assets/images/image4.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-red-900 mt-4 text-white p-5 md:p-16 rounded-2xl mx-[5%] w-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl md:text-6xl  font-bold leading-tight">
            70+ Years of Healthcare with a difference.
          </h1>
          <p className="text-lg md:text-xl">
            The Nairobi hospital has excelled in medical expertise, service
            provision and has deservedly earned recognition throughout East
            Africa and beyond. Visit our main hospital or any of our 6
            outpatient centres at Galleria Mall, Capital Centre, Rosslyn Riviera
            Mall, Kiambu Mall, Southfield Mall or Warwick Centre.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold">
              <Link to="/clinics"> Clinical Services </Link>
            </button>
            <Link to="/about" className="flex items-center space-x-2">
              <span>About Us</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={care1}
            className="rounded-lg w-full h-32 object-cover"
            alt="Image 1"
          />
          <img
            src={care2}
            className="rounded-lg w-full h-64 object-cover col-span-1 row-span-2"
            alt="Image 2"
          />
          <img
            src={care3}
            className="rounded-lg w-full h-64 object-cover col-span-1 row-span-2"
            alt="Image 3"
          />
          <img
            src={care4}
            className="rounded-lg w-full h-32 object-cover"
            alt="Image 4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
