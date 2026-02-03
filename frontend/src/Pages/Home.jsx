import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext.jsx'
import { FlaskConical, User, Stethoscope, ArrowRight, Sparkles } from 'lucide-react'

const Home = () => {
  const { navigate } = useContext(StoreContext)
  
  const cards = [
    {
      title: 'Lab',
      icon: <FlaskConical size={40} strokeWidth={1.5} />,
      path: '/lab',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      description: 'Manage lab tests & results',
      bgPattern: 'bg-blue-500/10'
    },
    {
      title: 'Patient',
      icon: <User size={40} strokeWidth={1.5} />,
      path: '/patient',
      gradient: 'from-green-500 via-emerald-500 to-lime-500',
      description: 'Patient records & appointments',
      bgPattern: 'bg-green-500/10'
    },
    {
      title: 'Doctor',
      icon: <Stethoscope size={40} strokeWidth={1.5} />,
      path: '/doctor',
      gradient: 'from-purple-500 via-indigo-500 to-pink-500',
      description: 'Doctor dashboard & consultations',
      bgPattern: 'bg-purple-500/10'
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptLTIgMnYtMmgydjJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0yIDB2LTJoMnYyaC0yem0wLTJ2Mmgydi0yaC0yem0yIDB2Mmgydi0yaC0yem0wIDJ2LTJoMnYyaC0yem0yLTJ2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMCAwdi0yaDJ2MmgtMnptMi0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            {/* <Sparkles size={18} className="text-yellow-400" /> */}
            {/* <span className="text-sm text-white/80 font-medium">Healthcare Management System</span> */}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              HealthCare
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose your portal to access comprehensive healthcare services
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              
              <div className="relative h-72 rounded-3xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                
                <div className={`absolute inset-0 ${card.bgPattern} backdrop-blur-3xl`}></div>
                
                
                <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                
                
                <div className={`absolute -inset-1 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500 -z-10`}></div>
                
                
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-white z-10">
                  
                  <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl">
                      {card.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-3xl font-bold mb-3 tracking-wide">
                    {card.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm opacity-90 text-center mb-6 px-4">
                    {card.description}
                  </p>
                  
                  {/* Enter Button */}
                  <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-sm font-medium">Enter Portal</span>
                    <ArrowRight 
                      size={16} 
                      className="transform transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
              </div>

              {/* Floating Dots Decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/40 rounded-full blur-sm animate-ping" style={{ animationDelay: `${index * 0.3}s` }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/30 rounded-full blur-sm animate-ping" style={{ animationDelay: `${index * 0.5}s` }}></div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Secure • Fast • Reliable Healthcare Solutions
          </p>
        </div>
      </div>

      {/* Add Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .group:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Home