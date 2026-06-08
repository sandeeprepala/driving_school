import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const courses = [
  {
    title: "Beginner Package",
    duration: "15 Days",
    hours: "15 Hours Practical",
    price: "₹4,500",
    features: [
      "Basic Vehicle Controls",
      "Traffic Rules Theory",
      "Empty Ground Practice",
      "Light Traffic Driving",
      "LLR Assistance"
    ],
    recommended: false
  },
  {
    title: "Standard Package",
    duration: "21 Days",
    hours: "21 Hours Practical",
    price: "₹6,000",
    features: [
      "Everything in Beginner",
      "Heavy Traffic Driving",
      "U-Turns & Parking",
      "Highway Driving Basics",
      "Permanent License Assist"
    ],
    recommended: true
  },
  {
    title: "Advanced Refresher",
    duration: "7 Days",
    hours: "7 Hours Practical",
    price: "₹2,500",
    features: [
      "For License Holders",
      "Confidence Building",
      "Complex Traffic Nav",
      "Advanced Parking Skills",
      "Night Driving Basics"
    ],
    recommended: false
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-yellow font-bold uppercase tracking-wider text-sm mb-2 block">
            Training Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Course
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive driving packages tailored to your current skill level and learning pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative glass-panel rounded-3xl p-8 border ${
                course.recommended ? 'border-brand-yellow shadow-[0_0_30px_rgba(250,204,21,0.15)]' : 'border-white/10'
              } flex flex-col h-full`}
            >
              {course.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg z-10">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              <div className="text-gray-400 text-sm mb-6 flex flex-col gap-1">
                <span>⏱ {course.duration}</span>
                <span>🚗 {course.hours}</span>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-brand-yellow">{course.price}</span>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {course.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-yellow" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-3 rounded-full font-bold text-center transition-all ${
                  course.recommended 
                    ? 'bg-brand-yellow text-brand-black hover:bg-yellow-400 shadow-lg hover:shadow-xl' 
                    : 'bg-brand-navy text-white hover:bg-white/10 border border-white/20'
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
