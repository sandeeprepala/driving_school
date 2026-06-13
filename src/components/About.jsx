import { motion } from 'framer-motion';
import { ShieldCheck, Users, Car, Award, Star } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  const segments = [
    { title: "Sedans", desc: "Perfect for city tours, corporate needs, and airport runs with ample legroom.", capacity: "4-5 Seater" },
    { title: "SUVs", desc: "Ideal for families and groups who require extra comfort, road presence, and space.", capacity: "7 Seater" },
    { title: "Tempo Travelers", desc: "Best for group events, family trips, school training, and outings.", capacity: "12-16 Seater" },
    { title: "Buses", desc: "Premium coaches for large corporate gatherings, groups, or events.", capacity: "32-50 Seater" }
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-white relative">
      {/* Decorative background grid line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image / Stats Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[4/5] lg:aspect-square max-w-sm sm:max-w-md mx-auto w-full shadow-xl border border-slate-100">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
              
              <img 
                src="https://res-console.cloudinary.com/djqfcheof/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/Q2hhdEdQVF9JbWFnZV9KdW5fMTNfMjAyNl8xMl8yNF8zMV9QTV92ZzkzaXM=/template_primary" 
                alt="Sai Sandya Driving School" 
                className="absolute inset-0 w-full h-full object-cover" 
              />

              
              {/* Overlay with local branding */}
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <h3 className="text-3xl font-extrabold tracking-tight mb-1">
                  Sai Sandya
                </h3>
                <p className="text-brand-yellow font-bold tracking-widest text-sm uppercase">
                  Motor Driving School
                </p>
                <div className="flex items-center gap-1.5 mt-3 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full w-max text-xs font-semibold">
                  <Star className="w-4.5 h-4.5 text-brand-yellow fill-current" />
                  <span>4.6 Rating (8 Reviews)</span>
                </div>
              </div>
              
              <div className="absolute inset-0 border-4 border-white/25 rounded-3xl m-4 z-20"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl z-30 shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold text-brand-blue">15+</div>
                <div className="text-sm text-slate-700 font-bold leading-tight">
                  Years of<br/>Excellence
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
            className="flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-brand-blue font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-blue"></span>
                About Our Driving School
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Master the Road with <span className="text-brand-blue">Sai Sandya</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-slate-600 text-lg mb-8 leading-relaxed">
              Located in <strong>Kandlakoya, Rangareddy</strong>, Sai Sandya Motor Driving School Anil is a premier training provider dedicated to top-notch road education. We combine professional, structured theoretical guidelines with hands-on practice, helping you become an expert, responsible driver.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-brand-blue pl-3">
                Tailored Vehicle Segments & Capacities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {segments.map((seg, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900">{seg.title}</span>
                      <span className="bg-brand-blue/10 text-brand-blue text-[10px] font-bold px-2 py-0.5 rounded-full">{seg.capacity}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{seg.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  <Users className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Experienced Instructors</h4>
                  <p className="text-slate-500 text-xs">Patient, certified professionals guiding you step-by-step.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Safe Training Cars</h4>
                  <p className="text-slate-500 text-xs">Modern dual-control vehicles ensuring 100% safety during trials.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="#courses" className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-md">
                Explore Training Courses
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
