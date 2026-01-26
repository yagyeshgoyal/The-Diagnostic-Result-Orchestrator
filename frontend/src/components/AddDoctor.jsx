import React, { useState, useContext } from 'react'
import toast from 'react-hot-toast'
import { StoreContext } from '../context/StoreContext'
import { X, UserPlus } from 'lucide-react'

const AddDoctor = ({ onClose }) => {
  const { addDoctor } = useContext(StoreContext)

  const [formData, setFormData] = useState({
    name: '',
    specialty: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.specialty) {
      toast.error('Please fill all fields')
      return
    }

    addDoctor(formData)
    toast.success('Doctor added successfully')

    setFormData({ name: '', specialty: '' })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center 
                    bg-black/50 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl 
                      p-8 animate-scaleIn relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-100 
                          flex items-center justify-center mb-3">
            <UserPlus className="text-blue-600" size={28} />
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Add New Doctor
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter doctor details below
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-600">
              Doctor Name
            </label>
            <input
              name="name"
              placeholder="Dr. John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-xl 
                         focus:ring-2 focus:ring-blue-500 
                         focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Specialty
            </label>
            <input
              name="specialty"
              placeholder="Cardiologist"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-xl 
                         focus:ring-2 focus:ring-blue-500 
                         focus:outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 
                         rounded-xl font-semibold 
                         hover:bg-blue-700 transition"
            >
              Add Doctor
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 
                         rounded-xl font-semibold 
                         hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDoctor
