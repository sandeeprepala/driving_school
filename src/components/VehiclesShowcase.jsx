import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Settings, Info, Car, Bike } from 'lucide-react';

const categories = ['All', 'Hatchbacks', 'Sedans', 'SUVs', 'Scooters', 'Motorcycles'];

const vehicles = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    category: "Hatchbacks",
    transmission: "Manual",
    type: "Hatchback",
    safety: ["Dual Front Airbags", "ABS with EBD", "Dual Controls Equipped"],
    bodyColor: "#FBBF24",
    bodyColorDark: "#D97706",
    bodyColorLight: "#FDE68A",
    accent: "#92400E"
  },
  {
    id: 2,
    name: "Hyundai Aura",
    category: "Sedans",
    transmission: "Manual",
    type: "Sedan",
    safety: ["Dual Controls", "Rear Parking Sensors", "ABS with EBD"],
    bodyColor: "#3B82F6",
    bodyColorDark: "#1D4ED8",
    bodyColorLight: "#93C5FD",
    accent: "#1E3A8A"
  },
  {
    id: 3,
    name: "Honda City",
    category: "Sedans",
    transmission: "Automatic",
    type: "Premium Sedan",
    safety: ["6 Airbags", "LaneWatch Camera", "Dual Controls Active"],
    bodyColor: "#9CA3AF",
    bodyColorDark: "#4B5563",
    bodyColorLight: "#E5E7EB",
    accent: "#374151"
  },
  {
    id: 4,
    name: "Mahindra XUV300",
    category: "SUVs",
    transmission: "Manual",
    type: "Subcompact SUV",
    safety: ["5-Star Global NCAP", "All-Wheel Disc Brakes", "Dual Controls"],
    bodyColor: "#EF4444",
    bodyColorDark: "#B91C1C",
    bodyColorLight: "#FCA5A5",
    accent: "#7F1D1D"
  },
  {
    id: 5,
    name: "Honda Activa 6G",
    category: "Scooters",
    transmission: "Automatic",
    type: "Scooter",
    safety: ["Combi Brake System (CBS)", "Engine Cut-off Switch", "Tubeless Tyres"],
    bodyColor: "#EC4899",
    bodyColorDark: "#BE185D",
    bodyColorLight: "#F9A8D4",
    accent: "#831843"
  },
  {
    id: 6,
    name: "TVS Jupiter",
    category: "Scooters",
    transmission: "Automatic",
    type: "Scooter",
    safety: ["Synchronized Braking Technology", "LED Headlamp"],
    bodyColor: "#8B5CF6",
    bodyColorDark: "#6D28D9",
    bodyColorLight: "#C4B5FD",
    accent: "#4C1D95"
  },
  {
    id: 7,
    name: "Yamaha FZ-S FI",
    category: "Motorcycles",
    transmission: "Manual",
    type: "Street Motorcycle",
    safety: ["Single-Channel ABS", "Side Stand Cut-off", "Broad Radial Tyre"],
    bodyColor: "#10B981",
    bodyColorDark: "#059669",
    bodyColorLight: "#6EE7B7",
    accent: "#064E3B"
  },
  {
    id: 8,
    name: "Hero Splendor Plus",
    category: "Motorcycles",
    transmission: "Manual",
    type: "Commuter Motorcycle",
    safety: ["Integrated Braking System", "Highly Balanced Frame"],
    bodyColor: "#F97316",
    bodyColorDark: "#C2410C",
    bodyColorLight: "#FDBA74",
    accent: "#7C2D12"
  }
];

/* ═══════════════════════════════════════════════════════
   REALISTIC CAR SVG — Side-view with reflections, 
   gradients, detailed wheels, windows, and shadow
   ═══════════════════════════════════════════════════════ */
