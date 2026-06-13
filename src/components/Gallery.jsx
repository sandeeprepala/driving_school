import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Award, Compass, Car, Calendar } from 'lucide-react';

const categories = ['All', 'Training', 'Vehicles', 'Sessions', 'Success Stories'];

const items = [
  {
    id: 1,
    title: "Dual-Control Hatchback Training",
    category: "Training",
    desc: "Student practicing clutch coordination in Swift under dual control guidelines.",
    aspect: "h-96",
    grad: "from-blue-500/20 to-indigo-600/20",
    icon: <Car className="w-8 h-8 text-brand-blue" />
  },
  {
    id: 2,
    title: "First-Attempt RTO License Success",
    category: "Success Stories",
    desc: "Student celebrating clearing the permanent driving test on first attempt.",
    aspect: "h-64",
    grad: "from-emerald-500/20 to-teal-600/20",
    icon: <Award className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 3,
    title: "Sedans & SUVs Fleet Showcase",
    category: "Vehicles",
    desc: "Clean, serviced, dual-control sedan lineup ready for the morning batches.",
    aspect: "h-96",
    grad: "from-slate-400/20 to-slate-600/20",
    icon: <Car className="w-8 h-8 text-slate-700" />
  },
  {
    id: 4,
    title: "One-on-One Instructor Briefing",
    category: "Sessions",
    desc: "Trainer explaining traffic rules, roundabouts, and blind spots before road trips.",
    aspect: "h-64",
    grad: "from-amber-500/20 to-orange-600/20",
    icon: <Compass className="w-8 h-8 text-amber-600" />
  },
  {
    id: 5,
    title: "Two-Wheeler Figure-8 Track Trial",
    category: "Training",
    desc: "Mastering balance controls and turns on our marked closed training ground.",
    aspect: "h-64",
    grad: "from-rose-500/20 to-pink-600/20",
    icon: <Calendar className="w-8 h-8 text-rose-600" />
  },
  {
    id: 6,
    title: "Permanent License Award Ceremony",
    category: "Success Stories",
    desc: "Proud student holding physical driving card issued by regional transport office.",
    aspect: "h-96",
    grad: "from-cyan-500/20 to-blue-600/20",
    icon: <Award className="w-8 h-8 text-cyan-600" />
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-road-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            School Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Life At Sai Sandya
          </h2>
          <p className="text-slate-500 text-lg">
            Glance through our training grounds, active vehicular fleet, student coaching sessions, and success stories.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-blue text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns (Tailwind columns-3 utility is perfect for true CSS masonry!) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className={`break-inside-avoid bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${item.aspect} p-6`}
              >
                <div className={`w-full h-1/2 rounded-2xl bg-gradient-to-tr ${item.grad} flex items-center justify-center border border-slate-100/50 mb-4 shrink-0 shadow-inner`}>
                  {item.icon}
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-brand-blue uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Verified Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
