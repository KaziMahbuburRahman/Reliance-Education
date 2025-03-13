
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

const KeySkills = () => {
  const services = [
    {
      icon: <FaGlobe size={70} />,
      title: "Worldwide Tour & Holiday Packages",
    },
    {
      icon: <FaPassport size={70} />,
      title: "Worldwide Visa Processing Assistance",
    },
    {
      icon: <FaPlane size={70} />,
      title: "Worldwide Airline Reservation & Ticketing",
    },
    {
      icon: <FaHiking size={70} />,
      title: "Umrah Package with Complete Support",
    },
    { icon: <FaHotel size={70} />, title: "Worldwide Hotel Reservation" },
    {
      icon: <FaBus size={70} />,
      title: "Worldwide Bus, Railway & Boat Ticketing",
    },
    { icon: <FaShip size={70} />, title: "Worldwide & Local Cruise Service" },
    { icon: <FaCar size={70} />, title: "Worldwide Car Rental Services" },
    { icon: <FaHiking size={70} />, title: "Arranging Destination Weddings" },
    { icon: <FaUsers size={70} />, title: "Ground Handling Services" },
    {
      icon: <FaHeadset size={70} />,
      title: "Multilingual Tour Guide Services",
    },
    {
      icon: <FaHandshake size={70} />,
      title: "Meet & Assist Services at Airports",
    },
  ];

  return (
    <div className="bg-clr_gray_500 lg:py-10 mt-5 lg:mt-0">
      <div className=" w-full xl:w-[1300px] mx-auto">
        <h2 className="text-center text-5xl font-bold text-[#002A6C] mb-6 py-10 lg:py-0">
          Key skills and core competences gained
        </h2>
        <hr className=" border-b-4 border-[#002A6C] mb-4 w-[20%] mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10  text-center  transition-shadow relative  "
            >
              <div className="flex flex-col items-center justify-center  text-[#002A6C] text-5xl  mb-5 ">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 ">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeySkills;
