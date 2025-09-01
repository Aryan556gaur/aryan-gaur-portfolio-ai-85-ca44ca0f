
import React from 'react';
import { Brain, Database, Cloud, Code, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Natural Language Processing",
      skills: ["Generative AI", "RAG", "Sentiment Analysis", "GANs", "Text Generation", "Text Translation"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python (Pandas, NumPy, Matplotlib, Plotly, Seaborn)", "C", "C++"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      skills: ["Image Classification", "Object Detection", "Object Tracking", "Face Recognition", "Image-to-Text"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "AstraDB", "Pinecone"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Microsoft Azure", "Git", "GitHub"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the AI and software development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-2 group/skill"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover/skill:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-300 text-sm group-hover/skill:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">Proficiency</span>
                  <span className="text-xs text-cyan-400">Advanced</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-lg border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'RAG Systems', 'Real-time AI', 'Interactive Simulations', 'Mission-Critical Systems',
                'Scalable AI Solutions', 'Data Analysis', 'Model Deployment', 'System Optimization'
              ].map((competency) => (
                <span 
                  key={competency}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover:border-cyan-400 transition-colors duration-300"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
