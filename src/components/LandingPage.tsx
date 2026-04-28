import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, PenTool, Gamepad2, ArrowRight, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import MainMenuBackground from './MainMenuBackground';
import { RESUME_DATA } from '../constants';

const PORTFOLIOS = [
  {
    path: '/gen-ai',
    title: 'GEN_AI // ML',
    subtitle: 'INTELLIGENT_SYSTEMS',
    icon: <BrainCircuit size={40} />,
    color: '#10b981', // emerald-500
    bgColor: 'rgba(16, 185, 129, 0.05)',
    tag: 'SECTOR_01'
  },
  {
    path: '/content',
    title: 'CONTENT // RESEARCH',
    subtitle: 'NARRATIVE_DESIGN',
    icon: <PenTool size={40} />,
    color: '#2c2c2c', // charcoal
    bgColor: '#fdfcf8', // off-white
    tag: 'SECTOR_02'
  },
  {
    path: '/qa',
    title: 'QA // TESTING',
    subtitle: 'CHAOS_ENGINEERING',
    icon: <Gamepad2 size={40} />,
    color: '#ec4899', // pink-500
    bgColor: 'rgba(236, 72, 153, 0.05)',
    tag: 'SECTOR_03'
  }
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Ensure state is null on entry
    setHoveredIndex(null);
  }, []);

  const activeBg = hoveredIndex === 1 ? '#fdfcf8' : 'black';
  const isDarkContent = hoveredIndex === 1;

  return (
    <div 
      className="min-h-screen transition-colors duration-700 selection:bg-white/20 font-mono overflow-hidden flex flex-col relative"
      style={{ backgroundColor: activeBg }}
    >
      {/* 3D Layer */}
      <div className={cn("absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none", isDarkContent ? "opacity-20 grayscale" : "opacity-100")}>
        <MainMenuBackground accentColor={hoveredIndex !== null ? PORTFOLIOS[hoveredIndex].color : '#334155'} />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex-1 flex flex-col" style={{ color: isDarkContent ? '#2c2c2c' : 'white' }}>
        <nav className="p-8 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">
              {RESUME_DATA.name}
            </h1>
            <div className="text-[10px] opacity-40 tracking-[0.4em] mt-1">ACCESS_GRANTED</div>
          </div>
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`}
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest px-4 py-2 border transition-all flex items-center gap-2",
              isDarkContent ? "border-[#2c2c2c]/20 hover:bg-[#2c2c2c] hover:text-white" : "border-white/20 hover:bg-white hover:text-black"
            )}
          >
            <Mail size={12} />
            Contact
          </a>
        </nav>

        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PORTFOLIOS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => navigate(item.path)}
                  className={cn(
                    "group relative p-12 border transition-all duration-500 cursor-pointer overflow-hidden",
                    hoveredIndex === i 
                      ? isDarkContent ? "border-[#2c2c2c] scale-[1.02] bg-black/5" : "border-opacity-100 scale-[1.02] bg-white/5" 
                      : isDarkContent ? "border-[#2c2c2c]/10 opacity-40 grayscale" : "border-white/10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100"
                  )}
                  style={{ 
                    borderColor: hoveredIndex === i ? item.color : 'transparent',
                    boxShadow: hoveredIndex === i && !isDarkContent ? `0 0 40px ${item.color}20` : 'none',
                  }}
                >
                  <div className="flex flex-col h-full items-start">
                    <div className="mb-12 transition-all duration-500 group-hover:scale-110" style={{ color: hoveredIndex === i ? item.color : isDarkContent ? '#2c2c2c' : '#fff' }}>
                      {item.icon}
                    </div>
                    
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-4">{item.tag}</span>
                    <h2 className="text-2xl font-black mb-2 tracking-tight transition-colors" style={{ color: hoveredIndex === i ? item.color : isDarkContent ? '#2c2c2c' : '#fff' }}>
                      {item.title}
                    </h2>
                    <p className="text-[10px] font-bold tracking-widest opacity-60 mb-12">{item.subtitle}</p>
                    
                    <div className={cn(
                      "mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500 translate-y-4 group-hover:translate-y-0",
                      hoveredIndex === i ? "opacity-100" : "opacity-0"
                    )} style={{ color: item.color }}>
                      OPEN_SECTOR <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer Layer */}
      <footer className={cn(
        "relative z-10 p-6 border-t transition-colors duration-700 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em]",
        isDarkContent ? "bg-[#fdfcf8] border-[#2c2c2c]/10 text-[#2c2c2c]/60" : "bg-black border-white/10 text-white"
      )}>
        <div className="flex gap-6">
          <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
          <span className="opacity-20">//</span>
          <span>{RESUME_DATA.contact.location}</span>
        </div>
        <div className="opacity-20 tracking-[0.6em]">ADITYA_V // 2025 // [BUILD_VERSION_4.2]</div>
      </footer>

      <style>{`
        @keyframes scanline {
          from { transform: translateY(-100%); }
          to { transform: translateY(1000%); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