const RealisticCar = ({ bodyColor, bodyColorDark, bodyColorLight, accent, type, id }) => {
  const uid = `car-${id}`;
  const isSedan = type.includes('Sedan');
  const isSUV = type.includes('SUV');
  const bodyHeight = isSUV ? -4 : 0; // SUVs sit higher

  return (
    <svg viewBox="0 0 300 130" className="w-full h-36" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Body paint gradient */}
        <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bodyColorLight} />
          <stop offset="35%" stopColor={bodyColor} />
          <stop offset="80%" stopColor={bodyColorDark} />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
        {/* Window glass */}
        <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="40%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        {/* Body reflection horizontal */}
        <linearGradient id={`${uid}-reflect`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="25%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="75%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id={`${uid}-tire`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="55%" stopColor="#1F2937" />
          <stop offset="85%" stopColor="#111827" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id={`${uid}-rim`} cx="0.35" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#6B7280" />
        </radialGradient>
        {/* Chrome strip */}
        <linearGradient id={`${uid}-chrome`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9FAFB" />
          <stop offset="50%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        {/* Shadow */}
        <filter id={`${uid}-shadow`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="3" />
          <feComponentTransfer><feFuncA type="linear" slope="0.25" /></feComponentTransfer>
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="150" cy="118" rx="110" ry="8" fill="rgba(0,0,0,0.12)" filter={`url(#${uid}-shadow)`} />

      {/* === LOWER BODY (fenders + sill) === */}
      <path d={`
        M38,${72 + bodyHeight} 
        L262,${72 + bodyHeight} 
        C272,${72 + bodyHeight} 278,${76 + bodyHeight} 280,${82 + bodyHeight} 
        L282,${92 + bodyHeight} 
        C282,${96 + bodyHeight} 278,${100 + bodyHeight} 272,${100 + bodyHeight}
        L28,${100 + bodyHeight} 
        C22,${100 + bodyHeight} 18,${96 + bodyHeight} 18,${92 + bodyHeight} 
        L20,${82 + bodyHeight} 
        C22,${76 + bodyHeight} 28,${72 + bodyHeight} 38,${72 + bodyHeight} Z
      `} fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1.5" />

      {/* === CABIN / GREENHOUSE === */}
      {isSedan ? (
        /* Sedan - longer cabin with a trunk */
        <path d={`
          M70,${72 + bodyHeight} 
          L85,${36 + bodyHeight} 
          C88,${30 + bodyHeight} 95,${26 + bodyHeight} 105,${26 + bodyHeight}
          L195,${26 + bodyHeight}
          C205,${26 + bodyHeight} 212,${30 + bodyHeight} 215,${36 + bodyHeight}
          L235,${72 + bodyHeight} Z
        `} fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1.5" />
      ) : isSUV ? (
        /* SUV - taller, boxier cabin */
        <path d={`
          M68,${72 + bodyHeight} 
          L78,${30 + bodyHeight} 
          C80,${24 + bodyHeight} 86,${20 + bodyHeight} 95,${20 + bodyHeight}
          L200,${20 + bodyHeight}
          C208,${20 + bodyHeight} 214,${24 + bodyHeight} 216,${30 + bodyHeight}
          L232,${72 + bodyHeight} Z
        `} fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1.5" />
      ) : (
        /* Hatchback - compact roofline */
        <path d={`
          M75,${72 + bodyHeight} 
          L88,${35 + bodyHeight} 
          C91,${28 + bodyHeight} 98,${24 + bodyHeight} 108,${24 + bodyHeight}
          L190,${24 + bodyHeight}
          C198,${24 + bodyHeight} 204,${28 + bodyHeight} 207,${35 + bodyHeight}
          L228,${72 + bodyHeight} Z
        `} fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1.5" />
      )}

      {/* === WINDOWS === */}
      {isSedan ? (
        <>
          {/* Rear window */}
          <path d={`M78,${70 + bodyHeight} L90,${40 + bodyHeight} C92,${35 + bodyHeight} 96,${32 + bodyHeight} 104,${32 + bodyHeight} L145,${32 + bodyHeight} L145,${70 + bodyHeight} Z`} 
                fill={`url(#${uid}-glass)`} opacity="0.85" stroke={accent} strokeWidth="1" />
          {/* Front window */}
          <path d={`M150,${32 + bodyHeight} L192,${32 + bodyHeight} C198,${32 + bodyHeight} 204,${35 + bodyHeight} 208,${40 + bodyHeight} L226,${70 + bodyHeight} L150,${70 + bodyHeight} Z`} 
                fill={`url(#${uid}-glass)`} opacity="0.85" stroke={accent} strokeWidth="1" />
          {/* B-pillar */}
          <rect x="145" y={31 + bodyHeight} width="5" height={39} fill={bodyColorDark} rx="1" />
        </>
      ) : isSUV ? (
        <>
          <path d={`M76,${70 + bodyHeight} L83,${34 + bodyHeight} C85,${28 + bodyHeight} 90,${25 + bodyHeight} 97,${25 + bodyHeight} L140,${25 + bodyHeight} L140,${70 + bodyHeight} Z`}
                fill={`url(#${uid}-glass)`} opacity="0.85" stroke={accent} strokeWidth="1" />
          <path d={`M145,${25 + bodyHeight} L198,${25 + bodyHeight} C204,${25 + bodyHeight} 210,${28 + bodyHeight} 212,${34 + bodyHeight} L226,${70 + bodyHeight} L145,${70 + bodyHeight} Z`}
                fill={`url(#${uid}-glass)`} opacity="0.85" stroke={accent} strokeWidth="1" />
          <rect x="140" y={24 + bodyHeight} width="5" height={46} fill={bodyColorDark} rx="1" />
        </>
      ) : (
        <>
          <path d={`M82,${70 + bodyHeight} L93,${39 + bodyHeight} C95,${33 + bodyHeight} 100,${30 + bodyHeight} 108,${30 + bodyHeight} L142,${30 + bodyHeight} L142,${70 + bodyHeight} Z`}
                fill={`url(#${uid}-glass)`} opacity="0.85" stroke={accent} strokeWidth="1" />
          <path d={`M147,${30 + bodyHeight} L188,${30 + bodyHeight} C194,${30 + bodyHeight} 199,${33 + bodyHeight} 201,${39 + bodyHeight} L220,${70 + bodyHeight} L147,${70 + bodyHeight} Z`}
                fill={`url(#${uid}-glass)`} opacity="0.85" stroke={accent} strokeWidth="1" />
          <rect x="142" y={29 + bodyHeight} width="5" height={41} fill={bodyColorDark} rx="1" />
        </>
      )}

      {/* === WINDOW GLARE REFLECTIONS === */}
      <path d={`M95,${36 + bodyHeight} L100,${32 + bodyHeight} L103,${34 + bodyHeight} L98,${40 + bodyHeight} Z`} fill="white" opacity="0.45" />
      <path d={`M160,${34 + bodyHeight} L168,${30 + bodyHeight} L171,${32 + bodyHeight} L163,${38 + bodyHeight} Z`} fill="white" opacity="0.35" />

      {/* === BODY REFLECTION LINE === */}
      <path d={`M30,${82 + bodyHeight} L270,${82 + bodyHeight} L272,${86 + bodyHeight} L28,${86 + bodyHeight} Z`} fill={`url(#${uid}-reflect)`} />

      {/* === CHROME STRIP (beltline) === */}
      <line x1="40" y1={72 + bodyHeight} x2="260" y2={72 + bodyHeight} stroke={`url(#${uid}-chrome)`} strokeWidth="2.5" />

      {/* === DOOR LINES === */}
      <line x1="145" y1={72 + bodyHeight} x2="143" y2={98 + bodyHeight} stroke={accent} strokeWidth="0.8" opacity="0.4" />
      <line x1="195" y1={72 + bodyHeight} x2="193" y2={98 + bodyHeight} stroke={accent} strokeWidth="0.8" opacity="0.3" />

      {/* === DOOR HANDLES === */}
      <rect x="155" y={80 + bodyHeight} width="12" height="3.5" rx="1.5" fill={`url(#${uid}-chrome)`} stroke={accent} strokeWidth="0.5" opacity="0.7" />
      <rect x="110" y={80 + bodyHeight} width="12" height="3.5" rx="1.5" fill={`url(#${uid}-chrome)`} stroke={accent} strokeWidth="0.5" opacity="0.7" />

      {/* === HEADLIGHT (front) === */}
      <path d={`M268,${74 + bodyHeight} L280,${78 + bodyHeight} L282,${88 + bodyHeight} L270,${92 + bodyHeight} Z`} fill="#FEF3C7" stroke={accent} strokeWidth="1" />
      <path d={`M270,${77 + bodyHeight} L278,${80 + bodyHeight} L279,${86 + bodyHeight} L271,${89 + bodyHeight} Z`} fill="#FDE68A" opacity="0.9" />
      {/* Headlight glow */}
      <circle cx="276" cy={83 + bodyHeight} r="5" fill="#FEF08A" opacity="0.2" style={{ filter: 'blur(2px)' }} />

      {/* === TAIL LIGHT (rear) === */}
      <path d={`M30,${74 + bodyHeight} L20,${78 + bodyHeight} L18,${88 + bodyHeight} L28,${92 + bodyHeight} Z`} fill="#FCA5A5" stroke={accent} strokeWidth="1" />
      <path d={`M28,${77 + bodyHeight} L22,${80 + bodyHeight} L21,${86 + bodyHeight} L27,${89 + bodyHeight} Z`} fill="#EF4444" opacity="0.85" />

      {/* === FRONT GRILL === */}
      <rect x="270" y={82 + bodyHeight} width="10" height="8" rx="1.5" fill="#1F2937" stroke={accent} strokeWidth="0.8" />
      {[0,1,2,3].map(i => (
        <line key={i} x1={272 + i * 2.5} y1={83 + bodyHeight} x2={272 + i * 2.5} y2={89 + bodyHeight} stroke="#374151" strokeWidth="0.6" />
      ))}

      {/* === SIDE MIRROR === */}
      <path d={`M230,${54 + bodyHeight} L238,${52 + bodyHeight} L240,${58 + bodyHeight} L232,${60 + bodyHeight} Z`} fill={bodyColorDark} stroke={accent} strokeWidth="0.8" />

      {/* === L-PLATE ON ROOF === */}
      <rect x="138" y={18 + bodyHeight} width="16" height="12" fill="white" stroke="#1E293B" strokeWidth="1.2" rx="1.5" />
      <text x="146" y={27 + bodyHeight} textAnchor="middle" fontSize="9" fontWeight="900" fill="#DC2626" fontFamily="Impact, Arial Black, sans-serif">L</text>

      {/* === "DRIVING SCHOOL" TEXT === */}
      <text x="148" y={68 + bodyHeight} textAnchor="middle" fontSize="5" fontWeight="800" fill="white" fontFamily="Arial, sans-serif" letterSpacing="0.8" opacity="0.7">DRIVING SCHOOL</text>

      {/* === LICENSE PLATE === */}
      <rect x="262" y={92 + bodyHeight} width="22" height="7" rx="1" fill="#FACC15" stroke="#92400E" strokeWidth="0.8" />
      <text x="273" y={97.5 + bodyHeight} textAnchor="middle" fontSize="4" fontWeight="900" fill="#1E293B" fontFamily="Courier, monospace">TS 09</text>

      {/* === REAR WHEEL === */}
      <g>
        <circle cx="75" cy={104 + bodyHeight} r="18" fill={`url(#${uid}-tire)`} stroke="#0a0a0a" strokeWidth="2" />
        {/* Tire sidewall detail */}
        <circle cx="75" cy={104 + bodyHeight} r="15.5" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="2.5,2" />
        {/* Rim */}
        <circle cx="75" cy={104 + bodyHeight} r="10" fill={`url(#${uid}-rim)`} stroke="#9CA3AF" strokeWidth="0.8" />
        {/* Spokes */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <line key={i} 
            x1="75" y1={104 + bodyHeight} 
            x2={75 + 8.5 * Math.cos(angle * Math.PI / 180)} 
            y2={104 + bodyHeight + 8.5 * Math.sin(angle * Math.PI / 180)} 
            stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
        ))}
        {/* Center cap */}
        <circle cx="75" cy={104 + bodyHeight} r="3" fill="#4B5563" stroke="#9CA3AF" strokeWidth="0.6" />
        <circle cx="75" cy={104 + bodyHeight} r="1" fill="#9CA3AF" />
      </g>

      {/* === FRONT WHEEL === */}
      <g>
        <circle cx="225" cy={104 + bodyHeight} r="18" fill={`url(#${uid}-tire)`} stroke="#0a0a0a" strokeWidth="2" />
        <circle cx="225" cy={104 + bodyHeight} r="15.5" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="2.5,2" />
        <circle cx="225" cy={104 + bodyHeight} r="10" fill={`url(#${uid}-rim)`} stroke="#9CA3AF" strokeWidth="0.8" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <line key={i}
            x1="225" y1={104 + bodyHeight}
            x2={225 + 8.5 * Math.cos(angle * Math.PI / 180)}
            y2={104 + bodyHeight + 8.5 * Math.sin(angle * Math.PI / 180)}
            stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
        ))}
        <circle cx="225" cy={104 + bodyHeight} r="3" fill="#4B5563" stroke="#9CA3AF" strokeWidth="0.6" />
        <circle cx="225" cy={104 + bodyHeight} r="1" fill="#9CA3AF" />
      </g>

      {/* === GROUND LINE === */}
      <line x1="30" y1={122 + bodyHeight} x2="270" y2={122 + bodyHeight} stroke="#E2E8F0" strokeWidth="1" opacity="0.5" />
    </svg>
  );
};


