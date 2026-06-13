import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Search, Users, Clock, Car, BookOpen, CheckCircle2, AlertCircle, Filter, ChevronDown, Shield, CalendarDays, ChevronLeft, ChevronRight, X } from 'lucide-react';

const batches = [
  { id: 'morning', label: 'Morning Batch', time: '6:00 AM – 9:00 AM', icon: '🌅' },
  { id: 'noon', label: 'Noon Batch', time: '11:00 AM – 2:00 PM', icon: '☀️' },
  { id: 'evening', label: 'Evening Batch', time: '4:00 PM – 7:00 PM', icon: '🌇' },
];

// Generate realistic mock attendance for a student based on their joinDate and sessionsCompleted
function generateAttendance(joinDate, sessionsCompleted) {
  const attendance = {};
  const start = new Date(joinDate);
  const today = new Date('2026-06-13');
  let sessionsLeft = sessionsCompleted;
  const current = new Date(start);
  
  while (current <= today && sessionsLeft > 0) {
    const day = current.getDay();
    // Skip Sundays
    if (day !== 0) {
      const key = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`;
      // Simulate some absences (roughly 8% absent rate)
      const seed = (current.getDate() * 7 + current.getMonth() * 13) % 100;
      if (seed < 8 && sessionsLeft > 2) {
        attendance[key] = 'absent';
      } else {
        attendance[key] = 'present';
        sessionsLeft--;
      }
    }
    current.setDate(current.getDate() + 1);
  }
  
  // Mark Sundays as holidays
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const d = new Date(monthStart);
  while (d <= monthEnd) {
    if (d.getDay() === 0) {
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      attendance[key] = 'holiday';
    }
    d.setDate(d.getDate() + 1);
  }
  
  return attendance;
}

const students = [
  // Morning batch
  { id: 1, name: "Rahul Sharma", phone: "+919000111697", course: "Advanced Driving", vehicle: "Maruti Swift", batch: "morning", sessionsCompleted: 12, totalSessions: 30, status: "active", joinDate: "2026-05-15", nextSession: "June 14, 6:30 AM" },
  { id: 2, name: "Priya Reddy", phone: "+919876543210", course: "Beginner Course", vehicle: "Hyundai Aura", batch: "morning", sessionsCompleted: 8, totalSessions: 15, status: "active", joinDate: "2026-05-28", nextSession: "June 14, 7:00 AM" },
  { id: 3, name: "Venkat Rao", phone: "+919123456789", course: "Two Wheeler", vehicle: "Honda Activa 6G", batch: "morning", sessionsCompleted: 6, totalSessions: 10, status: "active", joinDate: "2026-06-01", nextSession: "June 14, 7:30 AM" },
  { id: 4, name: "Lakshmi Devi", phone: "+918899776655", course: "Four Wheeler", vehicle: "Mahindra XUV300", batch: "morning", sessionsCompleted: 15, totalSessions: 20, status: "active", joinDate: "2026-05-10", nextSession: "June 14, 8:00 AM" },
  { id: 5, name: "Aditya Kumar", phone: "+917788990011", course: "Refresher Training", vehicle: "Honda City", batch: "morning", sessionsCompleted: 5, totalSessions: 7, status: "completing", joinDate: "2026-06-05", nextSession: "June 14, 8:30 AM" },
  { id: 6, name: "Sushma Naidu", phone: "+916655443322", course: "Beginner Course", vehicle: "Maruti Swift", batch: "morning", sessionsCompleted: 3, totalSessions: 15, status: "active", joinDate: "2026-06-08", nextSession: "June 15, 6:00 AM" },
  
  // Noon batch
  { id: 7, name: "Kiran Prasad", phone: "+919112233445", course: "Intermediate Course", vehicle: "Hyundai Aura", batch: "noon", sessionsCompleted: 14, totalSessions: 21, status: "active", joinDate: "2026-05-20", nextSession: "June 14, 11:00 AM" },
  { id: 8, name: "Meena Kumari", phone: "+918877665544", course: "Two Wheeler", vehicle: "TVS Jupiter", batch: "noon", sessionsCompleted: 9, totalSessions: 10, status: "completing", joinDate: "2026-05-25", nextSession: "June 14, 11:30 AM" },
  { id: 9, name: "Suresh Babu", phone: "+917766554433", course: "Advanced Driving", vehicle: "Honda City", batch: "noon", sessionsCompleted: 20, totalSessions: 30, status: "active", joinDate: "2026-04-28", nextSession: "June 14, 12:00 PM" },
  { id: 10, name: "Deepa Rani", phone: "+916655443321", course: "Beginner Course", vehicle: "Maruti Swift", batch: "noon", sessionsCompleted: 2, totalSessions: 15, status: "new", joinDate: "2026-06-10", nextSession: "June 14, 12:30 PM" },
  { id: 11, name: "Ravi Teja", phone: "+919988776655", course: "Four Wheeler", vehicle: "Mahindra XUV300", batch: "noon", sessionsCompleted: 18, totalSessions: 20, status: "completing", joinDate: "2026-05-05", nextSession: "June 14, 1:00 PM" },

  // Evening batch
  { id: 12, name: "Anita Singh", phone: "+919900112233", course: "Intermediate Course", vehicle: "Hyundai Aura", batch: "evening", sessionsCompleted: 10, totalSessions: 21, status: "active", joinDate: "2026-05-18", nextSession: "June 14, 4:00 PM" },
  { id: 13, name: "Mohan Das", phone: "+918811223344", course: "Two Wheeler", vehicle: "Yamaha FZ-S", batch: "evening", sessionsCompleted: 7, totalSessions: 10, status: "active", joinDate: "2026-05-30", nextSession: "June 14, 4:30 PM" },
  { id: 14, name: "Kavitha Reddy", phone: "+917700889966", course: "Advanced Driving", vehicle: "Honda City", batch: "evening", sessionsCompleted: 25, totalSessions: 30, status: "active", joinDate: "2026-04-20", nextSession: "June 14, 5:00 PM" },
  { id: 15, name: "Santosh Kumar", phone: "+916600778899", course: "Beginner Course", vehicle: "Maruti Swift", batch: "evening", sessionsCompleted: 1, totalSessions: 15, status: "new", joinDate: "2026-06-12", nextSession: "June 14, 5:30 PM" },
  { id: 16, name: "Bhavani Prasad", phone: "+919922334455", course: "Refresher Training", vehicle: "Maruti Swift", batch: "evening", sessionsCompleted: 6, totalSessions: 7, status: "completing", joinDate: "2026-06-02", nextSession: "June 14, 6:00 PM" },
  { id: 17, name: "Harish Goud", phone: "+918833445566", course: "Four Wheeler", vehicle: "Mahindra XUV300", batch: "evening", sessionsCompleted: 11, totalSessions: 20, status: "active", joinDate: "2026-05-22", nextSession: "June 14, 6:30 PM" },
  { id: 18, name: "Swathi Kumari", phone: "+917744556677", course: "Two Wheeler", vehicle: "Honda Activa 6G", batch: "evening", sessionsCompleted: 4, totalSessions: 10, status: "active", joinDate: "2026-06-06", nextSession: "June 15, 4:00 PM" },
];

// Pre-generate attendance data for all students
const attendanceMap = {};
students.forEach(s => {
  attendanceMap[s.id] = generateAttendance(s.joinDate, s.sessionsCompleted);
});

const statusConfig = {
  active: { label: 'Active', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
  new: { label: 'New', color: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
  completing: { label: 'Completing', color: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
};

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* ═══════════════════════════════════════════
   ATTENDANCE CALENDAR COMPONENT
   ═══════════════════════════════════════════ */
const AttendanceCalendar = ({ student, attendance, onClose }) => {
  const [calMonth, setCalMonth] = useState(5); // June (0-indexed)
  const [calYear, setCalYear] = useState(2026);

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date('2026-06-13');

  // Stats for this month
  const monthStats = useMemo(() => {
    let present = 0, absent = 0, holiday = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      const key = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const status = attendance[key];
      if (status === 'present') present++;
      else if (status === 'absent') absent++;
      else if (status === 'holiday') holiday++;
    }
    return { present, absent, holiday, total: present + absent };
  }, [calMonth, calYear, attendance, daysInMonth]);

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  };

  const calendarDays = [];
  // Empty cells for days before the 1st
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  // Actual day cells
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Calendar Grid */}
          <div className="md:col-span-7 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
            {/* Month navigator */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <h4 className="text-sm font-bold text-slate-900">
                <CalendarDays className="w-4 h-4 inline mr-1.5 text-brand-blue" />
                {MONTH_NAMES[calMonth]} {calYear}
              </h4>
              <button onClick={nextMonth} className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {DAY_NAMES.map(d => (
                <div key={d} className="text-center text-[10px] font-bold text-slate-400 uppercase py-1">{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, i) => {
                if (day === null) return <div key={`e-${i}`} className="aspect-square"></div>;
                
                const key = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const status = attendance[key];
                const isToday = calYear === today.getFullYear() && calMonth === today.getMonth() && day === today.getDate();
                const isFuture = new Date(calYear, calMonth, day) > today;
                
                let cellClass = 'bg-white border border-slate-100 text-slate-700';
                let dotEl = null;
                
                if (status === 'present') {
                  cellClass = 'bg-emerald-50 border border-emerald-200 text-emerald-800';
                  dotEl = <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"></span>;
                } else if (status === 'absent') {
                  cellClass = 'bg-rose-50 border border-rose-200 text-rose-800';
                  dotEl = <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-500"></span>;
                } else if (status === 'holiday') {
                  cellClass = 'bg-slate-100 border border-slate-200 text-slate-400';
                  dotEl = <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-400"></span>;
                } else if (isFuture) {
                  cellClass = 'bg-white border border-dashed border-slate-200 text-slate-300';
                }
                
                if (isToday) {
                  cellClass += ' ring-2 ring-brand-blue ring-offset-1';
                }

                return (
                  <div key={day} className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold relative transition-all ${cellClass}`}>
                    {day}
                    {dotEl}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-slate-200/50">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Present
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Absent
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span> Holiday
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                <span className="w-2.5 h-2.5 rounded border border-dashed border-slate-300"></span> Upcoming
              </div>
            </div>
          </div>

          {/* Student Summary Panel */}
          <div className="md:col-span-5 space-y-4">
            {/* Attendance Rate Card */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Attendance Overview — {MONTH_NAMES[calMonth]}</h5>
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                    <circle 
                      cx="18" cy="18" r="15.915" fill="none" 
                      stroke={monthStats.total > 0 ? (monthStats.present / monthStats.total >= 0.8 ? '#10B981' : '#F59E0B') : '#E2E8F0'}
                      strokeWidth="3.2" 
                      strokeDasharray={`${monthStats.total > 0 ? (monthStats.present / monthStats.total * 100) : 0} 100`}
                      strokeLinecap="round" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-black text-slate-900 leading-none">
                      {monthStats.total > 0 ? Math.round(monthStats.present / monthStats.total * 100) : 0}%
                    </span>
                    <span className="text-[7px] text-slate-400 font-bold uppercase mt-0.5">Rate</span>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">Present</span>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{monthStats.present} days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">Absent</span>
                    <span className="text-xs font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">{monthStats.absent} days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">Holidays</span>
                    <span className="text-xs font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{monthStats.holiday} days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Details Card */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-3">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Student Details</h5>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-semibold flex items-center gap-1.5"><BookOpen className="w-3 h-3" /> Course</span>
                  <span className="text-slate-900 font-bold">{student.course}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-semibold flex items-center gap-1.5"><Car className="w-3 h-3" /> Vehicle</span>
                  <span className="text-slate-900 font-bold">{student.vehicle}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-semibold flex items-center gap-1.5"><CalendarDays className="w-3 h-3" /> Joined</span>
                  <span className="text-slate-900 font-bold">{new Date(student.joinDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-semibold flex items-center gap-1.5"><Clock className="w-3 h-3" /> Next Session</span>
                  <span className="text-brand-blue font-bold">{student.nextSession}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-semibold flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Progress</span>
                  <span className="text-slate-900 font-bold">{student.sessionsCompleted} / {student.totalSessions} sessions</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
              <a href={`tel:${student.phone}`} className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white py-3 rounded-xl font-bold text-xs hover:bg-blue-700 transition-all shadow-sm">
                <Phone className="w-3.5 h-3.5" /> Call Student
              </a>
              <a href={`https://wa.me/${student.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#20b858] transition-all shadow-sm">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


/* ═══════════════════════════════════════════
   MAIN ADMIN STUDENT LIST COMPONENT
   ═══════════════════════════════════════════ */
const AdminStudentList = () => {
  const [activeBatch, setActiveBatch] = useState('morning');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [expandedStudentId, setExpandedStudentId] = useState(null);

  const filteredStudents = students
    .filter(s => s.batch === activeBatch)
    .filter(s => statusFilter === 'all' || s.status === statusFilter)
    .filter(s => 
      searchQuery === '' || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.phone.includes(searchQuery) ||
      s.course.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const batchCounts = batches.map(b => ({
    ...b,
    count: students.filter(s => s.batch === b.id).length
  }));

  const toggleStudent = (id) => {
    setExpandedStudentId(prev => prev === id ? null : id);
  };

  return (
    <section id="admin" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-extrabold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" /> Admin Panel
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Student Batch Management
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            View all enrolled students grouped by their training time batch. Click any student to view their attendance calendar.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 mb-8 pb-4 lg:pb-0 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg shrink-0 w-[220px] lg:w-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Total Students</span>
            </div>
            <span className="text-3xl font-black">{students.length}</span>
          </div>
          {batchCounts.map(b => (
            <div 
              key={b.id}
              onClick={() => { setActiveBatch(b.id); setExpandedStudentId(null); }}
              className={`p-5 rounded-2xl border cursor-pointer transition-all shrink-0 w-[220px] lg:w-auto ${
                activeBatch === b.id 
                  ? 'bg-brand-blue/5 border-brand-blue/30 shadow-md' 
                  : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{b.label}</span>
                  <span className="text-[10px] font-semibold text-slate-400">{b.time}</span>
                </div>
              </div>
              <span className={`text-3xl font-black ${activeBatch === b.id ? 'text-brand-blue' : 'text-slate-800'}`}>{b.count}</span>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, phone, or course..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
          <div className="relative shrink-0">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-sm text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="new">New</option>
              <option value="completing">Completing</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Batch Tab Pills */}
        <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-none">
          {batchCounts.map(b => (
            <button
              key={b.id}
              onClick={() => { setActiveBatch(b.id); setExpandedStudentId(null); }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                activeBatch === b.id
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              {b.label}
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                activeBatch === b.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {b.count}
              </span>
            </button>
          ))}
        </div>

        {/* Active Batch Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-xl">{batches.find(b => b.id === activeBatch)?.icon}</span>
              {batches.find(b => b.id === activeBatch)?.label}
            </h3>
            <p className="text-xs text-slate-400 font-semibold">
              {batches.find(b => b.id === activeBatch)?.time} · {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} · Click a student to view attendance
            </p>
          </div>
        </div>

        {/* Student Cards */}
        <AnimatePresence mode="popLayout">
          {filteredStudents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-100"
            >
              <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-400 font-semibold text-sm">No students found matching your criteria.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredStudents.map((student, idx) => {
                const progress = Math.round((student.sessionsCompleted / student.totalSessions) * 100);
                const sc = statusConfig[student.status];
                const isExpanded = expandedStudentId === student.id;
                return (
                  <motion.div
                    layout
                    key={student.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.03, duration: 0.3 }}
                    className={`bg-white rounded-2xl border shadow-sm transition-all p-4 sm:p-5 cursor-pointer ${
                      isExpanded ? 'border-brand-blue/30 shadow-lg ring-1 ring-brand-blue/10' : 'border-slate-100 hover:shadow-md hover:border-slate-200'
                    }`}
                    onClick={() => toggleStudent(student.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      
                      {/* Student Avatar & Info */}
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                          isExpanded ? 'bg-brand-blue text-white' : 'bg-brand-blue text-white'
                        }`}>
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-slate-900 text-sm truncate">{student.name}</h4>
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${sc.color}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`}></span>
                              {sc.label}
                            </span>
                            {isExpanded && (
                              <span className="text-[10px] text-brand-blue font-bold flex items-center gap-1">
                                <CalendarDays className="w-3 h-3" /> Calendar Open
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 font-semibold truncate">{student.phone}</p>
                        </div>
                      </div>

                      {/* Course & Vehicle */}
                      <div className="flex items-center gap-4 text-xs shrink-0">
                        <div className="hidden sm:block">
                          <span className="flex items-center gap-1 text-slate-400 font-bold uppercase tracking-wider mb-0.5">
                            <BookOpen className="w-3 h-3" /> Course
                          </span>
                          <span className="text-slate-700 font-semibold">{student.course}</span>
                        </div>
                        <div className="hidden md:block">
                          <span className="flex items-center gap-1 text-slate-400 font-bold uppercase tracking-wider mb-0.5">
                            <Car className="w-3 h-3" /> Vehicle
                          </span>
                          <span className="text-slate-700 font-semibold">{student.vehicle}</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="sm:w-32 shrink-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Progress</span>
                          <span className="text-[10px] font-black text-brand-blue">{student.sessionsCompleted}/{student.totalSessions}</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${progress}%`,
                              background: progress >= 80 ? '#10B981' : progress >= 40 ? '#2563EB' : '#F59E0B'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 shrink-0" onClick={e => e.stopPropagation()}>
                        <a
                          href={`tel:${student.phone}`}
                          className="flex items-center gap-1.5 bg-brand-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-700 transition-all shadow-sm"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span className="hidden xs:inline">Call</span>
                        </a>
                        <a
                          href={`https://wa.me/${student.phone.replace('+', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#20b858] transition-all shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span className="hidden xs:inline">WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Mobile-only extra details row */}
                    {!isExpanded && (
                      <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-slate-50 sm:hidden">
                        <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" /> {student.course}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                          <Car className="w-3 h-3" /> {student.vehicle}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400">
                          Next: {student.nextSession}
                        </span>
                      </div>
                    )}

                    {/* Expanded Attendance Calendar */}
                    <AnimatePresence>
                      {isExpanded && (
                        <AttendanceCalendar 
                          student={student} 
                          attendance={attendanceMap[student.id]} 
                          onClose={() => setExpandedStudentId(null)}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Footer note */}
        <div className="mt-8 bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3 text-xs text-slate-400 font-semibold">
          <AlertCircle className="w-4.5 h-4.5 text-brand-blue shrink-0" />
          <span>This is a static preview of the admin student management panel. In production, data will be fetched from the live database in real-time.</span>
        </div>
      </div>
    </section>
  );
};

export default AdminStudentList;
