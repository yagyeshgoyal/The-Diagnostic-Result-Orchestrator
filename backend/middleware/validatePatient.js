const validatePatient = (req, res, next) => {
  const {
    patientName,
    age,
    unit,
    quantity,
    doctorId
  } = req.body

  if (
    !patientName ||
    !age ||
    !unit ||
    !quantity ||
    !doctorId
  ) {
    res.status(400)
    throw new Error('All patient fields are required')
  }

  next()
}

module.exports = validatePatient
