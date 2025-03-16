import { Route, Routes } from "react-router-dom";

import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Navbar from "../Shared/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Hello Home</div>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<div>Hello About Us</div>} />
        <Route path="/universities" element={<div>Hello Universities</div>} />
        <Route path="/scholarships" element={<div>Hello Scholarships</div>} />
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
    </div>
  );
};

export default App;
