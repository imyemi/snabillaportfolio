import React, { useRef } from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import { Magnetic } from '../components/Magnetic';
import { projects as allProjects } from '../constants/projects';
import { 
  ArrowUpRight, 
  Dribbble
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  const heroTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroSkew = useTransform(scrollYProgress, [0, 0.2], [0, 5]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* ─── HERO ─── */}
      <section className="pt-[57px] shrink-0" id="home">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-hidden min-h-[85vh] md:min-h-[92vh] bg-[linear-gradient(135deg,#1630c8_0%,#2a52e8_45%,#4266ff_75%,#6b8aff_100%)] px-5 md:px-10 py-12 md:py-20 flex flex-col justify-between"
        >
          {/* Mouse Tracking Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <motion.div 
              className="absolute w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px]"
              animate={{
                x: [0, 40, 0, -40, 0],
                y: [0, -30, 20, -10, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                top: '20%',
                left: '30%',
              }}
            />
          </div>

          <Reveal className="relative z-[2]">
            <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-white/60 mb-6 flex items-center gap-3">
              <span className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
              UI/UX · 5+ years of experience
            </div>
            <p className="text-[clamp(1.1rem,1.5vw,1.35rem)] text-white/90 max-w-[550px] leading-[1.5] mb-12 font-medium">
              Hi, I'm Nabilla — a Product Designer building intuitive digital solutions for complex systems.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Magnetic strength={20}>
                <Link to="/projects" className="pill pill-yellow text-[0.85rem] px-8 py-3.5 no-underline block">View Work →</Link>
              </Magnetic>
              <Magnetic strength={20}>
                <Link to="/contact" className="pill pill-black text-[0.85rem] px-8 py-3.5 no-underline block">Get in Touch</Link>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative z-[2] flex flex-col md:flex-row items-baseline md:items-end justify-between mt-auto w-full">
            <div className="overflow-hidden">
              <motion.h1 
                style={{ y: heroTranslateY, skewY: heroSkew }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                whileHover={{ x: 10, skewX: -2 }}
                className="text-[clamp(4.5rem,12vw,10rem)] font-extrabold text-white tracking-[-0.06em] leading-[0.8] mb-0 cursor-default select-none transition-all"
              >
                Nabilla
              </motion.h1>
            </div>

            <div className="text-[0.85rem] md:text-[0.95rem] font-medium text-white/55 text-left md:text-right leading-[1.5] mt-8 md:mb-4 max-w-[200px]">
              Product Designer<br />Based in Indonesia
            </div>
          </Reveal>
        </motion.div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="bg-[#0a0a0a] py-10 overflow-hidden border-b border-white/5">
        <motion.div 
          style={{ x: marqueeX }}
          className="flex whitespace-nowrap text-[8vw] font-black uppercase text-white/5 tracking-tighter select-none leading-none"
        >
          <span>PRODUCT DESIGNER • CREATIVE THINKER • PROBLEM SOLVER • </span>
          <span>PRODUCT DESIGNER • CREATIVE THINKER • PROBLEM SOLVER • </span>
          <span>PRODUCT DESIGNER • CREATIVE THINKER • PROBLEM SOLVER • </span>
        </motion.div>
      </div>

      {/* ─── WORK ─── */}
      <section className="px-5 md:px-10 py-32 bg-[#0a0a0a] text-white overflow-hidden" id="work">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20"></span> Featured Work
            </div>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold tracking-[-0.05em] leading-[1] max-w-3xl">
              Selected Projects.
            </h2>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="text-[0.95rem] text-white/50 font-medium leading-relaxed mb-6">
              A showcase of selected projects that reflect my approach to creating user-friendly and visually engaging digital experiences.
            </p>
            <Link to="/projects" className="text-[0.7rem] font-bold uppercase tracking-widest flex items-center gap-2 group no-underline text-white">
              View all projects <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {allProjects.filter(p => ["riize-page", "sekitar", "velosight", "ana-ai"].includes(p.slug)).map((project, idx) => (
            <ProjectCard key={project.slug} project={project} idx={idx} />
          ))}
        </div>
      </section>

      {/* ─── DRIBBBLE SECTION ─── */}
      <section className="bg-[#0a0a0a] py-32 overflow-hidden border-t border-white/5">
        <div className="px-5 md:px-10 mb-16 flex justify-between items-end">
          <div>
            <div className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/20"></span> Dribbble Content
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[1] text-white">
              Latest <span className="italic text-pink-500">Shots</span>.
            </h2>
          </div>
          <Magnetic strength={15}>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="pill pill-white !bg-white !text-black no-underline flex items-center gap-2 px-6 py-2.5 block">
              Follow <Dribbble className="w-4 h-4" />
            </a>
          </Magnetic>
        </div>

        <div className="flex gap-8 px-5 md:px-10 overflow-x-auto no-scrollbar pb-10">
          {[
            "https://raw.githubusercontent.com/imyemi/snabillaportfolio/9af0e835dfdf16f6cb0cbd9cf6258541ad140938/jennie%20shots.webp",
            "https://raw.githubusercontent.com/imyemi/snabillaportfolio/6ad3445f0cd9893d7f542fe76a4445f5b7dd7e40/original-78a5897a1ae74de8dead44392f1b3d5b.webp",
            "https://raw.githubusercontent.com/imyemi/snabillaportfolio/f8e83553a9e494cfc3b10820240cd66debd19bda/homes%20that%20match.webp",
            "https://raw.githubusercontent.com/imyemi/snabillaportfolio/930ac319f5d6c48752dd239f411a8a7601141372/original-5e7022f9f16b37fa88bf8af12288695c.webp",
            "https://raw.githubusercontent.com/imyemi/snabillaportfolio/930ac319f5d6c48752dd239f411a8a7601141372/original-fadfbefeca7358ee7d1b11c8cb6343b2.webp"
          ].map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
              className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] rounded-[20px] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
            >
              <img src={img} alt="Dribbble Shot" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ME TEASER ─── */}
      <section className="px-5 md:px-10 py-32 bg-white text-[#111] overflow-hidden border-t border-black/5" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <Reveal className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#111]/30 mb-8 flex items-center gap-3">
                 02 — PHILOSOPHY
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[1] mb-12 text-[#111]">
                  Driven by <em className="italic text-blue-600 not-italic">Design</em>, <br />
                  Guided by <em className="italic text-blue-600 not-italic">Research</em>.
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="space-y-10">
                <p className="text-[clamp(1rem,1.2vw,1.15rem)] font-medium text-[#111]/50 leading-relaxed max-w-xl">
                  I am a Product Designer with 5+ years of experience translating complex systems into intuitive digital products. I bring a research-first approach to UI/UX, with a strong foundation in design systems and cross-functional collaboration.
                </p>
                <Magnetic strength={20}>
                  <Link to="/about" className="pill pill-blue inline-flex items-center gap-2 no-underline px-8 py-3.5">
                    More about me <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </Reveal>
            </div>

            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.3} className="relative">
                <motion.div 
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  className="aspect-[4/5] bg-zinc-900 rounded-[20px] overflow-hidden shadow-2xl relative group"
                >
                  <img 
                    src="https://raw.githubusercontent.com/imyemi/snabillaportfolio/9ac9c0c07abd6d902f45d238b26642cc84c6750b/miphoto.png" 
                    alt="Nabilla" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" 
                  />
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CALLOUT ─── */}
      <section className="bg-white py-32 border-t border-black/5 overflow-hidden" id="contact">
        <div className="px-5 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 text-center lg:text-left">
            <div className="max-w-3xl">
              <Reveal>
                <h2 className="text-[clamp(1.8rem,4.2vw,3rem)] font-extrabold tracking-[-0.05em] leading-[1.2] mb-4 text-[#111]">
                  Excited to collaborate on <br />
                  projects that create <br />
                  <span className="text-blue-600 italic font-serif">meaningful</span> experiences.
                </h2>
              </Reveal>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Reveal delay={0.2}>
                <Magnetic strength={30}>
                  <Link to="/contact" className="pill pill-blue text-[0.85rem] px-12 py-5 no-underline block inline-flex items-center gap-2 shadow-xl shadow-blue-500/10">
                    Let's work together <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
};

