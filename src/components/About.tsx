
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">About Me</h2>
        <div className="section-underline mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Bachelor of Technology student with a strong foundation in Data Structures, 
              Algorithms, and Object-Oriented Programming—passionate about developing innovative, 
              high-impact AI solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I specialize in RAG systems, machine learning, and deep learning systems, 
              with experience building production-ready AI solutions that improve retrieval 
              performance and enable privacy-aware model deployment.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I regularly sharpen problem-solving through competitive programming on LeetCode 
              and Codeforces with over 300+ DSA problems solved.
            </p>
          </div>

          {/* Right Column - Education Card */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h3>
            
            <div className="card-base card-hover p-6">
              <h4 className="text-lg font-semibold text-primary mb-2">
                Madhav Institute of Technology and Science, Gwalior
              </h4>
              <p className="text-foreground font-medium mb-2">
                Bachelor of Technology - Computer Science and Engineering
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
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
