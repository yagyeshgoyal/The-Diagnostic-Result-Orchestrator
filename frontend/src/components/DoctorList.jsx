import React, { useState, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Search, Stethoscope } from 'lucide-react'

const DoctorList = () => {
  const { doctors, navigate, setSelectedDoctor } = useContext(StoreContext)
  const [search, setSearch] = useState('')

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDoctorClick = (doctor, id) => {
    setSelectedDoctor(doctor)
    navigate(`/doctor/${id}`)
  }

  return (
    <div className="mt-8 animate-fadeIn">
      {/* Search Bar */}
      <div className="relative max-w-md mb-8">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 border rounded-xl 
                     focus:ring-2 focus:ring-blue-500 
                     focus:outline-none shadow-sm"
        />
      </div>

      {/* Doctor Cards */}
      {filteredDoctors.length === 0 ? (
        <p className="text-gray-500 text-center">
          No doctors found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDoctors.map((doc, index) => (
            <div
              key={doc._id}
              onClick={() => handleDoctorClick(doc, doc._id)}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="group bg-white p-6 rounded-2xl shadow-md 
                         cursor-pointer transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl
                         animate-slideUp"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full bg-blue-100 
                           flex items-center justify-center mb-4
                           group-hover:bg-blue-600 transition"
              >
                <Stethoscope
                  size={22}
                  className="text-blue-600 group-hover:text-white"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-800">
                {doc.name}
              </h3>

              {/* Specialty */}
              <p className="text-gray-600 mt-2">
                Specialty:{' '}
                <span className="font-semibold text-gray-800">
                  {doc.specialty}
                </span>
              </p>

              {/* CTA */}
              <p className="mt-4 text-sm text-blue-600 font-medium 
                            opacity-0 group-hover:opacity-100 transition">
                View Patients →
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DoctorList
