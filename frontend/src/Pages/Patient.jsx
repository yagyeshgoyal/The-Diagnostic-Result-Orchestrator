import React, { useState, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { StoreContext } from '../context/StoreContext'
import { User, Calendar } from 'lucide-react'

const Patient = () => {
  const { allPatients, navigate, setSelectedPatient } = useContext(StoreContext)

  const [formData, setFormData] = useState({
    name: '',
    age: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.age) {
      toast.error('Please fill all fields')
      return
    }

    const patient = allPatients.find(
      (p) =>
        p.patientName.toLowerCase() === formData.name.toLowerCase() &&
        String(p.age) === String(formData.age)
    )

    if (patient) {
      toast.success(`Welcome ${patient.patientName}`)
      setSelectedPatient(patient)
      navigate('/patient-portal')
    } else {
      toast.error('Patient not found')
    }

    setFormData({ name: '', age: '' })
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100"
    >
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-xl 
                   p-8 rounded-2xl shadow-xl 
                   w-full max-w-md space-y-5 
                   animate-slideUp"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold text-blue-600">
            Patient Portal
          </h2>
          <p className="text-gray-500 text-sm">
            Access your diagnosis & doctor details
          </p>
        </div>

        {/* Name Input */}
        <div className="relative">
          <User
            className="absolute top-3.5 left-3 text-gray-400"
            size={18}
          />
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 p-3 border rounded-xl 
                       focus:ring-2 focus:ring-blue-400 
                       focus:outline-none transition"
          />
        </div>

        {/* Age Input */}
        <div className="relative">
          <Calendar
            className="absolute top-3.5 left-3 text-gray-400"
            size={18}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full pl-10 p-3 border rounded-xl 
                       focus:ring-2 focus:ring-blue-400 
                       focus:outline-none transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r 
                     from-blue-600 to-indigo-600 
                     text-white p-3 rounded-xl 
                     font-semibold 
                     hover:scale-[1.02] 
                     active:scale-95 
                     transition-all shadow-lg"
        >
          Check In
        </button>
      </form>
    </div>
  )
}

export default Patient
