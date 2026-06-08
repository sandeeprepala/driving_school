import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="/hero-bg.png" 
            alt="Professional driving training car" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mt-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold tracking-wider uppercase mb-6">
              Govt. Approved Driving School
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Learn Driving with <span className="text-brand-yellow">Confidence</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl"
          >
            Professional driving training for beginners and experienced learners. Master the roads safely with Manohar Driving School in Martur.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 bg-brand-yellow text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transform hover:-translate-y-1"
            >
              Book a Demo Class
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="https://wa.me/+919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 hover:border-white/50 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-all hover:bg-white/5"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements / Ambient Animations */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-brand-yellow rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
