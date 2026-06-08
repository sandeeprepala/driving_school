import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Car, UserPlus, PenTool, BookOpen, Navigation, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-brand-black" />,
    title: "Registration & LLR",
    description: "Sign up and get assistance applying for your Learner's License."
  },
  {
    icon: <PenTool className="w-6 h-6 text-brand-black" />,
    title: "Basic Controls",
    description: "Learn steering, clutch, brake, and accelerator coordination in empty grounds."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-brand-black" />,
    title: "Practice Sessions",
    description: "Regular sessions in light traffic to build initial confidence."
  },
  {
    icon: <Navigation className="w-6 h-6 text-brand-black" />,
    title: "Road Training",
    description: "Master heavy traffic, highways, and complex maneuvers like reverse parking."
  },
  {
    icon: <Car className="w-6 h-6 text-brand-black" />,
    title: "Driving Test Prep",
    description: "Mock tests based on the actual RTO driving test track."
  },
  {
    icon: <FileCheck className="w-6 h-6 text-brand-black" />,
    title: "License Assistance",
    description: "Complete support for obtaining your permanent driving license."
  }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const carPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-24 bg-brand-navy relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-yellow font-bold uppercase tracking-wider text-sm mb-2 block">
            Training Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Driving Journey
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Road Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-brand-black rounded-full -translate-x-1/2 overflow-hidden border border-white/5">
            {/* Animated dashed line */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_50%,var(--color-brand-yellow)_50%,var(--color-brand-yellow)_100%)] bg-[length:100%_40px] opacity-20"></div>
            {/* Scroll Fill */}
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-brand-yellow" 
              style={{ height: pathHeight }} 
            />
          </div>

          {/* Animated Car */}
          <motion.div
            className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 -mt-6 z-20 flex items-center justify-center bg-brand-yellow rounded-full shadow-[0_0_20px_rgba(250,204,21,0.6)]"
            style={{ top: carPosition }}
          >
            <Car className="text-brand-black w-7 h-7 transform rotate-90" fill="currentColor" />
          </motion.div>

          {/* Timeline Items */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`glass-panel p-6 rounded-2xl relative ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    {/* Connecting line */}
                    <div className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-brand-yellow/50 -translate-y-1/2 ${
                      index % 2 === 0 ? '-left-8' : '-right-8'
                    }`}></div>

                    <div className={`text-5xl font-black text-white/5 absolute top-2 ${
                      index % 2 === 0 ? 'right-4' : 'left-4'
                    }`}>
                      0{index + 1}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                    <p className="text-gray-400 text-sm relative z-10">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 bg-brand-yellow rounded-full flex items-center justify-center border-4 border-brand-black z-10 md:static md:translate-x-0">
                  {step.icon}
                </div>

                {/* Empty Space for alternate layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
