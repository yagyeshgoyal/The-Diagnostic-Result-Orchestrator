import React from 'react'
import { Stethoscope, User } from 'lucide-react'

const DoctorDetails = ({ doctor }) => {
  if (!doctor) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow animate-fadeIn">
        <p className="text-gray-500 text-center">Doctor not found</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md h-full animate-slideUp">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar */}
        <div
          className="w-16 h-16 rounded-full bg-gradient-to-br 
                     from-blue-500 to-indigo-600 
                     flex items-center justify-center 
                     text-white text-2xl font-bold shadow"
        >
          {doctor.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {doctor.name}
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Stethoscope size={14} />
            {doctor.specialty}
          </p>
        </div>
      </div>

      {/* Info Card */}
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 border rounded-xl hover:shadow transition">
          <p className="text-gray-500 text-sm">Doctor Name</p>
          <p className="font-semibold text-lg text-gray-800">
            {doctor.name}
          </p>
        </div>

        <div className="p-4 border rounded-xl hover:shadow transition">
          <p className="text-gray-500 text-sm">Specialty</p>
          <p className="font-semibold text-lg text-gray-800">
            {doctor.specialty}
          </p>
        </div>
      </div>

      {/* Footer Badge */}
      <div className="mt-6 flex justify-end">
        <span
          className="px-4 py-1 text-sm rounded-full 
                     bg-green-100 text-green-700 
                     font-medium animate-pulse"
        >
          Active
        </span>
      </div>
    </div>
  )
}

export default DoctorDetails
