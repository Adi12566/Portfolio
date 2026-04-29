import { motion } from 'motion/react';
import { Mail, Linkedin, Terminal, Bug, ShieldCheck, Gamepad2, ChevronRight, Activity } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

export default function QAPortfolio() {
  const data = RESUME_DATA.qaTester;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-[#00FF41] font-mono selection:bg-[#FF00FF] selection:text-white overflow-hidden relative">
      <ThreeBackground color="#00FF41" particleCount={1500} bgColor="black" />
      
      {/* HUD Scanner Animation Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        <motion.div 
          animate={{ y: [0, 1000] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="h-1 w-full bg-[#00FF41]/20 blur-sm"
        />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-[#00FF41]/30 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/" className="text-[10px] font-bold text-[#00FF41]/40 hover:text-[#FF00FF] transition-colors flex items-center gap-1 group">
               <span className="group-hover:-translate-x-1 transition-transform inline-block">{"<--"}</span> BACK
            </Link>
            <Link to="/" className="text-base md:text-xl font-bold tracking-tighter flex items-center gap-2 hover:text-white transition-colors">
              <Terminal size={18} className="md:w-5 md:h-5" />
              ADITYA_SYSTEMS_QA
            </Link>
          </div>
          <div className="flex gap-4 md:gap-8 text-[10px] tracking-[0.2em]">
            <a href="#anomalies" onClick={(e) => scrollToSection(e, 'anomalies')} className="hover:text-[#FF00FF] transition-colors">ANOMALIES</a>
            <a href="#expertise" onClick={(e) => scrollToSection(e, 'expertise')} className="hover:text-[#FF00FF] transition-colors">TECH_STACK</a>
            <a href="#terminal" onClick={(e) => scrollToSection(e, 'terminal')} className="hover:text-[#FF00FF] transition-colors">TERMINAL</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-40 md:pt-32 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Banner Hero */}
        <section className="mb-20 md:mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase leading-none mb-8">
               Stress <span className="text-white">Testing</span> Reality.
             </h1>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[#00FF41]/80">
               <div className="p-6 md:p-8 border border-[#00FF41]/30 bg-[#00FF41]/5">
                 <p className="text-sm leading-relaxed mb-6">
                    {data.profile}
                 </p>
                 <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs">
                    <div className="flex items-center gap-2">
                      <Activity size={12} className="animate-pulse" />
                      STATUS: ACTIVE
                    </div>
                    <div>SECTOR: GAMEPLAY_QA</div>
                 </div>
               </div>
               <div className="flex flex-col justify-end gap-2">
                  <div className="h-px w-full bg-[#00FF41]/30" />
                  <div className="flex justify-between items-center text-[10px]">
                    <span>AUTH_LEVEL: 01</span>
                    <span>ADITYA_V_v2.0.4</span>
                  </div>
               </div>
             </div>
          </motion.div>
        </section>

        {/* Anomalies / Findings */}
        <section id="anomalies" className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <Bug className="text-[#FF00FF]" />
            <h2 className="text-2xl font-bold uppercase tracking-widest text-[#FF00FF]">Identified_Anomalies</h2>
            <div className="h-px flex-1 bg-[#FF00FF]/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             {data.experience.map((exp: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-[#00FF41]/20 bg-black hover:bg-[#00FF41]/5 transition-all group"
                >
                  <div className="text-[10px] text-white opacity-40 mb-4 tracking-[0.3em]">REF_LOG_0{i+1}</div>
                  <h3 className="text-lg font-bold mb-6 text-white group-hover:text-[#FF00FF] transition-colors">{exp.title}</h3>
                  <ul className="space-y-4">
                    {exp.description.map((item: string, j: number) => (
                      <li key={j} className="text-xs leading-relaxed flex gap-3 lowercase">
                        <span className="text-[#FF00FF]">[!]</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
             ))}
          </div>
        </section>

        {/* Expertise Grid */}
        <section id="expertise" className="mb-20 md:mb-32">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#00FF41]/20 border border-[#00FF41]/20">
              {Object.entries(data.expertise).map(([category, items]: [string, any], i) => (
                 <div key={category} className="p-8 md:p-12 bg-black">
                   <h3 className="text-sm font-bold text-white uppercase tracking-[0.5em] mb-8 flex items-center gap-4">
                     <span className="text-[#FF00FF]">0{i+1}</span> {category}
                   </h3>
                   <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4">
                      {items.map((item: string) => (
                        <div key={item} className="flex items-center gap-3 text-xs opacity-60 hover:opacity-100 transition-opacity">
                          <div className="w-1 h-1 bg-[#00FF41]" />
                          {item}
                        </div>
                      ))}
                   </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Terminal Footer */}
        <section id="terminal" className="pb-32">
           <div className="p-6 md:p-12 border-2 border-[#FF00FF] bg-black relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-black px-4 text-[#FF00FF] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                [ Transmission_Channel ]
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                   <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-white">Initialize_Contact.</h2>
                   <p className="text-[10px] md:text-xs opacity-50 mb-8 max-w-sm">Ready for deployment in QA pipelines, functional testing, and security analysis. Secure channels active.</p>
                   <div className="space-y-4">
                      <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-4 text-xs group hover:text-white transition-colors">
                        <Mail className="text-[#FF00FF]" size={16} />
                        {RESUME_DATA.contact.email}
                      </a>
                      <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xs group hover:text-white transition-colors">
                        <Linkedin className="text-[#FF00FF]" size={16} />
                        LINKED_IN/ADITYA_V
                      </a>
                   </div>
                 </div>
                 <div className="hidden md:block">
                    <div className="text-[10px] space-y-1 opacity-20 select-none pointer-events-none">
                      <p>{">"} INITIALIZING SECURITY_PROTOCOLS...</p>
                      <p>{">"} SCANNING SECTOR_7A...</p>
                      <p>{">"} BUG_REPORT_GENERATED: [234_ANOMALIES_FOUND]</p>
                      <p>{">"} REPRO_STEPS: LOG_001_TO_LOG_012</p>
                      <p>{">"} HANDS_ON_HARDWARE: PS5 / XBOX_SX / PC_ULTRA</p>
                      <p>{">"} BYPASSING_LIMITS...</p>
                      <p>{">"} SUCCESS.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="p-8 border-t border-[#00FF41]/20 text-center text-[10px] tracking-[0.5em] uppercase opacity-30">
        System_Design_by_Aditya_V // [Build_v4.4.0]
      </footer>
    </div>
  );
}
