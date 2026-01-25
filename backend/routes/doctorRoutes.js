const express = require('express')
const { addDoctor, getDoctors, getDoctorWithPatients } = require('../controllers/doctorController')

const router = express.Router()

router.post('/add', addDoctor)
router.get('/', getDoctors)
router.get('/:id', getDoctorWithPatients)

module.exports = router
