
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Intern Software Developer",
    company: "Indian Air Force",
    location: "Gwalior",
    period: "October 2024 – May 2025",
    achievements: [
      "Developed an AI-powered training simulator, improving knowledge retention by 76% through interactive simulations.",
      "Integrated a RAG-based AI system, reducing query response time by 40% for real-time, contextual learning.",
      "Built an AI bird detection system that classified 200+ bird species with 98% accuracy, improving aviation safety.",
      "Designed a data pipeline that processed 10,000+ images per day, helping reduce bird strike incidents by 30%."
    ],
    technologies: ["AI Development", "RAG Systems", "Deep Learning", "Computer Vision", "Python"]
  };

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-underline mb-12"></div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="card-base p-8 relative">
            {/* Blue accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"></div>
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Calendar size={14} />
                  <span>{experience.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-primary font-semibold flex items-center gap-1">
                    <Briefcase size={16} />
                    {experience.company}
                  </span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <MapPin size={14} />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3 mb-6">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
