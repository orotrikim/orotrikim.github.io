import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function ThemeSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] border-y border-[#606060]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 rounded-full mb-6">
            <span className="text-[#FFFF00] font-semibold">2025-2026 Season</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6">
            Unearthed
          </h2>
          
          <p className="text-lg text-[#F7F7F7]/70 max-w-3xl mx-auto leading-relaxed">
            This season we are to dig into the worlds archeological sites and explore the unearthed! Solve missions, design new attachments and innovate to solve the challenges of this season.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Innovation", value: "Our research team has put in immense effort, finding archeologists and consulting with them." },
              { label: "Robot Game", value: "We Innovate non-stop making sure our robot can be the best." },
              { label: "Core Values", value: "The First core values have been supported here non-stop with lots of teamwork and sharing." },
              { label: "Impact", value: "This season we decided to help the community with robotics and help our fellow Soliders." },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-[#606060]/10 border border-[#606060]/30 rounded-lg hover:border-[#FFFF00]/50 transition-all group"
              >
                <div className="text-[#FFFF00] font-semibold mb-2 group-hover:scale-110 transition-transform">
                  {item.label}
                </div>
                <div className="text-[#F7F7F7]/60 text-sm">
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
