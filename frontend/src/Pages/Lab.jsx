import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Lab = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    doctor: '',
    diagnostic: '',
    unit: '',
    quantity: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // simple validation
    if (
      !formData.patientName ||
      !formData.age ||
      !formData.doctor ||
      !formData.diagnostic ||
      !formData.unit ||
      !formData.quantity
    ) {
      toast.error('Please fill all fields')
      return
    }

    console.log('Lab Data:', formData)

    toast.success('Lab form submitted successfully!')

    // clear form
    setFormData({
      patientName: '',
      age: '',
      doctor: '',
      diagnostic: '',
      unit: '',
      quantity: ''
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
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

        <input
          type="text"
          name="doctor"
          placeholder="Assign Doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="diagnostic"
          placeholder="Diagnostic"
          value={formData.diagnostic}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex gap-4">
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Unit</option>
            <option value="ml/dL">ml/dL</option>
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
