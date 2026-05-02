import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight, BookOpen, PenTool, Music } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

const Serif = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("font-serif", className)}>{children}</span>
);

export default function ContentPortfolio() {
  const data = RESUME_DATA.contentWriting;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-[#2C2C2C] font-sans selection:bg-[#E2DCC8] relative overflow-hidden">
      <ThreeBackground color="#2c2c2c" particleCount={400} bgColor="#FDFCF8" />
      
      {/* Editorial Header */}
      <nav className="p-4 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 border-b border-[#E2DCC8]">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8A8A8A] hover:text-[#2C2C2C] transition-colors flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back
          </Link>
          <div>
            <Link to="/" className="text-sm tracking-[0.4em] uppercase font-semibold">Aditya V</Link>
            <div className="text-[10px] uppercase tracking-widest text-[#8A8A8A] mt-1 italic">Content Writer & Storyteller</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-12 text-[10px] uppercase tracking-[0.2em] font-bold">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#8A8A8A] transition-colors">About</a>
          <a href="#samples" onClick={(e) => scrollToSection(e, 'samples')} className="hover:text-[#8A8A8A] transition-colors">Samples</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#8A8A8A] transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Massive Editorial Hero */}
        <section id="about" className="py-16 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-8xl leading-[0.9] font-serif tracking-tighter mb-12 italic">
              Crafting stories in the <Serif>Age of Intelligence.</Serif>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <p className="text-lg md:text-xl leading-relaxed text-[#4A4A4A] font-light italic">
                {data.profile}
              </p>
              <div className="flex flex-col gap-8">
                 {data.skills.map((skill: any, i) => (
                   <div key={i}>
                     <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A8A8A] mb-3">{skill.category}</h3>
                     <div className="flex flex-wrap gap-x-6 gap-y-2">
                       {skill.items.map((item: string) => (
                         <span key={item} className="text-sm font-serif italic text-[#2C2C2C]">{item}</span>
                       ))}
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Work Samples Grid */}
        <section id="samples" className="py-16 md:py-32">
          <div className="flex items-baseline justify-between mb-8 md:mb-16 border-b border-[#E2DCC8] pb-4">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold">Curated Work</h2>
            <span className="text-[10px] italic text-[#8A8A8A] hidden sm:inline">Selected Writing & Lyrics</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.workSamples.map((sample: any, i) => (
              <motion.a
                key={i}
                href={sample.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="group p-6 md:p-8 bg-white border border-[#E2DCC8] rounded-[2rem] hover:shadow-2xl hover:shadow-[#E2DCC8]/30 transition-all flex flex-col justify-between h-auto min-h-[300px] md:h-80"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full border border-[#E2DCC8] flex items-center justify-center text-[#2C2C2C] group-hover:bg-[#2C2C2C] group-hover:text-white transition-all">
                    {sample.type === 'Sample' ? (sample.title.toLowerCase().includes('lyrics') ? <Music size={20} /> : <PenTool size={20} />) : <BookOpen size={20} />}
                  </div>
                  <ArrowUpRight size={20} className="text-[#E2DCC8] group-hover:text-[#2C2C2C] transition-colors" />
                </div>
                
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#8A8A8A] mb-2">{sample.platform} / {sample.type}</div>
                  <h3 className="text-3xl font-serif italic leading-tight group-hover:tracking-tight transition-all">{sample.title}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="py-16 md:py-32 bg-[#2C2C2C] text-[#FDFCF8]">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Let's collaborate.</h2>
            <p className="text-[#8A8A8A] uppercase tracking-[0.2em] text-[10px]">Open for creative writing & content direction.</p>
          </div>
          <div className="flex gap-8">
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-[#4A4A4A] flex items-center justify-center group-hover:bg-[#FDFCF8] group-hover:text-[#2C2C2C] transition-all">
                <Mail size={20} />
              </div>
              <span className="text-[9px] uppercase tracking-widest font-bold">Email</span>
            </a>
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full border border-[#4A4A4A] flex items-center justify-center group-hover:bg-[#FDFCF8] group-hover:text-[#2C2C2C] transition-all">
                <Linkedin size={20} />
              </div>
              <span className="text-[9px] uppercase tracking-widest font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-8 mt-32 pt-8 border-t border-[#4A4A4A] text-center text-[9px] uppercase tracking-[0.4em] opacity-40">
          Aditya V &mdash; Storyteller &mdash; 2025
        </div>
      </footer>
    </div>
  );
}
