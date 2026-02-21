import { motion } from "motion/react";
import { ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";

// --- THE SPONSOR METHOD (Direct from Assets) ---
// Removed the "RobotGallery/" part of the path
import img1 from "../../assets/Working.png";
import img2 from "../../assets/TalkingCrane.png";
import img3 from "../../assets/SwitchingAgain.png";
import img4 from "../../assets/Switching.png";
import img5 from "../../assets/RobotHold.png";
import img6 from "../../assets/Judging.png";
import img7 from "../../assets/Holding.png";
import img8 from "../../assets/CraneOnRobot.png";

export default function GalleryPage() {
  const photos = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F7F7F7] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#FFFF00] hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          BACK TO HOME
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Camera className="w-8 h-8 text-[#FFFF00]" />
            <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter">
              Technical <span className="text-[#FFFF00]">Gallery</span>
            </h1>
          </div>
          <p className="text-[#606060] max-w-2xl text-lg">
            A detailed look at the engineering and design of the OROTRIKIM robot.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden border border-[#606060]/20 bg-[#0F0F0F] group"
            >
              <img 
                src={src} 
                alt={`Robot Detail ${index + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}