import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

interface MenuItemProps {
  name: string;
  link?: string;
  dropdown?: { name: string; link: string }[][];
}

const MenuItem: React.FC<MenuItemProps> = ({ name, link, dropdown }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const menuItemRef = useRef<HTMLLIElement | null>(null);

  const handleDropdownToggle = () => {
    setOpenDropdown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuItemRef.current &&
        !menuItemRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Clean up event listener when unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <li ref={menuItemRef} className="relative py-2.5 font-semibold text-black">
      {dropdown ? (
        <>
          <button
            onClick={handleDropdownToggle}
            className="flex items-center px-4 py-2 hover:bg-red-900 hover:rounded-xl hover:text-white w-full"
          >
            {name} <ChevronDown className="w-4 h-4 ml-2" />
          </button>
          {openDropdown && (
            <div
              ref={dropdownRef}
              className="absolute left-0 top-full bg-white text-black shadow-lg p-4 grid gap-2 w-64 z-10"
            >
              {dropdown.flat().map((subItem, index) => (
                <div
                  key={index}
                  className="p-2 rounded-lg hover:bg-yellow-600 hover:text-white"
                >
                  <Link to={subItem.link}>{subItem.name}</Link>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={link || "#"}
          className="block px-4 py-2 hover:bg-red-900 hover:rounded-xl hover:text-white"
        >
          {name}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
