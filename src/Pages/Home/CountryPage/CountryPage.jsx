import React from "react";

const CountryPage = () => {
  const items = [
    { image: "/flag/1.jpg", name: "Bangladesh" },
    { image: "/flag/2.webp", name: "Nigeria" },
    { image: "/flag/3.webp", name: "India" },
    { image: "/flag/4.png", name: "Pakistan" },
    { image: "/flag/5.png", name: "Sri Lanka" },
    { image: "/flag/6.jpeg", name: "Nepal" },
    { image: "/flag/7.png", name: "Morocco" },
    { image: "/flag/8.png", name: "UAE" },
    { image: "/flag/9.webp", name: "Malaysia" },
    { image: "/flag/10.png", name: "Ghana" },
    { image: "/flag/11.png", name: "Indonesia" },
    { image: "/flag/12.png", name: "Saudi Arabia" },
    { image: "/flag/13.png", name: "South Africa" },
    { image: "/flag/14.jpg", name: "South Korea" },
    { image: "/flag/15.webp", name: "Philippines" },
    { image: "/flag/16.webp", name: "USA" },
    { image: "/flag/17.webp", name: "Turkey" },
    { image: "/flag/18.webp", name: "Afghanistan" },
  ];

  return (
    <>
      {/* country list  */}
      <div className=" bg-[#222e3d] md:h-[600px] h-[1110px] ">
        <div className="pt-10">
          <h1 className="text-4xl   font-bold text-white text-center">
            UK study entry from your country
          </h1>
          <p className="text-lg mt-3 md:px-0 px-4  text-white text-center">
            Find information about entry requirements, tuition fees, costs,
            benefits, and visa.
          </p>
        </div>
        <div className="mt-14 w-[90%]  md:px-10 px-4 md:mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex  md:items-center gap-4 p-1">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-6 object-cover "
              />
              <p className="text-white text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="text-[#363e47] md:w-[85%] mt-8 w-[95%]  mx-auto  md:px-10" />

        <div className="mt-8 ">
          <div>
            <h1 className="text-center text-4xl font-semibold text-white mb-4">
              Proceed to succeed
            </h1>
            <p className="text-center text-[15px] md:px-0 px-4 font-semibold text-white">
              Take action to go closer to your dream with guide & support from
              our professional team.
            </p>
            <div className=" md:flex text-center md:justify-center gap-12 mt-10">
              <button className="bg-[#e32040] p-2 text-white px-6 cursor-pointer rounded-full w-[300px] transition duration-300 ease-in-out hover:bg-transparent hover:border  hover:text-[#e32040]">
                Check Your admission eligibility
              </button>
              <button className="bg-[#002e6e] p-2 md:mt-0 mt-10 text-white cursor-pointer px-6 rounded-full w-[300px] transition duration-300 ease-in-out hover:bg-transparent hover:border hover:border-white ">
                Do You have a question, ask TSC?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses to study in the UK */}

      <div className="bg-[#f5f5f5] md:h-[430px] h-[800px]">
        <div className="text-center pt-14 ">
          <h1 className="text-3xl  mb-4">
            Courses to <span className="text-red-500">study</span> in the UK
          </h1>
          <p className="md:px-0 px-6">
            Know your course and choose the right course level for your higher
            study and future careers
          </p>
        </div>
        <div className="mt-16 md:w-[90%] w-[92%]   md:px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow  flex gap-3 py-2 px-3 items-center">
            <img className="h-10 cursor-pointer" src="/icon/1.PNG" alt="" />
            <h1 className="text-[#001275] text-xl hover:text-red-500 cursor-pointer">
              English
            </h1>
          </div>
          <div className="bg-white shadow  flex gap-3 py-2 px-3 items-center">
            <img className="h-10 cursor-pointer" src="/icon/2.PNG" alt="" />
            <h1 className="text-[#001275] text-xl hover:text-red-500 cursor-pointer">
              Foundation
            </h1>
          </div>
          <div className="bg-white shadow  flex gap-3 py-2 px-3 items-centerr">
            <img className="h-10 cursor-pointer" src="/icon/3.PNG" alt="" />
            <h1 className="text-[#001275] text-xl hover:text-red-500 cursor-pointer">
              Undergraduate
            </h1>
          </div>
          <div className="bg-white shadow  flex gap-3 py-2 px-3 items-centerr">
            <img className="h-10 cursor-pointer" src="/icon/4.PNG" alt="" />
            <h1 className="text-[#001275] text-xl hover:text-red-500 cursor-pointer">
              Postgraduate taught
            </h1>
          </div>
          <div className="bg-white shadow  flex gap-3 py-2 px-3 items-center">
            <img className="h-10 cursor-pointer" src="/icon/5.PNG" alt="" />
            <h1 className="text-[#001275] text-xl hover:text-red-500 cursor-pointer">
              Postgraduate research
            </h1>
          </div>
          <div className="bg-white shadow  flex gap-3 py-2 px-3 items-center">
            <img className="h-10 cursor-pointer" src="/icon/6.PNG" alt="" />
            <h1 className="text-[#001275] text-xl hover:text-red-500 cursor-pointer">
              Professional
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
