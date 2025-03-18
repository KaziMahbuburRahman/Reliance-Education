"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

export default function UniversityCollegePage() {
  const [listingType, setListingType] = useState("")
  const [country, setCountry] = useState("9") // Default to UK
  const [city, setCity] = useState("")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  // Filtered results state
  const [filteredInstitutions, setFilteredInstitutions] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  // Sample data for universities/colleges with real image URLs
  const allInstitutions = [
    {
      id: 1,
      name: "Bangor University",
      type: "university",
      location: "Bangor, United Kingdom",
      country: "9", // UK
      city: "31", // Bangor
      image: "https://www.totalstudentcare.com/uploades/institution/original/Bangor-University.jpg",
      courses: 0,
      scholarships: "Available",
    },
    {
      id: 2,
      name: "Birmingham City University",
      type: "university",
      location: "Birmingham, United Kingdom",
      country: "9", // UK
      city: "13", // Birmingham
      image: "https://www.totalstudentcare.com/uploades/institution/original/Birmingham-City-University2.jpg",
      courses: 553,
      scholarships: "Available",
    },
    {
      id: 3,
      name: "BPP University",
      type: "university",
      location: "London, United Kingdom",
      country: "9", // UK
      city: "12", // London
      image: "https://www.totalstudentcare.com/uploades/institution/original/3.jpg",
      courses: 43,
      scholarships: "Available",
    },
    {
      id: 4,
      name: "David Game Colleges",
      type: "college",
      location: "London, United Kingdom",
      country: "9", // UK
      city: "12", // London
      image: "https://www.totalstudentcare.com/uploades/institution/original/David-Game-College.jpg",
      courses: 0,
      scholarships: "Available",
    },
    {
      id: 5,
      name: "De Montfort University",
      type: "university",
      location: "Leicester, United Kingdom",
      country: "9", // UK
      city: "72", // Leicester
      image: "https://www.totalstudentcare.com/uploades/institution/original/download.jpg",
      courses: 0,
      scholarships: "Available",
    },
    {
      id: 6,
      name: "Middlesex University",
      type: "university",
      location: "London, United Kingdom",
      country: "9", // UK
      city: "12", // London
      image:
        "https://www.totalstudentcare.com/uploades/institution/original/Middlesex-University-Logo_s-1-1-600x400.jpg",
      courses: 0,
      scholarships: "Available",
    },
    {
      id: 7,
      name: "Northumbria University",
      type: "university",
      location: "London, United Kingdom",
      country: "9", // UK
      city: "12", // London
      image: "https://www.totalstudentcare.com/uploades/institution/original/nun.jpg",
      courses: 38,
      scholarships: "Available",
    },
    {
      id: 8,
      name: "Queen's University Belfast",
      type: "university",
      location: "Belfast, United Kingdom",
      country: "9", // UK
      city: "69", // Belfast
      image: "https://www.totalstudentcare.com/uploades/institution/original/Queen_University_Belfast.jpg",
      courses: 0,
      scholarships: "Available",
    },
    {
      id: 9,
      name: "Solent University",
      type: "university",
      location: "Southampton, United Kingdom",
      country: "9", // UK
      city: "80", // Southampton
      image: "https://www.totalstudentcare.com/uploades/institution/original/Solent-Logo.png",
      courses: 0,
      scholarships: "Available",
    },
    {
      id: 10,
      name: "Ulster University",
      type: "university",
      location: "London, United Kingdom",
      country: "9", // UK
      city: "12", // London
      image: "https://www.totalstudentcare.com/uploades/institution/original/Ulster-University%20logo.png",
      courses: 25,
      scholarships: "Available",
    },
    {
      id: 11,
      name: "University of Cambridge",
      type: "university",
      location: "Cambridge, United Kingdom",
      country: "9", // UK
      city: "14", // Cambridge
      image: "/placeholder.svg?height=180&width=300",
      courses: 120,
      scholarships: "Available",
    },
    {
      id: 12,
      name: "University of Oxford",
      type: "university",
      location: "Oxford, United Kingdom",
      country: "9", // UK
      city: "17", // Oxford
      image: "/placeholder.svg?height=180&width=300",
      courses: 150,
      scholarships: "Available",
    },
    {
      id: 13,
      name: "University of Manchester",
      type: "university",
      location: "Manchester, United Kingdom",
      country: "9", // UK
      city: "48", // Manchester
      image: "/placeholder.svg?height=180&width=300",
      courses: 200,
      scholarships: "Available",
    },
  ]

  // Countries data
  const countries = [
    { id: "9", name: "United Kingdom" },
    { id: "7", name: "India" },
    { id: "8", name: "United States" },
    { id: "24", name: "Canada" },
    { id: "25", name: "Australia" },
    { id: "26", name: "France" },
    { id: "27", name: "Ireland" },
    { id: "28", name: "Italy" },
    // More countries...
  ]

  // Cities data (UK cities)
  const cities = [
    { id: "12", name: "London" },
    { id: "13", name: "Birmingham" },
    { id: "14", name: "Cambridge" },
    { id: "17", name: "Oxford" },
    { id: "22", name: "Bedford" },
    { id: "23", name: "Sunderland" },
    { id: "29", name: "Newcastle" },
    { id: "30", name: "Brighton" },
    { id: "31", name: "Bangor" },
    { id: "48", name: "Manchester" },
    { id: "49", name: "Leeds" },
    { id: "51", name: "Liverpool" },
    { id: "69", name: "Belfast" },
    { id: "72", name: "Leicester" },
    { id: "80", name: "Southampton" },
    // More cities...
  ]

  // Filter institutions based on selected criteria
  const filterInstitutions = () => {
    let results = [...allInstitutions]

    // Filter by listing type if selected
    if (listingType) {
      results = results.filter((institution) => institution.type === listingType)
    }

    // Filter by country if selected
    if (country) {
      results = results.filter((institution) => institution.country === country)
    }

    // Filter by city if selected
    if (city) {
      results = results.filter((institution) => institution.city === city)
    }

    setFilteredInstitutions(results)
    setTotalPages(Math.ceil(results.length / itemsPerPage))
    setCurrentPage(1) // Reset to first page after filtering
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    filterInstitutions()
  }

  // Get current institutions for pagination
  const getCurrentInstitutions = () => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return filteredInstitutions.slice(indexOfFirstItem, indexOfLastItem)
  }

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  // Initialize with all institutions
  useEffect(() => {
    setFilteredInstitutions(allInstitutions)
    setTotalPages(Math.ceil(allInstitutions.length / itemsPerPage))
  }, [])

  return (
    <div className="university-college-page bg-gray-50 min-h-screen pb-12">
      <div className="bg-white shadow-md">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Universities & Colleges</h1>

          {/* Filter Form */}
          <form onSubmit={handleSubmit} className="w-full px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <select
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={listingType}
                  onChange={(e) => setListingType(e.target.value)}
                >
                  <option value="">--Any--</option>
                  <option value="university">University</option>
                  <option value="college">College</option>
                </select>
              </div>

              <div className="md:w-1/4">
                <select
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:w-1/4">
                <select
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:w-1/4">
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Filter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* University/College Listings */}
      <div className="container mx-auto mt-8 px-4">
        {filteredInstitutions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-medium text-gray-700">No institutions found matching your criteria</h3>
            <p className="mt-2 text-gray-500">Try adjusting your filters or browse all institutions</p>
          </div>
        ) : (
          <AnimatePresence>
            {getCurrentInstitutions().map((institution) => (
              <motion.div
                key={institution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md mb-6 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 lg:w-1/4">
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={institution.image || "/placeholder.svg"}
                          alt={institution.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>

                    <div className="md:w-2/3 lg:w-3/4">
                      <h2 className="text-xl font-bold mb-4">
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                          {institution.name}
                        </a>
                      </h2>

                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 px-4 bg-gray-50 font-medium">Main Campus Location</td>
                              <td className="py-2 px-4">{institution.location}</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-4 bg-gray-50 font-medium">About {institution.name}</td>
                              <td className="py-2 px-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                  View Profile
                                </a>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-4 bg-gray-50 font-medium">Scholarships</td>
                              <td className="py-2 px-4">{institution.scholarships}</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 bg-gray-50 font-medium">Find Courses</td>
                              <td className="py-2 px-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                  View all ({institution.courses})
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        {/* Pagination */}
        {filteredInstitutions.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`py-2 px-4 border border-gray-300 rounded-l-md ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                <FaChevronLeft className="h-5 w-5" />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`py-2 px-4 border border-gray-300 ${
                    currentPage === index + 1
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`py-2 px-4 border border-gray-300 rounded-r-md ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <FaChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
        )}

        {/* Results summary */}
        <div className="mt-4 text-center text-gray-600">
          Showing {filteredInstitutions.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredInstitutions.length)} of {filteredInstitutions.length}{" "}
          institutions
        </div>
      </div>
    </div>
  )
}

