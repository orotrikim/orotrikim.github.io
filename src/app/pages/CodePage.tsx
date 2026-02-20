import { motion } from "motion/react";
import { useInView } from "../components/hooks/useInView";
import { Github, Code2, FileCode, GitBranch} from "lucide-react";

export default function CodePage() {
  const { ref, isInView } = useInView();

  const repositories = [
    {
      name: "Robot-2026-Unearthed",
      description: "Robot Code for the 2026 Unearthed Season",
      language: "Python",
    },
    {
      name: "Website Code",
      description: "Website source code",
      language: "React",
    },
  ];

  const techStack = [
    { name: "Python", description: "Primary programming language for the Spike Prime" },
    { name: "Pybricks", description: "Robot Firmware" },
    { name: "Git", description: "Version control and collaboration" },
    { name: "Pybricks", description: "Development environment" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <section id="code" ref={ref} className="py-24 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6 pt-12">
              Our <span className="text-[#FFFF00]">Code</span>
            </h1>
            <p className="text-lg text-[#F7F7F7]/70 max-w-3xl mx-auto leading-relaxed">
              We believe in open-source collaboration and sharing knowledge with the FLL community. 
              Check out our repositories, contribute, and learn from our code!
            </p>
          </motion.div>

          {/* GitHub Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-[#F7F7F7] mb-8 flex items-center gap-2">
              <Github className="w-6 h-6 text-[#FFFF00]" />
              GitHub Repositories
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {repositories.map((repo, index) => (
                <motion.a
                  key={index}
                  href="https://github.com/orotrikim/Robot-2026-Unearthed"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-[#0A0A0A] border border-[#606060]/30 rounded-xl hover:border-[#FFFF00]/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FileCode className="w-8 h-8 text-[#FFFF00] group-hover:scale-110 transition-transform" />
                    <div className="flex items-center gap-1 text-[#F7F7F7]/60 text-sm">
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-[#F7F7F7] mb-2 group-hover:text-[#FFFF00] transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-[#F7F7F7]/70 text-sm mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFFF00] text-sm font-medium">{repo.language}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack & Approach */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#F7F7F7] mb-8 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-[#FFFF00]" />
                Tech Stack
              </h3>
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-4 bg-[#0A0A0A] border border-[#606060]/30 rounded-lg hover:border-[#FFFF00]/50 transition-all group"
                  >
                    <h4 className="font-semibold text-[#F7F7F7] mb-1 group-hover:text-[#FFFF00] transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-[#F7F7F7]/60 text-sm">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#F7F7F7] mb-8 flex items-center gap-2">
                <GitBranch className="w-6 h-6 text-[#FFFF00]" />
                Our Approach
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-[#FFFF00]/10 to-transparent border-l-4 border-[#FFFF00] rounded-lg text-sm text-[#F7F7F7]/70">
                  <h4 className="font-semibold text-[#F7F7F7] mb-2 text-base">Clean & Modular</h4>
                  We write clean, well-documented code that's easy to understand and maintain.
                </div>
                <div className="p-6 bg-gradient-to-br from-[#FFFF00]/10 to-transparent border-l-4 border-[#FFFF00] rounded-lg text-sm text-[#F7F7F7]/70">
                  <h4 className="font-semibold text-[#F7F7F7] mb-2 text-base">Test-Driven</h4>
                  Every function is thoroughly tested before competition day.
                </div>
                <div className="p-6 bg-gradient-to-br from-[#FFFF00]/10 to-transparent border-l-4 border-[#FFFF00] rounded-lg text-sm text-[#F7F7F7]/70">
                  <h4 className="font-semibold text-[#F7F7F7] mb-2 text-base">Collaborative</h4>
                  Using Git and GitHub, our entire team contributes to the codebase.
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="https://github.com/orotrikim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFF00] text-black font-semibold rounded-lg hover:bg-[#FFFF00]/90 transition-all shadow-lg shadow-[#FFFF00]/20"
            >
              <Github className="w-5 h-5" />
              Visit Our GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}