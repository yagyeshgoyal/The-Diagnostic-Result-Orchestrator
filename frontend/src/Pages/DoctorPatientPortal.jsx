import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const DoctorPatientPortal = () => {
  const { doctorSelectedPatient, navigate } = useContext(StoreContext)

  if (!doctorSelectedPatient) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No patient selected
      </p>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6 fade-in">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-blue-600 font-semibold hover:underline"
      >
        ← Back
      </button>

      {/* Patient Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow mb-8 slide-up">
        <h2 className="text-3xl font-bold">
          {doctorSelectedPatient.patientName}
        </h2>
        <p className="mt-2 text-blue-100">
          Age: {doctorSelectedPatient.age}
        </p>
      </div>

      {/* Lab Records */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 slide-up">
        Lab Records
      </h3>

      {doctorSelectedPatient.doctors.length === 0 ? (
        <p className="text-gray-500 slide-up">
          No lab records found
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {doctorSelectedPatient.doctors.map((d, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border shadow-sm card-hover slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500">
                  {new Date(d.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Unit:</span> {d.unit}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Quantity:</span>{' '}
                  {d.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DoctorPatientPortal
