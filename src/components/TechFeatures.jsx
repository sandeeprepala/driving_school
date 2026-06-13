import { motion } from 'framer-motion';
import { UserPlus, CheckSquare, BarChart3, Car, Calendar, FileBadge, MessageSquare, Smartphone } from 'lucide-react';

const techFeatures = [
  {
    icon: <UserPlus className="w-6 h-6 text-brand-blue" />,
    title: "Online Enrollment",
    description: "Students can register, select courses, upload LLR paperwork, and initiate admissions directly online."
  },
  {
    icon: <CheckSquare className="w-6 h-6 text-brand-blue" />,
    title: "Digital Attendance",
    description: "GPS-verified session logins and biometrics log each minute spent behind the steering wheel."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-brand-blue" />,
    title: "Student Progress Tracking",
    description: "Track driving parameters (parking, reversing, highway, speeds) with clear charts on the dashboard."
  },
  {
    icon: <Car className="w-6 h-6 text-brand-blue" />,
    title: "Vehicle Management",
    description: "Live fuel, fitness certificates, and insurance logs ensure dual-control training cars are in 100% top condition."
  },
  {
    icon: <Calendar className="w-6 h-6 text-brand-blue" />,
    title: "Instructor Scheduling",
    description: "Book morning or evening classes with dedicated trainers based on hourly time slot calendars."
  },
  {
    icon: <FileBadge className="w-6 h-6 text-brand-blue" />,
    title: "Certificate Generation",
    description: "Automatic generation of official course completion certificates upon clearing RTO mock tests."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-brand-blue" />,
    title: "Feedback Management",
    description: "Instructors submit grading feedback for each lesson while students review and rate their trainers."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-blue" />,
    title: "SMS Notifications",
    description: "Instant SMS/WhatsApp alerts for booking confirmations, slot changes, attendance receipts, and RTO test alerts."
  }
];

const TechFeatures = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-road-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Digital Transformation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Technology Powered Driving School
          </h2>
          <p className="text-slate-500 text-lg">
            We are more than a traditional driving academy. Experience premium convenience, paperless tracking, and structured progress reviews.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-6 pb-6 lg:pb-0 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
          {techFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden w-[250px] xs:w-[280px] lg:w-auto shrink-0 snap-align-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/50 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-brand-blue/30 shadow-sm transition-all duration-300">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                {feat.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechFeatures;
