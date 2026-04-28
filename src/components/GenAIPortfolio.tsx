import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, ChevronRight, Cpu, Code2, BrainCircuit, Terminal } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import { RESUME_DATA } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-20 px-6 max-w-6xl mx-auto", className)}>
    {children}
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-12 flex items-center gap-3 text-emerald-400"
  >
    <div className="h-px w-12 bg-emerald-500/50" />
    {children}
  </motion.h2>
);

export default function GenAIPortfolio() {
  const data = RESUME_DATA.genAI;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen text-slate-200 selection:bg-emerald-500/30">
      <ThreeBackground bgColor="#020617" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-mono font-bold text-emerald-400 tracking-tighter text-xl">
            ADITYA.V
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-[10px]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <Section id="about" className="min-h-screen flex flex-col justify-center pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-emerald-400 mb-4 uppercase tracking-[0.3em] text-xs">AI Specialist / Systems QA</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">{RESUME_DATA.name}.</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight">I build intelligent systems.</h2>
            <p className="max-w-xl text-slate-400 text-lg leading-relaxed mb-12">{data.profile}</p>
            <div className="flex gap-4">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="px-8 py-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded-md font-medium hover:bg-emerald-500/20 transition-all"
              >
                Check out my work
              </a>
            </div>
          </motion.div>
        </Section>

        {/* Experience */}
        <Section id="experience">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-12">
            {data.experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 border-l border-slate-800">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                    <p className="text-emerald-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 font-mono text-xs mt-2 md:mt-0 uppercase tracking-widest">{exp.period}</span>
                </div>
                <ul className="space-y-3 text-slate-400">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <ChevronRight size={14} className="text-emerald-500 shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects">
          <SectionTitle>Gen AI Showcase</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, i) => (
               <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills">
          <SectionTitle>Technical Proficiencies</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillGroup title="Programming" icon={<Code2 className="text-emerald-400" />} skills={data.skills.programming} />
            <SkillGroup title="Generative AI" icon={<BrainCircuit className="text-emerald-400" />} skills={data.skills.generativeAI} />
            <SkillGroup title="Machine Learning" icon={<Cpu className="text-emerald-400" />} skills={data.skills.machineLearning} />
            <SkillGroup title="Tools" icon={<Terminal className="text-emerald-400" />} skills={data.skills.tools} />
          </div>
        </Section>
      </main>

      <footer className="py-20 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.5em] mb-8">Aditya V &mdash; 2025</p>
        <div className="flex justify-center gap-8">
           <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-slate-500 hover:text-emerald-400 transition-colors"><Mail size={20} /></a>
           <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group p-8 bg-slate-900/20 border border-slate-900 rounded-xl hover:border-emerald-500/30 hover:bg-slate-900/40 transition-all h-full",
        project.link ? "cursor-pointer" : "cursor-default"
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-emerald-500/5 rounded-lg text-emerald-500/60 group-hover:text-emerald-400 transition-colors">
          <Terminal size={20} />
        </div>
        {project.link && <ExternalLink size={14} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />}
      </div>
      <h3 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t: string) => (
          <span key={t} className="px-2 py-0.5 bg-slate-900/50 text-slate-500 text-[10px] font-mono rounded border border-slate-800 tracking-tighter">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );

  if (project.link) {
    return <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">{CardContent}</a>;
  }
  return CardContent;
}

function SkillGroup({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-slate-950 border border-slate-900 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-2 py-0.5 bg-slate-900/30 text-slate-500 text-[9px] font-mono rounded border border-slate-800 uppercase tracking-tighter">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
