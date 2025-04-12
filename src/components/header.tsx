import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/static/tnh_logo.svg";
//import MenuComponent from "./Menu";
import MenuComponent from "./menu/Menu";

const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "About Us",
    dropdown: [
      [
         { name: "About Us", link: "/about" },
         { name: "History", link: "/history" },
         { name: "Board of Management", link: "/board-of-management" },
         { name: "Board of Trustees", link: "/board-of-trustees" },
         { name: "Senior Management team", link: "/senior-management-team" },
         { name: "Accreditation & Certification", link: "/accreditation-certification" },
      ],
    ],
  },
  {
    name: "Patients & Visitors",
    dropdown: [
      [{ name: "Visiting Hours", link: "/about" },
        { name: "Billing Information", link: "/about" },
        { name: "Insurance Partners", link: "/about" },
        { name: "Medical Records", link: "/about" },
        { name: "Patient Rights", link: "/about" },
    ],
  ]
  },
  {
    name: "Clinical services",
    link: "/clinics",
  },
  {
    name: "College of Health Sciences", link: "/college",
    // dropdown: [
    //   [
    //     { name: "Patient Rights", link: "/about" },
    //    { name: "Patient Rights", link: "/about" },
    //      { name: "Patient Rights", link: "/about" },
    //      { name: "Patient Rights", link: "/about" },
    //     { name: "Patient Rights", link: "/about" },"About the college", "Basic Departments", "Post Basic Department"],
    //   ["Student Sponsorship", "Facilities and Downloads", "Alumni", "FAQs"],
    // ],
  },
  { name: "Contact us", link: "/careers" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white mx-[5%] text-black px-6 py-3 flex justify-between items-center relative">
      {/* Logo and Text on the Left */}
      <div className="flex items-center">
        <img src={logo} alt="Nairobi Hospital Logo" className="w-30 h-20" />
        <span className="text-lg font-bold">
          THE <br /> NAIROBI <br /> HOSPITAL
        </span>
      </div>

      {/* Mobile Menu Toggle Button on the Right */}
      <button
        className="lg:hidden text-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-white shadow-md transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none`}
      >
        {/* Mobile Logo and Text at the Top of the Menu */}
        <div className="flex items-center justify-between px-6 py-4 lg:hidden border-b">
          <div className="flex items-center">
            <img src={logo} alt="Nairobi Hospital Logo" className="w-24 h-16" />
            <span className="text-lg font-bold">THE NAIROBI HOSPITAL</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <MenuComponent menuItems={menuItems} />
      </div>
    </nav>
  );
};

export default Header;
