import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#050505] text-white px-6 py-12 relative overflow-hidden font-sans">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes flame {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.8; }
          50% { transform: scaleY(1.25) scaleX(1.1); opacity: 1; }
        }
        @keyframes star-pulse {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        .animate-spaceship-float {
          animation: float 4.5s ease-in-out infinite;
        }
        .animate-thruster-flame {
          animation: flame 0.15s ease-in-out infinite alternate;
        }
        .star {
          animation: star-pulse 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Starfield Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="star absolute w-1 h-1 bg-white rounded-full top-[15%] left-[20%]" style={{ animationDelay: '0.2s' }}></div>
        <div className="star absolute w-1.5 h-1.5 bg-amber-400 rounded-full top-[25%] left-[75%]" style={{ animationDelay: '0.8s' }}></div>
        <div className="star absolute w-1 h-1 bg-white rounded-full top-[60%] left-[10%]" style={{ animationDelay: '1.4s' }}></div>
        <div className="star absolute w-1.5 h-1.5 bg-blue-300 rounded-full top-[70%] left-[85%]" style={{ animationDelay: '0.5s' }}></div>
        <div className="star absolute w-1 h-1 bg-white rounded-full top-[85%] left-[30%]" style={{ animationDelay: '1.9s' }}></div>
        <div className="star absolute w-1 h-1 bg-amber-200 rounded-full top-[45%] left-[90%]" style={{ animationDelay: '1.1s' }}></div>
        <div className="star absolute w-1 h-1 bg-white rounded-full top-[10%] left-[50%]" style={{ animationDelay: '2.3s' }}></div>
        <div className="star absolute w-1.5 h-1.5 bg-white rounded-full top-[80%] left-[60%]" style={{ animationDelay: '0.7s' }}></div>
      </div>

      <div className="max-w-xl w-full text-center z-10 flex flex-col items-center">
        {/* Spaceship Wrapper */}
        <motion.div
          className="animate-spaceship-float mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-48 h-48 md:w-56 md:h-56 filter drop-shadow-[0_0_35px_rgba(245,158,11,0.25)]"
          >
            {/* Ambient propulsion circles */}
            <circle cx="100" cy="170" r="25" fill="rgba(245,158,11,0.05)" className="animate-pulse" />

            {/* Thruster Flame */}
            {/* Outer Flame (Orange) */}
            <path
              d="M90,148 C90,185 100,200 100,200 C100,200 110,185 110,148 Z"
              fill="#f97316"
              className="animate-thruster-flame"
              style={{ transformOrigin: '100px 148px' }}
            />
            {/* Inner Flame (Yellow/White) */}
            <path
              d="M94,148 C94,175 100,188 100,188 C100,188 106,175 106,148 Z"
              fill="#facc15"
              className="animate-thruster-flame"
              style={{ transformOrigin: '100px 148px', animationDelay: '0.07s' }}
            />

            {/* Wings / Fins */}
            {/* Left wing */}
            <path d="M78,115 L45,150 C42,153 46,156 55,153 L78,138 Z" fill="#ef4444" />
            {/* Right wing */}
            <path d="M122,115 L155,150 C158,153 154,156 145,153 L122,138 Z" fill="#ef4444" />
            {/* Left wing accent */}
            <path d="M78,122 L55,145 C53,147 55,149 60,148 L78,135 Z" fill="#b91c1c" />
            {/* Right wing accent */}
            <path d="M122,122 L145,145 C147,147 145,149 140,148 L122,135 Z" fill="#b91c1c" />

            {/* Main Rocket Body */}
            {/* Back base shape */}
            <path d="M80,148 L120,148 L116,90 L84,90 Z" fill="#cbd5e1" />
            {/* Nose & main cabin (white/light-grey gradient capsule) */}
            <path d="M100,35 C122,65 124,120 120,148 L80,148 C76,120 78,65 100,35 Z" fill="#f8fafc" />
            
            {/* Nose Cone */}
            <path d="M100,35 C110,50 114,65 115,70 L85,70 C86,65 90,50 100,35 Z" fill="#ef4444" />
            
            {/* Darker left shading for depth */}
            <path d="M100,35 C88,65 82,120 80,148 L100,148 Z" fill="rgba(0,0,0,0.06)" />

            {/* Thruster Nozzle */}
            <rect x="91" y="145" width="18" height="6" rx="1.5" fill="#475569" />

            {/* Cockpit Window */}
            <circle cx="100" cy="95" r="14" fill="#0284c7" stroke="#334155" strokeWidth="2.5" />
            {/* Window Glass Reflection */}
            <path d="M90,95 A10,10 0 0,1 110,95 A10,10 0 0,0 90,95 Z" fill="#38bdf8" />
            <circle cx="96" cy="90" r="3.5" fill="#ffffff" opacity="0.7" />

            {/* Hull Details */}
            <circle cx="100" cy="125" r="3" fill="#94a3b8" />
            <circle cx="100" cy="135" r="3" fill="#94a3b8" />
          </svg>
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          className="text-8xl md:text-9xl font-black tracking-tight text-white mb-2 glow-text"
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 22, delay: 0.05 }}
        >
          404
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed mb-10 max-w-md"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 22, delay: 0.1 }}
        >
          Your vessel has drifted into uncharted sectors of deep space. The coordinates you provided do not exist in our system logs.
        </motion.p>

        {/* Go Home Button */}
        <motion.div initial={{ y: 14 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 22, delay: 0.15 }}>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-sm font-semibold text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] active:translate-y-[1px] cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Go back home</span>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
