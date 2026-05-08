import React from 'react';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, Mail, Linkedin, Instagram, Dribbble, Palette } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <section className="pt-24 min-h-screen bg-white text-[#111]">
        <div className="px-5 md:px-10 py-20 max-w-7xl mx-auto">
          <Reveal>
            <div className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">
              Get in Touch
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold tracking-tight leading-[0.9] text-[#111] mb-12">
                Let's build <br />something <em className="italic font-serif text-blue-600 not-italic">great.</em>
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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

            <Reveal delay={0.2}>
              <div className="bg-[#f8f8f8] p-8 md:p-12 rounded-[20px] border border-[#eee]">
                <h3 className="text-xl font-bold mb-8">Send a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#aaa]">Name</label>
                      <input type="text" className="w-full bg-white border border-[#eee] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-600 transition-colors" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#aaa]">Email</label>
                      <input type="email" className="w-full bg-white border border-[#eee] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-600 transition-colors" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold uppercase tracking-widest text-[#aaa]">Message</label>
                    <textarea rows={5} className="w-full bg-white border border-[#eee] rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-600 transition-colors resize-none" placeholder="How can I help you?"></textarea>
                  </div>
                  <button className="pill pill-blue w-full py-5 text-[0.85rem] font-bold">Send Message →</button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
