import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Users, Calendar, Target, Lightbulb, Heart, Handshake } from "lucide-react";
// Note: Trophy and Award are removed from imports to stop VS Code warnings since they are commented out below

export function AboutSection() {
  const { ref, isInView } = useInView();

  const stats = [
    //{ icon: Trophy, label: "Awards", value: "0", color: "#FFFF00" },
    { icon: Users, label: "Team Members", value: "14", color: "#FFFF00" },
    { icon: Calendar, label: "Seasons", value: "1", color: "#FFFF00" },
    //{ icon: Award, label: "Championships", value: "0", color: "#FFFF00" },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Discovery",
      description: "We discover new ways to help archeologists for this season and we find new ways to solve the missions and innovate our robot.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We use creativity and teamwork to innovate and solve problems. As we believe it is the best way to succeed.",
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We are always committed to impact the community and improve our world to make a lasting difference.",
    },
    {
      icon: Handshake,
      title: "Teamwork",
      description: "We are stronger when we work together with respect, cooperation and sharing ideas.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6">
            About <span className="text-[#FFFF00]">OROTRIKIM</span>
          </h2>
          <p className="text-lg text-[#F7F7F7]/70 max-w-3xl mx-auto leading-relaxed">
            We’re a robotics team from Elkana, Israel, built on a simple idea:
            that a group of friends and a lot of LEGO can actually solve real problems. OROTRIKIM isn't just about winning trophies, it's about the "aha!" moments,
            and the grit it takes to build something from scratch.
            We’re here to learn, to compete, and to show that when we work together, we can build something we’re actually proud of.
          </p>
        </motion.div>

        {/* Stats Grid - Now Centered using Flexbox */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 w-full sm:w-64 bg-gradient-to-br from-[#606060]/10 to-[#606060]/5 border border-[#606060]/30 rounded-xl hover:border-[#FFFF00]/50 transition-all group"
            >
              <stat.icon className="w-8 h-8 text-[#FFFF00] mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-[#F7F7F7] mb-2">{stat.value}</div>
              <div className="text-[#F7F7F7]/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-[#F7F7F7] text-center mb-12">
            Our Core <span className="text-[#FFFF00]">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 bg-[#0A0A0A] border border-[#606060]/30 rounded-xl hover:border-[#FFFF00]/50 transition-all group"
              >
                <value.icon className="w-10 h-10 text-[#FFFF00] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all" />
                <h4 className="text-xl font-semibold text-[#F7F7F7] mb-3">{value.title}</h4>
                <p className="text-[#F7F7F7]/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Drives Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 p-8 bg-gradient-to-r from-[#FFFF00]/10 to-transparent border-l-4 border-[#FFFF00] rounded-lg"
        >
          <h3 className="text-2xl font-bold text-[#F7F7F7] mb-4">What Drives Us</h3>
          <p className="text-[#F7F7F7]/80 leading-relaxed">
            We’re a bunch of students from Elkana who just really like building things.
            Robotics is where we get to stop talking about theory and actually start breaking (and then fixing) stuff.
            Whether we're chasing a deadline or debugging a stubborn piece of code, we’re just here to work hard, have a good time, and see how far our team can go.
          </p>
        </motion.div>
      </div>
    </section>
  );
}