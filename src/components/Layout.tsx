import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [time, setTime] = useState("");
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' WIB');
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white scroll-smooth">
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9999] hidden md:flex"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 18,
          scale: isHovering ? 1.4 : 1,
          rotate: isHovering ? [0, -10, 10, 0] : 0
        }}
        transition={{ 
          type: 'spring', 
          damping: 30, 
          stiffness: 400, 
          mass: 0.6,
          rotate: { repeat: isHovering ? Infinity : 0, duration: 0.6 }
        }}
      >
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Cat Head Silhouette (Based on drawing) */}
          <path 
            d="M20 31C12 31 6 26 6 18C6 13 8 11 11 6C12.5 3.5 16 8 16 8C16 8 18 7 20 7C22 7 24 8 24 8C24 8 27.5 3.5 29 6C32 11 34 13 34 18C34 26 28 31 20 31Z" 
            fill="#111111" 
          />
          
          {/* Whiskers - Left */}
          <path d="M7 21L2 20.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6.5 24L1 24" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 27L2 27.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Whiskers - Right */}
          <path d="M33 21L38 20.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33.5 24L39 24" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33 27L38 27.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />

          {/* Round Cute Eyes */}
          <circle cx="14.5" cy="19.5" r="4.5" fill="white" />
          <circle cx="15" cy="20" r="3" fill="black" />
          <circle cx="14" cy="18.5" r="1" fill="white" />
          <circle cx="16" cy="21.5" r="0.5" fill="white" />

          <circle cx="25.5" cy="19.5" r="4.5" fill="white" />
          <circle cx="26" cy="20" r="3" fill="black" />
          <circle cx="25" cy="18.5" r="1" fill="white" />
          <circle cx="27" cy="21.5" r="0.5" fill="white" />
          
          {/* Small Nose */}
          <ellipse cx="20" cy="24.5" rx="1.8" ry="1.2" fill="white" opacity="0.9" />
        </svg>
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[1001]"
        style={{ scaleX }}
      />
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-10 py-3.5 bg-white/95 backdrop-blur-xl border-b border-[#e2e2e2]">
        <Link to="/" className="text-[0.88rem] font-bold tracking-tight flex items-center gap-1.5 text-[#111111] no-underline">
          Nabilla <span className="bg-[#2a52e8] text-white text-[0.55rem] px-1.5 py-0.5 rounded-[20px] font-bold tracking-[0.06em] uppercase">Portfolio</span>
        </Link>
        <ul className="hidden md:flex gap-7 list-none m-0 p-0">
          <li>
            <Link to="/" className={`text-[0.8rem] font-medium transition-colors ${isHome ? 'text-[#2a52e8]' : 'text-[#555] hover:text-[#2a52e8]'}`}>Home</Link>
          </li>
          <li>
            <Link to="/projects" className={`text-[0.8rem] font-medium transition-colors ${location.pathname.startsWith('/projects') ? 'text-[#2a52e8]' : 'text-[#555] hover:text-[#2a52e8]'}`}>Projects</Link>
          </li>
          <li>
            <Link to="/about" className={`text-[0.8rem] font-medium transition-colors ${location.pathname === '/about' ? 'text-[#2a52e8]' : 'text-[#555] hover:text-[#2a52e8]'}`}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={`text-[0.8rem] font-medium transition-colors ${location.pathname === '/contact' ? 'text-[#2a52e8]' : 'text-[#555] hover:text-[#2a52e8]'}`}>Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3.5">
          <span className="hidden sm:inline text-[0.7rem] text-[#888888] tabular-nums">{time}</span>
          <Link to="/contact" className="pill pill-black no-underline">Let's Talk →</Link>
        </div>
      </nav>

      <main>
        {children}
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="px-5 md:px-10 py-16 bg-white text-[#111] border-t border-black/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-[1.35rem] font-extrabold tracking-tighter text-[#111]">
            Nabilla<span className="text-blue-600">™</span>
          </div>

          {/* Copyright */}
          <div className="text-[0.85rem] text-[#111]/50 font-medium order-3 md:order-2">
            © 2026 Syafrini Nabilla. All rights reserved.
          </div>

          {/* Social Media */}
          <div className="flex gap-8 order-2 md:order-3">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/in/syafrini-nabilla-468598174/" },
              { name: "Dribbble", url: "https://dribbble.com/ssnabilla" },
              { name: "Behance", url: "https://www.behance.net/syafrininabilla" }
            ].map(social => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[0.85rem] font-bold text-[#111]/50 hover:text-[#111] transition-colors">{social.name}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
