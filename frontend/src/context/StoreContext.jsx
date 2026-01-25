import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const StoreContext = createContext();

const StoreContextProvider = (props) =>{

    
    const backendUrl  = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [doctorPatients, setDoctorPatients] = useState([])


    const fetchDoctors = async () => {
        try {
        const res = await axios.get(`${backendUrl}/api/doctors`)
        setDoctors(res.data)
        } catch (error) {
        console.error('Error fetching doctors:', error)
        }
    }

    const addDoctor = async (doctor) => {
        try {
        await axios.post(`${backendUrl}/api/doctors/add`, doctor)
        fetchDoctors()
        } catch (error) {
        console.error('Error adding doctor:', error)
        }
    }

    const fetchDoctorPatients = async (doctorId) => {
        try {
        const res = await axios.get(
            `${backendUrl}/api/patients/doctor/${doctorId}`
        )
        setDoctorPatients(res.data)
        } catch (error) {
        console.error(error)
        }
    }

    useEffect(() => {
        fetchDoctors()
    }, [])

   
    
    const value ={
        
        navigate,
        backendUrl,
        doctors,
        addDoctor,
        selectedDoctor,
        setSelectedDoctor,
        doctorPatients,
        fetchDoctorPatients,
    }

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;