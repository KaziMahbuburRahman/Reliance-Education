import React, { useState } from "react";

// react icons
import { AnimatePresence, motion } from "framer-motion"; // Import framer motion
import { CiMenuFries } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineInfo } from "react-icons/md";
import { Link } from "react-router-dom";
import FlagSelector from "./FlagSelector";
import logo from "/logo/logo.svg";

const Navbar = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const currentUrl = window.location.pathname.split("/").pop();
  // console.log(currentUrl);
  return (
    <div>
      <nav className="flex items-center justify-between lg:justify-evenly w-full relative h-auto p-5 bg-white md:z-50 ">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-30 " />
        </Link>

        {/* nav links */}
        <ul className="items-center gap-2 font-bold text-[#424242] lg:flex hidden text-[.75rem]">
          <li className="transition-all duration-200 cursor-pointer hover:text-[#3B9DF8] border-t-4 hover:bg-black/5 hover:border-t-red-500 border-transparent uppercase p-2">
            <Link to="/">Home</Link>
          </li>

          {/* about us mega menu */}
          <li className="border-t-4 border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] uppercase flex items-center gap-[3px] group relative">
            About
            <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
            <article className="font-normal p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
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

                <ul className="flex flex-col gap-[10px] border-l text-black border-[#e5eaf2] pl-[30px]">
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Air Ticket
                  </li>

                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Professional recognition
                  </li>

                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Company profile
                  </li>
                </ul>
              </div>
            </article>
          </li>

          <li className="border-t-4 border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] uppercase group relative flex items-center gap-[3px]">
            <Link to="/courses">courses</Link>
            <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
            <article className="font-normal p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
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

                <ul className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px] text-black">
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Air Ticket
                  </li>

                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Professional recognition
                  </li>

                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Company profile
                  </li>
                </ul>
              </div>
            </article>
          </li>

          {/* service mega menu */}
          <li className="border-t-4 border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] uppercase group relative flex items-center gap-[3px]">
            <Link to="/universities">Universities</Link>
            <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
            <article className="font-normal p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
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

                <ul className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px] text-black">
                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Air Ticket
                  </li>

                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Professional recognition
                  </li>

                  <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                    Company profile
                  </li>
                </ul>
              </div>
            </article>
          </li>

          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] border-t-4 border-transparent hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Scholarships
          </li>

          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] border-t-4 border-transparent hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Associates
          </li>

          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] border-t-4 border-transparent hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Student service
          </li>
          <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] border-t-4 border-transparent hover:bg-black/5 hover:border-t-red-500 uppercase p-2">
            Contact
          </li>
        </ul>
        {/* Australia Country changer */}
        <li className="lg:flex items-center justify-center hidden mt-5 w-16 ml-9">
          <FlagSelector />
        </li>
        {/*  <!-- Mobile trigger --> */}
        <CiMenuFries
          className="text-[1.6rem] text-[#424242]c cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        {/*  <!-- Side Navigation --> */}
        {/* this sidebar is showing on large device because of lg:translate-x-0 */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <motion.aside
              initial={{ translateX: -300 }}
              animate={{ translateX: 0 }}
              exit={{
                translateX: -300,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              id="nav-menu-4"
              aria-label="Side navigation"
              className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
                mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
                <div className="">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-full text-white"
                  >
                    <img
                      src={logo}
                      alt="user name"
                      title="user name"
                      width="200"
                      height="48"
                      className="max-w-full"
                    />
                    {/* <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-sky-500 p-1 text-sm text-white">
                  <span className="sr-only"> online </span>
                </span> */}
                  </a>
                </div>
                {/* <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
              <h4 className="w-full truncate text-base text-slate-700">
                Luke Skywalker
              </h4>
              <p className="w-full truncate text-sm text-slate-500">
                Jedi warrior
              </p>
            </div> */}
              </div>
              <nav
                aria-label="side navigation"
                className="flex-1 divide-y divide-slate-100 overflow-auto"
              >
                <div>
                  <ul className="flex flex-1 flex-col gap-1 py-3">
                    <li
                      onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                      className="px-3"
                    >
                      <Link
                        to="/"
                        className={`flex items-center gap-3 rounded p-3 text-slate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[current=page]:text-emerald-500 ${
                          currentUrl === "" && "bg-sky-50"
                        }`}
                      >
                        <div className="flex items-center self-center">
                          <FiHome className="h-7 w-7" />
                        </div>
                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                          Home
                        </div>
                      </Link>
                    </li>
                    <li
                      onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                      className="px-3"
                    >
                      <Link
                        to="/courses"
                        className={`flex items-center gap-3 rounded p-3 text-slate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[current=page]:text-emerald-500 ${
                          currentUrl === "courses" && "bg-sky-50"
                        }`}
                      >
                        <div className="flex items-center self-center ">
                          <MdOutlineInfo className="h-7 w-7" />
                        </div>
                        <div
                          onClick={() =>
                            setMobileSidebarOpen(!mobileSidebarOpen)
                          }
                          className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm"
                        >
                          Courses
                        </div>
                        <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                          41<span className="sr-only"> new notifications</span>
                        </span>
                      </Link>
                    </li>
                    {/* onClick={() =>
                            setMobileSidebarOpen(!mobileSidebarOpen)
                          } <li className="px-3">
                    
                                <a
                                    href="#"
                                    className="flex items-`center gap-3 rounded p-3 text-s{ate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[curren`}t=page]:text-emerald-500 
                                >
                                    <div className="flex items-center self-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                            aria-label="Dashboard icon"
                                            role="graphics-symbol"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Team members
                                    </div>
                                </a>
                            </li> */}
                    <li
                      onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                      className="px-3"
                    >
                      <Link
                        to="/universities"
                        className={`flex items-center gap-3 rounded p-3 text-slate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[current=page]:text-emerald-500 ${
                          currentUrl === "universities" && "bg-sky-50"
                        }`}
                      >
                        <div className="flex items-center self-center ">
                          <MdOutlineInfo className="h-7 w-7" />
                        </div>
                        <div
                          onClick={() =>
                            setMobileSidebarOpen(!mobileSidebarOpen)
                          }
                          className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm"
                        >
                          Universities
                        </div>
                        <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                          7<span className="sr-only"> new notifications</span>
                        </span>
                      </Link>
                    </li>
                    <li
                      onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                      className="px-3"
                    >
                      <a
                        href="#"
                        className={`flex items-center gap-3 rounded p-3 text-slate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[current=page]:text-emerald-500 ${
                          currentUrl === "coursess" && "bg-sky-50"
                        }`}
                      >
                        <div className="flex items-center self-center ">
                          <MdOutlineInfo className="h-7 w-7" />
                        </div>
                        <div
                          onClick={() =>
                            setMobileSidebarOpen(!mobileSidebarOpen)
                          }
                          className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm"
                        >
                          Notifications
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-1 flex-col gap-1 py-3">
                    <li
                      onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                      className="px-3"
                    >
                      <a
                        href="#"
                        className={`flex items-center gap-3 rounded p-3 text-slate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[current=page]:text-emerald-500 ${
                          currentUrl === "coursess" && "bg-sky-50"
                        }`}
                      >
                        <div className="flex items-center self-center">
                          <MdOutlineInfo className="h-7 w-7" />
                        </div>
                        <div
                          onClick={() =>
                            setMobileSidebarOpen(!mobileSidebarOpen)
                          }
                          className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm"
                        >
                          Documents
                        </div>
                      </a>
                    </li>
                    <li
                      onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                      className="px-3"
                    >
                      <a
                        href="#"
                        className={`flex items-center gap-3 rounded p-3 text-slate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[current=page]:text-emerald-500 ${
                          currentUrl === "coursses" && "bg-sky-50"
                        }`}
                      >
                        <div className="flex items-center self-center ">
                          <MdOutlineInfo className="h-7 w-7" />
                        </div>
                        <div
                          onClick={() =>
                            setMobileSidebarOpen(!mobileSidebarOpen)
                          }
                          className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm"
                        >
                          Media & files
                        </div>
                      </a>
                    </li>
                    <li
                      onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                      className="px-3"
                    >
                      <a
                        href="#"
                        className={`flex items-center gap-3 rounded p-3 text-slate-700 transition-colorsx hover:bg-sky-50 hover:text-sky-500  aria-[current=page]:bg-sky-50 aria-[current=page]:text-emerald-500 ${
                          currentUrl === "coursess" && "bg-sky-50"
                        }`}
                      >
                        <div className="flex items-center self-center ">
                          <MdOutlineInfo className="h-7 w-7" />
                        </div>
                        <div
                          onClick={() =>
                            setMobileSidebarOpen(!mobileSidebarOpen)
                          }
                          className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm"
                        >
                          Storage
                        </div>
                      </a>
                    </li>
                    <li className="flex items-center ml-3 px-3">
                      <FlagSelector />
                    </li>
                  </ul>
                </div>
              </nav>
              {/* <div className="p-3">
            <div
              className="w-full rounded border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-500"
              role="alert"
            >
              <h3 className="mb-2 font-semibold">Backup completed.</h3>
              <p>
                You successfully read this important alert message. Blue often
                indicates a neutral informative change or action.{" "}
              </p>
            </div>
          </div> */}
              <footer className="border-t border-slate-200 p-3">
                <a
                  onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                  className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colorsx hover:text-sky-500 "
                >
                  <div className=" flex items-center self-center ">
                    <IoIosCloseCircleOutline className="h-7 w-7" />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ">
                    Close
                  </div>
                </a>
              </footer>
            </motion.aside>
          )}
        </AnimatePresence>

        {/*  <!-- Backdrop --> */}
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colorsx sm:hidden ${
            mobileSidebarOpen ? "block" : "hidden"
          }`}
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      </nav>
    </div>
  );
};

export default Navbar;