interface ProjectCardProps {
  project: any;
  idx: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale, opacity }}
      className="flex flex-col"
    >
      <Link 
        to={`/projects/${project.slug}`} 
        className="group cursor-pointer block no-underline text-inherit"
      >
        {/* Image Wrap */}
        <motion.div 
          whileHover={{ y: -15, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative aspect-[16/10] overflow-hidden mb-10 rounded-[20px] bg-zinc-900 border border-white/5 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-600/15 transition-all duration-500"
        >
          {['riize-page', 'sekitar'].includes(project.slug) && (
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-blue-600 text-white text-[0.6rem] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/20">
                Case Study
              </span>
            </div>
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
          />
          
          {/* Floating Action Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-2xl"
            >
              <ArrowUpRight className="w-8 h-8" />
            </motion.div>
          </div>

          {/* Vertical Meta */}
          <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
            <div className="rotate-90 origin-right translate-y-[50%] text-[0.6rem] font-black tracking-[0.5em] text-white/10 whitespace-nowrap uppercase group-hover:text-white/40 transition-colors">
              {project.meta} {(idx + 1).toString().padStart(2, '0')}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-md px-2">
          <h3 className="text-[2.5rem] font-extrabold tracking-tight mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h3>
          <p className="text-[1.05rem] text-white/40 leading-relaxed mb-8 font-medium">{project.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest border border-white/10 px-6 py-2 rounded-full text-white/50 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
              {project.tags.slice(0, 2).join(" // ")}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HomePage;
