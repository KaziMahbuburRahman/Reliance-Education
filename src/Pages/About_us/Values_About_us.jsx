
import {
  FaPlane,
  FaHotel,
  FaBus,
  FaShip,
  FaCar,
  FaGlobe,
  FaPassport,
  FaHiking,
  FaUsers,
  FaHeadset,
  FaHandshake,
} from "react-icons/fa";

const Values_About_us = () => {
  const services = [
    {
      icon: <FaGlobe size={40} />,
      title: "Worldwide Tour & Holiday Packages",
    },
    {
      icon: <FaPassport size={40} />,
      title: "Worldwide Visa Processing Assistance",
    },
    {
      icon: <FaPlane size={40} />,
      title: "Worldwide Airline Reservation & Ticketing",
    },
    {
      icon: <FaHiking size={40} />,
      title: "Umrah Package with Complete Support",
    },
    { icon: <FaHotel size={40} />, title: "Worldwide Hotel Reservation" },
    {
      icon: <FaBus size={40} />,
      title: "Worldwide Bus, Railway & Boat Ticketing",
    },
    { icon: <FaShip size={40} />, title: "Worldwide & Local Cruise Service" },
    { icon: <FaCar size={40} />, title: "Worldwide Car Rental Services" },
    { icon: <FaHiking size={40} />, title: "Arranging Destination Weddings" },
    { icon: <FaUsers size={40} />, title: "Ground Handling Services" },
    {
      icon: <FaHeadset size={40} />,
      title: "Multilingual Tour Guide Services",
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Meet & Assist Services at Airports",
    },
  ];

  return (
    <div className="bg-clr_gray_500 lg:py-10 mt-5 lg:mt-0">
      <div className=" w-full xl:w-[1300px] mx-auto">
        <h2 className="text-center text-5xl font-bold text-[#002A6C] mb-6 py-10 lg:py-0">
          Values
        </h2>
        <hr className=" border-b-4 border-[#002A6C] mb-4 w-[20%] mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-10  text-center  transition-shadow relative mb-10 border border-gray-200"
            >
              <div className=" justify-center mb-5 text-[#002A6C]  absolute bg-white rounded-full -top-10 left-40  shadow-lg">
                <p className="p-4 text-base">{service.icon}</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-10">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values_About_us;
