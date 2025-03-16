"use client";

import { useState } from "react";
import {
  FaBook,
  FaBriefcase,
  FaCalendarAlt,
  FaChartBar,
  FaClock,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaPoundSign,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import InfoCard from "./Card/InfoCard";
import { coursesTableData } from "./Table/CoursesTableData";

// Similar Courses Table Component
function SimilarCoursesTable() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Similar Courses</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4 border">Course Name</th>
              <th className="text-left p-4 border">Course Duration</th>
              <th className="text-left p-4 border">Course Location</th>
              <th className="text-left p-4 border">Course Fees</th>
            </tr>
          </thead>
          <tbody>
            {coursesTableData?.map((course, index) => (
              
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-4 border">
                  <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </td>
                <td className="p-4 border">
                  <Link to={`/courses/${course.id}`}>
                    {course.details.duration}
                  </Link>
                </td>
                <td className="p-4 border">
                  <Link to={`/courses/${course.id}`}>
                    {course.details.location}
                  </Link>
                </td>
                <td className="p-4 border">
                  <Link to={`/courses/${course.id}`}>
                    {course.details.fees} GBP
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Admission Query Form Component
function AdmissionQueryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    nationality: "",
    country: "",
    currentQualification: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Query submitted successfully!");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-[60px]">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Admission Query</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Enter number with country code"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="nationality"
            placeholder="Your Nationality"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Your Country"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="currentQualification"
            placeholder="Current Qualification"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.currentQualification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="recaptcha-container">
          {/* Replace with actual reCAPTCHA component */}
          <div className="border p-4 text-center text-gray-500">reCAPTCHA</div>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
        >
          Submit Query
        </button>
      </form>
    </div>
  );
}

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesTableData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-900 mb-6">
              {course.name}
            </h1>

            {/* Key Information Section */}
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Key Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InfoCard
                  icon={FaBook}
                  label="Course Subject"
                  value={course.details.courseSubject}
                />
                <InfoCard
                  icon={FaStar}
                  label="Total Academic Credit"
                  value={course.details.academicCredit}
                />
                <InfoCard
                  icon={FaTrophy}
                  label="Qualification Awarded"
                  value={course.details.qualification}
                />
                <InfoCard
                  icon={FaUsers}
                  label="Awarding Body"
                  value={course.details.awardingBody}
                />
                <InfoCard
                  icon={FaUsers}
                  label="Professional Recognition"
                  value={course.details.recognition}
                />
                <InfoCard
                  icon={FaChartBar}
                  label="Academic Level"
                  value={course.details.academicLevel}
                />
                <InfoCard
                  icon={FaGraduationCap}
                  label="Study Mode"
                  value={course.details.studyMode}
                />
                <InfoCard
                  icon={FaClock}
                  label="Duration"
                  value={course.details.duration}
                />
                <InfoCard
                  icon={FaCalendarAlt}
                  label="Intakes"
                  value={course.details.intakes}
                />
                <InfoCard
                  icon={FaBriefcase}
                  label="Work Placement"
                  value={course.details.workPlacement}
                />
                <InfoCard
                  icon={FaMapMarkerAlt}
                  label="Course Location"
                  value={course.details.location}
                />
                <InfoCard
                  icon={FaMoneyBill}
                  label="Fee Type"
                  value="full fees"
                />
                <InfoCard
                  icon={FaPoundSign}
                  label="Course Fees"
                  value={course.details.fees}
                />
              </div>
            </div>

            {/* Course Overview Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Course Overview
              </h2>
              <p className="text-gray-700">
                This comprehensive program provides students with advanced
                knowledge and skills in accounting and finance, following the
                ACCA curriculum. The course is designed to prepare students for
                professional accounting careers and offers a pathway to ACCA
                qualification.
              </p>
            </div>

            {/* Similar Courses Section */}
            <SimilarCoursesTable />
          </div>

          {/* Sidebar */}
          <div className="lg:w-96">
            <AdmissionQueryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
