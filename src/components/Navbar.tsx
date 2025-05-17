import React, { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import Navigation from "./menu/Navigation";
import Logo from "./menu/Logo";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollableHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="bg-white/90 backdrop-blur-md  h-[80px]  py-3 flex items-center justify-between sticky top-0 z-50 shadow-lg w-full px-2">
      {/* Logo and Text on the Left */}
      <Logo orientation="horizontal" type="both" />

      {/* Mobile Menu Toggle Button on the Right */}
      <button
        className="md:hidden text-black px-4"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}

      <div
        className={`absolute top-0 left-0 h-screen bg-white shadow-md transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none`}
      >
        {/* Mobile Logo and Text at the Top of the Menu */}
        <div className="flex items-center justify-between px-6 py-4 lg:hidden  ">
          <Logo orientation="horizontal" />
          {/* Close Button */}
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <Navigation />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Phone className="text-red-900 w-4 h-4" />
            <span className="text-sm font-serif"> +254 703 082 000</span>
          </div>
          <Button
            onClick={() => (window.location.href = "/contact")}
            className="text-xs font-serif"
            variant="outline"
            size="sm"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div
        id="scroll-progress"
        className="bg-red-700 h-1 absolute bottom-0 left-0 transition-all duration-100 ease-out"
        // className="bg-red-700 h-1 fixed top-0 left-0 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollWidth}%` }}
      />
    </nav>
  );
};

export default Navbar;
