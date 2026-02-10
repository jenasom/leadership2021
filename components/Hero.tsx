
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6 tracking-wide animate-fade-in">
            ENROLLING FOR SPRING 2021
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Build the Skills to <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Lead Your Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            World-class leadership training designed specifically for teenagers and youths. 
            Go beyond theory with hands-on projects, expert mentorship, and a global community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#programs" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1">
              Explore Our Programs
            </a>
            <a href="#ai-assistant" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Try the AI Pathfinder
            </a>
          </div>
        </div>

        <div className="mt-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/youthleadership/1200/600" 
              alt="Teens collaborating" 
              className="w-full object-cover h-[400px] md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
          
          {/* Floating Stats Card */}
          <div className="absolute -bottom-10 -right-6 md:right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/student${i}/40/40`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Student" />
                ))}
              </div>
              <span className="font-bold text-slate-900">5,000+ Students</span>
            </div>
            <p className="text-sm text-slate-500">Graduates from over 50 countries transforming their local communities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
