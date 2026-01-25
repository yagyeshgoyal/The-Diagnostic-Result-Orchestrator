import React, { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const DoctorList = () => {
  const { doctors, navigate,setSelectedDoctor  } = useContext(StoreContext)
  const [search, setSearch] = useState('')

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDoctorClick = (doctor,id) => {
    setSelectedDoctor(doctor)   
    navigate(`/doctor/${id}`) 
  }

  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Search doctor by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-3 border rounded-lg mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <div
            key={doc._id}
            onClick={() => handleDoctorClick(doc,doc._id)}
            className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{doc.name}</h3>
            <p className="text-gray-600 mt-2">
              Specialty: <span className="font-semibold">{doc.specialty}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorList
