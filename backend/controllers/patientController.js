const Patient = require('../models/Patient')
const Doctor = require('../models/Doctor')

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

getPatientsByDoctor = async(req, res) => {
  const patients = await Patient.find({
    doctor: req.params.doctorId
  })

  res.json({
    success: true,
    count: patients.length,
    data: patients
  })
}

module.exports = { addPatient, getPatientsByDoctor }
