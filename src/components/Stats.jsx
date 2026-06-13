import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 5000, label: "Students Trained", suffix: "+" },
  { value: 98, label: "Success Rate", suffix: "%" },
  { value: 12, label: "Training Vehicles", suffix: "" }
];

const Counter = ({ from, to, duration, inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <>{count}</>;
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-brand-blue/[0.02]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-2 font-mono">
                <Counter from={0} to={stat.value} duration={2} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
