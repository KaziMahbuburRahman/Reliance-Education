import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"; // for menu icons
import { Link, useLocation } from "react-router-dom";
import img from "../../src/assets/reliance_logo/Logo.svg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update the selected state based on the current path
    const path = location.pathname;
    setSelected(path);
  }, [location]);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const currentPage = localStorage.getItem("selectedPage");
    if (currentPage) {
      setSelected(currentPage);
    }
  }, []);

  const handleLinkClick = (page) => {
    setSelected(page);
    localStorage.setItem("selectedPage", page);
    setIsSidebarOpen(false); // close sidebar after link click
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false); // close sidebar if clicked outside
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <nav className="bg-white z-10 w-full shadow-lg">
        <div className="w-full  xl:w-[1300px] mx-auto   lg:py-p_8px  flex justify-between items-center  ">
          {/* Logo Section */}
          <div className="lg:flex items-center overflow-hidden hidden gap-2">
            <div className=" lg:h-[90px] w-full  py-5  lg:py-0  lg:my-2  overflow-hidden">
              <img
                src={img}
                alt="Travelley Logo"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Desktop Menu Items */}

          <div className="space-x-6 hidden lg:flex  ">
            <Link
              to="/"
              className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2 ${
                selected === "/"
                  ? "  text-color_navbar_hover border-color_navbar_hover"
                  : " hover:text-color_navbar_hover group"
              }`}
            >
              Home
              {selected !== "/" && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
              )}
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Link
                to="/courses"
                className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2 ${
                  isOpen
                    ? "text-color_navbar_hover border-color_navbar_hover"
                    : "hover:text-color_navbar_hover group"
                }`}
              >
                Courses
                {!isOpen && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>

              {/* Dropdown Options */}
              {isOpen && (
                <div
                  className="absolute left-0 mt-1 w-[500px] bg-white shadow-xl rounded-sm  z-50 border-b-4 border-color_navbar_hover"
                  onMouseEnter={() => setIsOpen(true)} // Mouse dropdown er vitore thakle hide hobe na
                  onMouseLeave={() => setIsOpen(false)} // Mouse sorale hide hobe
                >
                  <ul className="py-2 flex items-start justify-between gap-4 pb-8 ">
                    <li className="  flex flex-col flex-1">
                      <p className="font-bold px-4 py-2 text-text_large flex items-center justify-center">
                        Course Level
                      </p>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        English course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Distance learning course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Foundation course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Undergraduate course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Postgraduate course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Professional course
                      </Link>
                    </li>
                    <li className=" flex flex-col flex-1 border-l border-black">
                      <p className="px-4 py-2 text-text_large flex items-center justify-center font-bold">
                        Popular Subject
                      </p>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        English course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Distance learning course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Foundation course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Undergraduate course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Postgraduate course
                      </Link>
                      <Link
                        className="px-4 text-sm mb-1 hover:text-black text-color_navbar_hover"
                        to="/company-overview"
                      >
                        Professional course
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2 ${
                selected === "/about"
                  ? " text-color_navbar_hover border-color_navbar_hover"
                  : "hover:text-color_navbar_hover group"
              }`}
            >
              About
              {selected !== "/about" && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
              )}
            </Link>
            <Link
              to="/universities"
              className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2 ${
                selected === "/universities"
                  ? " text-color_navbar_hover border-color_navbar_hover"
                  : "hover:text-color_navbar_hover group"
              }`}
            >
              Universities
              {selected !== "/universities" && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
              )}
            </Link>
            <Link
              to="/scholarships"
              className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2 ${
                selected === "/scholarships"
                  ? " text-color_navbar_hover border-color_navbar_hover"
                  : "hover:text-color_navbar_hover group"
              }`}
            >
              Scholarships
              {selected !== "/scholarships" && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
              )}
            </Link>
            <Link
              to="/associates"
              className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2 ${
                selected === "/associates"
                  ? " text-color_navbar_hover border-color_navbar_hover"
                  : "hover:text-color_navbar_hover group"
              }`}
            >
              Associates
              {selected !== "/associates" && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
              )}
            </Link>
            <Link
              to="/student_service"
              className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2 ${
                selected === "/student_service"
                  ? " text-color_navbar_hover border-color_navbar_hover"
                  : "hover:text-color_navbar_hover group"
              }`}
            >
              Student Service
              {selected !== "/student_service" && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`relative pb-[4px] font-bold text-black hover:border-t-2 border-t-2 border-white hover:border-color_navbar_hover hover:bg-gray-200 px-2  ${
                selected === "/contact"
                  ? " text-color_navbar_hover border-color_navbar_hover"
                  : "hover:text-color_navbar_hover  group"
              }`}
            >
              Contact
              {selected !== "/contact" && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
              )}
            </Link>

            {/* Repeat for other links with their respective paths */}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center justify-between z-50 w-full">
            <div className="overflow-hidden">
              <img
                src={img}
                alt="Travelley   Logo"
                className="w-[60px]  lg:w-[120px] lg:h-[70px] object-contain py-5 lg:py-0"
              />
            </div>
            <button className="text-white pr-2" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed z-30 top-0 right-0 h-full w-[70%] bg-white shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 lg:hidden`}
          >
            <div className="flex flex-col p-4 space-y-4 mt-20">
              <Link
                to="/"
                className={`relative pb-[4px] font-bold ${
                  selected === "/"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Home
                {selected !== "/" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>

              <div className="relative">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center font-bold text-black hover:text-clr_primary_text"
                >
                  Overview
                  <FaChevronDown className="ml-2 text-sm transition-transform duration-300" />
                </button>

                {/* Dropdown Links */}
                {isOpen && (
                  <div className=" left-0 mt-2 w-48 bg-white ">
                    <Link
                      to="/company-overview"
                      className={`block mx-4 pb-[4px] mt-2 font-bold ${
                        selected === "/company-overview"
                          ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                          : "text-black hover:text-clr_primary_text group"
                      }`}
                      onClick={() => setSelected("/company-overview")}
                    >
                      Company Overview
                    </Link>
                    <Link
                      to="/message-from-ceo"
                      className={`block mx-4 pb-[4px] mt-2  font-bold  ${
                        selected === "/message-from-ceo"
                          ? "text-clr_primary_text border-b-2 border-clr_primary_text mx-2 "
                          : "text-black hover:text-clr_primary_text group mx-2"
                      }`}
                      onClick={() => setSelected("/message-from-ceo")}
                    >
                      Message From CEO
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/tour-package"
                className={`relative pb-[4px] font-bold ${
                  selected === "/tour-package"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Tour Package
                {selected !== "/tour-package" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <Link
                to="/visa-assistance"
                className={`relative pb-[4px] font-bold ${
                  selected === "/visa-assistance"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Visa Assistance
                {selected !== "/visa-assistance" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <Link
                to="/umrah-package"
                className={`relative pb-[4px] font-bold ${
                  selected === "/umrah-package"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Umrah Package
                {selected !== "/umrah-package" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <Link
                to="/air-ticket"
                className={`relative pb-[4px] font-bold ${
                  selected === "/air-ticket"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Air Ticket
                {selected !== "/air-ticket" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <Link
                to="/about-us"
                className={`relative pb-[4px] font-bold ${
                  selected === "/about-us"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                About Us
                {selected !== "/about-us" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
