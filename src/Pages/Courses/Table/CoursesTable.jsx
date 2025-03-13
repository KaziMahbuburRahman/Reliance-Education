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
import { motion, AnimatePresence } from "framer-motion"
import InfoCard from "../Card/InfoCard"
import { coursesTableData } from "./CoursesTableData"

// Sample course data with expanded details

export default function CoursesTable() {
  const [expandedCourse, setExpandedCourse] = useState(null)
  const [filter, setFilter] = useState("all")

  // Since we're using Next.js, we'll use the useRouter hook instead of useNavigate
  // This is commented out for now as we'll implement it differently in Next.js
  // const navigate = useNavigate();

  const handleNavigation = (courseId) => {
    // In Next.js, we would use router.push instead
    window.location.href = `/courses/${courseId}`
  }

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

  const handleViewDetails = (courseId) => {
    // Navigate to course details page
    handleNavigation(courseId)
  }

  return (
    <div className="bg-white w-full mx-auto p-4 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <h2 className="text-2xl font-bold">
          Our <span className="text-red-500">Courses</span>
        </h2>
        <div className="w-full sm:w-64 relative">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="w-full p-2 border-2 border-gray-800 rounded-md appearance-none bg-white pr-8 focus:outline-none"
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
        </div>
      </div>

      <div className="border rounded-sm overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-12 bg-gray-100">
          <div className="col-span-5 sm:col-span-5 p-4 font-bold text-blue-900">Course Name</div>
          <div className="col-span-4 sm:col-span-4 p-4 font-bold text-blue-900 hidden sm:block">Awarding body</div>
          <div className="col-span-7 sm:col-span-3 p-4 font-bold text-blue-900">Course Fees</div>
        </div>

        {/* Table rows */}
        {filteredCourses.map((course) => (
          <div key={course.id} className="border-t">
            {/* Main row */}
            <motion.div
              className="grid grid-cols-12 hover:bg-gray-50 cursor-pointer"
              onClick={() => toggleExpand(course.id)}
              whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="col-span-5 sm:col-span-5 p-4 flex items-center gap-2 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: getBorderColor(course.color) }}
                />
                <motion.div
                  animate={{ rotate: expandedCourse === course.id ? 90 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                  className="flex-shrink-0 text-blue-900"
                >
                  <FaChevronRight size={16} />
                </motion.div>
                <span className="ml-1 truncate">{course.name}</span>
              </div>
              <div className="col-span-4 sm:col-span-4 p-4 hidden sm:block">{course.awardingBody}</div>
              <div className="col-span-7 sm:col-span-3 p-4">{course.fees}</div>
            </motion.div>

            {/* Expanded content */}
            <AnimatePresence>
              {expandedCourse === course.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 sm:p-6 bg-gray-50 border-t">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-900">{course.name}</h3>
                      <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded">
                        <FaShareAlt size={16} />
                        Share
                      </button>
                    </div>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.4, staggerChildren: 0.1 }}
                    >
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <InfoCard icon={FaBook} label="Course Subject" value={course.details.courseSubject} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                        <InfoCard icon={FaStar} label="Total Academic Credit" value={course.details.academicCredit} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <InfoCard icon={FaTrophy} label="Qualification Awarded" value={course.details.qualification} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                        <InfoCard icon={FaUsers} label="Awarding Body" value={course.details.awardingBody} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <InfoCard icon={FaUsers} label="Professional Recognition" value={course.details.recognition} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                        <InfoCard icon={FaChartBar} label="Academic Level" value={course.details.academicLevel} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <InfoCard icon={FaGraduationCap} label="Study Mode" value={course.details.studyMode} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                        <InfoCard icon={FaClock} label="Course Duration" value={course.details.duration} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <InfoCard icon={FaPoundSign} label="Course Fees" value={course.details.fees} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
                        <InfoCard icon={FaCalendarAlt} label="Intakes" value={course.details.intakes} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                        <InfoCard icon={FaBriefcase} label="Work Placement" value={course.details.workPlacement} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
                        <InfoCard icon={FaMapMarkerAlt} label="Course Location" value={course.details.location} />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleViewDetails(course.id)
                        }}
                        className="px-6 py-2 border-2 border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition-colors"
                      >
                        View Details
                      </button>
                      <button className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
                        Send Query
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

