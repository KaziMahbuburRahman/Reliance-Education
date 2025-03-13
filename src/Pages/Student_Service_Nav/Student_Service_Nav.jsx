import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import AccordionItem from '../Associates/AccordionItem';

const Student_Service_Nav = () => {
   const services = [
     "Free student consultancy for university admission",
     "Admission applications help to universities",
     "Information & help with scholarship application",
     "Admission & Visa Interview preparation sessions",
     "Student Visa application advice & help",
     "Pre & post arrival advice & supports",
   ];
   const [openIndex, setOpenIndex] = useState(0);
        
         const accordionData = [
           {
             title: "WE HAVE ADEQUATE KNOWLEDGE ABOUT EVERY COUNTRY",
             content:
               "Whether you’re searching for group tours, customized tours, or solo tours, Travelley will provide you with an experience like no other in Bangladesh and the Subcontinent, as well as all other countries.\n\nCORE COMPETENCY: Our biggest asset is our ability to manage the ground. We open doors that most individuals seem unable to open.",
           },
           {
             title: "ASSOCIATES IN ALL THE RIGHT PLACES",
             content: "Details about associates...",
           },
           { title: "EXQUISITE PLANNING", content: "Details about planning..." },
           { title: "SOLIDARITY", content: "Details about solidarity..." },
           { title: "CONSISTENCY", content: "Details about consistency..." },
           { title: "RELIABILITY", content: "Details about reliability..." },
         ];
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
            Student{" "}
            <span className="text-[#E41F3F]"> services and support</span>
          </h1>
          <p className="text-lg">
            Services and support to international students throughout university
            admission process and visa application
          </p>
        </div>
      </div>
      <div className="w-full xl:w-[1300px] mx-auto">
        <p className="text-text_medium text-center my-10">
          We strive to extend our services to wider extent to fulfil your
          requirements as and when required, our target is to exceed your
          expectation and give you total satisfaction. It is not our intention
          to limit the service we are keen to provide you with a list, but this
          could specify some of the obvious services you can expect from us and
          not exhaustive.
        </p>
        <div>
          <h1 className="text-color_primary_text text-text_30px font-bold text-center my-20">
            University admission help by Total Student Care(TSC)
          </h1>
          <div>
            <div className="flex flex-col md:flex-row items-start gap-6 p-4">
              {/* YouTube Video */}
              <div className="w-full md:w-1/2">
                <iframe
                  className="w-full h-56 md:h-64 lg:h-72"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Total Student Care (TSC)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center justify-center gap-2">
                  <FaUniversity className="text-color_primary_text text-7xl" />
                </div>
                <h2 className="text-4xl font-semibold mt-2 text-center">
                  University admission HELP by TSC
                </h2>
                <ul className="mt-3 space-y-2 text-gray-700 text-center mx-6 ">
                  {[
                    "High quality trained and experienced student counsellors",
                    "Extended support and help provided all the way through",
                    "Leading and award-winning international student services",
                    "Passionate about you and your higher study ambition",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center  gap-2">
                      <FaCheck className="text-color_primary_text" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center py-12 w-full border mb-28 lg:my-32"
        style={{
          backgroundImage:
            "url('https://www.totalstudentcare.com/uploades/1686658546_1660041558_request-talent-wimbush-associates1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Main Content Box */}
        <div className="w-full lg:w-[50%]  mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 relative top-32">
          <h2 className="text-center text-2xl font-bold text-blue-900">
            Services for students
          </h2>

          <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="https://www.totalstudentcare.com/uploades/1686658546_1660041558_request-talent-wimbush-associates1.jpg"
                alt="Students"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* List of Services */}
            <div className="w-full md:w-1/2">
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 bg-blue-100 rounded-lg p-3 shadow-sm"
                  >
                    <span className="flex items-center justify-center w-6 h-6 text-white bg-blue-600 rounded-full font-bold">
                      {index + 1}
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" xl:w-[1300px] w-full mx-auto">
        <p className="text-center text-text_xl font-bold mt-20">
          Frequently asked questions
        </p>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Student_Service_Nav
