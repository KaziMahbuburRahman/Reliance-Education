
import { Outlet } from "react-router-dom";
import TopNavbar from "../Shared/TopNavbar";
import Footer from "../Shared/Footer";
import FooterBottom from "../Shared/FooterBottom";
import SocialLink from "./SocialLink";
import Navbar from "../Shared/Navbar";

const Layout = () => {
  return (
    <div className="relative ">
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 lg:flex flex-col space-y-4 px-4 z-50 hidden ">
        <SocialLink />
      </div>
      <div className=" px-p_8px lg:px-0 ">
        {/* <div className="fixed top-0  w-full bg-base_color  ">
          <TopNavbar />
        </div> */}
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2  w-full z-50 ">
          <TopNavbar />
          <Navbar />
        </div>

        <div className="mt-[280px] lg:mt-[175px]">
          <Outlet />
        </div>
        <div>
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default Layout;
