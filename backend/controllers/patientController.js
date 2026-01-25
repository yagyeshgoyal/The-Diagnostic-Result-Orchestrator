const Patient = require('../models/Patient')
const Doctor = require('../models/Doctor')

addLabData = async (req, res) => {
  try {
    const { patientName, age, doctorId, unit, quantity } = req.body

    let patient = await Patient.findOne({ patientName, age })

    if (patient) {
      // patient exists → add new doctor record
      patient.doctors.push({
        doctor: doctorId,
        unit,
        quantity
      })

      await patient.save()
    } else {
      // new patient
      patient = await Patient.create({
        patientName,
        age,
        doctors: [
          {
            doctor: doctorId,
            unit,
            quantity
          }
        ]
      })
    }

    // Optional: keep reverse reference in Doctor
    await Doctor.findByIdAndUpdate(doctorId, {
      $addToSet: { patients: patient._id }
    })

    res.status(201).json(patient)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

addPatient = async (req, res) => {

  try {
    const { patientName, age, doctorId, unit, quantity } = req.body

    const patient = await Patient.create({
      patientName,
      age,
      unit,
      quantity,
      doctor: doctorId
    })

    await Doctor.findByIdAndUpdate(doctorId, {
      $push: { patients: patient._id }
    })

    res.status(201).json(patient)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

getPatientsByDoctor = async (req, res) => {
  const doctorId = req.params.doctorId

  const patients = await Patient.find({
    'doctors.doctor': doctorId
  }).populate('doctors.doctor')

  res.json(patients)
}

getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate({
      path: 'doctors.doctor',
      select: 'name specialty'
    })

    res.status(200).json(patients)
  } catch (error) {
    console.error(' Fetch patients error:', error)
    res.status(500).json({
      message: 'Failed to fetch patients',
      error: error.message
    })
  }
}

module.exports = { addPatient, getPatientsByDoctor,addLabData,getAllPatients }
