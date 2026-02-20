import { motion } from "motion/react";
import { useInView } from "../components/hooks/useInView"; // Fixed path
import { Mail, MapPin, Phone, Send, Github, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "orotrikim@gmail.com",
      href: "mailto:orotrikim@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+972-58-403-9084",
      href: "tel:+972584039084",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Elkana, Israel",
      href: "https://maps.app.goo.gl/o1oU49aZvvMJ1x5P7",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20"> {/* pt-20 for header spacing */}
      <section id="contact" ref={ref} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6">
              Get in <span className="text-[#FFFF00]">Touch</span>
            </h1>
            <p className="text-lg text-[#F7F7F7]/70 max-w-3xl mx-auto leading-relaxed">
              Have questions about our team, want to collaborate, or interested in supporting us? 
              We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form and Info logic remains same */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#F7F7F7] font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#606060]/30 rounded-lg text-[#F7F7F7] focus:border-[#FFFF00] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#F7F7F7] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#606060]/30 rounded-lg text-[#F7F7F7] focus:border-[#FFFF00] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#F7F7F7] font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#606060]/30 rounded-lg text-[#F7F7F7] focus:border-[#FFFF00] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-[#FFFF00] text-black font-semibold rounded-lg hover:bg-[#FFFF00]/90 transition-all shadow-lg shadow-[#FFFF00]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-[#0F0F0F] border border-[#606060]/30 rounded-lg hover:border-[#FFFF00]/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#FFFF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#FFFF00]" />
                    </div>
                    <div>
                      <div className="text-[#F7F7F7]/60 text-sm">{info.label}</div>
                      <div className="text-[#F7F7F7] font-medium group-hover:text-[#FFFF00]">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}