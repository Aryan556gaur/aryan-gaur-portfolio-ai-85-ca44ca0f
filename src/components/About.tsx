
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom" ref={ref}>
        {/* Section Title */}
        <h2 className={`section-title scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>About Me</h2>
        <div className={`section-underline mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-1`}></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className={`text-muted-foreground leading-relaxed text-lg scroll-hidden-left ${isVisible ? 'scroll-visible-x' : ''} stagger-2`}>
              I'm a Bachelor of Technology student with a strong foundation in Data Structures, 
              Algorithms, and Object-Oriented Programming—passionate about developing innovative, 
              high-impact AI solutions.
            </p>
            
            <p className={`text-muted-foreground leading-relaxed scroll-hidden-left ${isVisible ? 'scroll-visible-x' : ''} stagger-3`}>
              I specialize in RAG systems, machine learning, and deep learning systems, 
              with experience building production-ready AI solutions that improve retrieval 
              performance and enable privacy-aware model deployment.
            </p>

            <p className={`text-muted-foreground leading-relaxed scroll-hidden-left ${isVisible ? 'scroll-visible-x' : ''} stagger-4`}>
              I regularly sharpen problem-solving through competitive programming on LeetCode 
              and Codeforces with over 300+ DSA problems solved.
            </p>
          </div>

          {/* Right Column - Education Card */}
          <div className={`scroll-hidden-right ${isVisible ? 'scroll-visible-x' : ''} stagger-3`}>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h3>
            
            <div className="card-base card-hover p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-lg font-semibold text-primary mb-2 relative z-10">
                Madhav Institute of Technology and Science, Gwalior
              </h4>
              <p className="text-foreground font-medium mb-2 relative z-10">
                Bachelor of Technology - Computer Science and Engineering
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm relative z-10">
                <Calendar size={14} />
                <span>October 2022 - April 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
