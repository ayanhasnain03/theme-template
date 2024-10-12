import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants/constants";
import ThemeTogglerBtn from "../shared/Buttons/ThemeTogglerBtn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPage = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="font-semibold text-xl">LOGO</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center flex-row space-x-6">
        {navLinks?.map((elem) => (
          <div
            key={elem.path}
            className="flex items-center justify-center flex-col relative"
          >
            <Link
              to={elem.path}
              className={`text-lg ${
                elem.path === currentPage.pathname
                  ? "font-bold"
                  : "text-gray-400"
              } hover:opacity-55 transition duration-200`}
            >
              {elem.label}
            </Link>
            {elem.path === currentPage.pathname && (
              <div className="bg-black h-[2px] w-8 rounded-full absolute top-6 transform ease-in-out duration-150"></div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Theme Toggle Button */}
      <div className="hidden md:block">
        <ThemeTogglerBtn />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-lightBackground dark:bg-darkBackground z-10 md:hidden">
          {navLinks?.map((elem) => (
            <Link
              to={elem.path}
              key={elem.path}
              className={`block text-lg px-4 py-2 ${
                elem.path === currentPage.pathname
                  ? "font-bold"
                  : "text-gray-400"
              } hover:opacity-55 transition duration-200`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {elem.label}
            </Link>
          ))}
          <div className="p-4">
            <ThemeTogglerBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
