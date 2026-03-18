
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Profiles = () => {
  const { ref, isVisible } = useScrollAnimation();

  const profiles = [
    { name: "LinkedIn", icon: "💼", description: "Professional Network", link: "https://www.linkedin.com/in/aryan-gaur-b49550258" },
    { name: "GitHub", icon: "🐙", description: "Open Source Projects", link: "https://github.com/Aryan556gaur" },
    { name: "LeetCode", icon: "🏆", description: "Problem Solving", link: "https://leetcode.com/u/12Aryanleet/" },
    { name: "Codeforces", icon: "💻", description: "Competitive Programming", link: "https://codeforces.com/profile/aryangaur5562311" }
  ];

  return (
    <section id="profiles" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom" ref={ref}>
        <h2 className={`section-title scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>Profiles</h2>
        <div className={`section-underline mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-1`}></div>

        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-base card-hover p-6 w-40 text-center group relative overflow-hidden scroll-scale-hidden ${isVisible ? 'scroll-scale-visible' : ''} stagger-${index + 2}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10">{profile.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1 relative z-10">
                {profile.name}
              </h3>
              <p className="text-muted-foreground text-xs relative z-10">{profile.description}</p>
              <ExternalLink 
                size={14} 
                className="text-muted-foreground group-hover:text-primary transition-colors mx-auto mt-3 relative z-10" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
