"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaShareAlt } from "react-icons/fa";
import ScholarshipsBanner from "../Banner/ScholarshipsBanner";

const universities = [
  {
    id: 1,
    name: "University of Brighton",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/bu_test1.jpg",
    amount: "up to £3500",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry: "All nationals",
    link: "https://www.totalstudentcare.com/scholarships/university-of-brighton-scholarships/",
  },
  {
    id: 2,
    name: "University of East London Scholarship",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/uel_log1.jpg",
    amount: "Up to £3000",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry: "All nationals",
    link: "https://www.totalstudentcare.com/scholarships/university-of-east-london-scholarship/",
  },
  {
    id: 3,
    name: "Northumbria University scholarships",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/nun.jpg",
    amount: "Up to £3500",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry: "All nationals",
    link: "https://www.totalstudentcare.com/scholarships/northumbria-university-scholarships/",
  },
  {
    id: 4,
    name: "Ulster University Scholarships",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/Ulster-University logo.png",
    amount: "Up to £3000",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry: "All nationals",
    link: "https://www.totalstudentcare.com/scholarships/ulster-university-scholarships/",
  },
  {
    id: 5,
    name: "BPP University Scholarships",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/3.jpg",
    amount: "Up to £4500",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry: "All nationals",
    link: "https://www.totalstudentcare.com/scholarships/bpp-university-scholarships/",
  },
  {
    id: 6,
    name: "Bangor University Scholarships",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/Bangor-University.jpg",
    amount: "Up to £4000",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry: "All nationals",
    link: "https://www.totalstudentcare.com/scholarships/bangor-university-scholarships/",
  },
  {
    id: 7,
    name: "Queen's University Belfast scholarships",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/3.jpg",
    amount: "Up to £6500",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry:
      "All nationals. Scholarships amount will vary country wise",
    link: "https://www.totalstudentcare.com/scholarships/queen-s-university-belfast-scholarships/",
  },
  {
    id: 8,
    name: "University of Bedfordshire scholarships",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/2.jpg",
    amount: "Up to £1500",
    courses: "Undergraduate and postgraduate (Taught)",
    eligibleCountry: "All nationals",
    link: "https://www.totalstudentcare.com/scholarships/university-of-bedfordshire-scholarships/",
  },
];

export default function ScholarshipList() {
  // const ref = useRef(null)
  // const { scrollY } = useScroll({ target: ref });
  // const backgroundY = useTransform(scrollY, [0, 300], ["0%", "-20%"]); // Adjust range as needed
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(universities.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginatedUniversities = universities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className=" bg-gray-50 ">
      <ScholarshipsBanner />

      {/* Description Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              <span className="inline-block mr-2">
                Find a range of international scholarships
              </span>
            </h2>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <span className="mr-1">Share</span> <FaShareAlt />
            </button>
          </div>
          <p className="text-gray-600 text-center">
            Find a range of international scholarships, bursaries and tuition
            fees discounts offered by our partner universities in the UK and get
            help to apply for these. Please note that these scholarships do not
            cover full course fees, but will reduce part of your course fee to
            help fund your study in the UK.
          </p>

          {/* Scholarship Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {paginatedUniversities.map((uni) => (
              <motion.div
                key={uni.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-4 border-b border-gray-200 flex justify-center items-center">
                  <div className=" relative">
                    <img
                      src={uni.logo || "/placeholder.svg"}
                      alt={uni.name}
                      className="object-contain w-full h-44 border-2 border-[#538de64d] border-dashed"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {uni.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p>
                      <span className="font-medium text-gray-700">
                        Scholarship Amount:{" "}
                      </span>
                      {uni.amount}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">
                        Course for scholarship:{" "}
                      </span>
                      {uni.courses}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">
                        Eligible country:{" "}
                      </span>
                      {uni.eligibleCountry}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <a
                      href={uni.link}
                      className="w-full text-center inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8 mb-12">
          <nav className="flex items-center space-x-1">
            <button
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
              className={`px-3 py-2 rounded-md ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              disabled={currentPage === 1}
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                currentPage < totalPages && handlePageChange(currentPage + 1)
              }
              className={`px-3 py-2 rounded-md ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
