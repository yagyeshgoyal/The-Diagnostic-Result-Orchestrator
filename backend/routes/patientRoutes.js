const express = require('express')
const router = express.Router()
const {
  addPatient,
  getPatientsByDoctor,
  addLabData
} = require('../controllers/patientController')
const validatePatient = require('../middleware/validatePatient')

router.post('/add', validatePatient, addLabData)
router.get('/doctor/:doctorId', getPatientsByDoctor)

module.exports = router
