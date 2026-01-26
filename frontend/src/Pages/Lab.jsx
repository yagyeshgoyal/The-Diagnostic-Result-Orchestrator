import React, { useState, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import { FlaskConical, ArrowLeft } from 'lucide-react'

const Lab = () => {
  const { doctors, navigate, backendUrl } = useContext(StoreContext)

  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    doctor: '',
    diagnosis: '',
    unit: '',
    quantity: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (Object.values(formData).some(v => !v)) {
      toast.error('Please fill all fields')
      return
    }

    try {
      await axios.post(`${backendUrl}/api/patients/add`, {
        patientName: formData.patientName,
        age: formData.age,
        doctorId: formData.doctor,
        diagnosis: formData.diagnosis,
        unit: formData.unit,
        quantity: formData.quantity
      })

      toast.success('Lab data saved successfully')

      setFormData({
        patientName: '',
        age: '',
        doctor: '',
        diagnosis: '',
        unit: '',
        quantity: ''
      })
    } catch (error) {
      toast.error('Failed to save lab data')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl 
                   w-full max-w-md space-y-5 animate-slideUp"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={18} /> Back
          </button>

          <FlaskConical className="text-blue-600" size={28} />
        </div>

        <h2 className="text-3xl font-bold text-center text-blue-700">
          Lab Entry
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Add patient diagnostic data
        </p>

        {/* Inputs */}
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          className="input-style"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="input-style"
        />

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="input-style"
        >
          <option value="">Select Doctor</option>
          {doctors.map(doc => (
            <option key={doc._id} value={doc._id}>
              {doc.name} — {doc.specialty}
            </option>
          ))}
        </select>

        <select
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          className="input-style"
        >
          <option value="">Select Diagnosis</option>
          <option>Glucose</option>
          <option>Cholesterol</option>
          <option>Hemoglobin</option>
          <option>Creatinine</option>
        </select>

        <div className="flex gap-4">
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="input-style"
          >
            <option value="">Unit</option>
            <option value="mg/dL">mg/dL</option>
            <option value="g/dL">g/dL</option>
          </select>

          <input
            type="number"
            name="quantity"
            placeholder="Value"
            value={formData.quantity}
            onChange={handleChange}
            className="input-style"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600
                     text-white p-3 rounded-xl font-semibold
                     hover:scale-[1.02] transition transform"
        >
          Save Lab Result
        </button>
      </form>
    </div>
  )
}

export default Lab
