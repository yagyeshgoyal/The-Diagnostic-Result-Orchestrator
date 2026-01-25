import React, { useState } from 'react'

const DoctorPatientList = ({ patients }) => {
  const [search, setSearch] = useState('')

  const filteredPatients = patients.filter((patient) =>
    patient.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-white p-6 rounded-xl shadow h-full">
      <h3 className="text-xl font-bold mb-4">Patients</h3>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-3 border rounded-lg mb-4"
      />

      {/* Patient List */}
      {filteredPatients.length === 0 ? (
        <p className="text-gray-500">No patients found</p>
      ) : (
        <ul className="space-y-3">
          {filteredPatients.map((patient, index) => (
            <li
              key={index}
              className="p-3 border rounded-lg hover:bg-gray-50"
            >
              {patient}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DoctorPatientList
