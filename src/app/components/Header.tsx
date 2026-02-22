import { Link, useNavigate, useLocation } from "react-router";
import { Github, Instagram, Youtube, Menu, X, Mail, ChevronDown, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import gearLogo from "../../assets/gear.png"; 

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- PREMIUM SCROLL ENGINE ---
  const premiumScroll = (targetY: number, duration: number = 1200) => {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + diff * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollToSection = (id: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    const isHomePage = location.pathname === "/";

    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const target = element.getBoundingClientRect().top + window.pageYOffset;
          premiumScroll(target - 80, 1500); 
        }
      }, 550);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const target = element.getBoundingClientRect().top + window.pageYOffset;
        premiumScroll(target - 80, 1200);
      }
    }
  };

  const sectionItems = [
    { label: "About Us", id: "about" },
    { label: "The Robot", id: "robot" },
    { label: "Sponsors", id: "sponsors" },
  ];

  // Removed "Research" from here
  const pageLinks = [
    { label: "Team", path: "/team" },
    { label: "Code", path: "/code" },
    { label: "Schedule", path: "/schedule" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/orotrikim" },
    { icon: Instagram, href: "https://instagram.com/orotrikim" },
    { icon: Youtube, href: "https://youtube.com/@orotrikim" },
    { 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      href: "https://whatsapp.com/channel/0029Vb7DCFoLSmben5Ert72S"
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#606060]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div 
            onClick={() => {
              if (location.pathname === "/") {
                premiumScroll(0, 1000);
              } else {
                navigate("/");
                window.scrollTo(0, 0);
              }
            }}
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
          >
            <motion.div whileHover={{ rotate: 180 }} className="w-10 h-10">
              <img src={gearLogo} alt="Logo" className="w-full h-full object-contain scale-150" />
            </motion.div>
            <div className="flex flex-col text-[#F7F7F7]">
              <span className="font-bold text-lg tracking-tight leading-tight uppercase">OROTRIKIM</span>
              <span className="text-[#FFFF00] text-[10px] font-bold tracking-widest uppercase">#3873</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-[#F7F7F7]/80 hover:text-[#FFFF00] text-[13px] font-bold uppercase tracking-wider transition-colors"
              >
                Explore <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-56 bg-[#0F0F0F] border border-[#606060]/30 rounded-xl overflow-hidden shadow-2xl"
                  >
                    <div className="py-2">
                      {sectionItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left px-5 py-3 text-[12px] font-bold uppercase text-[#F7F7F7]/70 hover:bg-[#FFFF00] hover:text-black transition-all"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {pageLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => window.scrollTo(0, 0)}
                className="text-[#F7F7F7]/80 hover:text-[#FFFF00] text-[13px] font-bold uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFFF00] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-[#606060]/20 pr-6">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[#F7F7F7]/40 hover:text-[#FFFF00] transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <motion.a 
              href="mailto:orotrikim@gmail.com" 
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 bg-[#FFFF00] text-black font-bold text-[11px] uppercase tracking-widest rounded-lg transition-transform"
            >
              Join Us
            </motion.a>
          </div>

          <button className="lg:hidden text-[#F7F7F7] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-20 bg-[#0A0A0A] z-40 lg:hidden px-6 py-10"
          >
            <div className="flex flex-col h-full gap-8 overflow-y-auto">
              <div className="flex flex-col gap-4">
                <p className="text-[#606060] text-[10px] font-bold uppercase tracking-[0.2em]">Quick Jump</p>
                {sectionItems.map(item => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-[#F7F7F7] text-3xl font-bold uppercase tracking-tighter active:text-[#FFFF00]">
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-col gap-4 border-t border-[#606060]/20 pt-8">
                <p className="text-[#606060] text-[10px] font-bold uppercase tracking-[0.2em]">Pages</p>
                {pageLinks.map(link => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }} 
                    className="text-[#F7F7F7] text-3xl font-bold uppercase tracking-tighter active:text-[#FFFF00]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pb-10 flex flex-col gap-4">
                <a href="mailto:orotrikim@gmail.com" className="w-full py-4 bg-[#FFFF00] text-black font-extrabold text-center uppercase tracking-widest rounded-xl text-lg">Join Our Team</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}