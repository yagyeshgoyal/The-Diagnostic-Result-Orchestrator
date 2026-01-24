import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext.jsx'

const Home = () => {
  const {navigate} = useContext(StoreContext);

  return (
    <div className="min-h-screen flex items-center justify-center gap-8 bg-gray-100">
      
      <div
        onClick={() => navigate('/lab')}
        className="w-48 h-32 flex items-center justify-center 
                   bg-white rounded-xl shadow-md cursor-pointer
                   text-xl font-semibold
                   hover:bg-blue-500 hover:text-white
                   transition duration-300"
      >
        Lab
      </div>

      <div
        onClick={() => navigate('/patient')}
        className="w-48 h-32 flex items-center justify-center 
                   bg-white rounded-xl shadow-md cursor-pointer
                   text-xl font-semibold
                   hover:bg-green-500 hover:text-white
                   transition duration-300"
      >
        Patient
      </div>

      <div
        onClick={() => navigate('/doctor')}
        className="w-48 h-32 flex items-center justify-center 
                   bg-white rounded-xl shadow-md cursor-pointer
                   text-xl font-semibold
                   hover:bg-purple-500 hover:text-white
                   transition duration-300"
      >
        Doctor
      </div>

    </div>
  )
}

export default Home
