
import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Intern Software Developer",
    company: "Indian Airforce",
    location: "Gwalior",
    period: "2024/10 – present",
    achievements: [
      "Developed an AI-powered training simulator, improving knowledge retention by 76% through interactive simulations",
      "Integrated a RAG-based AI system, reducing query response time by 40% for real-time, contextual learning"
    ]
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
            
            {/* Experience Card */}
            <div className="relative pl-20 pb-8">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
              
              {/* Content */}
              <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-xl text-purple-400 font-semibold">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin size={16} className="mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <TrendingUp size={20} className="text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies/Skills used */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['AI Development', 'RAG Systems', 'Interactive Simulations', 'Real-time AI', 'Training Systems'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="relative pl-20">
              <div className="absolute left-6 top-2 w-4 h-4 bg-green-400 rounded-full border-4 border-slate-900 animate-ping"></div>
              <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 p-4 rounded-lg border border-green-500/30">
                <p className="text-green-400 font-semibold">Currently Active</p>
                <p className="text-gray-300 text-sm">Continuing to develop innovative AI solutions for defense applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
