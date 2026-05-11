import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import { Magnetic } from '../components/Magnetic';
import { projects } from '../constants/projects';
import { ArrowLeft, ArrowUpRight, Calendar, User, Globe, MoveRight, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-white">
          <h1 className="text-4xl font-black mb-6">Project Not Found</h1>
          <Link to="/projects" className="pill pill-blue">Back to Projects</Link>
        </div>
      </Layout>
    );
  }

  const isLinkAvailable = project.url && project.url !== '#' && project.url !== '';

  return (
    <Layout>
      <div ref={containerRef} className="bg-white">
        {/* ─── HERO HEADER ─── */}
        <section className="pt-[57px] shrink-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative overflow-hidden min-h-[70vh] md:min-h-[85vh] bg-[linear-gradient(135deg,#111_0%,#1a1a1a_45%,#222_75%,#2a2a2a_100%)] px-5 md:px-10 py-12 md:py-20 flex flex-col justify-between"
          >
            {/* Animated Background Text */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
              <motion.h2 
                style={{ x: marqueeX }}
                className="text-[30vw] font-black whitespace-nowrap text-white uppercase italic"
              >
                {project.title} • {project.title} • {project.title} •
              </motion.h2>
            </div>

            <div className="relative z-10">
              <div className="max-w-7xl mx-auto">
                <Reveal>
                  <Magnetic strength={10}>
                    <Link to="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors no-underline text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-12">
                      <ArrowLeft className="w-4 h-4" /> Back to Archive
                    </Link>
                  </Magnetic>
                </Reveal>
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <div className="max-w-7xl mx-auto">
                <Reveal>
                  <motion.div 
                    style={{ y: heroY }}
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-12"
                  >
                    <h1 className="text-[52px] font-extrabold text-white tracking-[-0.04em] leading-[0.9] uppercase italic">
                      {project.title}
                    </h1>
                    <div className="shrink-0 max-w-[400px]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto rounded-[20px] shadow-2xl border border-white/10" 
                      />
                    </div>
                  </motion.div>
                </Reveal>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 pt-12 border-t border-white/10 w-full">
                  <Reveal delay={0.1}>
                    <div className="flex flex-col gap-3">
                      <div className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/30 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 opacity-50" /> Year
                      </div>
                      <div className="text-[1.25rem] font-bold text-white italic tracking-tight">
                        {project.year}
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div className="flex flex-col gap-3">
                      <div className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/30 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 opacity-50" /> Duration
                      </div>
                      <div className="text-[1.25rem] font-bold text-white italic tracking-tight">
                        {project.duration}
                      </div>
                    </div>
                  </Reveal>
                  
                  <Reveal delay={0.2}>
                    <div className="flex flex-col gap-3">
                      <div className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/30 flex items-center gap-2">
                        <User className="w-3.5 h-3.5 opacity-50" /> Role
                      </div>
                      <div className="text-[1.25rem] font-bold text-white italic leading-[1.1] tracking-tight max-w-[280px]">
                        {project.tags.join(" & ")}
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <div className="flex flex-col gap-3">
                      <div className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/30 flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 opacity-50" /> Platform
                      </div>
                      <div className="text-[1.25rem] font-bold text-white italic tracking-tight">
                        {isLinkAvailable ? (
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white hover:text-blue-500 transition-colors flex items-center gap-1.5 no-underline"
                          >
                            Live Site <ArrowUpRight className="w-5 h-5" />
                          </a>
                        ) : "N/A"}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── OVERVIEW ─── */}
        <section className="px-5 md:px-10 py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
              <Reveal>
                <div className="sticky top-32">
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#111]/30 mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-black/20"></span> Overview
                  </div>
                  <h2 className="text-[32px] font-extrabold tracking-[-0.03em] leading-none text-[#111] mb-12">
                    The <br /><span className="text-blue-600 italic">Vision.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-10">
                  <p className="text-[16px] font-medium text-[#111] leading-relaxed tracking-tight">
                    {project.description}
                  </p>
                  <p className="text-[16px] text-[#111]/60 leading-relaxed font-medium">
                    {project.caseStudy?.overview || "This project involved creating a cohesive digital experience that prioritizes user needs while maintaining a strong visual identity. Through a research-driven design process, we developed a system that is both intuitive and highly functional."}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── CASE STUDY CONTENT ─── */}
        <section className="px-5 md:px-10 pb-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {project.caseStudy && (
              <div className="space-y-40 md:space-y-64">
                {project.caseStudy.sections.map((section, idx) => (
                  <div key={idx} className={`grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <Reveal className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="max-w-xl">
                        <div className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#111]/30 mb-8 flex items-center gap-3">
                          <span className="w-8 h-[1px] bg-black/20"></span> 0{idx + 1}
                        </div>
                        <h3 className="text-[32px] font-extrabold tracking-[-0.03em] leading-[1.1] mb-8 text-[#111]">
                          {section.title}
                        </h3>
                        <div className="text-[16px] text-[#111]/60 font-medium leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </Reveal>

                    {section.image && (
                      <Reveal delay={0.2} className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className="rounded-[20px] overflow-hidden shadow-xl border border-black/5"
                        >
                          <img 
                            src={section.image} 
                            alt={section.title} 
                            className="w-full h-auto block" 
                          />
                        </motion.div>
                      </Reveal>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── NEXT / PREV PROJECT NAVIGATION ─── */}
        <section className="px-5 md:px-10 py-32 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="flex items-center justify-between mb-16">
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-white/30 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-white/20"></span> Explore More
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(() => {
                  const currentIndex = projects.findIndex(p => p.slug === slug);
                  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
                  const nextIndex = (currentIndex + 1) % projects.length;
                  
                  const prevProject = projects[prevIndex];
                  const nextProject = projects[nextIndex];

                  return (
                    <>
                      {/* Previous Project Button */}
                      <Link 
                        to={`/projects/${prevProject.slug}`} 
                        className="group flex flex-col justify-between p-8 md:p-12 border border-white/10 rounded-[20px] transition-all duration-500 hover:bg-white hover:text-black no-underline"
                      >
                        <div className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-black/30 mb-8">
                          Previous Project
                        </div>
                        <div className="flex items-end justify-between gap-4">
                          <div className="max-w-[70%]">
                            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold tracking-[-0.04em] leading-[0.9] uppercase italic mb-4">
                              {prevProject.title}
                            </h3>
                            <p className="text-[0.7rem] font-bold text-white/30 group-hover:text-black/40 uppercase tracking-widest leading-none">
                              {prevProject.tags.slice(0, 2).join(" & ")}
                            </p>
                          </div>
                          <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-black/20 flex items-center justify-center transition-all">
                            <ArrowLeft className="w-5 h-5" />
                          </div>
                        </div>
                      </Link>

                      {/* Next Project Button */}
                      <Link 
                        to={`/projects/${nextProject.slug}`} 
                        className="group flex flex-col justify-between p-8 md:p-12 border border-white/10 rounded-[20px] transition-all duration-500 hover:bg-blue-600 hover:border-blue-600 no-underline"
                      >
                        <div className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 mb-8 text-right">
                          Next Project
                        </div>
                        <div className="flex items-end justify-between gap-4">
                          <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                          <div className="max-w-[70%] text-right">
                            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold tracking-[-0.04em] leading-[0.9] uppercase italic mb-4">
                              {nextProject.title}
                            </h3>
                            <p className="text-[0.7rem] font-bold text-white/30 group-hover:text-white/60 uppercase tracking-widest leading-none">
                              {nextProject.tags.slice(0, 2).join(" & ")}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })()}
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;

