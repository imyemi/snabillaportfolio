import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../constants/projects';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="pt-24 min-h-screen bg-[#f8f8f8]">
        <div className="px-5 md:px-10 py-20 max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">
                All Projects
              </div>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tight leading-[1] text-[#111] mb-8">
                Work Archive.
              </h1>
              <p className="text-[1.1rem] text-[#555] max-w-2xl font-medium leading-relaxed">
                A collection of projects ranging from enterprise platforms to experimental digital interfaces, all centered around user needs and visual clarity.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Reveal key={project.title} delay={idx * 0.05}>
                <Link 
                  to={`/projects/${project.slug}`} 
                  className="group bg-white rounded-[20px] border border-[#eee] overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1 no-underline text-inherit"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                    {['riize-page', 'sekitar', 'ana-ai', 'ausrelief'].includes(project.slug) && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-blue-600 text-white text-[0.6rem] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/20">
                          Case Study
                        </span>
                      </div>
                    )}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[0.6rem] font-bold uppercase tracking-widest text-[#888] bg-gray-50 px-2.5 py-1 rounded-md border border-[#eee]">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="text-[0.6rem] font-bold text-[#888] py-1">+{project.tags.length - 2}</span>
                      )}
                    </div>
                    <h3 className="text-[1.5rem] font-extrabold text-[#111] mb-3 group-hover:text-blue-600 transition-colors uppercase italic tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[0.9rem] text-[#666] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-8 pt-6 border-t border-[#f0f0f0] flex items-center justify-between">
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#bbb]">{project.year}</span>
                      <span className="pill pill-blue !py-1 !px-4 !text-[0.6rem] opacity-0 group-hover:opacity-100 transition-opacity">View Project</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
