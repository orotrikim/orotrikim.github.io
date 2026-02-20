import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Phone, HandshakeIcon } from "lucide-react";

// 1. Import the sponsor logo (ensure path is correct relative to this file)
import OrotLogo from "../../assets/orot.png"; 
import EducationLogo from "../../assets/ministry.jpg"; 
import ElkanaLogo from "../../assets/elkana.jpg";

export function SponsorsSection() {
  const { ref, isInView } = useInView();

  const sponsors = [
    { name: "Merkaz Orot", tier: "Gold", logo: OrotLogo }, // Using the imported file
    { name: "Education Ministry", tier: "Gold", logo: EducationLogo },
    { name: "Elkana Municipality", tier: "Bronze", logo: ElkanaLogo },
  ];

  const tierColors = {
    Gold: "from-yellow-400 to-yellow-600",
    Silver: "from-gray-300 to-gray-500",
    Bronze: "from-amber-600 to-amber-800",
  };

  const benefits = [
    "Logo placement on team materials and robot",
    "Recognition at competitions and events",
    "And more!"
  ];

  return (
    <section id="sponsors" ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6 uppercase">
            Our <span className="text-[#FFFF00]">Sponsors</span>
          </h2>
          <p className="text-lg text-[#F7F7F7]/70 max-w-3xl mx-auto leading-relaxed">
            We're grateful to our sponsors who make our journey possible. Their support enables us 
            to compete, innovate, and inspire.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-[#0F0F0F] border border-[#606060]/30 rounded-xl hover:border-[#FFFF00]/50 transition-all group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${tierColors[sponsor.tier as keyof typeof tierColors]} rounded-lg flex items-center justify-center mb-4 overflow-hidden shadow-lg`}>
                    {/* 2. Logic to display either an Image or the Text Initials */}
                    {typeof sponsor.logo === 'string' && sponsor.logo.length <= 2 ? (
                      <span className="text-white font-bold text-2xl uppercase">{sponsor.logo}</span>
                    ) : (
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        className="w-full h-full object-contain p-2 bg-white" 
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#F7F7F7] mb-2 uppercase tracking-tight">{sponsor.name}</h3>
                  <div className="inline-block px-3 py-1 bg-[#FFFF00]/10 border border-[#FFFF00]/30 rounded-full">
                    <span className="text-[#FFFF00] text-xs font-bold uppercase">{sponsor.tier} Sponsor</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 p-8 bg-gradient-to-br from-[#FFFF00]/10 to-transparent border border-[#FFFF00]/30 rounded-xl shadow-xl">
              <HandshakeIcon className="w-12 h-12 text-[#FFFF00] mb-4" />
              <h3 className="text-2xl font-bold text-[#F7F7F7] mb-4 uppercase">
                Become a Sponsor
              </h3>
              <p className="text-[#F7F7F7]/70 mb-6 text-sm leading-relaxed">
                Join us in empowering the next generation of innovators.
              </p>

              <div className="mb-8">
                <h4 className="text-[#F7F7F7] font-bold mb-3 uppercase text-xs tracking-widest text-[#FFFF00]">Benefits</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#F7F7F7]/70 text-sm">
                      <span className="text-[#FFFF00]">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#606060]/20">
                <a href="mailto:orotrikim@gmail.com" className="flex items-center gap-3 text-[#F7F7F7]/70 hover:text-[#FFFF00] transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">orotrikim@gmail.com</span>
                </a>
                <a href="tel:+972-58-403-9084" className="flex items-center gap-3 text-[#F7F7F7]/70 hover:text-[#FFFF00] transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">+972-58-403-9084</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center p-10 bg-[#0F0F0F] border border-[#606060]/30 rounded-xl"
        >
          <p className="text-xl text-[#F7F7F7] italic font-medium">
            "We love our sponsors! Please consider supporting our journey."
          </p>
        </motion.div>
      </div>
    </section>
  );
}