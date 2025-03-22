import { Route, Routes } from "react-router-dom";

import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Scholarships from "../Pages/Scholarships/Scholarships";
import Universities from "../Pages/Universities/Universities";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Home from "../Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<div>Hello About Us</div>} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/associates" element={<div>Hello Associates</div>} />
        <Route
          path="/student-service"
          element={<div>Hello Student Service</div>}
        />
        <Route path="/contact" element={<div>Hello Contact</div>} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="*" element={<div>Hello Not Found</div>} />{" "}
        {/* Optional for 404 */}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
