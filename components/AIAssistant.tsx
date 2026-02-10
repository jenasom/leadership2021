
import React, { useState } from 'react';
import { getLeadershipAdvice, getProgramRecommendation } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'recommend' | 'advice'>('recommend');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!interest.trim()) return;

    setLoading(true);
    setResult('');
    
    let response = '';
    if (mode === 'recommend') {
      response = await getProgramRecommendation(interest);
    } else {
      response = await getLeadershipAdvice(interest);
    }
    
    setResult(response);
    setLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">AI Leadership Pathfinder</h2>
            <p className="text-indigo-200 text-lg mb-8">
              Not sure where to start? Tell our AI about your interests or ask for a specific leadership tip to kickstart your journey.
            </p>
            
            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setMode('recommend')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${mode === 'recommend' ? 'bg-white text-indigo-900' : 'bg-indigo-800 text-indigo-300'}`}
              >
                Find a Program
              </button>
              <button 
                onClick={() => setMode('advice')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${mode === 'advice' ? 'bg-white text-indigo-900' : 'bg-indigo-800 text-indigo-300'}`}
              >
                Get Quick Advice
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder={mode === 'recommend' ? "e.g., I love public speaking and want to help my local community..." : "e.g., How do I resolve a conflict in my group project?"}
                className="w-full bg-indigo-800/50 border border-indigo-700 rounded-2xl p-4 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all min-h-[120px]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white text-indigo-900 rounded-2xl font-bold hover:bg-indigo-50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Thinking...
                  </>
                ) : 'Ask Pathfinder'}
              </button>
            </form>
          </div>

          <div className="bg-indigo-800/30 backdrop-blur-sm border border-indigo-700 rounded-3xl p-8 min-h-[300px] flex flex-col justify-center relative">
            {result ? (
              <div className="animate-fade-in">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Pathfinder Suggestion</h3>
                <p className="text-indigo-100 text-lg leading-relaxed italic">
                  "{result}"
                </p>
                <div className="mt-8">
                  <button className="text-sm font-semibold text-indigo-300 hover:text-white underline underline-offset-4">
                    Learn more about this path
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">🔮</div>
                <p className="text-indigo-300">Share your thoughts to get personalized guidance.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
