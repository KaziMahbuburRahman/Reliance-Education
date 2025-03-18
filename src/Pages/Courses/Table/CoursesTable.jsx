"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"
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
import InfoCard from "../Card/InfoCard"
import { coursesTableData } from "./CoursesTableData"

export default function CoursesTable({ filters }) {
  const [expandedCourse, setExpandedCourse] = useState(null)
  const [filter, setFilter] = useState("all")
  const [filteredData, setFilteredData] = useState(coursesTableData)

  const categories = [
    {
      id: 1,
      name: "Accounting & Finance",
      subcategories: [
        { id: 13, name: "AAT" },
        { id: 14, name: "ACCA" },
        { id: 647, name: "Accounting" },
        { id: 15, name: "Accounting and Control" },
      ],
    },
    {
      id: 2,
      name: "Art & Design",
      subcategories: [
        { id: 74, name: "3D Computer Animation" },
        { id: 75, name: "3D Design and Craft" },
        { id: 69, name: "Acting" },
      ],
    },
    {
      id: 3,
      name: "Built Environment & Architecture",
      subcategories: [
        { id: 157, name: "Advanced Building Simulation" },
        { id: 160, name: "Architectural and Urban Design" },
      ],
    },
    {
      id: 4,
      name: "Business & Management",
      subcategories: [
        { id: 192, name: "Air Transport Management" },
        { id: 193, name: "Aircraft Maintenance Systems and Management" },
      ],
    },
    {
      id: 5,
      name: "Computer Science & IT",
      subcategories: [
        { id: 269, name: "Advanced Computer Networks" },
        { id: 267, name: "Advanced Computer Science" },
      ],
    },
  ]

  // Apply filters from sidebar
  useEffect(() => {
    let result = coursesTableData

    // Apply category filter
    if (filters.category) {
      const categoryObj = categories.find((cat) => cat.id === filters.category)
      if (categoryObj) {
        // Get all subcategories for this category
        const subcategoryNames = categoryObj.subcategories.map((sub) => sub.name.toLowerCase())

        result = result.filter((course) => {
          // Check if course subject or name contains the category name
          const matchesCategory =
            course.details.courseSubject.toLowerCase().includes(categoryObj.name.toLowerCase()) ||
            course.name.toLowerCase().includes(categoryObj.name.toLowerCase())

          // Check if course subject or name contains any of the subcategories
          const matchesSubcategory = subcategoryNames.some(
            (subName) =>
              course.details.courseSubject.toLowerCase().includes(subName) ||
              course.name.toLowerCase().includes(subName),
          )

          // Also check for specific keywords related to the category
          const categoryKeywords = getCategoryKeywords(categoryObj.id)
          const matchesKeywords = categoryKeywords.some(
            (keyword) =>
              course.details.courseSubject.toLowerCase().includes(keyword) ||
              course.name.toLowerCase().includes(keyword),
          )

          return matchesCategory || matchesSubcategory || matchesKeywords
        })
      }
    }

    // Apply subcategory filter
    if (filters.subcategory) {
      // Find the subcategory name from all categories
      let subcategoryName = ""
      categories.forEach((category) => {
        const sub = category.subcategories.find((sub) => sub.id === filters.subcategory)
        if (sub) subcategoryName = sub.name
      })

      if (subcategoryName) {
        result = result.filter((course) => {
          return (
            course.name.toLowerCase().includes(subcategoryName.toLowerCase()) ||
            course.details.courseSubject.toLowerCase().includes(subcategoryName.toLowerCase())
          )
        })
      }
    }

    // Apply city filter
    if (filters.city) {
      result = result.filter((course) => course.details.location.toLowerCase().includes(filters.city.toLowerCase()))
    }

    // Apply alphabet filter
    if (filters.alphabets && filters.alphabets.length > 0) {
      result = result.filter((course) => {
        const firstLetter = course.name.charAt(0).toUpperCase()
        return filters.alphabets.includes(firstLetter)
      })
    }

    // Apply month filter
    if (filters.months && filters.months.length > 0) {
      result = result.filter((course) => {
        return filters.months.some((month) => course.details.intakes.toLowerCase().includes(month.toLowerCase()))
      })
    }

    // Apply duration filter
    if (filters.durations && filters.durations.length > 0) {
      result = result.filter((course) => {
        const durationText = course.details.duration.toLowerCase()
        return filters.durations.some((duration) => {
          switch (duration) {
            case 6:
              return durationText.includes("6 month") || durationText.includes("half year")
            case 12:
              return (
                durationText.includes("12 month") ||
                durationText.includes("1 year") ||
                durationText.includes("one year")
              )
            case 24:
              return (
                durationText.includes("24 month") ||
                durationText.includes("2 year") ||
                durationText.includes("two year")
              )
            case 36:
              return (
                durationText.includes("36 month") ||
                durationText.includes("3 year") ||
                durationText.includes("three year")
              )
            case 48:
              return (
                durationText.includes("48 month") ||
                durationText.includes("4 year") ||
                durationText.includes("four year")
              )
            default:
              return false
          }
        })
      })
    }

    // Apply dropdown filter
    if (filter !== "all") {
      result = result.filter((course) => {
        if (filter === "acca") return course.name.toLowerCase().includes("acca")
        if (filter === "bsc") return course.name.toLowerCase().includes("bsc")
        if (filter === "diploma") return course.name.toLowerCase().includes("diploma")
        return true
      })
    }

    setFilteredData(result)
  }, [filters, filter])

  // Helper function to get keywords for each category
  const getCategoryKeywords = (categoryId) => {
    switch (categoryId) {
      case 1: // Accounting & Finance
        return ["accounting", "finance", "financial", "acca", "aat", "banking", "investment"]
      case 2: // Art & Design
        return ["art", "design", "animation", "craft", "acting"]
      case 3: // Built Environment & Architecture
        return ["architecture", "building", "construction", "urban"]
      case 4: // Business & Management
        return ["business", "management", "mba", "administration"]
      case 5: // Computer Science & IT
        return ["computer", "it", "technology", "network", "software"]
      default:
        return []
    }
  }

  const toggleExpand = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
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
      case "teal":
        return "#14b8a6"
      case "indigo":
        return "#6366f1"
      case "orange":
        return "#f97316"
      case "pink":
        return "#ec4899"
      case "cyan":
        return "#06b6d4"
      default:
        return "#3b82f6"
    }
  }

  return (
    <div className="bg-white w-full mx-auto p-4 lg:px-16 text-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"
      >
        <h2 className="text-2xl font-bold">
          Our <span className="text-red-500">Courses</span>
          <span className="ml-2 text-sm font-normal text-gray-500">
            {filteredData.length} {filteredData.length === 1 ? "course" : "courses"} found
          </span>
        </h2>
        <motion.div
          className="w-full sm:w-64 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
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
        </motion.div>
      </motion.div>

      {filteredData.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8 text-center bg-gray-50 rounded-md"
        >
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your filters to find more courses</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border rounded-sm overflow-hidden"
        >
          {/* Table header */}
          <motion.div
            className="grid grid-cols-2 xs:grid-cols-3 bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="p-4 font-bold text-blue-900">Course Name</div>
            <div className="hidden xs:block p-4 font-bold text-blue-900">Awarding body</div>
            <div className="p-4 font-bold text-blue-900">Course Fees</div>
          </motion.div>

          {/* Table rows */}
          <AnimatePresence mode="wait">
            {filteredData.map((course, index) => (
              <motion.div
                key={course.id}
                className="border-t"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                {/* Main row */}
                <motion.div
                  className="grid grid-cols-2 xs:grid-cols-3 hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleExpand(course.id)}
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 flex items-center gap-2 relative">
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: getBorderColor(course.color) }}
                    />
                    <motion.div
                      animate={{ rotate: expandedCourse === course.id ? 90 : 0 }}
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      <FaChevronRight size={20} />
                    </motion.div>
                    {course.name}
                  </div>
                  <div className="hidden xs:block p-4">{course.awardingBody}</div>
                  <div className="p-4">{course.fees}</div>
                </motion.div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedCourse === course.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            duration: 0.6,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.4 },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            duration: 0.6,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.4 },
                        },
                      }}
                      className="bg-gray-50 border-t overflow-hidden"
                    >
                      <div className="p-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3 },
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2 },
                          }}
                          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"
                        >
                          <h3 className="text-md sm:text-lg font-bold text-blue-900">{course.name}</h3>
                          <motion.button
                            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <FaShareAlt size={16} />
                            Share
                          </motion.button>
                        </motion.div>
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, transition: { duration: 0.3 } }}
                          exit={{ opacity: 0, transition: { duration: 0.2 } }}
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
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                    duration: 0.3,
                                    delay: 0.05 + i * 0.03,
                                  },
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -5,
                                  transition: {
                                    duration: 0.15,
                                    delay: 0.02 * (Object.keys(course.details).length - i - 1),
                                  },
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
                          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, delay: 0.2 },
                          }}
                          exit={{
                            opacity: 0,
                            y: -5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <motion.a
                            href={`/courses/${course.id}`}
                            className="px-6 py-2 border-2 border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition-colors text-center"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "#1e3a8a",
                              color: "white",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            View Details
                          </motion.a>
                          <motion.button
                            className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "#1e40af",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
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
      )}
    </div>
  )
}

