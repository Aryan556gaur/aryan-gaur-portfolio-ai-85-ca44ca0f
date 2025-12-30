
import React from 'react';
import { ExternalLink, Trophy, Award, Code } from 'lucide-react';

const Achievements = () => {
  const competitiveProfiles = [
    {
      name: "LeetCode",
      icon: "🏆",
      stats: [
        "Completed 300+ algorithmic challenges",
        "Rating: 1800",
        "Top Problem Solver"
      ],
      link: "https://leetcode.com/u/12Aryanleet/",
      color: "from-orange-400 to-yellow-500"
    },
    {
      name: "Codeforces",
      icon: "💻",
      stats: [
        "Attained Pupil rank",
        "Highest rating: 1362",
        "Strong algorithmic skills"
      ],
      link: "https://codeforces.com/profile/aryangaur5562311",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const certifications = [
    {
      title: "NVIDIA — Deep Learning Fundamentals",
      issuer: "NVIDIA",
      icon: "🎓"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">Achievements</h2>
        <div className="section-underline mb-12"></div>

        {/* Certification */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <Award className="text-primary" size={24} />
            Certifications
          </h3>
          <div className="flex justify-center">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="card-base card-hover p-6 flex items-center gap-4"
              >
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Programming Stats */}
        <div>
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
                className="card-base card-hover p-6 group block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{profile.icon}</span>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {profile.name}
                  </h4>
                  <ExternalLink 
                    size={16} 
                    className="text-muted-foreground group-hover:text-primary transition-colors ml-auto" 
                  />
                </div>
                
                <div className="space-y-2">
                  {profile.stats.map((stat, statIndex) => (
                    <p 
                      key={statIndex}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
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
