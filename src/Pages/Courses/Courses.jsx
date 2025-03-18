import React from "react";
import Search from "../../Shared/Search";

import { useState } from "react";
import CoursesBanner from "./Banner/CoursesBanner";
import CourseFilterSidebar from "./Sidebar/CourseFilterSidebar";
import CoursesTable from "./Table/CoursesTable";

const Courses = () => {
  const [filters, setFilters] = useState({
    category: null,
    subcategory: null,
    city: "",
    alphabets: [],
    months: [],
    durations: [],
  });

  // Function to update filters when changed in the sidebar
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <div className="bg-[#000000]">
      <CoursesBanner />
      <Search />
      <div className="flex">
        <CourseFilterSidebar onFilterChange={handleFilterChange} />
        <CoursesTable filters={filters} />
      </div>
    </div>
  );
};

export default Courses;
