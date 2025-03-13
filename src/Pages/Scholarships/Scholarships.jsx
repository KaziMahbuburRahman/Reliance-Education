import React from 'react'
import { Link } from 'react-router-dom';
import { FaSquareShareNodes } from "react-icons/fa6";
import ScholarshipCard from './ScholarshipCard';

const Scholarships = () => {
  return (
    <div>
      <div
        className="text-white md:mt-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/Vp08Z1C1/rtgrt.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="py-32 flex items-center justify-center flex-col text-white relative">
          <h1 className="text-5xl mb-4 font-bold">
            Study UK
            <span className="text-color_red"> Scholarships</span>
          </h1>
          <p className="text-lg">
            Undergraduate & Postgraduate scholarships for international students
            from UK Universities
          </p>
        </div>
      </div>

      <div className="w-full xl:w-[1300px] mx-auto">
        <p className="text-text_standard text-center my-10">
          Find a range of international scholarships, bursaries and tuition fees
          discounts offered by our partner universities in the UK and get help
          to apply for these. Please note that these scholarships do not cover
          full course fees, but will reduce part of your course fee to help fund
          your study in the UK.
        </p>
        <div className="flex items-center justify-end pb-5 ">
          <Link className="text-text_large text-color_primary_text font-bold text-end flex items-center justify-center gap-1">
            {" "}
            Share <FaSquareShareNodes />
          </Link>
        </div>
        <div>
            <ScholarshipCard></ScholarshipCard>
        </div>



      </div>
    </div>
  );
}

export default Scholarships
