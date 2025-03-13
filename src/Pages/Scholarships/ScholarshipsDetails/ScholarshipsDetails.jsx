import React from "react";
import { FaSquareShareNodes } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ScholarshipsDetails = () => {
  return (
    <div className="w-full xl:w-[1300px] mx-auto p-4 mt-5">
      <div className=" border p-4 border-dashed border-color_primary_text my-10 w-[250px] mx-auto lg:mx-0">
        <img
          src="https://www.totalstudentcare.com/uploades/institution/original/bu_test1.jpg"
          alt="de"
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between  pb-10 ">
        <h2 className="text-xl lg:text-3xl font-bold  text-color_primary_text">
          University of Brighton scholarships
        </h2>

        <Link className="text-text_large text-color_primary_text font-bold text-end  flex items-center justify-center gap-1">
          {" "}
          Share <FaSquareShareNodes />
        </Link>
      </div>
      <table className="w-full border-collapse border border-gray-300  ">
        <tbody className="">
          {[
            ["University/Institution", "University of Brighton"],
            ["Scholarship type", "International Scholarship"],
            ["Study mode", "Full-time"],
            ["Academic year", "2022-2023"],
            ["Intake", "September 2023"],
            [
              "Course for scholarship",
              "Undergraduate and postgraduate (Taught)",
            ],
            ["Scholarship amount", "up to £3500"],
            ["Duration of scholarship grant", "1st year"],
            ["Eligible students", "Self-funding international students"],
            ["Eligible country", "All nationals"],
            [
              "Eligibility criteria",
              "To be eligible to apply you must: be a new, international fee-status student, be holding an offer for a full-time postgraduate taught degree with a minimum course duration of one year, be starting your course in September 2023.",
            ],
            [
              "Deadline for scholarship application",
              "Wednesday 7th June, 2023",
            ],
            [
              "How to apply for this scholarship",
              "Submit your admission application to the university via Total Student Care (TSC). Once you secure your conditional offer, our expert team members will apply for the scholarship on behalf of you.",
            ],
          ].map(([label, value], index) => (
            <tr key={index} className="border-b border-gray-300 h-full ">
              <td className="p-2 font-semibold bg-gray-100 w-1/3 text-start 0">
                {label}
              </td>
              <td className="hidden lg:flex items-center justify-center  p-2 ">:</td>
              <td className="p-2 text-gray-700">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-10 flex flex-col lg:flex-row gap-2 items-center justify-center ">
        <button className="bg-color_red text-white px-4 py-2 rounded hover:bg-red-700  w-full lg:w-fit">
          University profile
        </button>
        <button className="bg-color_primary_text text-white px-4 py-2 rounded hover:bg-blue-700 w-full lg:w-fit">
          Send your admission query
        </button>
        <button className="bg-color_red text-white px-4 py-2 rounded hover:bg-red-600  w-full lg:w-fit">
          Check your admission eligibility
        </button>
      </div>
    </div>
  );
};

export default ScholarshipsDetails;
