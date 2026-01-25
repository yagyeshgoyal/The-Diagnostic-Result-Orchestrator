const express = require('express')
const { addDoctor, getDoctors } = require('../controllers/doctorController')

const router = express.Router()

router.post('/add', addDoctor)
router.get('/', getDoctors)

module.exports = router
