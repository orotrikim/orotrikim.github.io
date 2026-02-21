import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Zap, Brain, Settings, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";

// Main Robot Image
import RobotImage from "../../assets/robot.png"; 

// --- THE SPONSOR METHOD (Direct imports from assets) ---
import img1 from "../../assets/CraneOnRobot.png";
import img2 from "../../assets/Holding.png";
import img3 from "../../assets/Judging.png";
import img4 from "../../assets/RobotHold.png";
import img5 from "../../assets/Switching.png";
import img6 from "../../assets/SwitchingAgain.png";
import img7 from "../../assets/TalkingCrane.png";
import img8 from "../../assets/Working.png";

export function RobotSection() {
  const { ref, isInView } = useInView();
  const [showGallery, setShowGallery] = useState(false);

  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  const features = [
    {
      icon: Cpu,
      title: "Advanced Processing",
      description: "Powered by Spike Prime with Pybricks Custom Firmware for precise movement control.",
    },
    {
      icon: Zap,
      title: "Double Motors",
      description: "Dual Large Motors for the drive base and 2 Medium Motors for modular attachments.",
    },
    {
      icon: Brain,
      title: "Smart Sensors",
      description: "Dual light sensors for high-speed line following and attachment detection.",
    },
    {
      icon: Settings,
      title: "Modular Design",
      description: "Quick-swap attachment system optimized for the 2.5 minute competition round.",
    },
  ];

  return (
    <section id="robot" ref={ref} className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Yellow Line Removed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6 uppercase tracking-tighter">
            Meet Our <span className="text-[#FFFF00]">Robot</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Robot Image & Gallery Trigger */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#606060]/30 group bg-[#0F0F0F]">
              <ImageWithFallback
                src={RobotImage}
                alt="OROTRIKIM Robot"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 95%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 right-4 px-4 py-2 bg-[#FFFF00] text-black font-bold text-xs rounded-full shadow-xl">
                2026 DESIGN
              </div>
            </div>
            
            <button
              onClick={() => setShowGallery(true)}
              className="mt-6 w-full px-6 py-5 bg-[#161616] hover:bg-[#FFFF00] text-[#F7F7F7] hover:text-black font-bold rounded-xl border border-[#606060]/50 transition-all flex items-center justify-center gap-3 group cursor-pointer"
            >
              <ImageIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              EXPLORE TECHNICAL GALLERY
            </button>
          </motion.div>

          {/* Right Side: Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                className="p-6 bg-[#0F0F0F] border border-[#606060]/20 rounded-2xl hover:border-[#FFFF00]/40 transition-all hover:translate-x-2"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#FFFF00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#FFFF00]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F7F7F7] mb-2 uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-[#F7F7F7]/60 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FULL GALLERY MODAL --- */}
        <AnimatePresence>
          {showGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-10 backdrop-blur-sm"
              onClick={() => setShowGallery(false)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="max-w-6xl w-full h-[85vh] flex flex-col bg-[#0F0F0F] rounded-3xl border border-[#606060]/30 shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* STATIC HEADER */}
                <div className="flex justify-between items-center p-6 sm:p-8 border-b border-[#606060]/20 bg-[#0F0F0F] z-10">
                  <h3 className="text-2xl font-bold text-[#F7F7F7] uppercase tracking-tighter">
                    Robot <span className="text-[#FFFF00]">Technical Gallery</span>
                  </h3>
                  <button onClick={() => setShowGallery(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors group">
                    <X className="w-8 h-8 text-white group-hover:text-[#FFFF00]" />
                  </button>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((imgSrc, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.03 }}
                        className="aspect-square rounded-xl overflow-hidden border-2 border-[#606060]/20 bg-[#050505] group"
                      >
                        <img 
                          src={imgSrc} 
                          alt={`Robot view ${i + 1}`} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#606060]/30 to-transparent" />
    </section>
  );
}