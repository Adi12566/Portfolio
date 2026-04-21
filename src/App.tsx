import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ChevronRight, Award, BookOpen, Cpu, Code2, BrainCircuit, Terminal } from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import { RESUME_DATA } from './constants';
import { cn } from './lib/utils';

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

export default function App() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-emerald-500/30">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-emerald-400 tracking-tighter text-xl">
            ADITYA.V
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <Section id="about" className="min-h-screen flex flex-col justify-center pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-emerald-400 mb-4">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
              {RESUME_DATA.name}.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight">
              I build intelligent systems.
            </h2>
            <p className="max-w-xl text-slate-400 text-lg leading-relaxed mb-12">
              {RESUME_DATA.profile}
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects"
                className="px-8 py-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded-md font-medium hover:bg-emerald-500/20 transition-all"
              >
                Check out my work
              </a>
              <div className="flex items-center gap-6 ml-4">
                <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Experience Section */}
        <Section id="experience">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-slate-800"
              >
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                    <p className="text-emerald-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3 text-slate-400">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <ChevronRight size={18} className="text-emerald-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESUME_DATA.projects.map((project, i) => {
              const Content = (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "group p-8 bg-slate-900/40 border border-slate-800 rounded-xl transition-all h-full",
                    project.link ? "hover:border-emerald-500/50 hover:bg-slate-900/60 cursor-pointer" : "cursor-default"
                  )}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <Terminal size={24} />
                    </div>
                    {project.link && (
                      <div className="flex gap-4 text-slate-400">
                        <ExternalLink size={20} className="hover:text-emerald-400" />
                      </div>
                    )}
                  </div>
                  <h3 className={cn(
                    "text-xl font-bold text-slate-100 mb-3 transition-colors",
                    project.link && "group-hover:text-emerald-400"
                  )}>
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );

              return project.link ? (
                <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  {Content}
                </a>
              ) : (
                <div key={i}>{Content}</div>
              );
            })}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills">
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillGroup title="Programming" icon={<Code2 />} skills={RESUME_DATA.skills.programming} />
            <SkillGroup title="Generative AI" icon={<BrainCircuit />} skills={RESUME_DATA.skills.generativeAI} />
            <SkillGroup title="Machine Learning" icon={<Cpu />} skills={RESUME_DATA.skills.machineLearning} />
            <SkillGroup title="Tools" icon={<Terminal />} skills={RESUME_DATA.skills.tools} />
          </div>
        </Section>

        {/* Education & Achievements */}
        <Section id="education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-8">
                {RESUME_DATA.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l border-slate-800">
                    <div className="absolute -left-1 top-1.5 w-2 h-2 rounded-full bg-slate-700" />
                    <h3 className="font-bold text-slate-100">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                    <p className="text-emerald-400 text-xs font-mono mt-1">{edu.period || edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle>Achievements</SectionTitle>
              <div className="space-y-6">
                {RESUME_DATA.achievements.map((ach, i) => (
                  <div key={i} className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                    <div className="flex gap-4">
                      <Award className="text-emerald-400 shrink-0" />
                      <div>
                        <h3 className="font-bold text-slate-100 mb-1">{ach.title}</h3>
                        <p className="text-slate-400 text-sm">{ach.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-8">
                  <h4 className="text-sm font-mono text-emerald-400 mb-4 uppercase tracking-widest">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.certifications.map((cert) => (
                      <span key={cert} className="px-3 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 text-xs rounded-md">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm font-mono">
            Designed & Built by Aditya V
          </p>
          <div className="flex justify-center gap-6 mt-6 text-slate-400">
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-emerald-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SkillGroup({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl"
    >
      <div className="flex items-center gap-3 mb-6 text-emerald-400">
        {icon}
        <h3 className="font-bold text-slate-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs font-mono rounded border border-slate-700/50">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
