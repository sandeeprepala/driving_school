import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock, Award } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-black relative">
      {/* Decorative road lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-brand-navy/30 z-10 mix-blend-multiply"></div>
              {/* Fallback image block, user can replace with their actual local image */}
              <div className="w-full h-full relative flex items-center justify-center">
                <img src="/hero-bg.png" alt="Manohar Driving School" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-black/60"></div>
                <div className="relative z-10 text-center px-4">
                  <h3 className="text-3xl lg:text-4xl font-black text-white tracking-widest uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-2">
                    Manohar
                  </h3>
                  <p className="text-brand-yellow font-bold tracking-widest text-sm lg:text-base uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Driving School
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-brand-yellow/30 rounded-2xl m-4 z-20"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl z-30 shadow-2xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-brand-yellow">15+</div>
                <div className="text-sm text-gray-300 font-medium leading-tight">
                  Years of<br/>Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-brand-yellow font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-yellow"></span>
                About Manohar Driving School
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Master the Road with <span className="text-brand-yellow">Experts</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 leading-relaxed">
              Located in the heart of Martur, Prakasam District, Manohar Driving School is dedicated to providing top-tier driving education. We blend theoretical knowledge with extensive practical training to ensure you become a confident and responsible driver.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Experienced Trainers</h4>
                  <p className="text-gray-500 text-sm">Patient and professional instructors guiding you every step.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Safe Environment</h4>
                  <p className="text-gray-500 text-sm">Dual-control vehicles ensuring maximum safety during training.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="#courses" className="inline-flex items-center justify-center gap-2 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black px-8 py-3 rounded-full font-bold transition-all">
                Explore Our Courses
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
