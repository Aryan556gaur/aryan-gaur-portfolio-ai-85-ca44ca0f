
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Download, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl animate-float animate-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/5 rounded-full blur-3xl animate-float animate-delay-500"></div>
        
        {/* Geometric decorations */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-sky-400 rounded-full animate-pulse animate-delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-violet-400 animate-pulse animate-delay-700"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          {/* Modern Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-primary via-sky-400 to-violet-400 p-1 animate-glow">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/9988ca4d-81ca-47c6-a168-f410af0935de.png" 
                  alt="Aryan Gaur - AI Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-400 rounded-full animate-pulse"></div>
          </div>

          {/* Name and Title with improved visibility */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground animate-fade-in">
            Aryan Gaur
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-primary"></div>
            <p className="text-xl md:text-2xl text-foreground font-medium animate-fade-in animate-delay-200">
              AI Developer & Machine Learning Engineer
            </p>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
            Specializing in RAG systems, real-time AI, and mission-critical applications. 
            Building scalable AI innovations that drive efficiency and automation for the Indian Air Force.
          </p>

          {/* GitHub Stats Integration */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 animate-fade-in animate-delay-500">
            <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
              <Github size={16} className="text-primary" />
              <span className="text-sm text-foreground">@Aryan556gaur</span>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
              <Star size={16} className="text-yellow-500" />
              <span className="text-sm text-foreground">Open Source Contributor</span>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm text-foreground">Gwalior, India</span>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-700">
            <div className="glass-effect p-4 rounded-xl text-center card-hover">
              <Mail size={20} className="text-primary mx-auto mb-2" />
              <p className="text-sm text-foreground">aryangaur556@gmail.com</p>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center card-hover">
              <Phone size={20} className="text-primary mx-auto mb-2" />
              <p className="text-sm text-foreground">+91 6264039881</p>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center card-hover">
              <MapPin size={20} className="text-primary mx-auto mb-2" />
              <p className="text-sm text-foreground">Gwalior, India</p>
            </div>
          </div>

          {/* Modern Social Links */}
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in animate-delay-1000">
            <a 
              href="https://github.com/Aryan556gaur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aryan-gaur-b49550258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:aryangaur556@gmail.com"
              className="p-4 glass-effect rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-1000">
            <a 
              href="#projects"
              className="px-8 py-4 gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2 justify-center"
            >
              <span>View My Work</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1xEY-I6x_jy1__DnobPXAcsjncP-hWPAb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-effect border border-primary/20 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
