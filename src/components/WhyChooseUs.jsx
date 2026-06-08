import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Navigation, FileCheck, DollarSign, Car } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-brand-yellow" />,
    title: "Experienced Instructors",
    description: "Certified professionals with years of patience and experience."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-yellow" />,
    title: "Flexible Timings",
    description: "Morning and evening batches available to suit your schedule."
  },
  {
    icon: <Navigation className="w-8 h-8 text-brand-yellow" />,
    title: "Practical Road Training",
    description: "Real traffic conditions training from day one for better confidence."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-brand-yellow" />,
    title: "Affordable Packages",
    description: "Transparent pricing with no hidden charges. Value for money."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-yellow" />,
    title: "Safety First Approach",
    description: "Dual control vehicles ensuring maximum safety at all times."
  },
  {
    icon: <FileCheck className="w-8 h-8 text-brand-yellow" />,
    title: "License Assistance",
    description: "End-to-end support for LLR and permanent driving license."
  }
];

// Helper to fix missing icon import
import { Users } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-road-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold uppercase tracking-wider text-sm mb-2 block"
          >
            Our Advantages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We don't just teach you how to drive; we teach you how to survive and thrive on the roads with our comprehensive training approach.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl group transition-all duration-300 hover:bg-brand-black border border-white/5 hover:border-brand-yellow/30 relative overflow-hidden"
            >
              {/* Decorative corner glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl group-hover:bg-brand-yellow/20 transition-all duration-500"></div>
              
              <div className="w-16 h-16 rounded-xl bg-brand-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-yellow/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
