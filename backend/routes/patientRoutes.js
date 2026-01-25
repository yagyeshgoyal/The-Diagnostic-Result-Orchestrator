const express = require('express')
const router = express.Router()
const {
  addPatient,
  getPatientsByDoctor
} = require('../controllers/patientController')
const validatePatient = require('../middleware/validatePatient')

router.post('/add', validatePatient, addPatient)
router.get('/doctor/:doctorId', getPatientsByDoctor)

module.exports = router
