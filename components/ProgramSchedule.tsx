
import React from 'react';
import { SCHEDULE_EVENTS } from '../constants';

const typeColors = {
  Workshop: 'bg-blue-100 text-blue-700',
  Seminar: 'bg-purple-100 text-purple-700',
  Project: 'bg-emerald-100 text-emerald-700',
  Summit: 'bg-amber-100 text-amber-700',
};

export const ProgramSchedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Program Schedule</h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              Stay up to date with our upcoming sessions, workshops, and community events. 
              Mark your calendars for the transformative experiences ahead.
            </p>
          </div>
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Download Full Calendar 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {SCHEDULE_EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
            >
              {/* Date Box */}
              <div className="flex-shrink-0 w-24 h-24 bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg shadow-blue-100">
                <span className="text-sm font-bold uppercase opacity-80">{event.date.split(' ')[0]}</span>
                <span className="text-3xl font-black">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>

              {/* Event Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${typeColors[event.type]}`}>
                    {event.type}
                  </span>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {event.time}
                  </span>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {event.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{event.title}</h3>
                <p className="text-slate-600 line-clamp-2 md:line-clamp-1">{event.description}</p>
              </div>

              {/* Action */}
              <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <button className="w-full md:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all text-sm">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 border-2 border-dashed border-slate-200 rounded-3xl">
          <p className="text-slate-500 font-medium">
            Looking for customized group training sessions for your school or organization?
          </p>
          <a href="#contact" className="text-blue-600 font-bold hover:underline mt-2 inline-block">
            Inquire about private programs
          </a>
        </div>
      </div>
    </section>
  );
};
