import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer_skelator from "./Footer_skelator";

const Footer = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      <div className="bg-[#F4F4F4] lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-between my-6 w-full xl:w-[1300px] mx-auto gap-3 ">
          <div className="bg-white rounded-lg shadow-xl font-bold p-8 w-full">
            <h1 className="text-text_large mb-3 text-Reliance Education_primary_color">
              Holiday Team
            </h1>
            <div className="">
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Mail : <span>tour@Reliance Education.net</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl font-bold p-8 w-full">
            <h1 className="text-text_large mb-3 Reliance Education_primary_color">
              Visa Team
            </h1>
            <div>
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Mail : <span>tour@Reliance Education.net</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl font-bold p-8 w-full">
            <h1 className="text-text_large mb-3">Reservation Team</h1>
            <div>
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Mail : <span>tour@Reliance Education.net</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl font-bold p-8 w-full">
            <h1 className="text-text_large mb-3">Umrah Team</h1>
            <div>
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Call : <span>+01345676567</span>
              </p>
              <p>
                Mail : <span>tour@Reliance Education.net</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Footer_skelator />
      ) : (
        <footer className="bg-[#202F59] text-white py-12">
          <div></div>
          <div className="w-full xl:w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Quick Menu Section */}
            <div className="uppercase">
              <h3 className="font-semibold text-lg mb-4">QUICK MENU</h3>
              <ul className="space-y-2 uppercase">
                <Link to="/visit-visa">
                  {" "}
                  <li className="mb-2 hover:text-blue_500">
                    Visit VISA PACKAGES
                  </li>{" "}
                </Link>
                <Link to="/study-visa">
                  {" "}
                  <li className="mb-2 hover:text-blue_500">
                    Study VISA PACKAGES
                  </li>{" "}
                </Link>
                <Link to="/visit-visa">
                  {" "}
                  <li className="mb-2 hover:text-blue_500 uppercase">
                    Work VISA PACKAGES
                  </li>{" "}
                </Link>
                <Link to="/package-tour">
                  {" "}
                  <li className="mb-2 hover:text-blue_500">
                    TOUR PACKAGES
                  </li>{" "}
                </Link>
                <Link to="/umrah">
                  {" "}
                  <li className="mb-2 hover:text-blue_500">
                    UMRAH PACKAGES
                  </li>{" "}
                </Link>
                <Link to="/haj">
                  {" "}
                  <li className="mb-2 hover:text-blue_500">
                    HAJ PACKAGES
                  </li>{" "}
                </Link>
                <Link to="/blog">
                  {" "}
                  <li className="mb-2 hover:text-blue_500">BLOG</li>{" "}
                </Link>
              </ul>
            </div>
            {/* Contact Us Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">CONTACT WITH US</h3>
              <p className="mb-2">
                119, ConfidenceTower (1st Floor) Shahjadpur,Gulshan, Dhaka-1212
              </p>
              <p className="mb-2">
                <span className="font-semibold">Phone:</span> +880 1511 004 002
              </p>
              <p className="mb-2">
                <span className="font-semibold">Phone:</span> +880 1711 004 002
              </p>

              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                contact@traveldesignbd.com
              </p>
              <p className="mb-2">
                <span className="font-semibold">Info:</span>{" "}
                info@traveldesignbd.com
              </p>
              <p className="mb-4">
                <span className="font-semibold">Website:</span>{" "}
                www.travelsmentor.com
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="YouTube" className="text-xl">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" aria-label="Pinterest" className="text-xl">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" aria-label="Instagram" className="text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Reliance Education</h3>
              <p className="mb-4 text-justify">
                At Reliance Education we are passionate about helping people
                explore the world.Our mission is to make travel accessible and
                enjoyable for everyone. Our company was founded by two friends
                who have experience in the travel sector. After years of working
                in the corporate world, we decided to follow our passion and
                start our own travel company. We wanted to create a business
                that would help others experience the same joy and wonder that
                we felt when we traveled.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
