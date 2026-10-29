
import React from 'react';
import {
  Brain, Code2, Database, Cloud, Network, Terminal, GitBranch, Layers
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    { title: "AI/ML Engineering", icon: Brain, skills: ["LLM Integration & Fine-Tuning", "Multi-Agent Systems", "Generative AI", "Computer Vision", "NLP", "Model Deployment"] },
    { title: "Deep Learning", icon: Layers, skills: ["Image Classification", "Object Detection", "Face Recognition", "TensorFlow", "PyTorch"] },
    { title: "Frameworks", icon: Code2, skills: ["FastAPI", "Flask", "LangChain", "LlamaIndex", "LangGraph"] },
    { title: "Databases", icon: Database, skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AstraDB", "SQLite"] },
    { title: "Cloud & DevOps", icon: Cloud, skills: ["AWS (EC2, S3)", "Docker", "Git & GitHub", "CI/CD", "Vercel", "Linux"] },
    { title: "System Design", icon: Network, skills: ["Distributed Systems", "Caching", "Load Balancing", "Message Queues", "Rate Limiting"] },
    { title: "Languages", icon: Terminal, skills: ["Python", "C", "C++", "SQL"] },
    { title: "Core CS", icon: GitBranch, skills: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"] }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom" ref={ref}>
        <h2 className={`section-title scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>Technical Skills</h2>
        <div className={`section-underline mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-1`}></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`card-base card-hover p-6 text-center group relative overflow-hidden scroll-scale-hidden ${isVisible ? 'scroll-scale-visible' : ''} stagger-${Math.min(index + 1, 8)}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="skill-icon-container mx-auto mb-4 relative z-10">
                <category.icon
                  size={28}
                  className="text-primary group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-sm relative z-10">
                {category.title}
              </h3>
              <div className="space-y-1 relative z-10">
                {category.skills.slice(0, 4).map((skill, skillIndex) => (
                  <p key={skillIndex} className="text-muted-foreground text-xs">{skill}</p>
                ))}
                {category.skills.length > 4 && (
                  <p className="text-primary text-xs font-medium">+{category.skills.length - 4} more</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
