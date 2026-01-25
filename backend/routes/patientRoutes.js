const express = require('express')
const router = express.Router()
const {
  addPatient,
  getPatientsByDoctor,
  addLabData,
    getAllPatients
} = require('../controllers/patientController')
const validatePatient = require('../middleware/validatePatient')

router.post('/add', validatePatient, addLabData)
router.get('/doctor/:doctorId', getPatientsByDoctor)
router.get('/', getAllPatients)

module.exports = router
