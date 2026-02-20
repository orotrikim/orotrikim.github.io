import { motion } from "motion/react";
import { useInView } from "../components/hooks/useInView";
import { Code, Wrench, Presentation, Users as UsersIcon, Star, Heart } from "lucide-react";

export default function TeamPage() {
  const { ref, isInView } = useInView();

  const teamMembers = [
    { name: "Mordy Yeger", role: "Lead for Engineering & Programming", icon: Code },
    { name: "Dvir Firerizen", role: "Engineer & Team Treasurer", icon: Wrench },
    { name: "Yair Vice", role: "Lead for Core Values, Community", icon: Heart },
    { name: "Talya Basch", role: "Core Values, Community", icon: Heart },
    { name: "Shilat Dei", role: "Programming, Engineering", icon: Wrench },
    { name: "Rut Machluf", role: "Engineering", icon: Wrench },
    { name: "Or Hannah Goren", role: "Engineering", icon: Wrench },
    { name: "Tehila Ornestein", role: "Programming", icon: Code },
    { name: "Shoam Falach", role: "Research", icon: Presentation },
    { name: "Tiferet Kayam", role: "Community", icon: Heart },
    { name: "Achiya Sterman", role: "Robot & Engineering", icon: Wrench },
    { name: "Shuvael Odes", role: "Robot & Engineering", icon: Wrench },
    { name: "Avital Agiv", role: "Research", icon: Presentation },
    { name: "Neta Pelie", role: "Engineering, Programming", icon: Wrench },
    { name: "Talya Shukron", role: "Research", icon: Presentation },
  ];

  const mentors = [
    { name: "Alejandra Pilnik", role: "Head Mentor" },
    { name: "Haim Raz", role: "Mentor" },
  ];

  return (
    <main className="min-h-screen bg-[#0F0F0F] pt-32 pb-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - No Italics, Normal Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-[#F7F7F7] mb-6">
            Meet the <span className="text-[#FFFF00]">Team</span>
          </h1>
          <p className="text-xl text-[#F7F7F7]/60 max-w-2xl mx-auto">
            The minds behind the machines. Our diverse group of students brings 
            technical skill and creative passion to every build.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold text-[#F7F7F7] mb-12 border-l-4 border-[#FFFF00] pl-6">
            The Crew
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                className="p-8 bg-[#161616] border border-[#606060]/20 rounded-2xl hover:border-[#FFFF00]/40 transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#FFFF00]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-8 h-8 text-[#FFFF00]" />
                </div>
                <h4 className="text-lg font-bold text-[#F7F7F7] mb-1">{member.name}</h4>
                <p className="text-sm text-[#FFFF00] font-medium uppercase tracking-wide">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mentors Section - Centered, Plain Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-[#161616] p-12 rounded-2xl border border-[#606060]/20"
        >
          <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 text-center">Our Mentors</h2>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32">
            {mentors.map((mentor, index) => (
              <div key={index} className="text-center min-w-[200px]">
                <div className="w-24 h-24 bg-[#FFFF00] text-[#0F0F0F] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold">
                  {mentor.name.charAt(0)}
                </div>
                <h4 className="text-2xl font-bold text-[#F7F7F7] mb-2">{mentor.name}</h4>
                <p className="text-[#FFFF00] text-sm font-bold uppercase">
                  {mentor.role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Quote - No Italics, Normal Weight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-32 text-center"
        >
          <p className="text-2xl sm:text-3xl font-normal text-[#F7F7F7]/80 max-w-4xl mx-auto">
            "Teamwork makes the dream work."
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#606060]"></div>
            <p className="text-[#606060] font-bold text-sm">OROTRIKIM 3873</p>
            <div className="h-[1px] w-12 bg-[#606060]"></div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}