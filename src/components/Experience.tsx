
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Woofly.in",
      location: "Remote",
      period: "April 2026 – September 2026",
      achievements: [
        "Built an end-to-end pet-analysis pipeline that processes pet images across multiple physical attributes to produce automated pet profiles.",
        "Developed a personalized grooming recommendation engine using attribute-based similarity scoring, mapping 1000+ pet profiles to grooming styles/services.",
        "Improved recommendation relevance by 45% and cut manual assessment effort by 65%."
      ],
      technologies: ["Computer Vision", "Recommendation Systems", "Python", "Image Processing", "REST APIs"]
    },
    {
      title: "Software Developer Intern",
      company: "Indian Air Force",
      location: "Gwalior",
      period: "October 2024 – May 2025",
      achievements: [
        "Designed and integrated a backend document retrieval service into a training simulator, cutting query response time by 40% via optimized indexing, caching, and REST API design.",
        "Deployed an image processing pipeline handling 10,000+ images/day, reducing bird-strike incidents by 30% through automated preprocessing and batch inference.",
        "Shipped a computer vision module (20+ classes, 92% accuracy) into an existing aviation safety system with zero-downtime deployment and structured observability logging."
      ],
      technologies: ["Computer Vision", "Document Retrieval", "REST API Design", "Caching", "Python"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container-custom" ref={ref}>
        <h2 className={`section-title scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>Professional Experience</h2>
        <div className={`section-underline mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-1`}></div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, expIndex) => (
            <div
              key={expIndex}
              className={`card-base p-8 relative group overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-${expIndex + 2}`}
            >
              {/* Animated accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 rounded-l-xl transition-all duration-500 group-hover:w-1.5"></div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Calendar size={14} />
                      <span>{experience.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{experience.title}</h3>
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

                <div className="space-y-3 mb-6">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium group-hover:bg-primary/15 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
