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
    { name: 'Courses', href: '#courses' },
    { name: 'Training', href: '#timeline' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center">
              <Car className="text-brand-black w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight leading-none">
                Manohar
              </h1>
              <span className="text-xs text-brand-yellow tracking-widest uppercase font-semibold">
                Driving School
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-yellow text-brand-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transform hover:-translate-y-0.5"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
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
          className="md:hidden absolute top-full left-0 right-0 bg-brand-navy/95 backdrop-blur-md border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-brand-yellow hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Scroll Progress Road */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-brand-navy border-t border-white/5 overflow-hidden">
        {/* Dashed Road Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_50%,transparent_50%,transparent_100%)] bg-[length:20px_100%] opacity-30"></div>
        
        {/* Animated Yellow Car */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-16"
          style={{ 
            left: useTransform(scaleX, [0, 1], ["0%", "100%"]),
            x: useTransform(scaleX, [0, 1], ["0%", "-100%"])
          }}
        >
          <svg viewBox="0 0 120 40" className="w-full h-auto drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]" xmlns="http://www.w3.org/2000/svg">
            {/* Car Body */}
            <path d="M20,30 L10,30 C5,30 5,25 5,20 L10,12 C12,8 18,5 28,5 L65,5 C75,5 82,10 88,15 L108,18 C115,19 115,25 115,30 L100,30 M20,30 A10,10 0 0,0 40,30 M80,30 A10,10 0 0,0 100,30 M40,30 L80,30" 
                  fill="#FACC15" stroke="#0B0C10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Windows */}
            <path d="M28,5 L65,5 C72,5 77,8 82,13 L93,17 L93,18 L28,18 L24,12 C22,8 24,5 28,5 Z" fill="#112240" stroke="#0B0C10" strokeWidth="2.5" strokeLinejoin="round"/>
            {/* Window Divider */}
            <path d="M55,5 L55,18" stroke="#0B0C10" strokeWidth="2.5"/>
            {/* Door Lines */}
            <path d="M55,18 L55,30" stroke="#0B0C10" strokeWidth="1.5" opacity="0.5"/>
            <path d="M30,18 L30,30" stroke="#0B0C10" strokeWidth="1.5" opacity="0.5"/>
            {/* Wheels */}
            <circle cx="30" cy="30" r="7" fill="#0B0C10" stroke="#FACC15" strokeWidth="1"/>
            <circle cx="30" cy="30" r="3" fill="#9CA3AF" />
            <circle cx="90" cy="30" r="7" fill="#0B0C10" stroke="#FACC15" strokeWidth="1"/>
            <circle cx="90" cy="30" r="3" fill="#9CA3AF" />
            {/* Headlight (Right) & Taillight (Left) */}
            <path d="M108,18 L113,19 L113,23 L108,23 Z" fill="#FFFFFF" stroke="#0B0C10" strokeWidth="1"/>
            <path d="M5,18 L10,18 L10,23 L5,23 Z" fill="#EF4444" stroke="#0B0C10" strokeWidth="1"/>
            {/* Door Handles */}
            <line x1="35" y1="22" x2="40" y2="22" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round"/>
            <line x1="60" y1="22" x2="65" y2="22" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
