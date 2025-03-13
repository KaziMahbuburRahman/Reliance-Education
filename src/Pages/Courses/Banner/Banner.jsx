import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000); // Simulated loading time
  };

  return (
    <div>
      <div>
        <div
          className="md:h-[460px] h-[450px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://www.totalstudentcare.com/uploades/banner/original/find-course-new-banner0.jpg')",
          }}
        >
          {/* Overlay for opacity effect only on the image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

          <div className="relative z-20 flex justify-center flex-col sm:flex-row px-6 sm:px-30 gap-6 sm:gap-44 sm:items-start">
            <div className="md:mt-10 mt-0">
              <h1 className="text-center font-[700] justify-center text-white  text-[4rem] md:p-2 p-0 md:mt-24 mt-10">
                Study <span className="text-[#e41f3f]">UK courses</span>
              </h1>
              <p className="text-white text-lg sm:text-xl md:mt-12 mt-10">
                Foundation, undergraduate, postgraduate taught & research and
                professional courses to study in the UK
              </p>
            </div>
          </div>
        </div>

        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 opacity-60 z-50">
            <div className="text-white text-lg font-semibold">Loading...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
