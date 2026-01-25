import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import DoctorDetails from '../components/DoctorDetails'
import DoctorPatientList from '../components/DoctorPatientList'
import { useNavigate } from 'react-router-dom'

const DoctorPortal = () => {
  const { selectedDoctor,fetchDoctorPatients } = useContext(StoreContext)
  const navigate = useNavigate()

  const [patients, setPatients] = useState([])

  // fallback safety
  useEffect(() => {
    if (!selectedDoctor) {
      navigate('/doctor')
    }
  }, [selectedDoctor, navigate])

  useEffect(() => {
  if (selectedDoctor) {
    fetchDoctorPatients(selectedDoctor._id)
  }
}, [selectedDoctor])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Doctor Portal</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
        >
          Back
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Panel */}
        <div className="md:col-span-1">
          <DoctorDetails doctor={selectedDoctor} />
        </div>

        {/* Right Panel */}
        <div className="md:col-span-3">
          <DoctorPatientList patients={patients} />
        </div>
      </div>
    </div>
  )
}

export default DoctorPortal
