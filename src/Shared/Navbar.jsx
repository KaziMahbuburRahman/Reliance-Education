import React, { useState } from "react";

// react icons
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { FaCubesStacked } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import travelLogo from "../assets/reliance_logo/Logo.svg";
import FlagSelector from "./FlagSelector";

const Navbar = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between w-full relative h-auto p-5 bg-white">
        {/* logo */}
        <img src={travelLogo} alt="logo" className="w-[60px] " />

        {/* nav links */}
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] hover:border-t-4 hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            <Link to="/">Home</Link>
          </li>

          {/* about us mega menu */}
          <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] uppercase flex items-center gap-[3px] group relative">
            About
            <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
            <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
              <div className="grid grid-cols-2">
                <ul className="flex flex-col gap-[7px] text-[#424242]">
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Message From CEO
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    
                    Tour Package
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    
                    Visa Assistance
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Umrah Package
                  </li>
                </ul>

                <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Air Ticket
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Professional recognition
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Company profile
                  </div>
                </div>
              </div>
            </article>
          </li>

          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] uppercase group relative flex items-center gap-[3px]">
            <Link to="/courses">courses</Link>
            <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
            <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
              <div className="grid grid-cols-2">
                <ul className="flex flex-col gap-[7px] text-[#424242]">
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Message From CEO
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    
                    Tour Package
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    
                    Visa Assistance
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Umrah Package
                  </li>
                </ul>

                <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Air Ticket
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Professional recognition
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Company profile
                  </div>
                </div>
              </div>
            </article>
          </li>

          {/* service mega menu */}
          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] uppercase group relative flex items-center gap-[3px]">
            Universities
            <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
            <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
              <div className="grid grid-cols-2">
                <ul className="flex flex-col gap-[7px] text-[#424242]">
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Message From CEO
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    
                    Tour Package
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    
                    Visa Assistance
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Umrah Package
                  </li>
                </ul>

                <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Air Ticket
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Professional recognition
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                    Company profile
                  </div>
                </div>
              </div>
            </article>
          </li>

          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] hover:border-t-4 hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Scholarships
          </li>

          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] hover:border-t-4 hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Associates
          </li>

          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] hover:border-t-4 hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Student service
          </li>
          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] hover:border-t-4 hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Contact
          </li>
          <li className="lg:flex items-center justify-center gap-[10px] hidden mt-5">
            <FlagSelector />
          </li>
        </ul>
        {/* Australia Country changer */}

        <CiMenuFries
          className="text-[1.6rem] text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
        {/* mobile sidebar */}
        <aside
          className={` ${
            mobileSidebarOpen ? "opacity-100 z-20" : "opacity-0 z-[-1]"
          } md:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer uppercase flex items-center gap-[10px]">
              <Link to="/courses">courses</Link>
            </li>

            <li
              onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
              className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer uppercase flex items-center gap-[10px]"
            >
              About Us
              <IoIosArrowDown
                className={`${
                  mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"
                } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
              />
            </li>

            {/* about us mega menu */}
            <div
              className={`${
                mobileAboutUsOpen ? "block" : "hidden"
              } group font-[500] ml-6`}
            >
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  {" "}
                  Office Tour
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] mt-4">
                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                  Full Customize
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                  Modern Design
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                  Well Stacktured
                </div>
              </div>
            </div>

            <li
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer uppercase flex items-center gap-[10px]"
            >
              Service
              <IoIosArrowDown
                className={`${
                  mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"
                } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
              />
            </li>

            {/* service mega menu */}
            <div
              className={`${
                mobileServiceOpen ? "hidden" : "block"
              } font-[500] ml-6`}
            >
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  {" "}
                  Office Tour
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] mt-4">
                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                  Full Customize
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                  Modern Design
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                  Well Stacktured
                </div>
              </div>
            </div>
          </ul>

          <div className="pt-2">
            <FlagSelector />
          </div>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
