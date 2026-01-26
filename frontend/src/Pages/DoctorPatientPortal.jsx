import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { DIAGNOSIS_CONFIG, isNormalValue } from '../config/diagnosisConfig'
import {
  ArrowLeft,
  Activity,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react'

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
    <div className="max-w-6xl mx-auto p-6 animate-fadeIn">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 
                   text-blue-600 font-semibold 
                   hover:gap-3 transition-all"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Patient Header */}
      <div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 
                   text-white p-8 rounded-3xl shadow-lg mb-10
                   animate-slideUp"
      >
        <h2 className="text-4xl font-bold">
          {doctorSelectedPatient.patientName}
        </h2>
        <p className="mt-2 text-blue-100 text-lg">
          Age: {doctorSelectedPatient.age}
        </p>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-3 mb-6">
        <Activity className="text-blue-600" />
        <h3 className="text-2xl font-semibold text-gray-800">
          Lab Records
        </h3>
      </div>

      {/* Records */}
      <div className="grid md:grid-cols-2 gap-8">
        {doctorSelectedPatient.doctors.map((d, index) => {
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
                className={`absolute top-4 right-4 px-3 py-1 
                            text-xs rounded-full font-semibold
                  ${
                    isNormal
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }
                `}
              >
                {isNormal ? 'Normal' : 'Abnormal'}
              </span>

              {/* Date */}
              <p className="text-sm text-gray-400 mb-3">
                {new Date(d.createdAt).toLocaleDateString()}
              </p>

              {/* Diagnosis */}
              <h4 className="text-xl font-semibold mb-2">
                {d.diagnosis}
              </h4>

              {/* Range */}
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">Normal Range:</span>{' '}
                {config?.normalRange} {config?.unit}
              </p>

              {/* Result */}
              <p
                className={`flex items-center gap-2 text-lg font-bold
                  ${isNormal ? 'text-green-600' : 'text-red-600'}
                `}
              >
                {isNormal ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertTriangle size={18} />
                )}
                {d.quantity} {config?.unit}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DoctorPatientPortal
