import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const StoreContext = createContext();

const StoreContextProvider = (props) =>{



    
    const backendUrl  = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([])

    const addDoctor = (doctor) => {
        setDoctors((prev) => [...prev, doctor])
    }

    useEffect(() => {
        setDoctors(doctors)
    }, [doctors])

   
    
    const value ={
        
        navigate,
        backendUrl,
        doctors,
        addDoctor
    }

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;