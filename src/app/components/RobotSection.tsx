import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Zap, Brain, Settings, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Main Robot Image (Matches your sponsor import style)
import RobotImage from "../../assets/robot.png"; 

export function RobotSection() {
  const { ref, isInView } = useInView();

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
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6 uppercase tracking-tighter">
            Meet Our <span className="text-[#FFFF00]">Robot</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFFF00] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Robot Image & Navigation to Gallery */}
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
              
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-[#FFFF00] text-black font-bold text-xs rounded-full shadow-xl">
                2024 DESIGN
              </div>
            </div>
            
            {/* Button links to the new dedicated Gallery Page */}
            <Link
              to="/gallery"
              className="mt-6 w-full px-6 py-5 bg-[#161616] hover:bg-[#FFFF00] text-[#F7F7F7] hover:text-black font-bold rounded-xl border border-[#606060]/50 transition-all flex items-center justify-center gap-3 group"
            >
              <ImageIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              VIEW FULL TECHNICAL GALLERY
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
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
                    <h3 className="text-xl font-bold text-[#F7F7F7] mb-2 uppercase tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#F7F7F7]/60 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#FFFF00]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#606060]/30 to-transparent" />
    </section>
  );
}