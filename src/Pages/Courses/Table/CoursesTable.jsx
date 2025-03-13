"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

// Sample course data
const courses = [
  {
    id: "1",
    name: "Advanced Diploma in Accounting and Finance (ACCA route)",
    awardingBody: "BPP University",
    fees: "£8,010.00 full fees",
    color: "blue",
    details:
      "This course provides a comprehensive understanding of accounting principles and financial management. It follows the ACCA curriculum and prepares students for professional accounting careers.",
  },
  {
    id: "2",
    name: "ACCA Professional Level Papers",
    awardingBody: "BPP University",
    fees: "£7,500.00 full fees",
    color: "green",
    details:
      "Focused on advanced professional accounting skills, this course covers complex financial reporting, strategic business analysis, and advanced taxation.",
  },
  {
    id: "3",
    name: "BSc (Hons) Accounting and Finance",
    awardingBody: "BPP University",
    fees: "£9,000.00 per year",
    color: "yellow",
    details:
      "A comprehensive undergraduate degree program that provides students with a solid foundation in accounting principles, financial management, and business operations.",
  },
  {
    id: "4",
    name: "MBA in Financial Management",
    awardingBody: "BPP University",
    fees: "£12,500.00 full fees",
    color: "purple",
    details:
      "An advanced degree program designed for professionals seeking to enhance their financial management skills and advance to leadership positions.",
  },
  {
    id: "5",
    name: "Certificate in Financial Services",
    awardingBody: "London Institute of Banking",
    fees: "£3,200.00 full fees",
    color: "red",
    details:
      "An introductory program covering the fundamentals of financial services, banking operations, and customer relationship management in the financial sector.",
  },
];

// Helper function to get border colors
function getBorderColor(color) {
  switch (color) {
    case "blue":
      return "#3b82f6";
    case "green":
      return "#22c55e";
    case "yellow":
      return "#eab308";
    case "purple":
      return "#a855f7";
    case "red":
      return "#ef4444";
    default:
      return "#3b82f6";
  }
}

export default function CoursesTable() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [filter, setFilter] = useState("all");

  // Filter courses based on selected filter
  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => {
          if (filter === "acca")
            return course.name.toLowerCase().includes("acca");
          if (filter === "bsc")
            return course.name.toLowerCase().includes("bsc");
          if (filter === "diploma")
            return course.name.toLowerCase().includes("diploma");
          return true;
        });

  const toggleExpand = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="bg-white w-full mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Our <span className="text-red-500">Courses</span>
        </h2>
        <div className="w-64 relative">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="w-full p-2 border-2 border-gray-800 rounded-md appearance-none bg-white pr-8 focus:outline-none"
          >
            <option value="all">All courses</option>
            <option value="acca">ACCA courses</option>
            <option value="bsc">BSc courses</option>
            <option value="diploma">Diploma courses</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="border rounded-sm overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-3 bg-gray-100">
          <div className="p-4 font-bold text-blue-900">Course Name</div>
          <div className="p-4 font-bold text-blue-900">Awarding body</div>
          <div className="p-4 font-bold text-blue-900">Course Fees</div>
        </div>

        {/* Table rows */}
        {filteredCourses.map((course) => (
          <div key={course.id} className="border-t">
            {/* Main row */}
            <div
              className="grid grid-cols-3 hover:bg-gray-50 cursor-pointer"
              onClick={() => toggleExpand(course.id)}
            >
              <div className="p-4 flex items-center gap-2 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: getBorderColor(course.color) }}
                ></div>
                <FaChevronRight
                  className={`transition-transform ${
                    expandedCourse === course.id ? "rotate-90" : ""
                  }`}
                  size={20}
                />
                {course.name}
              </div>
              <div className="p-4">{course.awardingBody}</div>
              <div className="p-4">{course.fees}</div>
            </div>

            {/* Expanded content */}
            {expandedCourse === course.id && (
              <div className="p-4 bg-gray-50 border-t">
                <h3 className="font-semibold mb-2">Course Details</h3>
                <p>{course.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
