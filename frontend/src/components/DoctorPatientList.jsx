import React, { useState, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Search, User } from 'lucide-react'

const DoctorPatientList = () => {
  const [search, setSearch] = useState('')
  const {
    doctorPatients,
    selectDoctorPatient
  } = useContext(StoreContext)

  const filteredPatients = Array.isArray(doctorPatients)
    ? doctorPatients.filter((patient) =>
        patient.patientName.toLowerCase().includes(search.toLowerCase())
      )
    : []

  const handleClick = (patient) => {
    selectDoctorPatient(patient)
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md h-full animate-fadeIn">
      {/* Header */}
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <User className="text-blue-600" size={22} />
        Patients
      </h3>

      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 border rounded-xl 
                     focus:ring-2 focus:ring-blue-500 
                     focus:outline-none shadow-sm"
        />
      </div>

      {/* Patient List */}
      {filteredPatients.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">
          No patients found
        </p>
      ) : (
        <ul className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
          {filteredPatients.map((patient, index) => (
            <li
              key={patient._id}
              onClick={() => handleClick(patient)}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="group p-4 border rounded-xl cursor-pointer 
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-md
                         hover:bg-blue-50
                         animate-slideUp"
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full bg-blue-100 
                             flex items-center justify-center
                             text-blue-600 font-bold
                             group-hover:bg-blue-600 
                             group-hover:text-white transition"
                >
                  {patient.patientName.charAt(0).toUpperCase()}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {patient.patientName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Age: {patient.age}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DoctorPatientList
