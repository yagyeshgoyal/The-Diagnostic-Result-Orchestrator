const mongoose = require('mongoose')

const patientDoctorSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  unit: String,
  quantity: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const patientSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  doctors: [patientDoctorSchema] // MULTIPLE DOCTORS
})

module.exports = mongoose.model('Patient', patientSchema)
