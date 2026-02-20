import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Zap, Brain, Settings, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";

import RobotImage from "../../assets/robot.png"; 

export function RobotSection() {
  const { ref, isInView } = useInView();
  const [showGallery, setShowGallery] = useState(false);

  const features = [
    {
      icon: Cpu,
      title: "Advanced Processing",
      description: "Powered by Spike Prime with Pybricks Custom Firmware.",
    },
    {
      icon: Zap,
      title: "Double Motors",
      description: "2 Large Motors for the Drive base for power and torque and 2 Medium Motors for attachments",
    },
    {
      icon: Brain,
      title: "Smart Sensors",
      description: "2 Light sensors, 1 for line following and 1 for attachment color detection.",
    },
    {
      icon: Settings,
      title: "Modular Design",
      description: "Quick-swap attachments for different missions, optimized for the 2.5 minute round.",
    },
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
              className="mt-6 w-full px-6 py-4 bg-[#161616] hover:bg-[#FFFF00] text-[#F7F7F7] hover:text-black font-bold rounded-xl border border-[#606060]/50 transition-all flex items-center justify-center gap-3"
            >
              <ImageIcon className="w-5 h-5" />
              VIEW ROBOT GALLERY
            </button>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-[#0F0F0F] border border-[#606060]/20 rounded-2xl"
              >
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
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
              onClick={() => setShowGallery(false)}
            >
              <div 
                className="max-w-5xl w-full bg-[#0F0F0F] rounded-3xl p-8 border border-[#606060]/30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-[#F7F7F7]">Robot Gallery</h3>
                  <button onClick={() => setShowGallery(false)}><X className="w-6 h-6 text-white" /></button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <p className="text-white/40">Gallery coming soon...</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Edge-to-Edge Divider */}
      <div className="absolute bottom-0 w-full h-px bg-[#606060]/30" />
    </section>
  );
}