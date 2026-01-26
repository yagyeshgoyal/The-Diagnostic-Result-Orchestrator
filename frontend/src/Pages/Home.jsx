import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext.jsx'
import { FlaskConical, User, Stethoscope } from 'lucide-react'

const Home = () => {
  const { navigate } = useContext(StoreContext)

  const cards = [
    {
      title: 'Lab',
      icon: <FlaskConical size={36} />,
      path: '/lab',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Patient',
      icon: <User size={36} />,
      path: '/patient',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Doctor',
      icon: <Stethoscope size={36} />,
      path: '/doctor',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="grid sm:grid-cols-3 gap-10 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className={`relative group cursor-pointer
              w-56 h-40 rounded-2xl bg-gradient-to-br ${card.color}
              flex flex-col items-center justify-center gap-3
              text-white shadow-xl
              transform transition-all duration-500
              hover:-translate-y-3 hover:scale-105
              floating`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition bg-white/30"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              {card.icon}
              <h2 className="text-xl font-bold tracking-wide">
                {card.title}
              </h2>
              <p className="text-sm opacity-90">
                Enter Portal
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
