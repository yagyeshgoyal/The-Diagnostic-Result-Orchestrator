import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { DIAGNOSIS_CONFIG, isNormalValue } from '../config/diagnosisConfig'
import { ArrowLeft, Stethoscope, AlertTriangle, CheckCircle } from 'lucide-react'

const PatientPortal = () => {
  const { selectedPatient, navigate } = useContext(StoreContext)

  if (!selectedPatient) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No patient data found
      </p>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6 animate-fadeIn">

      {/* Back */}
      <button
        onClick={() => navigate('/patient')}
        className="mb-6 flex items-center gap-2 
                   text-green-600 font-semibold 
                   hover:gap-3 transition-all"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Patient Header */}
      <div
        className="bg-gradient-to-r from-emerald-600 to-green-600 
                   text-white p-8 rounded-3xl shadow-lg mb-10
                   animate-slideUp"
      >
        <h2 className="text-4xl font-bold">
          {selectedPatient.patientName}
        </h2>
        <p className="mt-2 text-green-100 text-lg">
          Age: {selectedPatient.age}
        </p>
      </div>

      {/* Diagnosis Title */}
      <div className="flex items-center gap-3 mb-6">
        <Stethoscope className="text-green-600" />
        <h3 className="text-2xl font-semibold text-gray-800">
          Diagnosis & Lab Records
        </h3>
      </div>

      {/* Empty State */}
      {selectedPatient.doctors.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No diagnosis records available
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {selectedPatient.doctors.map((d, index) => {
            const config = DIAGNOSIS_CONFIG[d.diagnosis]
            const isNormal = isNormalValue(
              d.quantity,
              config?.normalRange
            )

            return (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl 
                           border shadow-md hover:shadow-xl 
                           transition-all duration-300
                           animate-slideUp"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs 
                              rounded-full font-semibold
                              ${
                                isNormal
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                >
                  {isNormal ? 'Normal' : 'Attention'}
                </span>

                {/* Date */}
                <p className="text-sm text-gray-400 mb-3">
                  {new Date(d.createdAt).toLocaleDateString()}
                </p>

                {/* Doctor */}
                <p className="font-semibold text-lg">
                  {d.doctor?.name || 'N/A'}
                </p>
                <p className="text-gray-500 mb-4">
                  {d.doctor?.specialty}
                </p>

                {/* Diagnosis */}
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Diagnosis:</span>{' '}
                    {d.diagnosis}
                  </p>

                  <p className="text-gray-600">
                    <span className="font-semibold">Normal Range:</span>{' '}
                    {config?.normalRange || 'N/A'} {config?.unit}
                  </p>

                  <p
                    className={`flex items-center gap-2 font-semibold text-lg
                      ${isNormal ? 'text-green-600' : 'text-red-600'}
                    `}
                  >
                    {isNormal ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertTriangle size={18} />
                    )}
                    Result: {d.quantity} {config?.unit}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default PatientPortal
