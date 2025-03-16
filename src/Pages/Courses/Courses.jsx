import React from "react";
import Search from "../../Shared/Search";


import CoursesBanner from "./Banner/CoursesBanner";
import CoursesTable from "./Table/CoursesTable";

const Courses = () => {
  return (
    <div className="bg-[#000000]">
      <CoursesBanner />
      <Search />
      <CoursesTable />
    </div>
  );
};

export default Courses;
