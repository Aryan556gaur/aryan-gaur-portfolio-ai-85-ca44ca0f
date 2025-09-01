
import React from 'react';
import { Brain, Code2, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Specialized in ML, DL, and NLP with focus on RAG systems"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end application development and deployment"
    },
    {
      icon: Rocket,
      title: "Mission-Critical Systems",
      description: "Building solutions for Indian Air Force and defense applications"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Creating applications used by 500+ users with 95% satisfaction"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Passionate AI Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm an AI developer with deep expertise in Machine Learning, Deep Learning, and Natural Language Processing. 
              Currently pursuing my Bachelor's in Computer Science Engineering at Madhav Institute of Technology and Science, 
              I specialize in building RAG systems and real-time AI applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My experience includes developing mission-critical solutions for the Indian Air Force, where I created 
              an AI-powered training simulator that improved knowledge retention by 76% and reduced query response 
              time by 40% through advanced RAG integration.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm passionate about building scalable, high-impact AI innovations that drive efficiency and automation, 
              always focusing on creating meaningful solutions that solve real-world problems.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Education</h4>
              <div className="glass-effect p-6 rounded-lg border border-border">
                <h5 className="font-semibold text-primary">Bachelor of Technology</h5>
                <p className="text-foreground">Computer Science and Engineering</p>
                <p className="text-muted-foreground">Madhav Institute of Technology and Science</p>
                <p className="text-muted-foreground text-sm">Oct 2022 – Apr 2026 | Gwalior, India</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-effect p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <item.icon size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Certifications</h3>
          <div className="flex justify-center">
            <div className="glass-effect p-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">NVIDIA</h4>
                  <p className="text-primary">Deep Learning Fundamentals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
