import { Link, useNavigate } from "react-router";
import { Github, Instagram, Youtube, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import gearLogo from "../../assets/gear.png"; 

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Optimized scroll for same-page sections
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Robot", id: "robot" },
    { label: "Team", id: "team", path: "/team" },
    { label: "Sponsors", id: "sponsors" },
    { label: "Code", id: "code", path: "/code" },
    { label: "Contact", id: "contact", path: "/contact" },
    { label: "Schedule", id: "schedule", path: "/schedule" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/orotrikim", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/orotrikim", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@orotrikim", label: "YouTube" },
    { 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      href: "https://whatsapp.com/channel/0029Vb7DCFoLSmben5Ert72S",
      label: "WhatsApp Channel"
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#606060]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO - With Scroll Reset & Zoomed Image */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-16 h-16 flex items-center justify-center" 
            >
              <img 
                src={gearLogo} 
                alt="Orotrikim Gear" 
                className="w-full h-full object-contain scale-140" // Zoomed 40%
              />
            </motion.div>
            
            <div className="flex flex-col">
              <span className="text-[#F7F7F7] font-bold text-xl tracking-tight leading-tight">OROTRIKIM</span>
              <span className="text-[#FFFF00] text-xs font-bold tracking-widest uppercase">#3873</span>
            </div>
          </Link>

          {/* Desktop Navigation - With Scroll Resets */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-[#F7F7F7]/80 hover:text-[#FFFF00] transition-colors text-sm font-bold uppercase tracking-wider relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFFF00] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#F7F7F7]/80 hover:text-[#FFFF00] transition-colors text-sm font-bold uppercase tracking-wider relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFFF00] group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-[#F7F7F7]/60 hover:text-[#FFFF00] transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
            
            <motion.a
              href="mailto:orotrikim@gmail.com?subject=I want to join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-[#FFFF00] text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[#FFFF00]/90 transition-all shadow-lg shadow-[#FFFF00]/20"
            >
              Join Us
            </motion.a>
          </div>

          <button
            className="lg:hidden text-[#F7F7F7] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - With Scroll Resets */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0A] border-t border-[#606060]/20"
          >
            <div className="px-4 py-8 space-y-6">
              {navItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="block w-full text-left text-[#F7F7F7] text-lg font-bold uppercase tracking-widest"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-[#F7F7F7] text-lg font-bold uppercase tracking-widest"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="pt-6 border-t border-[#606060]/20">
                <a
                  href="mailto:orotrikim@gmail.com?subject=I want to join"
                  className="block w-full py-4 bg-[#FFFF00] text-black text-center font-bold uppercase tracking-widest rounded-xl"
                >
                  Join Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}