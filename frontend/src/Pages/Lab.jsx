import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Lab = () => {
  const { doctors,navigate, backendUrl } = useContext(StoreContext)

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

    if (
      !formData.patientName ||
      !formData.age ||
      !formData.doctor ||
      !formData.diagnosis ||
      !formData.unit ||
      !formData.quantity
    ) {
      toast.error('Please fill all fields')
      return
    }

    try {
      console.log('Submitting lab data:', formData)
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
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <div className="flex items-center mb-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Back
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-blue-600">
          Lab Entry Form
        </h2>

        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Doctor</option>

          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name} — {doc.specialty}
            </option>
          ))}
        </select>

        <select
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Diagnosis</option>
          <option value="Glucose">Glucose</option>
          <option value="Cholesterol">Cholesterol</option>
          <option value="Hemoglobin">Hemoglobin</option>
          <option value="Creatinine">Creatinine</option>
        </select>


        <div className="flex gap-4">
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Unit</option>
            <option value="ml/dL">mg/dL</option>
            <option value="g/dL">g/dL</option>
          </select>

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold
                     hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Lab
