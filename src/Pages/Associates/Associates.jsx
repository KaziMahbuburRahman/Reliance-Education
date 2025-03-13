import  { useState } from 'react'
import AccordionItem from './AccordionItem';

const Associates = () => {
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
            TSC
            <span className="text-color_red"> Associates</span>
          </h1>
          <p className="text-lg">
            Foundation course providers, English test providers, agent training
            providers, legal and financial organisation & student support
            service providers
          </p>
        </div>
      </div>
      <div className="xl:w-[1300px] w-full mx-auto">
        <p className="text-center text-text_30px font-bold mt-20 text-color_primary_text">
          Banking <span className="text-color_red"> associates</span>
        </p>
        <div className="flex items-center gap-4 ">
          <div className="flex-1 p-10 ">
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://www.totalstudentcare.com/ux/tsc/img/abrac.png"
                alt=""
              />
            </div>
            <div className="text-center text-text_medium mt-4">
              <h1 className="font-bold text-text_30px text-color_primary_text">
                BRAC Bank
              </h1>
              <p>Bangladesh </p>
            </div>
          </div>
          <div className="flex-1 p-10 ">
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://www.totalstudentcare.com/ux/tsc/img/acitibank.png"
                alt=""
              />
            </div>
            <div className="text-center text-text_medium mt-4">
              <h1 className="font-bold text-text_30px text-color_primary_text">
                City Bank
              </h1>
              <p>Bangladesh </p>
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

export default Associates
