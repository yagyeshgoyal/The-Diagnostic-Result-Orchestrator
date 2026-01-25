import React, { useState, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const DoctorPatientList = () => {
  const [search, setSearch] = useState('')
  const { doctorPatients,setDoctorSelectedPatient,navigate,
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
    <div className="bg-white p-6 rounded-xl shadow h-full">
      <h3 className="text-xl font-bold mb-4">Patients</h3>

      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />

      {filteredPatients.length === 0 ? (
        <p className="text-gray-500">No patients found</p>
      ) : (
        <ul className="space-y-3 max-h-[420px] overflow-y-auto">
          {filteredPatients.map((patient) => (
            <li
              key={patient._id}
              onClick={() => handleClick(patient)}
              className="p-3 border rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <p className="font-semibold">{patient.patientName}</p>
              <p className="text-sm text-gray-600">Age: {patient.age}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DoctorPatientList
