import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Car, UserPlus, PenTool, BookOpen, Navigation, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-5 h-5 text-white" />,
    title: "Registration & LLR Support",
    description: "Submit simple details and get full guidance to secure your official Learner's License."
  },
  {
    icon: <PenTool className="w-5 h-5 text-white" />,
    title: "Basic Controls & Ground Training",
    description: "Master steering, clutch balance, gear shifting, and smooth braking in isolated spaces."
  },
  {
    icon: <BookOpen className="w-5 h-5 text-white" />,
    title: "Light Traffic Practice",
    description: "Build initial lane discipline and confidence under guided supervision in quiet suburbs."
  },
  {
    icon: <Navigation className="w-5 h-5 text-white" />,
    title: "Road & Highway Mastery",
    description: "Navigate heavy traffic, roundabout lanes, reverse parking, and steep slope restarts."
  },
  {
    icon: <Car className="w-5 h-5 text-white" />,
    title: "Mock RTO Track Practice",
    description: "Prepare with mock tests on layout tracks (H-track, 8-track) to guarantee success."
  },
  {
    icon: <FileCheck className="w-5 h-5 text-white" />,
    title: "Permanent License Acquisition",
    description: "Complete final RTO trials with our dual-control car and secure your physical license."
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
    <section id="timeline" className="py-12 md:py-24 bg-white relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Training Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Your Road to Independence
          </h2>
          <p className="text-slate-500 text-lg">
            Follow our structured step-by-step training curriculum designed to turn complete beginners into safe, defensive drivers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Asphalt Road Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-8 bg-slate-800 rounded-full -translate-x-1/2 overflow-hidden shadow-inner border-2 border-slate-300">
            {/* Animated dashed road lane divider */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_50%,#FFFFFF_50%,#FFFFFF_100%)] bg-[length:100%_40px] opacity-30 animate-road-vertical"></div>
            {/* Scroll Fill Progress Indicator */}
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-brand-blue/30" 
              style={{ height: pathHeight }} 
            />
          </div>

          {/* Animated Top-View Car */}
          <motion.div
            className="absolute left-8 md:left-1/2 w-10 h-20 -translate-x-1/2 -mt-10 z-20 flex items-center justify-center"
            style={{ top: carPosition }}
          >
            <svg viewBox="0 0 40 80" className="w-8 h-16 drop-shadow-[0_4px_8px_rgba(15,23,42,0.3)]" xmlns="http://www.w3.org/2000/svg">
              {/* Wheels */}
              <g className="animate-wheel" style={{ transformOrigin: '5px 20px' }}>
                <rect x="1" y="14" width="4.5" height="12" rx="2.5" fill="#1E293B" />
              </g>
              <g className="animate-wheel" style={{ transformOrigin: '35px 20px' }}>
                <rect x="34.5" y="14" width="4.5" height="12" rx="2.5" fill="#1E293B" />
              </g>
              <g className="animate-wheel" style={{ transformOrigin: '5px 60px' }}>
                <rect x="1" y="54" width="4.5" height="12" rx="2.5" fill="#1E293B" />
              </g>
              <g className="animate-wheel" style={{ transformOrigin: '35px 60px' }}>
                <rect x="34.5" y="54" width="4.5" height="12" rx="2.5" fill="#1E293B" />
              </g>
              
              {/* Car Body */}
              <rect x="6" y="8" width="28" height="64" rx="8" fill="#FACC15" stroke="#0F172A" strokeWidth="2.5" />
              {/* Windshield */}
              <path d="M9,24 L31,24 Q20,15 9,24" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
              {/* Rear Window */}
              <path d="M9,60 L31,60 Q20,68 9,60" fill="#93C5FD" stroke="#0F172A" strokeWidth="2" />
              {/* Cabin Roof */}
              <rect x="9" y="28" width="22" height="28" rx="4" fill="#EAB308" stroke="#0F172A" strokeWidth="2" />
              {/* Headlights */}
              <rect x="10" y="6" width="3" height="2" rx="1" fill="#FEF08A" />
              <rect x="27" y="6" width="3" height="2" rx="1" fill="#FEF08A" />
              {/* Taillights */}
              <rect x="9" y="72" width="4" height="2" rx="1" fill="#EF4444" />
              <rect x="27" y="72" width="4" height="2" rx="1" fill="#EF4444" />
            </svg>
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
                    className={`glass-panel p-6 rounded-2xl relative border border-slate-100 shadow-sm ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    {/* Connecting line */}
                    <div className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-brand-blue/30 -translate-y-1/2 ${
                      index % 2 === 0 ? '-left-8' : '-right-8'
                    }`}></div>

                    <div className={`text-6xl font-black text-slate-100 absolute top-2 ${
                      index % 2 === 0 ? 'right-4' : 'left-4'
                    }`}>
                      0{index + 1}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{step.title}</h3>
                    <p className="text-slate-500 text-sm relative z-10 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-9 h-9 md:w-12 md:h-12 -translate-x-1/2 bg-brand-blue rounded-full flex items-center justify-center border-2 md:border-4 border-white shadow-md z-10 md:static md:translate-x-0 transition-transform duration-300 hover:scale-110">
                  <div className="scale-[0.75] md:scale-100 flex items-center justify-center">
                    {step.icon}
                  </div>
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
