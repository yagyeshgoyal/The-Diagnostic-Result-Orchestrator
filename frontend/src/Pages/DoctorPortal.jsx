import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'
import DoctorDetails from '../components/DoctorDetails'
import DoctorPatientList from '../components/DoctorPatientList'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Stethoscope } from 'lucide-react'

const DoctorPortal = () => {
  const { selectedDoctor, fetchDoctorPatients } = useContext(StoreContext)
  const navigate = useNavigate()

  // Safety fallback
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fadeDown">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-600 text-white rounded-xl shadow">
            <Stethoscope size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Doctor Dashboard
          </h1>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2
                     rounded-xl hover:bg-gray-800 transition"
        >
          <ArrowLeft size={18} /> Back
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Left Panel */}
        <div className="md:col-span-1 animate-slideLeft">
          <div className="bg-white rounded-2xl shadow-lg p-4 card-hover">
            <DoctorDetails doctor={selectedDoctor} />
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-3 animate-slideRight">
          <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
            <DoctorPatientList />
          </div>
        </div>

      </div>
    </div>
  )
}

export default DoctorPortal