/* ═══════════════════════════════════════════════════════
   REALISTIC SCOOTER SVG
   ═══════════════════════════════════════════════════════ */
const RealisticScooter = ({ bodyColor, bodyColorDark, bodyColorLight, accent, id }) => {
  const uid = `scooter-${id}`;
  return (
    <svg viewBox="0 0 260 150" className="w-full h-36" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bodyColorLight} />
          <stop offset="40%" stopColor={bodyColor} />
          <stop offset="100%" stopColor={bodyColorDark} />
        </linearGradient>
        <radialGradient id={`${uid}-tire`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="60%" stopColor="#1F2937" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id={`${uid}-rim`} cx="0.35" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="60%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#6B7280" />
        </radialGradient>
        <linearGradient id={`${uid}-chrome`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <filter id={`${uid}-shadow`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="3" />
          <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="130" cy="136" rx="80" ry="6" fill="rgba(0,0,0,0.1)" filter={`url(#${uid}-shadow)`} />

      {/* === REAR WHEEL === */}
      <g>
        <circle cx="60" cy="118" r="20" fill={`url(#${uid}-tire)`} stroke="#0a0a0a" strokeWidth="2" />
        <circle cx="60" cy="118" r="17" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="2,2" />
        <circle cx="60" cy="118" r="11" fill={`url(#${uid}-rim)`} stroke="#9CA3AF" strokeWidth="0.6" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <line key={i} x1="60" y1="118" x2={60 + 9 * Math.cos(angle * Math.PI / 180)} y2={118 + 9 * Math.sin(angle * Math.PI / 180)} stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
        ))}
        <circle cx="60" cy="118" r="3" fill="#4B5563" />
      </g>

      {/* === FRONT WHEEL === */}
      <g>
        <circle cx="200" cy="118" r="20" fill={`url(#${uid}-tire)`} stroke="#0a0a0a" strokeWidth="2" />
        <circle cx="200" cy="118" r="17" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="2,2" />
        <circle cx="200" cy="118" r="11" fill={`url(#${uid}-rim)`} stroke="#9CA3AF" strokeWidth="0.6" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <line key={i} x1="200" y1="118" x2={200 + 9 * Math.cos(angle * Math.PI / 180)} y2={118 + 9 * Math.sin(angle * Math.PI / 180)} stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
        ))}
        <circle cx="200" cy="118" r="3" fill="#4B5563" />
      </g>

      {/* === FRAME / CHASSIS === */}
      {/* Main tube from rear axle to steering column */}
      <path d="M60,118 L72,105 L120,92 L165,55" fill="none" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
      {/* Rear fork */}
      <path d="M60,118 L75,110" fill="none" stroke="#4B5563" strokeWidth="5" strokeLinecap="round" />
      {/* Front fork */}
      <path d="M185,60 L200,118" fill="none" stroke={`url(#${uid}-chrome)`} strokeWidth="5" strokeLinecap="round" />
      <path d="M182,60 L197,118" fill="none" stroke="#9CA3AF" strokeWidth="1" opacity="0.3" />

      {/* === BODY PANELS === */}
      {/* Main body / leg shield */}
      <path d={`
        M85,100 
        C85,88 90,80 105,75 
        L155,60 
        C162,57 168,55 175,55 
        L185,55 
        C188,55 190,57 190,60 
        L188,68 
        C186,72 180,75 175,75 
        L110,90 
        C100,92 95,96 93,100 
        Z
      `} fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1.2" />

      {/* Floor board */}
      <path d="M80,100 L170,82 L172,92 L82,108 Z" fill={bodyColorDark} stroke={accent} strokeWidth="0.8" opacity="0.85" />

      {/* Rear body panel */}
      <path d="M50,108 L80,100 L82,112 L58,118 C54,118 50,115 50,108 Z" fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1" />

      {/* Seat */}
      <path d="M72,94 C72,88 78,84 88,82 L140,72 C148,70 152,72 152,76 L150,82 C148,86 140,88 130,90 L80,98 C74,100 72,98 72,94 Z" fill="#1F2937" stroke="#111827" strokeWidth="1.5" />
      {/* Seat stitch line */}
      <path d="M82,90 L135,78" fill="none" stroke="#374151" strokeWidth="0.8" strokeDasharray="3,3" />

      {/* === HANDLEBAR === */}
      <line x1="172" y1="42" x2="192" y2="42" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" />
      {/* Grip left */}
      <rect x="168" y="39" width="8" height="6" rx="2" fill="#1F2937" stroke="#374151" strokeWidth="0.8" />
      {/* Grip right */}
      <rect x="190" y="39" width="8" height="6" rx="2" fill="#1F2937" stroke="#374151" strokeWidth="0.8" />
      {/* Steering column */}
      <line x1="182" y1="42" x2="185" y2="58" stroke={`url(#${uid}-chrome)`} strokeWidth="4" strokeLinecap="round" />

      {/* === HEADLIGHT === */}
      <ellipse cx="190" cy="62" rx="7" ry="8" fill="#FEF3C7" stroke={accent} strokeWidth="1.2" />
      <ellipse cx="190" cy="62" rx="4.5" ry="5.5" fill="#FDE68A" opacity="0.85" />
      <circle cx="190" cy="62" r="5" fill="#FEF08A" opacity="0.15" style={{ filter: 'blur(3px)' }} />

      {/* === TAIL LIGHT === */}
      <rect x="45" y="106" width="8" height="5" rx="1.5" fill="#FCA5A5" stroke="#DC2626" strokeWidth="0.8" />
      <rect x="46.5" y="107" width="5" height="3" rx="1" fill="#EF4444" opacity="0.9" />

      {/* === REAR VIEW MIRRORS === */}
      <line x1="172" y1="42" x2="165" y2="36" stroke="#6B7280" strokeWidth="1.5" />
      <ellipse cx="163" cy="34" rx="5" ry="3.5" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.8" />
      <line x1="194" y1="42" x2="201" y2="36" stroke="#6B7280" strokeWidth="1.5" />
      <ellipse cx="203" cy="34" rx="5" ry="3.5" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.8" />

      {/* === INSTRUMENT CLUSTER === */}
      <rect x="178" y="46" width="10" height="7" rx="2" fill="#1F2937" stroke="#374151" strokeWidth="0.8" />
      <circle cx="183" cy="49.5" r="2" fill="#10B981" opacity="0.7" />

      {/* === FRONT FENDER / MUDGUARD === */}
      <path d="M188,100 C188,92 194,88 200,88 C206,88 212,92 212,100" fill="none" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />

      {/* === REAR FENDER === */}
      <path d="M48,100 C48,95 54,92 60,92 C66,92 72,95 72,100" fill="none" stroke={bodyColorDark} strokeWidth="3.5" strokeLinecap="round" />

      {/* === EXHAUST === */}
      <path d="M52,120 L38,122 C36,122 34,121 34,119 L35,117 C35,115 37,114 39,114 L55,114" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" />

      {/* === NUMBER PLATE === */}
      <rect x="42" y="100" width="16" height="5" rx="1" fill="#FACC15" stroke="#92400E" strokeWidth="0.6" />
      <text x="50" y="104" textAnchor="middle" fontSize="3.5" fontWeight="900" fill="#1E293B" fontFamily="Courier, monospace">TS 09</text>

      {/* Ground line */}
      <line x1="30" y1="138" x2="230" y2="138" stroke="#E2E8F0" strokeWidth="1" opacity="0.4" />
    </svg>
  );
};


