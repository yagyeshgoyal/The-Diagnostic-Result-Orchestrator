import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Lab from './Pages/Lab.jsx'
import Patient from './Pages/Patient.jsx'
import Doctor from './Pages/Doctor.jsx'
import DoctorPortal from './Pages/DoctorPortal.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/:id" element={<DoctorPortal />} />
      </Routes>
    </>
  )
}

export default App
