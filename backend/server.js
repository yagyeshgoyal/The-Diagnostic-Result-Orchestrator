// import express from 'express'
const express = require('express');
// import cors from 'cors'
const cors = require('cors');
// import 'dotenv/config'
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 4000


// middleware 
app.use(express.json());
app.use(cors());

// db connec karna h
const db = require("./config/database");
db.connect();

const doctorRoutes = require('./routes/doctorRoutes')
app.use('/api/doctors', doctorRoutes)

// api
app.get('/', (req,res)=>{
    res.send("API Working");
})

// apit route mount karana h




app.listen(PORT, ()=>{console.log(`Server started on port no. ${PORT}`)})