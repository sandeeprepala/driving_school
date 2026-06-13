import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Car, ThumbsUp, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-brand-blue" />,
    title: "Certified Instructors",
    description: "Highly trained, government-certified professionals with years of teaching experience and patience."
  },
  {
    icon: <Car className="w-8 h-8 text-brand-blue" />,
    title: "Modern Training Vehicles",
    description: "Equipped with dual control controls to guarantee absolute safety and confidence during lessons."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-blue" />,
    title: "Flexible Timings",
    description: "Batch schedules available in the early mornings and evenings to match your working hours."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-brand-blue" />,
    title: "Affordable Pricing",
    description: "Value-for-money courses with completely transparent fees and zero hidden charges."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
    title: "Safe Driving Practices",
    description: "Specialized training focusing on defensive driving and safety rules to build lifelong safe habits."
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-brand-blue" />,
    title: "High Success Rate",
    description: "Over 98% of our students clear their RTO driving license tests on their very first attempt."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-road-pattern opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block"
          >
            Our Advantages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Why Choose Our Driving School
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            We combine high safety standards, experienced instruction, and digital tools to deliver a premium learning experience.
          </motion.p>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-6 pb-6 lg:pb-0 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl group transition-all duration-300 hover:shadow-xl border border-slate-100 relative overflow-hidden w-[280px] xs:w-[300px] lg:w-auto shrink-0 snap-align-center"
            >
              {/* Decorative corner glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-all duration-500"></div>
              
              <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-slate-200/50 group-hover:border-brand-blue/30 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
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
