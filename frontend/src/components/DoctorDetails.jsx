import React from 'react'

const DoctorDetails = ({ doctor }) => {
  if (!doctor) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Doctor not found</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow h-full">
      <h2 className="text-2xl font-bold mb-4">Doctor Profile</h2>

      <div className="space-y-3">
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <p className="font-semibold text-lg">{doctor.name}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Specialty</p>
          <p className="font-semibold text-lg">{doctor.specialty}</p>
        </div>

        {/* Future ready fields */}
        {/* 
        <div>
          <p className="text-gray-500 text-sm">Experience</p>
          <p className="font-semibold text-lg">{doctor.experience} years</p>
        </div>
        */}
      </div>
    </div>
  )
}

export default DoctorDetails
