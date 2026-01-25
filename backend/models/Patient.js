const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      enum: ['ml/dL', 'g/dL'],
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Patient', patientSchema)
