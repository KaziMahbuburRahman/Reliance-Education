
import Values from './Values_About_us';
import KeySkills from './KeySkills';
import Awards_And_Agent from './Awards_And_Agent';

const About_US = () => {
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
            About <span className="text-[#E41F3F]">TSC</span>
          </h1>
          <p className="text-lg">
            Total Student Care (TSC) is an award winning, a highly trusted
            education agent led by best educational consultants
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 w-full xl:w-[1200px] mx-auto">
        <div className="w-full h-[400px] overflow-hidden m-5 flex-1">
          <img
            className="w-full h-full object-cover"
            src="https://www.totalstudentcare.com/ux/tsc/img/aboutus1.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-3 text-justify">
            Total Student Care (TSC) is an Education Agent with global
            recognition and reputation – we provide helps and advice to
            International Students who pursue higher education abroad.
          </p>
          <p className="text-gray-500 mb-3 text-justify">
            We believe that education is a fundamental right and everyone should
            have access to quality higher education. With this view in mind, we
            strive to create opportunities for those who have genuine aspiration
            and honest intention, who seek excellent quality in tuition, student
            services, qualifications and career prospects post qualification.
          </p>
          <p className="text-gray-500 mb-3 text-justify">
            We work in the best interest of both students and our partner
            universities and colleges - we are professional and reliable.
          </p>
          <p className="font-semibold text-justify">
            We follow the British Council s Guide to Good Practice for
            Education Agents in our conducts and the Principles of London
            Statement. In addition to the professional code of conducts, we
            observe ethical, moral and personal values to maintain high
            standards in our work.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 mt-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 w-full xl:w-[1200px] mx-auto  p-10">
          <div className="w-full h-[400px] overflow-hidden  p-5 flex-1">
            <img
              className="w-full h-full object-cover"
              src="https://www.totalstudentcare.com/ux/tsc/img/mission3.jpg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold pb-2 text-[#002A6C]">
              Our Mission
            </h1>
            <hr className=" border-b-4 border-[#002A6C] mb-4 w-[20%] " />

            <p className="font-semibold mb-3 text-justify">
              Our mission is to place genuine education minded students at
              genuine education providers. We aim to take leadership in the
              student consultancy industry and set examples for others with our
              distinguished quality of services for students and education
              providers.
            </p>
            <p className="text-gray-500 mb-3 text-justify">
              We strive to uphold the excellence of higher education by
              providing inclusive, competent and professional supports to
              student community and educational institutions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 w-full xl:w-[1200px] mx-auto  p-10">
        <div className="w-full h-[400px] overflow-hidden  p-5 flex-1">
          <img
            className="w-full h-full object-cover"
            src="https://www.totalstudentcare.com/ux/tsc/img/vission3.jpeg"
            alt=""
          />
        </div>
        <div className="flex-1 ">
          <h1 className="text-3xl font-bold pb-2 text-[#002A6C]">
            Our Vission
          </h1>
          <hr className=" border-b-4 border-[#002A6C] mb-4 w-[20%] " />

          <p className="text-gray-500 mb-3 text-justify lg:ml-4">
            To successfully place students for the course at an institution only
            that is in the best interest of the student or their profile.
          </p>
          <p className="text-gray-500 mb-3 text-justify lg:ml-4">
            To promote all round development of students’ abilities and
            personalities, and empower their potential.
          </p>
          <p className="text-gray-500 mb-3 text-justify lg:ml-4">
            To provide effortless and distinctive quality service and commit to
            improve continually.
          </p>
          <p className="text-gray-500 mb-3 text-justify lg:ml-4">
            To maintain the high standard of professionalism, performance and
            quality to establish exemplary excellence in higher education, and
            work together with prospective students and overseas colleges,
            universities and associate organisations.
          </p>
        </div>
      </div>
      <div>
        <Values></Values>
      </div>
      <div
        className="text-white md:mt-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/Vp08Z1C1/rtgrt.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative">
          <div className="max-w-6xl mx-auto text-center py-16">
            <h1 className="md:text-4xl  text-3xl md:px-0 px-4 font-bold">
              Professional training undertaken
            </h1>
            <hr className=" border-b-4 mb-4 w-[30%] mx-auto mt-5 " />
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 text-center">
              <div className="md:border-r-2 md:px-0 px-4">
                <div className="md:border-b-2 border-1 md:border-0  md:py-10 py-6">
                  <p className="text-2xl font-bold">99%+</p>
                  <p className="text-2xl font-bold">Admission success</p>
                </div>
                <div className="md:border-b-2 border-1 md:border-0 md:mt-0 mt-4  md:py-10 py-6">
                  <p className="text-2xl font-bold">15,000+</p>
                  <p className="text-2xl font-bold">Courses offered</p>
                </div>
                <div className=" md:border-0 border-1   md:py-10 py-6 md:mt-0 mt-4">
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-2xl font-bold">Study locations</p>
                </div>
              </div>
              <div className="md:border-r-2 md:px-0 px-4 md:mt-0 mt-4">
                <div className="md:border-b-2 border-1 md:border-0  md:py-10 py-6">
                  <p className="text-2xl font-bold">75%+</p>
                  <p className="text-2xl font-bold">Social followers</p>
                </div>
                <div className="md:border-b-2 border-1 md:border-0 md:mt-0 mt-4  md:py-10 py-6">
                  <p className="text-2xl font-bold">14+</p>
                  <p className="text-2xl font-bold">Years experience</p>
                </div>
                <div className="border-1 md:mt-0 mt-4 md:border-0  md:py-10 py-6">
                  <p className="text-2xl font-bold">28,000+</p>
                  <p className="text-2xl font-bold">
                    Satisfied students served
                  </p>
                </div>
              </div>
              <div className="md:px-0 px-4 md:mt-0 mt-4">
                <div className="md:border-b-2 border-1 md:border-0  md:py-10 py-6">
                  <p className="text-2xl font-bold">90%+</p>
                  <p className="text-2xl font-bold">5 star overall review</p>
                </div>
                <div className="md:border-b-2 border-1 md:border-0  md:mt-0 mt-4  md:py-10 py-6">
                  <p className="text-2xl font-bold">30,000+</p>
                  <p className="text-2xl font-bold">Monthly online visitors</p>
                </div>
                <div className=" md:border-b-0 border-1 md:border-0 md:mt-0 mt-4  md:py-10 py-6">
                  <p className="text-2xl font-bold">500,000+</p>
                  <p className="text-2xl font-bold p-2">
                    Counsellors have overseas higher study experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <KeySkills></KeySkills>
      </div>
      <div>
        <Awards_And_Agent></Awards_And_Agent>
      </div>
    </div>
  );
}

export default About_US
