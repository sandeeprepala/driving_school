import { motion } from 'framer-motion';
import { Check, Star, Clock, Award } from 'lucide-react';

const courses = [
  {
    title: "Beginner Driving Course",
    duration: "15 Days (15 Hours)",
    price: "₹4,500",
    features: [
      "Basic Vehicle Controls",
      "Empty Ground Practice",
      "Suburban Light Traffic",
      "LLR Test Support & Assistance",
      "Basic Traffic Signs Theory"
    ],
    recommended: false,
    badge: "For First-Timers"
  },
  {
    title: "Intermediate Course",
    duration: "21 Days (21 Hours)",
    price: "₹6,000",
    features: [
      "Everything in Beginner",
      "Moderate City Traffic Nav",
      "Basic Reverse & Parallel Parking",
      "Introduction to Highway Lanes",
      "Permanent License Assist"
    ],
    recommended: true,
    badge: "Most Popular"
  },
  {
    title: "Advanced Driving Course",
    duration: "30 Days (30 Hours)",
    price: "₹8,000",
    features: [
      "Everything in Intermediate",
      "Heavy Traffic Navigation",
      "Advanced Tight Space Parking",
      "Night Driving & Defensive Habits",
      "Steep Slope Clutches & Starts"
    ],
    recommended: false,
    badge: "Expert Level"
  },
  {
    title: "Refresher Training",
    duration: "7 Days (7 Hours)",
    price: "₹2,500",
    features: [
      "Confidence-Boosting Drills",
      "Tailored Skills Assessment",
      "Advanced Parking Refinement",
      "Custom Traffic Route Practice",
      "For Existing License Holders"
    ],
    recommended: false,
    badge: "Skill Polish"
  },
  {
    title: "Two Wheeler Training",
    duration: "10 Days (10 Hours)",
    price: "₹2,000",
    features: [
      "Clutch-Brake-Throttle Balance",
      "Figure-8 & Slalom Turn Drills",
      "Street Traffic Navigation",
      "Safety Gear Guidelines",
      "Gear Shift Coordination"
    ],
    recommended: false,
    badge: "Scooters & Bikes"
  },
  {
    title: "Four Wheeler Training",
    duration: "20 Days (20 Hours)",
    price: "₹5,500",
    features: [
      "Manual/Automatic Hatchbacks",
      "Steering Controls & Centering",
      "Engine Clutch Coordination",
      "RTO Track Mock Practice",
      "Emergency Braking Checks"
    ],
    recommended: false,
    badge: "Complete Car Academy"
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Training Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Choose Your Training Package
          </h2>
          <p className="text-slate-500 text-lg">
            Whether you want to drive a car or ride a motorcycle, we have the perfect government-approved training package for you.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-6 pb-6 lg:pb-0 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                course.recommended ? 'border-brand-blue shadow-[0_10px_35px_rgba(37,99,235,0.15)]' : 'border-slate-100 shadow-sm'
              } flex flex-col h-full hover:shadow-md transition-all duration-300 w-[280px] xs:w-[320px] lg:w-auto shrink-0 snap-align-center`}
            >
              {/* Badge */}
              <div className={`absolute -top-3 left-6 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-sm z-10 ${
                course.recommended ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {course.recommended && <Star className="w-3 h-3 fill-current" />}
                {course.badge}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-2">{course.title}</h3>
              <div className="text-slate-400 text-xs font-bold mb-6 flex items-center gap-1.5 uppercase tracking-wide">
                <Clock className="w-4 h-4 text-brand-blue" /> {course.duration}
              </div>
              
              <div className="mb-6 bg-slate-50/70 p-4 rounded-2xl border border-slate-100/50">
                <span className="text-3xl font-extrabold text-brand-blue">{course.price}</span>
                <span className="text-xs text-slate-400 font-bold ml-1">/ Complete Course</span>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {course.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-blue stroke-[3px]" />
                    </div>
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-3 rounded-full font-bold text-center transition-all ${
                  course.recommended 
                    ? 'bg-brand-blue text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
