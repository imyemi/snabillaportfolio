import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import { Linkedin, Dribbble, Palette } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <section className="pt-24 min-h-screen bg-white text-[#111]">
        <div className="px-5 md:px-10 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <Reveal>
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">
                  Get in Touch
                </div>
                <h1 className="text-[48px] font-extrabold tracking-tight leading-[0.9] text-[#111] mb-12">
                    Let's build <br />something <em className="italic font-serif text-blue-600 not-italic">great.</em>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[1.25rem] text-[#555] font-medium leading-relaxed max-w-xl mb-12">
                  I'm currently available for freelance projects and full-time opportunities. If you have a project in mind or just want to say hi, feel free to reach out.
                </p>
                
                <div className="space-y-8">
                  <a href="mailto:syafrininabilla@gmail.com" className="block group">
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#bbb] mb-2">Email me at</div>
                    <div className="text-2xl md:text-3xl font-extrabold group-hover:text-blue-600 transition-colors">syafrininabilla@gmail.com</div>
                  </a>
                  
                  <div className="pt-8 border-t border-[#eee]">
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#bbb] mb-6">Follow my work</div>
                    <div className="flex flex-wrap gap-8">
                      {[
                        { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/syafrini-nabilla-468598174/' },
                        { name: 'Dribbble', icon: <Dribbble className="w-5 h-5" />, url: 'https://dribbble.com/ssnabilla' },
                        { name: 'Behance', icon: <Palette className="w-5 h-5" />, url: 'https://www.behance.net/syafrininabilla' },
                      ].map(social => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[0.85rem] font-bold text-[#555] hover:text-blue-600 transition-colors">
                          {social.icon} {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="w-full">
              <div className="w-full h-[600px] rounded-[20px] overflow-hidden border border-[#eee] bg-[#f8f8f8]">
                <iframe 
                  src="https://tally.so/r/GxXzzk?transparentBackground=1" 
                  width="100%" 
                  height="100%" 
                  loading="lazy"
                  title="Contact Form"
                  className="w-full h-full border-none"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
