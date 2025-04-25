import logo from "@/assets/static/tnh_logo.png";
import insta from "@/assets/static/instagram-logo.svg";
import youtube from "@/assets/static/youtube-logo.svg";
import linkedin from "@/assets/static/linkedin-logo.svg";
import facebook from "@/assets/static/facebook-logo.svg";
import twitter from "@/assets/static/twitter-logo.svg";
import whatsapp from "@/assets/static/whatsapp-logo.svg";
import { Link } from "react-router";

// components/HospitalFooter.tsx

const Footer = () => {
      return (
        <footer className="bg-red-900 text-white py-16 px-4 text-sm">
          {/* Contact Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Don't Hesitate, Contact Us
            </h2>
            <p className="mb-6 text-gray-200">
             Lux in Tenebris
            </p>
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
              Contact Us
            </button>
          </div>
    
          <hr className="w-5/6 h-1 mx-auto my-4 border-white rounded-sm md:my-10 dark:bg-gray-700" />
    
          {/* Info & Instagram */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 px-4 max-w-6xl mx-auto mb-12">
            {/* Info */}
            <div>
              <p className="mb-4 text-gray-300 max-w-xs">
                Design amazing digital experiences that create more happy in the world.
              </p>
            </div>
    
            {/* Instagram */}
            <div className="text-left">
              <div className="flex gap-2">
                {/* Replace the image URLs with real Instagram previews or your own images */}
                
                  <img
                    src={facebook}
                    alt="Instagram preview"
                    className="rounded object-cover w-12 h-12"
                  />
                  <img
                    src={twitter}
                    alt="Instagram preview"
                    className="rounded object-cover w-12 h-12"
                  />
                  <img
                    src={whatsapp}
                    alt="Instagram preview"
                    className="rounded object-cover w-12 h-12"
                  />
                  <img
                    src={linkedin}
                    alt="linkedin preview"
                    className="rounded object-cover w-12 h-12"
                  />
                  <img 
                  src={youtube} 
                  alt="Youtube preview"
                  className="rounded object-cover w-12 h-12" 
                  />
                  <img 
                  src={insta} 
                  alt="Instagram preview"
                  className="rounded object-cover w-12 h-12" 
                  />

              </div>
            </div>
          </div>
    
          <hr className="w-5/6 h-1 mx-auto my-4 border-white mb-12 rounded-sm md:my-10 dark:bg-gray-700" />
    
          {/* Bottom credits */}
          <div className="flex flex-col md:flex-row justify-between items-center px-4 max-w-6xl mx-auto text-xs text-gray-300">
            <p>©The Nairobi Hospital. All Rights Reserved 2025.</p>
          </div>
        </footer>
      );
};

export default Footer;