/* ═══════════════════════════════════════════════════════
   REALISTIC MOTORCYCLE SVG
   ═══════════════════════════════════════════════════════ */
const RealisticMotorcycle = ({ bodyColor, bodyColorDark, bodyColorLight, accent, id }) => {
  const uid = `bike-${id}`;
  return (
    <svg viewBox="0 0 280 150" className="w-full h-36" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bodyColorLight} />
          <stop offset="40%" stopColor={bodyColor} />
          <stop offset="100%" stopColor={bodyColorDark} />
        </linearGradient>
        <radialGradient id={`${uid}-tire`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="60%" stopColor="#1F2937" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id={`${uid}-rim`} cx="0.35" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="60%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#6B7280" />
        </radialGradient>
        <linearGradient id={`${uid}-chrome`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        <filter id={`${uid}-shadow`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="3" />
          <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="140" cy="136" rx="85" ry="6" fill="rgba(0,0,0,0.1)" filter={`url(#${uid}-shadow)`} />

      {/* === REAR WHEEL === */}
      <g>
        <circle cx="65" cy="115" r="22" fill={`url(#${uid}-tire)`} stroke="#0a0a0a" strokeWidth="2.5" />
        <circle cx="65" cy="115" r="18.5" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="3,2" />
        <circle cx="65" cy="115" r="12" fill={`url(#${uid}-rim)`} stroke="#9CA3AF" strokeWidth="0.6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line key={i} x1="65" y1="115" x2={65 + 10 * Math.cos(angle * Math.PI / 180)} y2={115 + 10 * Math.sin(angle * Math.PI / 180)} stroke="#6B7280" strokeWidth="1.2" />
        ))}
        <circle cx="65" cy="115" r="3.5" fill="#4B5563" />
        {/* Rear sprocket */}
        <circle cx="65" cy="115" r="7" fill="none" stroke="#4B5563" strokeWidth="1" strokeDasharray="1.5,1.5" />
      </g>

      {/* === FRONT WHEEL === */}
      <g>
        <circle cx="215" cy="115" r="22" fill={`url(#${uid}-tire)`} stroke="#0a0a0a" strokeWidth="2.5" />
        <circle cx="215" cy="115" r="18.5" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="3,2" />
        <circle cx="215" cy="115" r="12" fill={`url(#${uid}-rim)`} stroke="#9CA3AF" strokeWidth="0.6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line key={i} x1="215" y1="115" x2={215 + 10 * Math.cos(angle * Math.PI / 180)} y2={115 + 10 * Math.sin(angle * Math.PI / 180)} stroke="#6B7280" strokeWidth="1.2" />
        ))}
        <circle cx="215" cy="115" r="3.5" fill="#4B5563" />
        {/* Disc brake */}
        <circle cx="215" cy="115" r="14" fill="none" stroke="#D1D5DB" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* === CHAIN === */}
      <path d="M72,118 L95,95 L100,100 L78,120" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="2,1" />

      {/* === SWINGARM (rear) === */}
      <path d="M65,115 L105,90" fill="none" stroke="#4B5563" strokeWidth="5" strokeLinecap="round" />

      {/* === FRAME === */}
      <path d="M105,88 L140,55 L185,50" fill="none" stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M105,88 L135,75 L170,60" fill="none" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />

      {/* === FRONT FORK === */}
      <path d="M195,52 L215,115" fill="none" stroke={`url(#${uid}-chrome)`} strokeWidth="5" strokeLinecap="round" />
      <path d="M192,52 L212,115" fill="none" stroke="#D1D5DB" strokeWidth="1" opacity="0.3" />

      {/* === ENGINE BLOCK === */}
      <path d="M95,88 L125,88 L130,105 L90,105 Z" fill="#374151" stroke="#1F2937" strokeWidth="1.5" />
      <path d="M100,92 L120,92 L122,100 L98,100 Z" fill="#4B5563" stroke="#374151" strokeWidth="0.8" />
      {/* Engine fins */}
      {[0,1,2,3].map(i => (
        <line key={i} x1={100 + i * 6} y1="88" x2={98 + i * 6} y2="105" stroke="#1F2937" strokeWidth="0.8" />
      ))}
      {/* Exhaust pipe */}
      <path d="M92,100 L85,108 L60,120 C56,122 52,120 52,116 L55,112 C58,108 65,108 72,106 L90,100" fill="none" stroke={`url(#${uid}-chrome)`} strokeWidth="4" strokeLinecap="round" />

      {/* === FUEL TANK === */}
      <path d={`
        M120,52 
        C118,48 122,42 130,40 
        L160,38 
        C170,37 178,40 180,46 
        L182,52 
        C183,56 178,60 170,62 
        L135,64 
        C125,66 120,60 120,52 Z
      `} fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1.5" />
      {/* Tank logo/stripe */}
      <path d="M132,46 L168,42 L170,48 L134,52 Z" fill="white" opacity="0.2" />
      <text x="152" y="52" textAnchor="middle" fontSize="5" fontWeight="800" fill="white" fontFamily="Arial, sans-serif" opacity="0.6">FZ</text>

      {/* === SEAT === */}
      <path d="M95,80 C95,72 105,66 120,64 L145,62 C155,60 162,62 162,68 L160,76 C158,82 148,86 138,87 L108,90 C98,92 95,88 95,80 Z" fill="#1F2937" stroke="#111827" strokeWidth="1.5" />
      <path d="M105,82 L142,72" fill="none" stroke="#374151" strokeWidth="0.6" strokeDasharray="3,3" />

      {/* === TAIL SECTION === */}
      <path d="M88,82 L75,88 L72,92 L82,90 L95,82 Z" fill={`url(#${uid}-body)`} stroke={accent} strokeWidth="1" />
      {/* Tail light */}
      <rect x="72" y="88" width="6" height="4" rx="1" fill="#EF4444" stroke="#DC2626" strokeWidth="0.6" />

      {/* === HEADLIGHT === */}
      <ellipse cx="202" cy="54" rx="8" ry="9" fill="#FEF3C7" stroke={accent} strokeWidth="1.2" />
      <ellipse cx="202" cy="54" rx="5" ry="6" fill="#FDE68A" opacity="0.85" />
      <circle cx="202" cy="54" r="6" fill="#FEF08A" opacity="0.15" style={{ filter: 'blur(3px)' }} />

      {/* === HANDLEBAR === */}
      <line x1="178" y1="40" x2="205" y2="40" stroke="#6B7280" strokeWidth="3.5" strokeLinecap="round" />
      <rect x="174" y="37.5" width="7" height="5" rx="2" fill="#1F2937" />
      <rect x="203" y="37.5" width="7" height="5" rx="2" fill="#1F2937" />

      {/* === INSTRUMENT CLUSTER === */}
      <rect x="185" y="44" width="10" height="6" rx="2" fill="#1F2937" stroke="#374151" strokeWidth="0.6" />
      <circle cx="190" cy="47" r="1.5" fill="#10B981" opacity="0.7" />

      {/* === FRONT FENDER === */}
      <path d="M202,96 C202,90 208,86 215,86 C222,86 228,90 228,96" fill="none" stroke={bodyColor} strokeWidth="3.5" strokeLinecap="round" />

      {/* === REAR FENDER === */}
      <path d="M52,96 C52,92 58,88 65,88 C72,88 78,92 78,96" fill="none" stroke={bodyColorDark} strokeWidth="3" strokeLinecap="round" />

      {/* === REAR VIEW MIRRORS === */}
      <line x1="178" y1="40" x2="172" y2="34" stroke="#6B7280" strokeWidth="1.2" />
      <ellipse cx="170" cy="32" rx="4.5" ry="3" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.6" />

      {/* === NUMBER PLATE === */}
      <rect x="73" y="92" width="14" height="4.5" rx="0.8" fill="#FACC15" stroke="#92400E" strokeWidth="0.5" />
      <text x="80" y="95.5" textAnchor="middle" fontSize="3" fontWeight="900" fill="#1E293B" fontFamily="Courier, monospace">TS 09</text>

      {/* Ground line */}
      <line x1="30" y1="138" x2="250" y2="138" stroke="#E2E8F0" strokeWidth="1" opacity="0.4" />
    </svg>
  );
};


