
import React from 'react';
import { ExternalLink, Trophy, Award, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation();

  const competitiveProfiles = [
    {
      name: "LeetCode",
      icon: "🏆",
      stats: ["Completed 300+ algorithmic challenges", "Rating: 1800", "Top Problem Solver"],
      link: "https://leetcode.com/u/12Aryanleet/",
      color: "from-orange-400 to-yellow-500"
    },
    {
      name: "Codeforces",
      icon: "💻",
      stats: ["Attained Pupil rank", "Highest rating: 1362", "Strong algorithmic skills"],
      link: "https://codeforces.com/profile/aryangaur5562311",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const certifications = [
    { title: "NVIDIA — Deep Learning Fundamentals", issuer: "NVIDIA", icon: "🎓" }
  ];

  return (
    <section id="achievements" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="container-custom" ref={ref}>
        <h2 className={`section-title scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>Achievements</h2>
        <div className={`section-underline mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-1`}></div>

        {/* Certification */}
        <div className={`mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-2`}>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <Award className="text-primary" size={24} />
            Certifications
          </h3>
          <div className="flex justify-center">
            {certifications.map((cert, index) => (
              <div key={index} className="card-base card-hover p-6 flex items-center gap-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-3xl relative z-10">{cert.icon}</span>
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Programming */}
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-3`}>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <Code className="text-primary" size={24} />
            Competitive Programming
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {competitiveProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-base card-hover p-6 group block relative overflow-hidden scroll-scale-hidden ${isVisible ? 'scroll-scale-visible' : ''} stagger-${index + 4}`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}></div>
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{profile.icon}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{profile.name}</h4>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </div>
                
                <div className="space-y-2 relative z-10">
                  {profile.stats.map((stat, statIndex) => (
                    <p key={statIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {stat}
                    </p>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
