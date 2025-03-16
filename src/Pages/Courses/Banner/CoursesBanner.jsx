const CoursesBanner = () => {
  return (
    <div>
      <div>
        <div
          className="md:h-[400px] h-[400px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://www.totalstudentcare.com/uploades/banner/original/find-course-new-banner0.jpg')",
          }}
        >
          {/* Overlay for opacity effect only on the image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

          <div className="relative z-20 flex justify-center flex-col sm:flex-row px-3 sm:px-30 gap-6 sm:gap-44 sm:items-start">
            <div className="md:mt-10 mt-0">
              <h1 className="text-center font-[700] justify-center text-white text-[2.5rem]  md:text-[4rem] md:p-2 p-0 md:mt-24 mt-10">
                Study <span className="text-[#e41f3f]">UK courses</span>
              </h1>
              <p className="text-white text-[1.0625rem] text-center sm:text-xl md:mt-12 mt-10">
                Foundation, undergraduate, postgraduate taught & research and
                professional courses to study in the UK
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CoursesBanner;