/* ═══════════════════════════════════════════════════════
   SELECT THE RIGHT ILLUSTRATION
   ═══════════════════════════════════════════════════════ */
const VehicleIllustration = ({ vehicle }) => {
  const props = {
    bodyColor: vehicle.bodyColor,
    bodyColorDark: vehicle.bodyColorDark,
    bodyColorLight: vehicle.bodyColorLight,
    accent: vehicle.accent,
    id: vehicle.id,
  };

  if (vehicle.type === 'Scooter') {
    return <RealisticScooter {...props} />;
  }
  if (vehicle.type.includes('Motorcycle')) {
    return <RealisticMotorcycle {...props} />;
  }
  return <RealisticCar {...props} type={vehicle.type} />;
};


/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
const VehiclesShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVehicles = activeCategory === 'All'
    ? vehicles
    : vehicles.filter(v => v.category === activeCategory);

  return (
    <section id="vehicles" className="py-12 md:py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-road-pattern opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Our Training Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Explore Training Vehicles Showcase
          </h2>
          <p className="text-slate-500 text-lg">
            Practice driving on dual-controlled, modern hatchbacks, sedans, SUVs, and scooters ensuring 100% safety.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-2 pb-4 lg:pb-0 mb-8 lg:mb-12 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-500/10'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <motion.div
          layout
          className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-6 pb-6 lg:pb-0 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={vehicle.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group w-[280px] xs:w-[300px] lg:w-auto shrink-0 snap-align-center"
              >
                {/* Vehicle Header / Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-full text-[10px] uppercase">
                    {vehicle.type}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full uppercase">
                    <Settings className="w-3.5 h-3.5" />
                    {vehicle.transmission}
                  </span>
                </div>

                {/* Realistic Vehicle Illustration */}
                <div className="bg-gradient-to-b from-slate-50 to-slate-100/50 rounded-2xl p-3 flex items-center justify-center mb-6 border border-slate-100 shadow-inner group-hover:scale-[1.03] transition-transform duration-500">
                  <VehicleIllustration vehicle={vehicle} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-4">{vehicle.name}</h3>

                {/* Safety Features */}
                <div className="border-t border-slate-100 pt-4 flex-grow">
                  <div className="flex items-center gap-1.5 text-xs text-brand-blue font-bold uppercase mb-3">
                    <Shield className="w-4 h-4" />
                    <span>Safety Specs</span>
                  </div>
                  <ul className="space-y-1.5">
                    {vehicle.safety.map((safe, idx) => (
                      <li key={idx} className="text-xs text-slate-500 flex items-center gap-1.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {safe}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-6 text-center text-xs font-bold text-slate-700 bg-slate-50 py-2.5 rounded-full hover:bg-brand-blue hover:text-white border border-slate-200 hover:border-brand-blue transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Info className="w-3.5 h-3.5" /> Book Vehicle For Training
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default VehiclesShowcase;
