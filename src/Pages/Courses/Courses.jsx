"use client"

import { useState } from "react"
import CoursesBanner from "./Banner/CoursesBanner"
import CourseFilterSidebar from "./Sidebar/CourseFilterSidebar"
import CoursesTable from "./Table/CoursesTable"
import Search from "../../Shared/Search"

const Courses = () => {
  const [filters, setFilters] = useState({
    category: null,
    subcategory: null,
    city: "",
    alphabets: [],
    months: [],
    durations: [],
  })

  // Function to update filters when changed in the sidebar
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="bg-[#000000]">
      <CoursesBanner />
      <Search />
      <div className="flex flex-col md:flex-row">
        <CourseFilterSidebar onFilterChange={handleFilterChange} />
        <CoursesTable filters={filters} />
      </div>
    </div>
  )
}

export default Courses

