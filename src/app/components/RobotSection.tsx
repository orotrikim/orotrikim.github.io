import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Zap, Brain, Settings, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";

import RobotImage from "../../assets/robot.png"; 

// 1. FIX THE PATH: Ensure this points exactly to your folder from THIS file
const imageModules = import.meta.glob("../RobotGallery/*.{png,jpg,jpeg,webp,PNG,JPG}", { eager: true });
const galleryImages = Object.values(imageModules).map((mod: any) => mod.default);

// Debugging: Check your console (F12) to see if images are being caught
console.log("Gallery Assets Found:", galleryImages);

export function RobotSection() {
  const { ref, isInView } = useInView();
  const [showGallery, setShowGallery] = useState(false);

  const features = [
    { icon: Cpu, title: "Advanced Processing", description: "Powered by Spike Prime with Pybricks Custom Firmware." },
    { icon: Zap, title: "Double Motors", description: "2 Large Motors for the Drive base and 2 Medium Motors for attachments." },
    { icon: Brain, title: "Smart Sensors", description: "2 Light sensors for line following and color detection." },
    { icon: Settings, title: "Modular Design", description: "Quick-swap attachments optimized for the 2.5 minute round." },
  ];

  return (
    <section id="robot" ref={ref} className="relative py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6">
            Meet Our <span className="text-[#FFFF00]">Robot</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#606060]/30 group">
              <ImageWithFallback
                src={RobotImage}
                alt="OROTRIKIM Robot"
                className="w-full h-[450px] object-cover"
                style={{ objectPosition: 'center 95%' }} 
              />
            </div>
            
            <button
              onClick={() => setShowGallery(true)}
              className="mt-6 w-full px-6 py-4 bg-[#161616] hover:bg-[#FFFF00] text-[#F7F7F7] hover:text-black font-bold rounded-xl border border-[#606060]/50 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <ImageIcon className="w-5 h-5" />
              VIEW ROBOT GALLERY
            </button>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-[#0F0F0F] border border-[#606060]/20 rounded-2xl">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#FFFF00]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#FFFF00]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F7F7F7] mb-2">{feature.title}</h3>
                    <p className="text-[#F7F7F7]/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {showGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "just" }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-10"
              onClick={() => setShowGallery(false)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "just" }}
                className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-[#0F0F0F] rounded-3xl p-6 sm:p-10 border border-[#606060]/30 custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8 sticky top-0 bg-[#0F0F0F] py-2 z-10">
                  <h3 className="text-2xl font-bold text-[#F7F7F7] tracking-tighter uppercase">
                    Robot <span className="text-[#FFFF00]">Gallery</span>
                  </h3>
                  <button onClick={() => setShowGallery(false)} className="hover:text-[#FFFF00] cursor-pointer">
                    <X className="w-8 h-8" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.length > 0 ? (
                    galleryImages.map((img: any, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden border-2 border-[#606060]/20 bg-[#050505]">
                        <img 
                          src={img} 
                          alt={`Asset ${i}`} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center">
                       <p className="text-[#606060] font-mono text-sm uppercase tracking-widest">
                        Zero assets detected in <span className="text-[#FFFF00]">/RobotGallery</span>
                       </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 w-full h-px bg-[#606060]/30" />
    </section>
  );
}