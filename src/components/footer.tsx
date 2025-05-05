// import logo from "@/assets/static/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
// import { useState } from "react";

// const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted email:", email);

//   };

// components/HospitalFooter.tsx

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-16 px-4 text-sm">
      {/* Contact Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Don't Hesitate, Contact Us
        </h2>
        <p className="mb-6 text-gray-200">Lux in Tenebris</p>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

      <hr className="w-5/6 h-1 mx-auto my-4 border-white rounded-sm md:my-10 dark:bg-gray-700" />

      {/* Info & Instagram */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 px-4 max-w-6xl mx-auto mb-12">
        {/* Info */}
        <div className="flex ">
          <img
            src="https://www.kebs.org/wp-content/uploads/2023/09/6.png"
            alt="Instagram preview"
            className="rounded-4xl object-cover w-12 h-12"
          />
          <img
            src="https://www.kebs.org/wp-content/uploads/2023/09/13.png"
            alt="Instagram preview"
            className="rounded-4xl object-cover w-12 h-12"
          />
          <img
            src="https://www.kebs.org/wp-content/uploads/2023/09/9.png"
            alt="Instagram preview"
            className="rounded-4xl object-cover w-12 h-12"
          />
        </div>

        {/* Instagram */}
        <div className="text-left">
          {" "}
          <p>
            Get in touch with us on our social media platforms
            <div className="flex gap-2">
              {/* Replace the image URLs with real Instagram previews or your own images */}
              <FaFacebook className="w-10 h-10" />

              <FaWhatsapp className="w-10 h-10" />
              <FaXTwitter className="w-10 h-10" />
              <FaLinkedinIn className="w-10 h-10" />
              <FaYoutube className="w-10 h-10" />
              <FaInstagram className="w-10 h-10" />
            </div>
          </p>
        </div>
      </div>

      <hr className="w-5/6 h-1 mx-auto my-4 border-white mb-12 rounded-sm md:my-10 dark:bg-gray-700" />

      {/* Bottom credits */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 max-w-6xl mx-auto text-xs text-gray-300">
        {/* <img
          src={logo}
          alt="Instagram preview"
          className="rounded object-cover w-20 h-20"
        /> */}
        <p>©The Nairobi Hospital. All Rights Reserved 2025.</p>
      </div>
    </footer>
  );
};

export default Footer;
