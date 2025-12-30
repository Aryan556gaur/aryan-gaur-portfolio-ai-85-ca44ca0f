
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 text-center pt-20">
        {/* Main Heading with typing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Hello, I'm{' '}
          <span className="text-primary">Aryan Gaur</span>
          <span className="typing-cursor"></span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 animate-fade-in animate-delay-200">
          <span className="font-semibold text-foreground">AI Developer</span>
          {' • '}
          <span className="font-semibold text-foreground">Machine Learning Engineer</span>
          {' • '}
          <span className="font-semibold text-foreground">Competitive Programmer</span>
        </p>

        {/* Tagline */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-300">
          I build scalable, user-centric AI solutions and love shipping clean, reliable systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-500">
          <a 
            href="#projects"
            className="btn-primary"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a 
            href="https://drive.google.com/file/d/1iT3Z2cd1B-074A_9LYdqaG_vVvclL33r/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
