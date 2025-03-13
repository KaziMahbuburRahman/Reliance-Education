"use client"

import { useState } from "react"
import {
  FaBook,
  FaStar,
  FaTrophy,
  FaUsers,
  FaChartBar,
  FaGraduationCap,
  FaClock,
  FaPoundSign,
  FaCalendarAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaShareAlt,
  FaChevronRight,
} from "react-icons/fa"

// Sample course data with expanded details
const courses = [
  {
    id: "1",
    name: "Advanced Diploma in Accounting and Finance (ACCA route)",
    awardingBody: "BPP University",
    fees: "£8,010.00 full fees",
    color: "blue",
    details: {
      courseSubject: "ACCA",
      academicCredit: "330",
      qualification: "Advanced Diploma",
      awardingBody: "BPP University",
      recognition: "ACCA",
      academicLevel: "Level 6",
      studyMode: "Full Time",
      duration: "18 months (full time)",
      fees: "£8,010 full fees",
      intakes: "September, March",
      workPlacement: "Yes",
      location: "London",
    },
  },
  {
    id: "2",
    name: "ACCA Professional Level Papers",
    awardingBody: "BPP University",
    fees: "£7,500.00 full fees",
    color: "green",
    details: {
      courseSubject: "ACCA",
      academicCredit: "360",
      qualification: "Professional Level",
      awardingBody: "BPP University",
      recognition: "ACCA",
      academicLevel: "Level 7",
      studyMode: "Full Time",
      duration: "24 months (full time)",
      fees: "£7,500 full fees",
      intakes: "January, September",
      workPlacement: "Yes",
      location: "London",
    },
  },
  {
    id: "3",
    name: "BSc (Hons) Accounting and Finance",
    awardingBody: "BPP University",
    fees: "£9,000.00 per year",
    color: "yellow",
    details: {
      courseSubject: "Accounting and Finance",
      academicCredit: "360",
      qualification: "BSc (Hons)",
      awardingBody: "BPP University",
      recognition: "Various professional bodies",
      academicLevel: "Level 6",
      studyMode: "Full Time",
      duration: "3 years (full time)",
      fees: "£9,000 per year",
      intakes: "September",
      workPlacement: "Yes",
      location: "London",
    },
  },
  {
    id: "4",
    name: "MBA in Financial Management",
    awardingBody: "BPP University",
    fees: "£12,500.00 full fees",
    color: "purple",
    details: {
      courseSubject: "Financial Management",
      academicCredit: "180",
      qualification: "MBA",
      awardingBody: "BPP University",
      recognition: "AMBA",
      academicLevel: "Level 7",
      studyMode: "Full Time",
      duration: "12 months (full time)",
      fees: "£12,500 full fees",
      intakes: "September, January",
      workPlacement: "No",
      location: "London",
    },
  },
  {
    id: "5",
    name: "Certificate in Financial Services",
    awardingBody: "London Institute of Banking",
    fees: "£3,200.00 full fees",
    color: "red",
    details: {
      courseSubject: "Financial Services",
      academicCredit: "60",
      qualification: "Certificate",
      awardingBody: "London Institute of Banking",
      recognition: "Industry recognised",
      academicLevel: "Level 3",
      studyMode: "Full Time",
      duration: "6 months (full time)",
      fees: "£3,200 full fees",
      intakes: "September, March",
      workPlacement: "No",
      location: "London",
    },
  },
]

// Info Card Component
function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center gap-2 text-blue-900 mb-2">
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </div>
      <div className="text-gray-700">{value}</div>
    </div>
  )
}

export default function CoursesTable() {
  const [expandedCourse, setExpandedCourse] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => {
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

  return (
    <div className="bg-white w-full mx-auto p-4 px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Our <span className="text-red-500">Courses</span>
        </h2>
        <div className="w-64 relative">
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
        <div className="grid grid-cols-3 bg-gray-100">
          <div className="p-4 font-bold text-blue-900">Course Name</div>
          <div className="p-4 font-bold text-blue-900">Awarding body</div>
          <div className="p-4 font-bold text-blue-900">Course Fees</div>
        </div>

        {/* Table rows */}
        {filteredCourses.map((course) => (
          <div key={course.id} className="border-t">
            {/* Main row */}
            <div className="grid grid-cols-3 hover:bg-gray-50 cursor-pointer" onClick={() => toggleExpand(course.id)}>
              <div className="p-4 flex items-center gap-2 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: getBorderColor(course.color) }}
                />
                <FaChevronRight
                  className={`transition-transform ${expandedCourse === course.id ? "rotate-90" : ""}`}
                  size={20}
                />
                {course.name}
              </div>
              <div className="p-4">{course.awardingBody}</div>
              <div className="p-4">{course.fees}</div>
            </div>

            {/* Expanded content */}
            {expandedCourse === course.id && (
              <div className="p-6 bg-gray-50 border-t">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-blue-900">{course.name}</h3>
                  <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded">
                    <FaShareAlt size={16} />
                    Share
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <InfoCard icon={FaBook} label="Course Subject" value={course.details.courseSubject} />
                  <InfoCard icon={FaStar} label="Total Academic Credit" value={course.details.academicCredit} />
                  <InfoCard icon={FaTrophy} label="Qualification Awarded" value={course.details.qualification} />
                  <InfoCard icon={FaUsers} label="Awarding Body" value={course.details.awardingBody} />
                  <InfoCard icon={FaUsers} label="Professional Recognition" value={course.details.recognition} />
                  <InfoCard icon={FaChartBar} label="Academic Level" value={course.details.academicLevel} />
                  <InfoCard icon={FaGraduationCap} label="Study Mode" value={course.details.studyMode} />
                  <InfoCard icon={FaClock} label="Course Duration" value={course.details.duration} />
                  <InfoCard icon={FaPoundSign} label="Course Fees" value={course.details.fees} />
                  <InfoCard icon={FaCalendarAlt} label="Intakes" value={course.details.intakes} />
                  <InfoCard icon={FaBriefcase} label="Work Placement" value={course.details.workPlacement} />
                  <InfoCard icon={FaMapMarkerAlt} label="Course Location" value={course.details.location} />
                </div>
                <div className="flex justify-center gap-4 mt-8">
                  <button className="px-6 py-2 border-2 border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition-colors">
                    View Details
                  </button>
                  <button className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
                    Send Query
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

