"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaChevronDown,
  FaChevronRight,
  FaBook,
  FaCalendarAlt,
  FaClock,
  FaUniversity,
  FaFilter,
  FaAlignLeft,
} from "react-icons/fa"

// Sample data for categories
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

// Sample data for cities
const cities = [
  { id: 56, name: "Aylesbury" },
  { id: 42, name: "Ayr" },
  { id: 31, name: "Bangor" },
  { id: 22, name: "Bedford" },
  { id: 69, name: "Belfast" },
  { id: 13, name: "Birmingham" },
  { id: 30, name: "Brighton" },
  { id: 45, name: "Bristol" },
]

// Sample data for months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Sample data for durations
const durations = [
  { value: 6, label: "6 Months" },
  { value: 12, label: "1 Year" },
  { value: 24, label: "2 Years" },
  { value: 36, label: "3 Years" },
  { value: 48, label: "4 Years" },
]





export default function CourseFilterSidebar({ onFilterChange }) {
  const [expandedSections, setExpandedSections] = useState([])
  const [expandedCategories, setExpandedCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedAlphabets, setSelectedAlphabets] = useState([])
  const [selectedMonths, setSelectedMonths] = useState([])
  const [selectedDurations, setSelectedDurations] = useState([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Use a ref to track if this is the first render
  const isFirstRender = useRef(true)

  // Fix the infinite loop by only calling onFilterChange when filters actually change
  // and not on the initial render
  useEffect(() => {
    // Skip the first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Only call onFilterChange if it exists
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        subcategory: selectedSubcategory,
        city: selectedCity,
        alphabets: selectedAlphabets,
        months: selectedMonths,
        durations: selectedDurations,
      })
    }
  }, [selectedCategory, selectedSubcategory, selectedCity, selectedAlphabets, selectedMonths, selectedDurations]) // Removed onFilterChange from dependencies

  // Rest of the component remains the same
  const toggleSection = (section) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
    setSelectedSubcategory(null)
  }

  const handleSubcategorySelect = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId === selectedSubcategory ? null : subcategoryId)
  }

  const handleCityChange = (e) => {
    console.log(e.target)
    setSelectedCity(e.target.value)
  }

  const toggleAlphabet = (letter) => {
    setSelectedAlphabets((prev) => (prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]))
  }

  const toggleMonth = (month) => {
    setSelectedMonths((prev) => (prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]))
  }

  const toggleDuration = (duration) => {
    setSelectedDurations((prev) => (prev.includes(duration) ? prev.filter((d) => d !== duration) : [...prev, duration]))
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <div className="text-[#00115a] bg-white">
      {/* Mobile filter button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaFilter size={20} />
        </button>
      </div>

      {/* Mobile filter overlay */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-bold">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <div className="p-4">{renderFilterContent()}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden md:block w-full max-w-xs">{renderFilterContent()}</div>
    </div>
  )

  function renderFilterContent() {
    return (
      <div className="space-y-4">
        {/* Category Filter */}
        <FilterSection
          title="Category Filter"
          icon={<FaBook />}
          isExpanded={expandedSections.includes("category")}
          onToggle={() => toggleSection("category")}
        >
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id} className="border-b pb-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={`category-${category.id}`}
                    name="category"
                    className="mr-2"
                    checked={selectedCategory === category.id}
                    onChange={() => handleCategorySelect(category.id)}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className={`flex-1 cursor-pointer ${selectedCategory === category.id ? "font-bold" : ""}`}
                  >
                    {category.name}
                  </label>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleCategory(category.id)
                    }}
                    className="text-gray-500 hover:text-gray-700 flex items-center text-sm"
                  >
                    <span className="mr-1">view more</span>
                    <motion.div
                      animate={{ rotate: expandedCategories.includes(category.id) ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronRight size={10} />
                    </motion.div>
                  </button>
                </div>

                <AnimatePresence>
                  {expandedCategories.includes(category.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden ml-4 mt-2"
                    >
                      <ul className="space-y-1">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory.id}>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id={`subcategory-${subcategory.id}`}
                                name="subcategory"
                                className="mr-2"
                                checked={selectedSubcategory === subcategory.id}
                                onChange={() => handleSubcategorySelect(subcategory.id)}
                              />
                              <label htmlFor={`subcategory-${subcategory.id}`} className="text-sm cursor-pointer">
                                {subcategory.name}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </FilterSection>

        {/* Rest of the filter sections remain the same */}
        {/* University City */}
        <FilterSection
          title="University City"
          icon={<FaUniversity />}
          isExpanded={expandedSections.includes("city")}
          onToggle={() => toggleSection("city")}
        >
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--All--</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </FilterSection>

        {/* Course (A-Z) */}
        <FilterSection
          title="Course (A-Z)"
          icon={<FaAlignLeft />}
          isExpanded={expandedSections.includes("alphabet")}
          onToggle={() => toggleSection("alphabet")}
        >
          <div className="grid grid-cols-6 gap-1 text-center">
            {alphabet.map((letter) => (
              <motion.button
                key={letter}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleAlphabet(letter)}
                className={`p-2 rounded ${
                  selectedAlphabets.includes(letter) ? "bg-blue-900 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {letter}
              </motion.button>
            ))}
          </div>
        </FilterSection>

        {/* Start Date (Month) */}
        <FilterSection
          title="Start Date (Month)"
          icon={<FaCalendarAlt />}
          isExpanded={expandedSections.includes("month")}
          onToggle={() => toggleSection("month")}
        >
          <ul className="space-y-2">
            {months.map((month) => (
              <li key={month}>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`month-${month}`}
                    checked={selectedMonths.includes(month)}
                    onChange={() => toggleMonth(month)}
                    className="mr-2"
                  />
                  <label htmlFor={`month-${month}`} className="cursor-pointer">
                    {month}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </FilterSection>

        {/* Course Duration */}
        <FilterSection
          title="Course Duration"
          icon={<FaClock />}
          isExpanded={expandedSections.includes("duration")}
          onToggle={() => toggleSection("duration")}
        >
          <ul className="space-y-2">
            {durations.map((duration) => (
              <li key={duration.value}>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`duration-${duration.value}`}
                    checked={selectedDurations.includes(duration.value)}
                    onChange={() => toggleDuration(duration.value)}
                    className="mr-2"
                  />
                  <label htmlFor={`duration-${duration.value}`} className="cursor-pointer">
                    {duration.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </FilterSection>

        {/* Promotional banners */}
        <div className="mt-6 space-y-4">
          <a href="#" className="block">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Promotional banner"
              className="w-full rounded-md shadow-sm hover:shadow-md transition-shadow"
            />
          </a>
          <a href="#" className="block">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Award banner"
              className="w-full rounded-md shadow-sm hover:shadow-md transition-shadow"
            />
          </a>
        </div>
      </div>
    )
  }
}

function FilterSection({ title, icon, isExpanded, onToggle, children }) {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center">
          <span className="mr-2 text-blue-900">{icon}</span>
          <h3 className="font-medium">{title}</h3>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FaChevronDown className="text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

