import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Star, Calendar, Zap, Compass, Gauge } from 'lucide-react';

const Hero = () => {
  const [targetSpeed, setTargetSpeed] = useState(60);
  const [currentSpeed, setCurrentSpeed] = useState(60);
  const [showDemoAlert, setShowDemoAlert] = useState(false);
  const animRef = useRef(null);
  const timeRef = useRef(0);

  // Smooth physics speed interpolation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeed((prev) => {
        const diff = targetSpeed - prev;
        if (Math.abs(diff) < 0.3) return targetSpeed;
        return prev + diff * 0.08;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [targetSpeed]);

  const handleDemoBooking = (e) => {
    e.preventDefault();
    setShowDemoAlert(true);
    setTimeout(() => setShowDemoAlert(false), 4500);
  };

  // Derived animation values
  const speedFactor = currentSpeed / 60;
  const isMoving = currentSpeed > 2;
  const roadSpeed = isMoving ? `${Math.max(0.3, 2 / speedFactor)}s` : '0s';
  const cloudSpeed = isMoving ? `${Math.max(8, 30 / speedFactor)}s` : '0s';
  const mountainSpeed = isMoving ? `${Math.max(15, 60 / speedFactor)}s` : '0s';
  const treeSpeed = isMoving ? `${Math.max(2, 8 / speedFactor)}s` : '0s';
  const wheelSpeed = isMoving ? `${Math.max(0.15, 0.6 / speedFactor)}s` : '0s';
  const bounceIntensity = isMoving ? Math.min(1.5, speedFactor * 0.8) : 0;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28 md:pt-24 pb-10 md:pb-12">

      {/* Dynamic Stylesheet */}
      <style>{`
        /* === PARALLAX LAYERS === */
        @keyframes clouds-drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mountains-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes trees-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes road-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wheel-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes car-bounce {
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-${bounceIntensity}px); }
          75% { transform: translateY(${bounceIntensity * 0.5}px); }
        }
        @keyframes exhaust-puff {
          0% { opacity: 0.6; transform: translateX(0) scale(1); }
          50% { opacity: 0.3; transform: translateX(-20px) scale(1.5); }
          100% { opacity: 0; transform: translateX(-45px) scale(2.2); }
        }
        @keyframes speed-line {
          0% { transform: translateX(60px); opacity: 0; }
          30% { opacity: 0.5; }
          100% { transform: translateX(-100px); opacity: 0; }
        }
        @keyframes sunlight-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }

        .anim-clouds { animation: clouds-drift ${cloudSpeed} linear infinite; animation-play-state: ${isMoving ? 'running' : 'paused'}; }
        .anim-mountains { animation: mountains-scroll ${mountainSpeed} linear infinite; animation-play-state: ${isMoving ? 'running' : 'paused'}; }
        .anim-trees { animation: trees-scroll ${treeSpeed} linear infinite; animation-play-state: ${isMoving ? 'running' : 'paused'}; }
        .anim-road { animation: road-scroll ${roadSpeed} linear infinite; animation-play-state: ${isMoving ? 'running' : 'paused'}; }
        .anim-wheel { animation: wheel-rotate ${wheelSpeed} linear infinite; animation-play-state: ${isMoving ? 'running' : 'paused'}; }
        .anim-bounce { animation: car-bounce ${isMoving ? '0.35s' : '0s'} ease-in-out infinite; animation-play-state: ${isMoving ? 'running' : 'paused'}; }
        .anim-exhaust { animation: exhaust-puff 0.8s ease-out infinite; animation-play-state: ${isMoving ? 'running' : 'paused'}; }
        .anim-speed-line { animation: speed-line 0.6s linear infinite; }
        .anim-sunlight { animation: sunlight-pulse 4s ease-in-out infinite; }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* === LEFT COLUMN: Content === */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse"></span>
              <span className="text-slate-800 text-[11px] font-extrabold tracking-wider uppercase">
                🏆 #1 Government Approved Driving Academy in Rangareddy
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
              >
                Learn Driving with <span className="bg-gradient-to-r from-brand-blue to-indigo-600 bg-clip-text text-transparent">Confident Mastery</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-slate-500 text-base sm:text-lg leading-relaxed"
              >
                Defensive training setups, dual-control safe fleet, and first-attempt RTO license success templates. Book class slots in <strong>Kandlakoya, Rangareddy</strong>.
              </motion.p>
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="tel:+919000111697"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold text-xs hover:bg-blue-700 hover:scale-105 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" /> Call Manager (+91 90001 11697)
              </a>
              <a
                href="https://wa.me/919000111697"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-xs hover:bg-[#20b858] hover:scale-105 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-slate-500 text-xs font-semibold pt-2"
            >
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3.5 py-1.5 rounded-full">
                <ShieldCheck className="w-4.5 h-4.5 text-brand-blue" />
                <span>Dual-Control Training Fleet</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3.5 py-1.5 rounded-full">
                <Star className="w-4.5 h-4.5 text-amber-500 fill-current" />
                <span>4.6 / 5 Rating (8 Reviews)</span>
              </div>
            </motion.div>
          </div>

          {/* === RIGHT COLUMN: Cinematic Driving Scene === */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full"
            >
              {/* Scene Container */}
              <div className="w-full rounded-3xl overflow-hidden border border-slate-200/70 shadow-2xl relative bg-gradient-to-b from-sky-300 via-sky-200 to-amber-100" style={{ height: 'clamp(260px, 45vw, 380px)' }}>

                {/* === SKY GRADIENT + SUN === */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-orange-100 pointer-events-none"></div>

                {/* Sun */}
                <div className="absolute top-8 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400 blur-[1px] pointer-events-none" style={{ boxShadow: '0 0 60px 20px rgba(251, 191, 36, 0.35)' }}></div>
                <div className="anim-sunlight absolute top-3 right-7 w-24 h-24 rounded-full bg-yellow-200/20 blur-xl pointer-events-none"></div>

                {/* === CLOUDS LAYER (slowest parallax) === */}
                <div className="absolute top-4 left-0 w-[200%] h-20 pointer-events-none anim-clouds">
                  {/* Cloud 1 */}
                  <svg className="absolute top-2 left-[5%]" width="100" height="40" viewBox="0 0 100 40">
                    <ellipse cx="50" cy="25" rx="45" ry="15" fill="white" opacity="0.9"/>
                    <ellipse cx="30" cy="20" rx="25" ry="12" fill="white" opacity="0.95"/>
                    <ellipse cx="65" cy="18" rx="30" ry="14" fill="white" opacity="0.85"/>
                    <ellipse cx="48" cy="15" rx="20" ry="10" fill="white" opacity="0.95"/>
                  </svg>
                  {/* Cloud 2 */}
                  <svg className="absolute top-8 left-[30%]" width="80" height="35" viewBox="0 0 80 35">
                    <ellipse cx="40" cy="22" rx="35" ry="12" fill="white" opacity="0.7"/>
                    <ellipse cx="25" cy="18" rx="22" ry="10" fill="white" opacity="0.8"/>
                    <ellipse cx="55" cy="16" rx="20" ry="9" fill="white" opacity="0.75"/>
                  </svg>
                  {/* Cloud 3 */}
                  <svg className="absolute top-1 left-[60%]" width="120" height="45" viewBox="0 0 120 45">
                    <ellipse cx="60" cy="28" rx="55" ry="16" fill="white" opacity="0.85"/>
                    <ellipse cx="35" cy="22" rx="30" ry="13" fill="white" opacity="0.9"/>
                    <ellipse cx="80" cy="20" rx="32" ry="14" fill="white" opacity="0.8"/>
                    <ellipse cx="55" cy="15" rx="22" ry="11" fill="white" opacity="0.95"/>
                  </svg>
                  {/* Duplicate set for seamless loop */}
                  <svg className="absolute top-2 left-[105%]" width="100" height="40" viewBox="0 0 100 40">
                    <ellipse cx="50" cy="25" rx="45" ry="15" fill="white" opacity="0.9"/>
                    <ellipse cx="30" cy="20" rx="25" ry="12" fill="white" opacity="0.95"/>
                    <ellipse cx="65" cy="18" rx="30" ry="14" fill="white" opacity="0.85"/>
                  </svg>
                  <svg className="absolute top-8 left-[130%]" width="80" height="35" viewBox="0 0 80 35">
                    <ellipse cx="40" cy="22" rx="35" ry="12" fill="white" opacity="0.7"/>
                    <ellipse cx="25" cy="18" rx="22" ry="10" fill="white" opacity="0.8"/>
                  </svg>
                  <svg className="absolute top-1 left-[160%]" width="120" height="45" viewBox="0 0 120 45">
                    <ellipse cx="60" cy="28" rx="55" ry="16" fill="white" opacity="0.85"/>
                    <ellipse cx="35" cy="22" rx="30" ry="13" fill="white" opacity="0.9"/>
                  </svg>
                </div>

                {/* === DISTANT MOUNTAINS (slow parallax) === */}
                <div className="absolute bottom-[120px] left-0 w-[200%] h-32 pointer-events-none anim-mountains">
                  <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="mt1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7C96B4" />
                        <stop offset="100%" stopColor="#94A8C0" />
                      </linearGradient>
                      <linearGradient id="mt2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8BA4BE" />
                        <stop offset="100%" stopColor="#A3B5C9" />
                      </linearGradient>
                    </defs>
                    {/* Far mountains */}
                    <path d="M0,120 L0,80 L60,50 L120,75 L200,35 L280,65 L350,25 L420,60 L500,40 L580,70 L600,120 Z" fill="url(#mt1)" opacity="0.6"/>
                    <path d="M600,120 L600,80 L660,50 L720,75 L800,35 L880,65 L950,25 L1020,60 L1100,40 L1200,70 L1200,120 Z" fill="url(#mt1)" opacity="0.6"/>
                    {/* Near mountains */}
                    <path d="M0,120 L0,90 L80,60 L160,85 L240,50 L340,75 L400,55 L480,80 L560,65 L600,120 Z" fill="url(#mt2)" opacity="0.5"/>
                    <path d="M600,120 L600,90 L680,60 L760,85 L840,50 L940,75 L1000,55 L1080,80 L1160,65 L1200,120 Z" fill="url(#mt2)" opacity="0.5"/>
                  </svg>
                </div>

                {/* === TREES / BUILDINGS LAYER (medium parallax) === */}
                <div className="absolute bottom-[85px] left-0 w-[200%] h-24 pointer-events-none anim-trees">
                  <svg viewBox="0 0 1600 100" className="w-full h-full" preserveAspectRatio="none">
                    {/* Tree cluster pattern repeated */}
                    {[0, 200, 400, 600, 800, 1000, 1200, 1400].map((x, i) => (
                      <g key={i}>
                        {/* Tree trunk */}
                        <rect x={x + 30} y="55" width="6" height="45" fill="#5D4E37" rx="2"/>
                        {/* Tree canopy */}
                        <ellipse cx={x + 33} cy="45" rx="22" ry="28" fill={i % 3 === 0 ? '#2D6A4F' : i % 3 === 1 ? '#40916C' : '#357A5A'} />
                        <ellipse cx={x + 33} cy="38" rx="16" ry="20" fill={i % 2 === 0 ? '#52B788' : '#48A978'} opacity="0.7"/>

                        {/* Smaller tree */}
                        <rect x={x + 90} y="65" width="4" height="35" fill="#6B5B45" rx="1.5"/>
                        <ellipse cx={x + 92} cy="55" rx="16" ry="22" fill={i % 2 === 0 ? '#357A5A' : '#2D6A4F'} />

                        {/* Building/house */}
                        <rect x={x + 140} y="45" width="35" height="55" fill={i % 2 === 0 ? '#E8DDD3' : '#D4C5B5'} rx="2"/>
                        <rect x={x + 148} y="55" width="8" height="10" fill="#87CEEB" opacity="0.7" rx="1"/>
                        <rect x={x + 160} y="55" width="8" height="10" fill="#87CEEB" opacity="0.7" rx="1"/>
                        <rect x={x + 148} y="72" width="8" height="10" fill="#87CEEB" opacity="0.5" rx="1"/>
                        <rect x={x + 160} y="72" width="8" height="10" fill="#87CEEB" opacity="0.5" rx="1"/>
                        <polygon points={`${x + 137},45 ${x + 157},25 ${x + 178},45`} fill={i % 2 === 0 ? '#C0392B' : '#A93226'} />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* === ROAD SURFACE === */}
                <div className="absolute bottom-0 left-0 w-full h-[90px] pointer-events-none">
                  {/* Road base */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800"></div>

                  {/* Road texture */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'4\' height=\'4\' viewBox=\'0 0 4 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'1\' height=\'1\' fill=\'%23000\'/%3E%3C/svg%3E")', backgroundSize: '4px 4px' }}></div>

                  {/* Road edge lines (top white line) */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-white/40"></div>
                  <div className="absolute bottom-[2px] left-0 w-full h-[2px] bg-yellow-400/30"></div>

                  {/* CENTER LANE DASHES - scrolling */}
                  <div className="absolute top-[42px] left-0 w-[200%] h-[4px] anim-road pointer-events-none">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-full bg-yellow-300/90 rounded-sm"
                        style={{
                          width: '40px',
                          left: `${i * 80}px`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* === THE CAR (Side View — Realistic Hatchback) === */}
                <div className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none anim-bounce" style={{ width: 'clamp(220px, 35vw, 280px)', height: 'clamp(94px, 15vw, 120px)', bottom: 'clamp(18px, 3vw, 28px)' }}>

                  {/* Speed Lines (behind car at high speed) */}
                  {currentSpeed > 50 && (
                    <div className="absolute left-[-20px] top-[30px] w-[60px] h-[60px]">
                      {[0, 1, 2, 3].map(i => (
                        <div
                          key={i}
                          className="absolute h-[2px] bg-white/30 rounded-full anim-speed-line"
                          style={{
                            width: `${20 + i * 8}px`,
                            top: `${10 + i * 14}px`,
                            animationDelay: `${-i * 0.15}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  )}

                  {/* Exhaust smoke */}
                  {isMoving && (
                    <div className="absolute left-[2px] bottom-[18px]">
                      {[0, 1, 2].map(i => (
                        <div
                          key={i}
                          className="absolute rounded-full bg-slate-400/40 anim-exhaust"
                          style={{
                            width: `${6 + i * 3}px`,
                            height: `${6 + i * 3}px`,
                            animationDelay: `${-i * 0.25}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  )}

                  {/* Car SVG */}
                  <svg viewBox="0 0 340 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))' }}>
                    <defs>
                      {/* Car body paint gradient - premium white */}
                      <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F8FAFC" />
                        <stop offset="40%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#CBD5E1" />
                      </linearGradient>
                      {/* Window glass gradient */}
                      <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7DD3FC" />
                        <stop offset="50%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                      {/* Wheel gradient */}
                      <radialGradient id="wheelGrad" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="#4B5563" />
                        <stop offset="60%" stopColor="#1F2937" />
                        <stop offset="80%" stopColor="#111827" />
                        <stop offset="100%" stopColor="#030712" />
                      </radialGradient>
                      {/* Hubcap gradient */}
                      <radialGradient id="hubcap" cx="0.4" cy="0.4" r="0.5">
                        <stop offset="0%" stopColor="#D1D5DB" />
                        <stop offset="50%" stopColor="#9CA3AF" />
                        <stop offset="100%" stopColor="#6B7280" />
                      </radialGradient>
                      {/* Car body reflection */}
                      <linearGradient id="bodyReflect" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="rgba(255,255,255,0.15)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                        <stop offset="70%" stopColor="rgba(255,255,255,0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                      {/* Shadow under car */}
                      <filter id="carShadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                        <feOffset dx="0" dy="4" />
                        <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
                      </filter>
                    </defs>

                    {/* Ground shadow */}
                    <ellipse cx="175" cy="128" rx="120" ry="10" fill="rgba(0,0,0,0.15)" filter="url(#carShadow)"/>

                    {/* === CAR BODY === */}
                    {/* Roof & cabin */}
                    <path d="M110,48 L125,26 C128,22 135,20 142,20 L220,20 C228,20 232,22 234,26 L255,48 Z" fill="url(#carBody)" stroke="#94A3B8" strokeWidth="1.5"/>

                    {/* Main body */}
                    <path d="M55,48 L285,48 C295,48 300,52 302,58 L308,80 C310,86 308,92 302,94 L295,96 L55,96 L42,94 C36,92 34,86 36,80 L42,58 C44,52 48,48 55,48 Z" fill="url(#carBody)" stroke="#94A3B8" strokeWidth="1.5"/>

                    {/* Body highlight / reflection stripe */}
                    <path d="M60,65 L300,65 L302,72 L58,72 Z" fill="url(#bodyReflect)"/>

                    {/* Door line */}
                    <line x1="180" y1="48" x2="178" y2="94" stroke="#94A3B8" strokeWidth="1" opacity="0.5"/>
                    {/* Door handle */}
                    <rect x="190" y="68" width="14" height="4" rx="2" fill="#94A3B8" opacity="0.6"/>
                    <rect x="145" y="68" width="14" height="4" rx="2" fill="#94A3B8" opacity="0.6"/>

                    {/* === WINDOWS === */}
                    {/* Rear window */}
                    <path d="M115,49 L128,29 C130,26 134,24 140,24 L170,24 L170,49 Z" fill="url(#glass)" opacity="0.85" stroke="#64748B" strokeWidth="1"/>
                    {/* Window divider pillar */}
                    <line x1="170" y1="24" x2="172" y2="49" stroke="#94A3B8" strokeWidth="4"/>
                    {/* Front window */}
                    <path d="M175,24 L222,24 C227,24 230,26 232,28 L250,49 L175,49 Z" fill="url(#glass)" opacity="0.85" stroke="#64748B" strokeWidth="1"/>

                    {/* Window reflection glare */}
                    <path d="M130,32 L138,26 L140,28 L132,35 Z" fill="white" opacity="0.4"/>
                    <path d="M195,28 L205,24 L208,26 L198,32 Z" fill="white" opacity="0.35"/>

                    {/* === HEADLIGHTS === */}
                    <path d="M296,60 L308,70 L310,82 L300,88 L296,60 Z" fill="#FEF3C7" stroke="#94A3B8" strokeWidth="1"/>
                    <path d="M298,65 L306,72 L307,80 L300,84 Z" fill="#FDE68A" opacity="0.9"/>
                    {/* Headlight glow */}
                    {isMoving && <circle cx="306" cy="75" r="8" fill="#FEF08A" opacity="0.3" style={{ filter: 'blur(4px)' }}/>}

                    {/* === TAIL LIGHTS === */}
                    <path d="M48,60 L38,70 L36,82 L44,88 L48,60 Z" fill="#FCA5A5" stroke="#94A3B8" strokeWidth="1"/>
                    <path d="M46,65 L40,72 L39,80 L44,84 Z" fill="#EF4444" opacity="0.9"/>
                    {isMoving && <circle cx="40" cy="75" r="6" fill="#EF4444" opacity="0.25" style={{ filter: 'blur(3px)' }}/>}

                    {/* === BUMPERS === */}
                    {/* Front bumper */}
                    <path d="M295,88 L310,88 C314,88 316,90 316,94 L314,100 C313,102 310,104 308,104 L290,104 L292,96 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
                    {/* Rear bumper */}
                    <path d="M48,88 L34,88 C30,88 28,90 28,94 L30,100 C31,102 34,104 36,104 L54,104 L52,96 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>

                    {/* === FRONT GRILL === */}
                    <rect x="296" y="78" width="12" height="8" rx="1.5" fill="#374151" stroke="#4B5563" strokeWidth="0.8"/>
                    {[0, 1, 2, 3].map(i => (
                      <line key={i} x1={298 + i * 3} y1="79" x2={298 + i * 3} y2="85" stroke="#1F2937" strokeWidth="0.8"/>
                    ))}

                    {/* === L-PLATE (on roof) === */}
                    <rect x="175" y="12" width="18" height="14" fill="white" stroke="#1E293B" strokeWidth="1.5" rx="2"/>
                    <text x="184" y="23" textAnchor="middle" fontSize="11" fontWeight="900" fill="#DC2626" fontFamily="Impact, Arial Black, sans-serif">L</text>

                    {/* === "SAI SANDHYA DRIVING SCHOOL" text on body === */}
                    <text x="172" y="60" textAnchor="middle" fontSize="6" fontWeight="800" fill="#1E40AF" fontFamily="Arial, sans-serif" letterSpacing="1.2" opacity="0.8">SAI SANDHYA DRIVING SCHOOL</text>

                    {/* === SIDE MIRROR === */}
                    <rect x="256" y="44" width="10" height="8" rx="3" fill="#94A3B8" stroke="#64748B" strokeWidth="1"/>

                    {/* === WHEELS === */}
                    {/* Rear wheel */}
                    <g>
                      <circle cx="100" cy="104" r="22" fill="#1F2937" stroke="#111827" strokeWidth="2"/>
                      <circle cx="100" cy="104" r="18" fill="url(#wheelGrad)"/>
                      {/* Tire tread pattern */}
                      <circle cx="100" cy="104" r="20" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="3,3"/>
                      {/* Spinning hubcap */}
                      <g className="anim-wheel" style={{ transformOrigin: '100px 104px' }}>
                        <circle cx="100" cy="104" r="11" fill="url(#hubcap)" stroke="#9CA3AF" strokeWidth="0.5"/>
                        {/* Spokes */}
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                          <line key={i} x1="100" y1="104" x2={100 + 9 * Math.cos(angle * Math.PI / 180)} y2={104 + 9 * Math.sin(angle * Math.PI / 180)} stroke="#6B7280" strokeWidth="1.5"/>
                        ))}
                        <circle cx="100" cy="104" r="3" fill="#4B5563" stroke="#6B7280" strokeWidth="0.8"/>
                      </g>
                    </g>

                    {/* Front wheel */}
                    <g>
                      <circle cx="260" cy="104" r="22" fill="#1F2937" stroke="#111827" strokeWidth="2"/>
                      <circle cx="260" cy="104" r="18" fill="url(#wheelGrad)"/>
                      <circle cx="260" cy="104" r="20" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="3,3"/>
                      <g className="anim-wheel" style={{ transformOrigin: '260px 104px' }}>
                        <circle cx="260" cy="104" r="11" fill="url(#hubcap)" stroke="#9CA3AF" strokeWidth="0.5"/>
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                          <line key={i} x1="260" y1="104" x2={260 + 9 * Math.cos(angle * Math.PI / 180)} y2={104 + 9 * Math.sin(angle * Math.PI / 180)} stroke="#6B7280" strokeWidth="1.5"/>
                        ))}
                        <circle cx="260" cy="104" r="3" fill="#4B5563" stroke="#6B7280" strokeWidth="0.8"/>
                      </g>
                    </g>

                    {/* === LICENSE PLATE (rear) === */}
                    <rect x="40" y="88" width="30" height="10" rx="1.5" fill="#FACC15" stroke="#92400E" strokeWidth="1"/>
                    <text x="55" y="96" textAnchor="middle" fontSize="5" fontWeight="900" fill="#1E293B" fontFamily="Courier, monospace">TS 09</text>

                  </svg>
                </div>

                {/* === SCENE OVERLAY: Gradient vignette === */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.08) 100%)' }}></div>

              </div>

              {/* === SPEED CONTROL PANEL === */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/50 shadow-lg mt-4 relative overflow-hidden">

                {/* Speedometer display */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-brand-blue" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Drive Simulator</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[11px] font-black font-mono border transition-all duration-500 ${
                    targetSpeed === 100 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    targetSpeed === 0 ? 'bg-rose-50 text-rose-700 border-rose-200' :
                    'bg-brand-blue/5 text-brand-blue border-brand-blue/20'
                  }`}>
                    {Math.round(currentSpeed)} KM/H
                  </div>
                </div>

                {/* Speed bar visualizer */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${currentSpeed}%`,
                      background: currentSpeed > 70 ? 'linear-gradient(90deg, #2563EB, #10B981)' : currentSpeed > 0 ? 'linear-gradient(90deg, #2563EB, #3B82F6)' : '#EF4444'
                    }}
                  ></div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setTargetSpeed(0)}
                    className={`py-2.5 px-1 rounded-xl text-[10px] font-black tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      targetSpeed === 0
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                        : 'bg-slate-50 text-slate-600 hover:bg-rose-50 hover:text-rose-600 border border-slate-200'
                    }`}
                  >
                    🛑 BRAKE
                  </button>

                  <button
                    onClick={() => setTargetSpeed(60)}
                    className={`py-2.5 px-1 rounded-xl text-[10px] font-black tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      targetSpeed === 60
                        ? 'bg-brand-blue text-white shadow-md shadow-blue-200'
                        : 'bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-brand-blue border border-slate-200'
                    }`}
                  >
                    <Compass className="w-3 h-3" /> CRUISE
                  </button>

                  <button
                    onClick={() => setTargetSpeed(100)}
                    className={`py-2.5 px-1 rounded-xl text-[10px] font-black tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      targetSpeed === 100
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                        : 'bg-slate-50 text-slate-600 hover:bg-green-50 hover:text-green-600 border border-slate-200'
                    }`}
                  >
                    <Zap className="w-3 h-3" /> ACCELERATE
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 mt-2 font-semibold text-center italic">
                💡 Interactive simulator — Control the car speed and watch the scene come alive
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
