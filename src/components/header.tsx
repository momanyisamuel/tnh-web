import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/static/tnh_logo.svg";
import MenuList, { MenuListType } from "./menu/menu-list";

const menuItems = [
  { name: "Home", link: "/" },
  {
    item: {name: "About Us", link: "/"},
    dropdown: [
      { name: "About Us", link: "/about" },
      { name: "Board of Management", link: "/board-of-management" },
      { name: "Board of Trustees", link: "/board-of-trustees" },
      { name: "Senior Management Team", link: "/senior-management" },
      { name: "Accreditation and Certifications", link: "/accreditation" },
    ],
  },
] as MenuListType[];

// {
//   name: "Patients & Visitors",
//   dropdown: [
//     { name: "Patient Guidelines", link: "/patient-guidelines" },
//     { name: "Visiting Hours", link: "/visiting-hours" },
//     { name: "Billing Information", link: "/billing-info" },
//     { name: "Insurance Partners", link: "/insurance-partners" },
//     { name: "Medical Records", link: "/medical-records" },
//     { name: "Patient Rights", link: "/patient-rights" },
//   ],
// },
// {
//   name: "Clinical Services",
//   dropdown: [
//     { name: "Emergency Services", link: "/emergency-services" },
//     { name: "Outpatient Services", link: "/outpatient-services" },
//     { name: "Surgical Procedures", link: "/surgical-procedures" },
//     { name: "Pediatrics", link: "/pediatrics" },
//     { name: "Internal Medicine", link: "/internal-medicine" },
//     { name: "Maternity Services", link: "/maternity-services" },
//   ],
// },
// {
//   name: "College of Health Sciences",
//   dropdown: [
//     { name: "About the College", link: "/about-college" },
//     { name: "Basic Departments", link: "/basic-departments" },
//     { name: "Post Basic Department", link: "/post-basic-department" },
//     { name: "Student Sponsorship", link: "/student-sponsorship" },
//     { name: "Facilities and Downloads", link: "/facilities-downloads" },
//     { name: "Alumni", link: "/alumni" },
//     { name: "FAQs", link: "/faqs" },
//   ],
// },
// { name: "Contact Us", link: "/contact-us" },

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (
  //     dropdownRef.current &&
  //     !dropdownRef.current.contains(event.target as Node)
  //   ) {
  //     setOpenMenu(null);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="bg-white mx-[5%] text-black px-6 py-3 flex justify-between items-center relative">
      {/* Logo and Text on the Left */}
      <div className="flex items-center ">
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
        <MenuList items={menuItems} />
      </div>
    </nav>
  );
};

export default Header;
