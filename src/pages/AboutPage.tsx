import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, Figma, PenTool, Camera, Palette, Layers, Terminal, Github, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const AboutPage = () => {
  return (
    <Layout>
      <section className="pt-24 min-h-screen bg-[#0a0a0a] text-white">
        <div className="px-5 md:px-10 py-20 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <Reveal className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/30 mb-8 flex items-center gap-3">
                 02 — ABOUT ME
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold tracking-tight leading-[1] mb-12">
                  Driven by <em className="italic text-white/40 not-italic font-serif">Design</em>, <br />
                  Guided by <em className="italic text-white/40 not-italic font-serif">Research</em>.
                </h1>
              </Reveal>
              <Reveal delay={0.2} className="space-y-10">
                <p className="text-[clamp(1rem,1.2vw,1.15rem)] font-medium text-white/50 leading-relaxed max-w-xl">
                  I am a Product Designer with 5+ years of experience translating complex systems into intuitive digital products, across healthcare, fintech, and B2B SaaS.
                </p>
                <p className="text-[clamp(1rem,1.2vw,1.15rem)] font-medium text-white/50 leading-relaxed max-w-xl">
                  I bring a research first approach to UI/UX, with a strong foundation in design systems and cross-functional collaboration. My career has spanned roles from Graphic Designer & Illustrator to UI/UX and Product Design, working with government entities like INA Digital and tech agencies across the globe.
                </p>
                <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                    <div>
                        <div className="text-[0.6rem] font-bold uppercase tracking-widest text-white/30 mb-2">Location</div>
                        <div className="text-[0.9rem] font-bold">Indonesia</div>
                    </div>
                    <div>
                        <div className="text-[0.6rem] font-bold uppercase tracking-widest text-white/30 mb-2">Experience</div>
                        <div className="text-[0.9rem] font-bold">5+ Years</div>
                    </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.3} className="relative">
                <div className="aspect-[4/5] bg-zinc-900 rounded-[20px] overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80" 
                    alt="Nabilla" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -right-4 md:right-8 p-6 md:p-10 bg-blue-600 rounded-[20px] text-white shadow-2xl shadow-blue-600/30"
                >
                  <div className="text-4xl md:text-5xl font-extrabold mb-1 tracking-tighter">05+</div>
                  <div className="text-[0.6rem] md:text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/50 whitespace-nowrap">
                    Years Prof. Experience
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MY STACK ─── */}
      <section className="px-5 md:px-10 py-32 bg-white text-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <Reveal className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#111]/30 mb-8 flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-black/10"></span> My Stack
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(1.6rem,4.5vw,3.8rem)] font-extrabold tracking-[-0.05em] leading-[1.1] mb-10 text-[#111] max-w-4xl mx-auto">
                Tools that help me deliver <em className="text-blue-600 italic not-italic">precision.</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "UI/UX Design", desc: "User-Centered Design & Information Architecture", icon: <Layers className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
              { name: "Complex Systems", desc: "Simplifying complex healthcare & fintech systems", icon: <Terminal className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
              { name: "Illustrations", desc: "2D Illustration & Iconography", icon: <Palette className="w-5 h-5" />, color: "bg-purple-50 text-purple-600" },
              { name: "Design Systems", desc: "Building comprehensive UI components & libraries", icon: <ExternalLink className="w-5 h-5" />, color: "bg-orange-50 text-orange-600" },
              { name: "Collaboration", desc: "Cross-functional team alignment & design thinking", icon: <Mail className="w-5 h-5" />, color: "bg-pink-50 text-pink-600" },
              { name: "AI Assisted", desc: "Leveraging AI for design efficiency", icon: <Sparkles className="w-5 h-5" />, color: "bg-yellow-50 text-yellow-600" }
            ].map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.05}>
                <div className="p-8 rounded-[20px] border border-black/5 hover:border-black/10 transition-all group hover:shadow-xl hover:-translate-y-1 bg-white h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-[20px] ${skill.color} flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-[1.2rem] font-bold mb-3">{skill.name}</h3>
                    <p className="text-[0.85rem] text-[#111]/50 font-medium leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK EXPERIENCE ─── */}
      <section className="px-5 md:px-10 py-32 bg-white text-[#111] border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <Reveal className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#111]/30 mb-8 flex items-center gap-3">
              03 — EXPERIENCE
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-[-0.05em] leading-[1] text-[#111]">
                Professional <em className="italic text-blue-600 not-italic">Journey</em>.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-12">
            {[
              {
                role: "Product Designer",
                company: "Feedloop AI",
                period: "Oct 2025 - Present",
                desc: "Building Velosight: a Narrative Intelligence & Reputation Management platform. Redesigning core interfaces and visualization components for brand reputation tracking."
              },
              {
                role: "Product Designer",
                company: "Govtech Health / INA Digital",
                period: "Mar 2024 - Mar 2025",
                desc: "UI/UX for SATUSEHAT, Indonesia's national health data platform. Redesigning clinical workflows to be accessible for healthcare professionals."
              },
              {
                role: "UI/UX Designer",
                company: "TokenMinds",
                period: "Dec 2023 - Apr 2024",
                desc: "Led product design for ANA AI: a personal AI lifestyle companion app. Conducted user research and designed interactive prototypes for iOS and Android."
              },
              {
                role: "UI/UX Designer",
                company: "EricWeb Studio",
                period: "Jun 2023 - Nov 2023",
                desc: "Collaborated with product owners to design seamless UI/UX for data-heavy B2B SaaS products."
              },
              {
                role: "UI Designer/Co-Founder",
                company: "Gintera Studio",
                period: "Nov 2022 - Jul 2023",
                desc: "Spearheaded design solutions for Independent client projects, ensuring high-fidelity design output and visual consistency."
              },
              {
                role: "UI Designer",
                company: "Plainthing Studio",
                period: "Apr 2021 - Jul 2023",
                desc: "Specialized in user-centered design and data-driven decisions for various design consultancy projects."
              }
            ].map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1fr] gap-8 py-10 border-b border-black/5 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-blue-600 font-bold uppercase text-[0.7rem] tracking-widest">{exp.company}</div>
                  </div>
                  <div className="text-[0.9rem] text-[#111]/50 font-medium leading-relaxed">
                    {exp.desc}
                  </div>
                  <div className="text-left md:text-right text-[0.75rem] font-bold text-[#111]/30">
                    {exp.period}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-32 max-w-3xl">
            <Reveal className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#111]/30 mb-12 flex items-center gap-3">
              04 — EDUCATION
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group border-l-2 border-black/5 pl-8 py-2">
                <h3 className="text-2xl font-extrabold mb-2">Yogyakarta State University</h3>
                <div className="text-blue-600 font-bold uppercase text-[0.7rem] tracking-widest mb-4">Bachelor of Fine Art Education</div>
                <p className="text-[0.95rem] text-[#111]/50 font-medium leading-relaxed">
                  Graduated with a focus on visual arts and creative education. <br />
                  GPA: <span className="text-[#111]">3.52 / 4.0</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── DESIGN PROCESS ─── */}
      <section className="px-5 md:px-10 py-32 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <Reveal className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/30 mb-8 flex items-center gap-3">
              06 — PROCESS
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(4rem,12vw,10rem)] font-extrabold tracking-[-0.06em] leading-none mb-20">
                Process
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-white/10">
            {[
              {
                num: "01",
                name: "Research",
                desc: "Understand users, problems, and context through research activities.",
                out: "Problem statements · Personas · Journey maps"
              },
              {
                num: "02",
                name: "Wireframe",
                desc: "Align on structure and flows before visual polish through sketching.",
                out: "Page flows · Key screens · Content hierarchy"
              },
              {
                num: "03",
                name: "Hi-Fi Design",
                desc: "Validate a realistic solution and define the visual system.",
                out: "Hi-fi mockups · Accessibility · Specs"
              },
              {
                num: "04",
                name: "Handoff",
                desc: "Ensure smooth build and quality through specs and asset delivery.",
                out: "Documentation · Assets · Checklist"
              }
            ].map((proc, i) => (
              <Reveal key={proc.num} delay={i * 0.1}>
                <div className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr_1.2fr] gap-8 md:gap-12 items-start py-12 md:py-16 border-b border-white/10 transition-colors hover:bg-white/[0.02]">
                  <div className="text-[0.65rem] text-white/20 font-bold tracking-widest pt-1.5">{proc.num}</div>
                  <div className="text-[1.8rem] md:text-[2.2rem] font-extrabold tracking-tight leading-none group-hover:text-blue-500 transition-colors">
                    {proc.name}
                  </div>
                  <div className="text-[0.95rem] text-white/40 leading-[1.8] font-medium max-w-md">
                    {proc.desc}
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/20 mb-4">Deliverables</div>
                    <div className="text-[0.8rem] text-white/30 leading-relaxed font-bold uppercase tracking-tight">
                      {proc.out}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
