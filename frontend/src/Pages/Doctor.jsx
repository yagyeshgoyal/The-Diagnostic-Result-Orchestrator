import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AddDoctor from '../components/AddDoctor'
import DoctorList from '../components/DoctorList'
import { ArrowLeft, Plus, UserPlus } from 'lucide-react'

const Doctor = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 relative">
      <Toaster position="top-right" />

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8 animate-fadeDown">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 
                     rounded-xl hover:bg-gray-800 transition"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 
                     rounded-xl hover:bg-blue-700 transition shadow-lg"
        >
          <Plus size={18} /> Add Doctor
        </button>
      </div>

      {/* Page Title */}
      <div className="text-center mb-10 animate-slideUp">
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 
                        rounded-2xl shadow-md">
          <UserPlus className="text-blue-600" size={26} />
          <h1 className="text-3xl font-bold text-gray-800">
            Doctor Management
          </h1>
        </div>
        <p className="mt-3 text-gray-600">
          Manage doctors and their specialties
        </p>
      </div>

      {/* Doctor List */}
      <div className="max-w-6xl mx-auto animate-fadeIn">
        <DoctorList />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 animate-fadeIn">
          <AddDoctor onClose={() => setShowModal(false)} />
        </div>
      )}
    </div>
  )
}

export default Doctor
