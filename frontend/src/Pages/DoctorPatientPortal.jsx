import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { DIAGNOSIS_CONFIG, isNormalValue } from '../config/diagnosisConfig'

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
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Lab Records
      </h3>

      <div className="grid sm:grid-cols-2 gap-6">
        {doctorSelectedPatient.doctors.map((d, index) => {
          const config = DIAGNOSIS_CONFIG[d.diagnosis]
          const isNormal = isNormalValue(
            d.quantity,
            config?.normalRange
          )

          return (
            <div
              key={index}
              className={`bg-white p-5 rounded-xl border shadow-sm slide-up
                ${isNormal ? 'border-green-400' : 'border-red-400'}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm text-gray-500 mb-2">
                {new Date(d.createdAt).toLocaleDateString()}
              </p>

              <p className="font-semibold text-lg mb-1">
                {d.diagnosis}
              </p>

              <p className="text-sm text-gray-500 mb-2">
                Normal Range: {config?.normalRange} {config?.unit}
              </p>

              <p
                className={`text-lg font-bold ${
                  isNormal ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {d.quantity} {config?.unit}
              </p>

              <p className="text-xs mt-1">
                Status:{' '}
                <span
                  className={`font-semibold ${
                    isNormal ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {isNormal ? 'Normal' : 'Abnormal'}
                </span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DoctorPatientPortal
