"use client"

import { useState } from "react"
import {
  FaBook,
  FaBriefcase,
  FaCalendarAlt,
  FaChartBar,
  FaChevronRight,
  FaClock,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPoundSign,
  FaShareAlt,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import InfoCard from "../Card/InfoCard"
import { coursesTableData } from "./CoursesTableData"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

// Sample course data with expanded details

export default function CoursesTable() {
  const [expandedCourse, setExpandedCourse] = useState(null)
  const [filter, setFilter] = useState("all")
  const navigate = useNavigate()

  const filteredCourses =
    filter === "all"
      ? coursesTableData
      : coursesTableData.filter((course) => {
          if (filter === "acca") return course.name.toLowerCase().includes("acca")
          if (filter === "bsc") return course.name.toLowerCase().includes("bsc")
          if (filter === "diploma") return course.name.toLowerCase().includes("diploma")
          return true
        })

  const toggleExpand = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null)
    } else {
      setExpandedCourse(courseId)
    }
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  // Function to get the border color based on the color value
  const getBorderColor = (color) => {
    switch (color) {
      case "blue":
        return "#3b82f6"
      case "green":
        return "#22c55e"
      case "yellow":
        return "#eab308"
      case "purple":
        return "#a855f7"
      case "red":
        return "#ef4444"
      default:
        return "#3b82f6"
    }
  }

  // const handleViewDetails = (courseId) => {
  //   // Navigate to course details page using React Router
  //   navigate(`/courses/${courseId}`);
  // };

  return (
    <div className="bg-white w-full mx-auto p-1 sm:p-4 lg:px-16 outline-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-6"
      >
        <h2 className="text-2xl font-bold">
          Our <span className="text-red-500">Courses</span>
        </h2>
        <motion.div
          className="w-64 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <select
            value={filter}
            onChange={handleFilterChange}
            className="w-full p-2 border-2 rounded-md appearance-none bg-white pr-8 outline-none"
          >
            <option value="all">All courses</option>
            <option value="acca">ACCA courses</option>
            <option value="bsc">BSc courses</option>
            <option value="diploma">Diploma courses</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border rounded-sm overflow-hidden outline-0"
      >
        {/* Table header */}
        <motion.div
          className="grid grid-cols-3 bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="p-4 font-bold text-blue-900">Course Name</div>
          <div className="p-4 font-bold text-blue-900">Awarding body</div>
          <div className="p-4 font-bold text-blue-900">Course Fees</div>
        </motion.div>

        {/* Table rows */}
        <AnimatePresence>
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="border-t"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              {/* Main row */}
              <motion.div
                className="grid grid-cols-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleExpand(course.id)}
                whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 flex items-center gap-2 relative">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ backgroundColor: getBorderColor(course.color) }}
                  />
                  <motion.div
                    animate={{ rotate: expandedCourse === course.id ? 90 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <FaChevronRight size={20} />
                  </motion.div>
                  {course.name}
                </div>
                <div className="p-4">{course.awardingBody}</div>
                <div className="p-4">{course.fees}</div>
              </motion.div>

              {/* Expanded content */}
              <AnimatePresence mode="sync">
                {expandedCourse === course.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 border-t overflow-hidden"
                  >
                    <div className="p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-between items-start mb-6"
                      >
                        <h3 className="text-2xl font-bold text-blue-900">{course.name}</h3>
                        <motion.button
                          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <FaShareAlt size={16} />
                          Share
                        </motion.button>
                      </motion.div>
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.3 }}
                      >
                        {Object.entries(course.details).map(([key, value], i) => {
                          let Icon
                          switch (key) {
                            case "courseSubject":
                              Icon = FaBook
                              break
                            case "academicCredit":
                              Icon = FaStar
                              break
                            case "qualification":
                              Icon = FaTrophy
                              break
                            case "awardingBody":
                              Icon = FaUsers
                              break
                            case "recognition":
                              Icon = FaUsers
                              break
                            case "academicLevel":
                              Icon = FaChartBar
                              break
                            case "studyMode":
                              Icon = FaGraduationCap
                              break
                            case "duration":
                              Icon = FaClock
                              break
                            case "fees":
                              Icon = FaPoundSign
                              break
                            case "intakes":
                              Icon = FaCalendarAlt
                              break
                            case "workPlacement":
                              Icon = FaBriefcase
                              break
                            case "location":
                              Icon = FaMapMarkerAlt
                              break
                            default:
                              Icon = FaBook
                          }

                          return (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, transition: { duration: 0.1 } }}
                              transition={{
                                duration: 0.2,
                                delay: 0.05 + i * 0.02,
                              }}
                            >
                              <InfoCard
                                icon={Icon}
                                label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                                value={value}
                              />
                            </motion.div>
                          )
                        })}
                      </motion.div>
                      <motion.div
                        className="flex justify-center gap-4 mt-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link to={`/courses/${course.id}`}>
                          <motion.button
                            className="px-6 py-2 border-2 border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05, backgroundColor: "#1e3a8a", color: "white" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            View Details
                          </motion.button>
                        </Link>
                        <motion.button
                          className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors"
                          whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          Send Query
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

// Export courses data for use in other components
// export { coursesTableData };

