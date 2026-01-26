import React, { useState, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { StoreContext } from '../context/StoreContext'

const Patient = () => {
  const { allPatients, navigate,setSelectedPatient } = useContext(StoreContext)

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 fade-in"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-600">
          Patient Portal
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Check In
        </button>
      </form>
    </div>
  )
}

export default Patient
