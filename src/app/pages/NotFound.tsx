import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useInView } from "../components/hooks/useInView";
import gearLogo from "../../assets/gear.png";

export default function NotFound() {
  const navigate = useNavigate();
  const { ref, isInView } = useInView();

  const handleReturn = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center relative">
      <div ref={ref as React.Ref<HTMLDivElement>} className="relative z-20 flex flex-col items-center">
        
        {/* CONTAINER FOR THE GEAR */}
        <div className="relative w-48 h-48 mb-8">
          
          {/* 1. THE DEFAULT STATE (Always there, dark) */}
          <img 
            src={gearLogo} 
            alt="Offline" 
            className="absolute inset-0 w-full h-full object-contain brightness-[0.15] grayscale" 
          />

          {/* 2. THE YELLOW STATE (Toggles On/Off instantly) */}
          <motion.div
            animate={isInView ? { 
              // 0 = Default Color, 1 = Yellow Color
              opacity: [0, 0, 1, 0, 1, 0] 
            } : {}}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              times: [0, 0.7, 0.71, 0.75, 0.76, 1],
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={gearLogo} 
              alt="Online" 
              className="w-full h-full object-contain"
              style={{ 
                // Using a simple CSS drop-shadow and brightness to force yellow 
                // without the "rainbow" filter math
                filter: "brightness(0) saturate(100%) invert(85%) sepia(94%) saturate(845%) hue-rotate(358deg) brightness(108%) contrast(105%)" 
              }}
            />
          </motion.div>
        </div>

        <div className="text-center">
          <h1 className="text-[#FFFF00] text-9xl font-black mb-2">404</h1>
          <p className="text-[#F7F7F7]/40 font-mono uppercase tracking-[0.5em] mb-10">
            Bulb couldn't find what you were looking for
          </p>
          
          <button 
            onClick={handleReturn}
            className="px-10 py-3 border border-[#FFFF00] text-[#FFFF00] font-bold uppercase hover:bg-[#FFFF00] hover:text-black transition-none cursor-pointer"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}