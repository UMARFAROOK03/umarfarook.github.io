import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Globe, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

interface SkillBadgeProps {
  children: React.ReactNode;
  key?: React.Key;
}

const SkillBadge = ({ children }: SkillBadgeProps) => (
  <span className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-medium shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
        
        {/* Hero Section */}
        <motion.section 
          initial="initial" animate="animate" variants={fadeInUp}
          className="relative"
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Available for Roles
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
                ISAYABAMA <span className="text-blue-600">SELVAM</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                B.Pharm Graduate specializing in <span className="text-slate-900 font-semibold underline decoration-blue-300">Pharmacovigilance</span> and <span className="text-slate-900 font-semibold underline decoration-blue-300">Regulatory Affairs</span>. 
                Dedicated to drug safety and pharmaceutical innovation.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:isayabamaselvam@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all hover:shadow-xl hover:-translate-y-1">
                  <Mail size={18} /> Contact Me
                </a>
                <a href="https://www.linkedin.com/in/isayabama-selvam-6b45953a7" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 font-bold hover:bg-slate-50 transition-all shadow-sm">
                  <Linkedin size={18} className="text-blue-600" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[2rem] blur-2xl opacity-50 -z-10"></div>
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <CheckCircle2 className="text-blue-600" size={20} /> Professional Summary
                  </h3>
                  <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">01</span>
                      Drug safety & regulatory compliance focus.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">02</span>
                      Expertise in documentation & medical writing.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">03</span>
                      Seeking roles in India, Dubai, or Saudi Arabia.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education & Personal Info */}
        <section className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Bachelor of Pharmacy (B.Pharm)</h3>
                    <p className="text-blue-600 font-medium">Cheran's College of Pharmacy</p>
                    <p className="text-slate-500 text-sm mt-1">The Tamil Nadu Dr. M.G.R. Medical University</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold uppercase">Class of 2026</span>
                    <p className="text-xl font-black text-slate-900 mt-2">7.77 CGPA</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">HSC Score</p>
                  <p className="text-xl font-bold text-slate-800">80.0%</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">SSLC Score</p>
                  <p className="text-xl font-bold text-slate-800">78.8%</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-lg shadow-blue-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin size={20} /> Quick Info
              </h3>
              <div className="space-y-4 opacity-90">
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">Location</p>
                  <p className="font-medium">Rajapalayam, TN, India</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">Languages</p>
                  <p className="font-medium">Tamil (Native), English (Proficient)</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">Vision</p>
                  <p className="font-medium">Global Healthcare Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Project Section */}
        <motion.section 
          whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-slate-900 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg text-blue-400">
                  <BookOpen size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Major Academic Project</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                In-vitro Study of Anti-diabetic Activity of <span className="text-blue-400 italic">Cassia Auriculata</span>
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed">
                A specialized research project focused on phytochemical screening and α-amylase inhibition assays to evaluate herbal therapeutic potential.
              </p>
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-blue-600"><CheckCircle2 size={18}/></div>
                <div>
                  <p className="font-bold">Methods Used</p>
                  <p className="text-slate-600 text-sm">Phytochemical Screening, Colorimetric Analysis, α-glucosidase Inhibition Assays.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-blue-600"><CheckCircle2 size={18}/></div>
                <div>
                  <p className="font-bold">Key Result</p>
                  <p className="text-slate-600 text-sm">Successfully demonstrated significant anti-diabetic potential in Cassia Auriculata plant extracts.</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Research Areas</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold">Pharmacology</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold">Herbal Medicine</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills & Tools */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Award className="text-blue-600" /> Professional Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Regulatory Affairs', 'Pharmacovigilance', 'Medical Writing', 
                'Clinical Pharmacy', 'Documentation', 'Drug Safety', 
                'Analytical Thinking', 'Problem Solving', 'Leadership'
              ].map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Globe className="text-blue-600" /> Tools & Digital
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'MS Office Suite', level: 'Expert' },
                { name: 'AI Research Tools', level: 'Proficient' },
                { name: 'Google Workspace', level: 'Proficient' },
                { name: 'Documentation', level: 'Detailed' },
              ].map((tool) => (
                <div key={tool.name} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <p className="font-bold text-slate-900">{tool.name}</p>
                  <p className="text-xs text-blue-600 font-bold uppercase mt-1">{tool.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          whileInView={{ scale: 0.98, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Contribute</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            I am actively seeking entry-level opportunities where I can apply my pharmaceutical knowledge 
            and dedication to patient safety.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:isayabamaselvam@gmail.com" className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/10 active:scale-95">
              Send an Email <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 text-slate-400">
              <Phone size={20} className="text-blue-500" />
              <span className="text-xl font-semibold">+91 8531847411</span>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center pb-12 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Isayabama Selvam. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
