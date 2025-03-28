import React from "react";
import logo from "@/assets/static/tnh_logo.png";
import insta from "@/assets/static/instgram.jpg";
import linkedin from "@/assets/static/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-red-900  w-full text-slate-50 py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase">Stay Up to Date</h3>
            <h2 className="text-lg font-bold mt-2">
              Join Nairobi Hospital’s Newsletter
            </h2>
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="border border-gray-400 p-2 rounded w-full md:w-auto"
              />
              <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase">
              Customer Service
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Patients & Visitors</li>
              <li>College of Health Sciences</li>
              <li>Clinical Services</li>
              <li>Other Services</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase">Support</h3>
            <ul className="mt-2 space-y-1">
              <li>Careers Portal</li>
              <li>Contact Us</li>
              <li>International Desk</li>
              <li>Payments</li>
              <li>Customer Care</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li>Getting to Hospital</li>
              <li>Accident and Emergency Services</li>
              <li>Inpatient</li>
              <li>Outpatient</li>
              <li>Covid Center</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between">
          <img src={logo} alt="Nairobi Hospital Logo" className="w-30 h-20" />
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="cursor-pointer">
              <img src={insta} alt="Instagram" className="w-10 h-10" />
            </span>
            <span className="cursor-pointer">
              <img src={linkedin} alt="linkedin" className="w-10 h-10" />
            </span>
            <span className="cursor-pointer">▶️</span>
            <span className="cursor-pointer">💼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
