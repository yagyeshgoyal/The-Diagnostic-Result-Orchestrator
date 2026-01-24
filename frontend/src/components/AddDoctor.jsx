import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

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
    toast.success('Doctor added')

    setFormData({ name: '', specialty: '' })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Add Doctor</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Doctor Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="specialty"
            placeholder="Specialty"
            value={formData.specialty}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex gap-3">
            <button className="w-full bg-blue-600 text-white p-2 rounded-lg">
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-gray-300 p-2 rounded-lg"
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
