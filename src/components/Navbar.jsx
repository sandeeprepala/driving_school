import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Menu, X, Car } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Advantages', href: '#whychooseus' },
    { name: 'Courses', href: '#courses' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Attendance', href: '#attendance' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Admin', href: '#admin' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center shadow-md">
              <Car className="text-slate-900 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                Sai Sandhya
              </h1>
              <span className="text-[10px] text-brand-blue tracking-widest uppercase font-bold">
                Motor Driving School
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-700 hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-brand-blue focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-sm font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-brand-blue text-white py-3 rounded-full text-sm font-bold shadow-md hover:bg-blue-700"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Scroll Progress Road */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-100 border-t border-slate-200 overflow-hidden">
        {/* Dashed Road Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-[linear-gradient(90deg,var(--color-slate-400)_0%,var(--color-slate-400)_50%,transparent_50%,transparent_100%)] bg-[length:20px_100%] opacity-40 animate-road-horizontal"></div>
        
        {/* Animated Yellow Car */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-14"
          style={{ 
            left: useTransform(scaleX, [0, 1], ["0%", "100%"]),
            x: useTransform(scaleX, [0, 1], ["0%", "-100%"])
          }}
        >
          <svg viewBox="0 0 120 40" className="w-full h-auto drop-shadow-[0_2px_3px_rgba(15,23,42,0.15)]" xmlns="http://www.w3.org/2000/svg">
            {/* Car Body */}
            <path d="M20,30 L10,30 C5,30 5,25 5,20 L10,12 C12,8 18,5 28,5 L65,5 C75,5 82,10 88,15 L108,18 C115,19 115,25 115,30 L100,30 M20,30 A10,10 0 0,0 40,30 M80,30 A10,10 0 0,0 100,30 M40,30 L80,30" 
                  fill="#FACC15" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Windows */}
            <path d="M28,5 L65,5 C72,5 77,8 82,13 L93,17 L93,18 L28,18 L24,12 C22,8 24,5 28,5 Z" fill="#93C5FD" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round"/>
            {/* Window Divider */}
            <path d="M55,5 L55,18" stroke="#0F172A" strokeWidth="2.5"/>
            {/* Door Lines */}
            <path d="M55,18 L55,30" stroke="#0F172A" strokeWidth="1.5" opacity="0.3"/>
            <path d="M30,18 L30,30" stroke="#0F172A" strokeWidth="1.5" opacity="0.3"/>
            
            {/* Rotating Wheels with Spokes */}
            <g className="animate-wheel" style={{ transformOrigin: '30px 30px' }}>
              <circle cx="30" cy="30" r="7" fill="#0F172A" stroke="#FACC15" strokeWidth="1"/>
              <line x1="23" y1="30" x2="37" y2="30" stroke="#FFFFFF" strokeWidth="1"/>
              <line x1="30" y1="23" x2="30" y2="37" stroke="#FFFFFF" strokeWidth="1"/>
              <circle cx="30" cy="30" r="2.5" fill="#E2E8F0" />
            </g>
            <g className="animate-wheel" style={{ transformOrigin: '90px 30px' }}>
              <circle cx="90" cy="30" r="7" fill="#0F172A" stroke="#FACC15" strokeWidth="1"/>
              <line x1="83" y1="30" x2="97" y2="30" stroke="#FFFFFF" strokeWidth="1"/>
              <line x1="90" y1="23" x2="90" y2="37" stroke="#FFFFFF" strokeWidth="1"/>
              <circle cx="90" cy="30" r="2.5" fill="#E2E8F0" />
            </g>
            
            {/* Headlight (Right) & Taillight (Left) */}
            <path d="M108,18 L113,19 L113,23 L108,23 Z" fill="#FDE047" stroke="#0F172A" strokeWidth="1"/>
            <path d="M5,18 L10,18 L10,23 L5,23 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="1"/>
            {/* Door Handles */}
            <line x1="35" y1="22" x2="40" y2="22" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
            <line x1="60" y1="22" x2="65" y2="22" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
