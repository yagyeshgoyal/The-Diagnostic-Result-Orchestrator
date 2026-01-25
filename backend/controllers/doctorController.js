const Doctor = require('../models/Doctor')

//  Add Doctor
const addDoctor = async (req, res) => {
  try {
    const { name, specialty } = req.body

    if (!name || !specialty) {
      return res.status(400).json({ message: 'All fields required' })
    }

    const doctor = await Doctor.create({ name, specialty })
    res.status(201).json(doctor)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//  Get All Doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 })
    res.json(doctors)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

getDoctorWithPatients = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
      .populate('patients') 

    res.json(doctor)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { addDoctor, getDoctors , getDoctorWithPatients}



