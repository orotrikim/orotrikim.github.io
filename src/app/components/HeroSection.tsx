import { Link } from "react-router";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const backgroundSpotlight = useMotionTemplate`
    radial-gradient(
      600px circle at ${springX}px ${springY}px,
      rgba(255, 255, 0, 0.1),
      transparent 80%
    )
  `;

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Unified scroll function to handle section jumps safely
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
      
      {/* Interactive Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: backgroundSpotlight }}
      />

      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#FFFF00 1px, transparent 1px), linear-gradient(90deg, #FFFF00 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo/Team Name */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-4 tracking-tight">
            <span className="text-[#606060]">OR</span>
            <span className="bg-gradient-to-r from-[#606060] via-[#FFFF00] to-[#FFFF00] bg-clip-text text-transparent">
              OTR
            </span>
            <span className="text-[#FFFF00]">IKIM</span>
          </h1>

          <motion.p className="text-xl sm:text-2xl text-[#F7F7F7]/60 font-medium mb-8">
            3873 - Elkana, Israel
          </motion.p>

          <motion.p className="text-lg text-[#F7F7F7]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            We are a passionate group of Middle School Students from Elkana in Israel looking to expand on our knowledge of robotics through FIRST Lego League.
            We are competing in the 2025-2026 Unearthed Season and are excited to share our journey with you!
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Robot Scroll Button */}
            <motion.button
              onClick={() => scrollToId("robot")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#FFFF00] text-black font-semibold rounded-lg hover:bg-[#FFFF00]/90 transition-all shadow-lg shadow-[#FFFF00]/20 uppercase tracking-wider cursor-pointer border-none"
            >
              Our Robot
            </motion.button>

            {/* Team Page Link */}
            <Link to="/team" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-transparent text-[#F7F7F7] font-semibold rounded-lg border-2 border-[#606060] hover:border-[#FFFF00] hover:text-[#FFFF00] transition-all uppercase tracking-wider cursor-pointer"
              >
                Meet the Team
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Down Arrow */}
        <motion.button
          onClick={() => scrollToId("about")}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-[#F7F7F7]/40 hover:text-[#FFFF00] transition-colors cursor-pointer bg-transparent border-none"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}