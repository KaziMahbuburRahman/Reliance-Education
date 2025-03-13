import React from "react";
import { Link } from "react-router-dom";

const scholarships = [
  {
    id: 1,
    university: "University of Brighton",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/bu_test1.jpg",
    amount: "up to £3500",
    course: "Undergraduate and postgraduate (Taught)",
    eligibility: "All nationals",
  },
  {
    id: 2,
    university: "Oxford University",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/uel_log1.jpg",
    amount: "up to £5000",
    course: "Undergraduate and postgraduate",
    eligibility: "International students",
  },
  {
    id: 3,
    university: "Cambridge University",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/nun.jpg",
    amount: "up to £4000",
    course: "Masters and PhD",
    eligibility: "All nationals",
  },
  {
    id: 4,
    university: "Imperial College London",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/Ulster-University%20logo.png",
    amount: "up to £4500",
    course: "Undergraduate and Masters",
    eligibility: "All students",
  },
  {
    id: 5,
    university: "University of Edinburgh",
    logo: "https://www.totalstudentcare.com/uploades/institution/original/3.jpg",
    amount: "up to £3000",
    course: "Postgraduate programs",
    eligibility: "International applicants",
  },
];

const ScholarshipCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
      {scholarships.map((scholarship) => (
        <div
          key={scholarship.id}
          className="bg-white rounded-lg shadow-md overflow-hidden border"
        >
          <div className="flex justify-center border p-4 border-dashed border-color_primary_text m-10 w-[70%] mx-auto">
            <img
              src={scholarship.logo}
              alt={scholarship.university}
              className="w-full h-full"
            />
          </div>
          <hr />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-blue-700">
              {scholarship.university} Scholarships
            </h2>
            <p className="mt-2">
              <span className="font-bold">Scholarship Amount:</span>{" "}
              {scholarship.amount}
            </p>
            <p className="mt-1">
              <span className="font-bold">Course for scholarship:</span>{" "}
              {scholarship.course}
            </p>
            <p className="mt-1">
              <span className="font-bold">Eligible country:</span>{" "}
              {scholarship.eligibility}
            </p>
          </div>
          <div className="p-4 bg-gray-100">
            <Link to="/scholarships-details">
              <button className="w-full bg-color_red font-bold text-white py-2 rounded-md hover:bg-red-700 transition">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipCard;
