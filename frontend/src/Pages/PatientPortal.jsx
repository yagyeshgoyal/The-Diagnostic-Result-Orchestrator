import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PatientPortal = () => {
  const { selectedPatient, navigate } = useContext(StoreContext)
  console.log(selectedPatient)

  if (!selectedPatient) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No patient data found
      </p>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6 fade-in">
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/patient')}
        className="mb-4 flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition slide-up"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-2xl shadow mb-8 slide-up">
        <h2 className="text-3xl font-bold">
          {selectedPatient.patientName}
        </h2>
        <p className="mt-2 text-green-100">
          Age: {selectedPatient.age}
        </p>
      </div>

      {/* Diagnosis / Lab Results */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Diagnosis & Lab Records
      </h3>

      {selectedPatient.doctors.length === 0 ? (
        <p className="text-gray-500">
          No diagnosis records available
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {selectedPatient.doctors.map((d, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border shadow card-hover slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm text-gray-500 mb-2">
                {new Date(d.createdAt).toLocaleDateString()}
              </p>

              <p>
                <span className="font-semibold">Doctor:</span>{' '}
                {d.doctor?.name || 'N/A'}
              </p>

              <p className="text-sm text-gray-500">
                {d.doctor?.specialty}
              </p>

              <p>
                <span className="font-semibold">Unit:</span> {d.unit}
              </p>

              <p>
                <span className="font-semibold">Quantity:</span>{' '}
                {d.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PatientPortal
