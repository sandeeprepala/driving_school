import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, User, BookOpen, AlertCircle } from 'lucide-react';

const StudentAttendanceDemo = () => {
  const syllabusSteps = [
    { name: "Cabin Drill & Engine Controls", status: "completed", date: "June 01" },
    { name: "Clutch & Accelerator Balance", status: "completed", date: "June 04" },
    { name: "Gear Shifts & Turning Controls", status: "completed", date: "June 08" },
    { name: "Reverse & Parallel Parking", status: "in-progress", date: "Active" },
    { name: "Highway & Night Navigation", status: "pending", date: "Upcoming" },
    { name: "RTO Mock Track Clearance", status: "pending", date: "Upcoming" }
  ];

  return (
    <section id="attendance" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-extrabold uppercase tracking-wider mb-4">
            ⚡ Digital Student Tracking
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Real-time Student Progress Tracking
          </h2>
          <p className="text-slate-500 text-lg">
            Our technology-powered platform lets students and instructors track attendance, course progress, and road scores digitally.
          </p>
        </div>

        {/* Demo Widget Mockup */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-4 xs:p-6 md:p-10 border border-slate-200/60 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 relative overflow-hidden">
          
          {/* Decorative card gradient background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/[0.02] rounded-full blur-3xl"></div>

          {/* Left Column: Student Info & Attendance Stats (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Profile Card Mockup */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                  RS
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                    Rahul Sharma <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block"></span>
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold uppercase">ID: SS-2026-089</p>
                </div>
              </div>

              {/* Course Info */}
              <div className="mb-6 space-y-1.5">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Current Course</span>
                <h3 className="font-extrabold text-slate-800 text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  Advanced Driving Course
                </h3>
              </div>

              {/* Attendance Counts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <span className="text-2xl font-black text-green-600">12</span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Present Sessions</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <span className="text-2xl font-black text-rose-500">01</span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Absent Sessions</p>
                </div>
              </div>
            </div>

            {/* Attendance Circular Chart */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center sm:text-left">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background track circle */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                  {/* Animated attendance value fill circle */}
                  <motion.circle 
                    initial={{ strokeDasharray: "0, 100" }}
                    whileInView={{ strokeDasharray: "92.3, 100" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    cx="18" 
                    cy="18" 
                    r="15.915" 
                    fill="none" 
                    stroke="#2563EB" 
                    strokeWidth="3.2" 
                    strokeDasharray="92.3 100" 
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                  <span className="text-xl font-black text-slate-900 leading-none">92.3%</span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase mt-1">Rate</span>
                </div>
              </div>
              <div>
                <h5 className="font-extrabold text-slate-800 text-sm">Attendance Summary</h5>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  High attendance score indicates proper training readiness for the RTO track exam.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Training Progress Syllabus (7 cols) */}
          <div className="md:col-span-7 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wide">
                  Detailed Training Syllabus Progress
                </h4>
                <span className="bg-brand-blue/10 text-brand-blue font-bold px-3 py-1 rounded-full text-[10px]">
                  4 / 6 Finished
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-100 rounded-full mb-6 overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "66.6%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-brand-blue rounded-full"
                ></motion.div>
              </div>

              {/* Syllabus Step list */}
              <div className="space-y-4">
                {syllabusSteps.map((step, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="mt-0.5">
                        {step.status === 'completed' && <CheckCircle2 className="w-4.5 h-4.5 text-green-500 fill-green-50" />}
                        {step.status === 'in-progress' && <div className="w-4.5 h-4.5 rounded-full border-2 border-brand-blue border-t-transparent animate-spin"></div>}
                        {step.status === 'pending' && <div className="w-4.5 h-4.5 rounded-full border border-slate-300"></div>}
                      </div>
                      <span className={`text-sm ${
                        step.status === 'completed' ? 'text-slate-500 line-through decoration-slate-300' :
                        step.status === 'in-progress' ? 'text-slate-900 font-bold' : 'text-slate-400'
                      }`}>
                        {step.name}
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      step.status === 'completed' ? 'bg-green-50 text-green-600' :
                      step.status === 'in-progress' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-slate-50 text-slate-400'
                    }`}>
                      {step.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400 font-semibold bg-slate-50 p-3 rounded-xl">
              <AlertCircle className="w-4.5 h-4.5 text-brand-blue shrink-0" />
              <span>Preview mode of student app portal. Attendance is tracked by dual-GPS records.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentAttendanceDemo;
