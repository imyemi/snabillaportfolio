import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import { projects } from '../constants/projects';
import { ArrowLeft, ArrowUpRight, Calendar, User, Tag, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  return (
    <Layout>
      {/* ─── HERO HEADER ─── */}
      <section className="pt-32 pb-20 px-5 md:px-10 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Link to="/projects" className="pill pill-blue no-underline mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Archive
            </Link>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-end">
            <Reveal>
              <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold tracking-[-0.04em] leading-[0.9] text-[#111] mb-8">
                {project.title}
              </h1>
              <p className="text-[1.25rem] md:text-[1.5rem] text-[#111]/70 font-medium leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-8 pb-4">
              <div className="grid grid-cols-2 gap-8 md:gap-12">
                <div>
                  <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#111]/30 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> Year
                  </div>
                  <div className="text-[0.9rem] font-bold text-[#111]">{project.year}</div>
                </div>
                <div>
                  <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#111]/30 mb-2 flex items-center gap-1.5">
                    <User className="w-3 h-3" /> Role
                  </div>
                  <div className="text-[0.9rem] font-bold text-[#111]">{project.role}</div>
                </div>
                <div>
                  <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#111]/30 mb-2 flex items-center gap-1.5">
                    <Tag className="w-3 h-3" /> Services
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[0.7rem] font-bold text-[#111]/60">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#111]/30 mb-2 flex items-center gap-1.5">
                    <Globe className="w-3 h-3" /> Website
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[0.7rem] font-bold text-blue-600 hover:underline uppercase tracking-widest flex items-center gap-1">
                    Visit Live <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── MAIN FEATURE IMAGE ─── */}
      <section className="px-5 md:px-10 bg-white">
        <Reveal className="max-w-7xl mx-auto -mt-10 mb-24">
          <div className="aspect-[21/9] md:aspect-[21/10] overflow-hidden rounded-[20px] shadow-2xl relative group bg-gray-100">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* ─── CASE STUDY CONTENT ─── */}
      {project.caseStudy && (
        <section className="px-5 md:px-10 pb-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
              {/* Overview */}
              <Reveal>
                <div className="sticky top-32">
                  <div className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-[#111]/30 mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-black/10"></span> Project Overview
                  </div>
                  <h2 className="text-[2rem] md:text-[2.5rem] font-extrabold tracking-tight leading-none mb-10 text-[#111]">
                    The <span className="text-blue-600 italic">Vision.</span>
                  </h2>
                  <p className="text-[1.1rem] text-[#111]/60 font-medium leading-[1.8]">
                    {project.caseStudy.overview}
                  </p>
                </div>
              </Reveal>

              {/* Sections */}
              <div className="space-y-24 md:space-y-32">
                {project.caseStudy.sections.map((section, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="border-t border-black/5 pt-12 md:pt-16">
                      <h3 className="text-[1.8rem] md:text-[2.2rem] font-extrabold tracking-tight mb-8">
                        {section.title}
                      </h3>
                      <div className="text-[1.05rem] text-[#111]/60 font-medium leading-[1.9] max-w-2xl whitespace-pre-line">
                        {section.content}
                      </div>
                      {section.image && (
                        <div className="mt-12 aspect-[16/9] bg-gray-50 rounded-[20px] overflow-hidden border border-black/5">
                          <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── NEXT PROJECT CTA ─── */}
      <section className="px-5 md:px-10 py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <div className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/30 mb-10">Next Exploration</div>
            
            {/* Find next project */}
            {(() => {
              const currentIndex = projects.findIndex(p => p.slug === slug);
              const nextProject = projects[(currentIndex + 1) % projects.length];
              return (
                <Link 
                  to={`/projects/${nextProject.slug}`} 
                  className="group inline-block no-underline text-inherit"
                >
                  <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-extrabold tracking-[-0.04em] leading-[0.8] mb-12 hover:text-blue-500 transition-colors uppercase italic">
                    {nextProject.title}
                  </h2>
                  <div className="flex items-center justify-center mt-12">
                    <span className="pill pill-yellow px-12 py-5 text-[1rem]">
                      Next Project <ArrowUpRight className="w-6 h-6" />
                    </span>
                  </div>
                </Link>
              );
            })()}
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailPage;
