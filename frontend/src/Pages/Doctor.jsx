import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AddDoctor from '../components/AddDoctor'
import DoctorList from '../components/DoctorList'

const Doctor = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <Toaster position="top-right" />

      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 bg-gray-600 text-white px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <button
        onClick={() => setShowModal(true)}
        className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        + Add Doctor
      </button>

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Doctors
      </h1>

      <DoctorList />

      {showModal && <AddDoctor onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Doctor
