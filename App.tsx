
import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { AIAssistant } from './components/AIAssistant';
import { ProgramSchedule } from './components/ProgramSchedule';
import { PROGRAMS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Feature Highlights */}
        <section className="py-20 border-y border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Mentorship</h3>
                <p className="text-slate-600">Connect with industry leaders and educators who care about your growth.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hands-on Projects</h3>
                <p className="text-slate-600">Learn by doing. Lead real community initiatives that make a tangible impact.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Accredited Path</h3>
                <p className="text-slate-600">Earn certifications that stand out on university applications and resumes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Core Programs</h2>
              <p className="text-slate-600 text-lg">Structured learning paths for every stage of your leadership journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROGRAMS.map((program) => (
                <div key={program.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                  <div className={`w-14 h-14 ${program.color} text-white text-3xl flex items-center justify-center rounded-2xl mb-6 shadow-lg shadow-blue-100`}>
                    {program.icon}
                  </div>
                  <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">{program.ageGroup}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 mb-8 flex-grow">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="text-sm font-medium text-slate-500">Duration: {program.duration}</span>
                    <button className="p-2 bg-slate-50 rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <ProgramSchedule />

        {/* AI Section */}
        <AIAssistant />

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Success Stories</h2>
              <p className="text-slate-600 text-lg">Hear from the students, parents, and mentors shaping YouthLead.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-50 rounded-3xl p-8 relative">
                  <div className="mb-6">
                    <span className="text-4xl text-blue-200">"</span>
                    <p className="text-slate-700 leading-relaxed -mt-4 italic">
                      {t.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white" />
                    <div>
                      <h4 className="font-bold text-slate-900">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Lead?</h2>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of young people across the globe and start your leadership journey today. 
                  Scholarships and early-bird discounts available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg">
                    Apply for 2021
                  </button>
                  <button className="px-10 py-4 bg-blue-500 text-white rounded-2xl font-bold text-xl hover:bg-blue-400 transition-all border border-blue-400">
                    Contact Admissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
