import { motion } from 'framer-motion';
import { Users, UserCheck, Percent, CalendarRange, ShieldAlert, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: "Total Students",
    value: "1,240",
    change: "+12.4%",
    trending: true,
    icon: <Users className="w-5 h-5 text-brand-blue" />,
    bg: "bg-blue-50/50"
  },
  {
    title: "Active Students",
    value: "85",
    change: "8 New Today",
    trending: true,
    icon: <UserCheck className="w-5 h-5 text-green-600" />,
    bg: "bg-green-50/50"
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "+2.1%",
    trending: true,
    icon: <Percent className="w-5 h-5 text-amber-600" />,
    bg: "bg-amber-50/50"
  },
  {
    title: "Daily Sessions",
    value: "18",
    change: "Slots booked",
    trending: false,
    icon: <CalendarRange className="w-5 h-5 text-indigo-600" />,
    bg: "bg-indigo-50/50"
  },
  {
    title: "Vehicles Ready",
    value: "12 / 12",
    change: "100% Fit",
    trending: true,
    icon: <ShieldAlert className="w-5 h-5 text-emerald-600" />,
    bg: "bg-emerald-50/50"
  }
];

const AdminDashboardPreview = () => {
  return (
    <section id="dashboard" className="py-12 md:py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-road-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Digital Management Preview
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Smart Driving School Management
          </h2>
          <p className="text-slate-500 text-lg">
            A visual preview of our administrative control desk. Monitor trainer allocation, fleet logs, scheduling, and RTO test success statistics in real-time.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex lg:grid lg:grid-cols-5 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-4 lg:gap-6 mb-12 pb-4 lg:pb-0 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-[200px] lg:w-auto shrink-0 snap-align-center"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  {stat.icon}
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-slate-800 leading-none">{stat.value}</span>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trending && <TrendingUp className="w-3 h-3 text-green-500" />}
                  <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">{stat.change}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Chart 1: Enrollment Curve (Line Chart) */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="font-bold text-slate-800">Monthly Enrollment Growth</h4>
                <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">New Student Registrations (2026)</p>
              </div>
              <span className="bg-brand-blue/10 text-brand-blue font-bold px-3 py-1 rounded-full text-[10px] uppercase">
                Upward Trend
              </span>
            </div>

            {/* Line Chart SVG */}
            <div className="h-64 relative flex items-end">
              <svg viewBox="0 0 500 200" className="w-full h-full">
                {/* Horizontal grid lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="5 5" />
                
                {/* Registrations line wave path */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 20 180 Q 90 140 160 150 T 300 90 T 420 50 T 480 30"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Fill shadow area */}
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  d="M 20 180 Q 90 140 160 150 T 300 90 T 420 50 T 480 30 L 480 200 L 20 200 Z"
                  fill="#2563EB"
                />

                {/* Data Points */}
                <circle cx="20" cy="180" r="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle cx="160" cy="150" r="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle cx="300" cy="90" r="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle cx="420" cy="50" r="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                <circle cx="480" cy="30" r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase mt-4 px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* Chart 2: Fleet Allocation Load (Bar Chart) */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="font-bold text-slate-800">Fleet Utilization Load</h4>
                <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Active hours per vehicle type</p>
              </div>
              <span className="bg-green-50 text-green-600 font-bold px-3 py-1 rounded-full text-[10px] uppercase">
                Active Fleet
              </span>
            </div>

            {/* Bar Chart SVG */}
            <div className="h-64 relative flex items-end">
              <svg viewBox="0 0 500 200" className="w-full h-full">
                {/* Horizontal reference lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="0" y1="200" x2="500" y2="200" stroke="#E2E8F0" strokeWidth="1.5" />

                {/* Bars - animates height */}
                {/* Hatchbacks (Swift) - Height: 150 (corresponds to y=50) */}
                <motion.rect
                  initial={{ height: 0, y: 200 }}
                  whileInView={{ height: 150, y: 50 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  x="45"
                  width="50"
                  rx="6"
                  fill="#3B82F6"
                />
                
                {/* Sedans (City/Aura) - Height: 120 (y=80) */}
                <motion.rect
                  initial={{ height: 0, y: 200 }}
                  whileInView={{ height: 120, y: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                  x="155"
                  width="50"
                  rx="6"
                  fill="#4F46E5"
                />

                {/* SUVs (XUV300) - Height: 90 (y=110) */}
                <motion.rect
                  initial={{ height: 0, y: 200 }}
                  whileInView={{ height: 90, y: 110 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  x="265"
                  width="50"
                  rx="6"
                  fill="#6366F1"
                />

                {/* Two Wheelers (Activa/FZ-S) - Height: 170 (y=30) */}
                <motion.rect
                  initial={{ height: 0, y: 200 }}
                  whileInView={{ height: 170, y: 30 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  x="375"
                  width="50"
                  rx="6"
                  fill="#10B981"
                />
              </svg>
            </div>

            {/* Axis labels */}
            <div className="grid grid-cols-4 text-center text-[10px] text-slate-400 font-bold uppercase mt-4 px-2">
              <span>Hatchbacks</span>
              <span>Sedans</span>
              <span>SUVs</span>
              <span>Two-Wheelers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPreview;
