import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/static/tnh_logo.svg";

const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "About Us",
    dropdown: [
      ["Pharmacy Services", "Laboratory Services", "Radiology Services"],
      ["Dental Procedures", "Gynaecology", "Antenatal Clinic"],
    ],
  },
  {
    name: "Patients & Visitors",
    dropdown: [
      ["Patient Guidelines", "Visiting Hours", "Billing Information"],
      ["Insurance Partners", "Medical Records", "Patient Rights"],
    ],
  },
  {
    name: "Clinical Services",
    dropdown: [
      ["Emergency Services", "Outpatient Services", "Surgical Procedures"],
      ["Pediatrics", "Internal Medicine", "Maternity Services"],
    ],
  },
  {
    name: "College of Health Sciences",
    dropdown: [
      ["About the college", "Basic Departments", "Post Basic Department"],
      ["Student Sponsorship", "Facilities and Downloads", "Alumni", "FAQs"],
    ],
  },
  { name: "Contact us", link: "/careers" },
];

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

        <ul className="flex flex-col lg:flex-row lg:gap-8 p-6 lg:p-0">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative py-2.5 font-semibold text-black"
            >
              {item.dropdown ? (
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === item.name ? null : item.name)
                  }
                  className="flex items-center px-4 py-2 hover:bg-red-900 hover:rounded-xl hover:text-white w-full lg:w-auto"
                >
                  {item.name} <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <a
                  href={item.link}
                  className="block px-4 py-2 hover:bg-red-900 hover:rounded-xl hover:text-white"
                >
                  {item.name}
                </a>
              )}
              {item.dropdown && openMenu === item.name && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 top-full bg-white text-black shadow-lg p-4 grid gap-2 w-64"
                >
                  {item.dropdown.flat().map((subItem) => (
                    <div
                      key={subItem}
                      className="p-2 rounded-lg hover:bg-yellow-600 hover:text-white"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
