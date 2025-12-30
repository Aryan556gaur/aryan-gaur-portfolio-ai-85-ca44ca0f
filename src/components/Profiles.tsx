
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Profiles = () => {
  const profiles = [
    {
      name: "LinkedIn",
      icon: "💼",
      description: "Professional Network",
      link: "https://www.linkedin.com/in/aryan-gaur-b49550258",
      color: "bg-blue-500"
    },
    {
      name: "GitHub",
      icon: "🐙",
      description: "Open Source Projects",
      link: "https://github.com/Aryan556gaur",
      color: "bg-gray-800"
    },
    {
      name: "LeetCode",
      icon: "🏆",
      description: "Problem Solving",
      link: "https://leetcode.com/u/Aryan556gaur/",
      color: "bg-orange-500"
    },
    {
      name: "Codeforces",
      icon: "💻",
      description: "Competitive Programming",
      link: "https://codeforces.com/profile/",
      color: "bg-cyan-500"
    },
    {
      name: "CodeChef",
      icon: "👨‍🍳",
      description: "Contest Platform",
      link: "https://www.codechef.com/users/",
      color: "bg-amber-600"
    }
  ];

  return (
    <section id="profiles" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">Profiles</h2>
        <div className="section-underline mb-12"></div>

        {/* Profiles Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base card-hover p-6 w-40 text-center group"
            >
              <div className="text-4xl mb-3">{profile.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {profile.name}
              </h3>
              <p className="text-muted-foreground text-xs">{profile.description}</p>
              <ExternalLink 
                size={14} 
                className="text-muted-foreground group-hover:text-primary transition-colors mx-auto mt-3" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
