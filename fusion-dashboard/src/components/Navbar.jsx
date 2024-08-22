import React from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const userMenuItems = [
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Logout", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://via.placeholder.com/32"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Dropdown label="OM PANDEY" items={userMenuItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
