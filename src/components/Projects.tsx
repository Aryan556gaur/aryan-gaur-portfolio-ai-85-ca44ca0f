
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PolicyPulse AI",
      period: "April 2025 – November 2025",
      description: "Government healthcare policy intelligence platform analyzing 52 Indian national and state-level health policy documents.",
      achievements: [
        "Analyzed 118,000+ lines (9.6M tokens) across 12 governance dimensions.",
        "Achieved 91% clause-level source attribution accuracy and 87% semantic relevance.",
        "Reduced public policy review and research effort by 76%."
      ],
      technologies: ["RAG", "Agents", "Langchain", "Gemini", "NLP", "Flask"],
      githubUrl: "https://github.com/Aryan556gaur/PolicyPulse",
      liveUrl: "https://policypulse.streamlit.app"
    },
    {
      title: "Federated Credit System",
      period: "March 2025 – June 2025",
      description: "Privacy-preserving federated learning system for credit scoring across distributed clients.",
      achievements: [
        "Implemented federated learning across 25+ clients, achieving 84% accuracy.",
        "Applied differential privacy (ε≈1–5, δ=1e-5), reducing data leakage risk by >90%.",
        "Built a fairness module cutting bias gaps by up to 25%."
      ],
      technologies: ["TensorFlow", "sklearn", "Opacus", "Fairlearn", "DP-accounting"],
      githubUrl: "https://github.com/Aryan556gaur/federated",
      liveUrl: null
    },
    {
      title: "Roommate Dekho App",
      period: "April 2024 – June 2024",
      description: "User-friendly web application helping users find compatible roommates using ML algorithms.",
      achievements: [
        "Used by 500+ users to find compatible roommates.",
        "Implemented KNN algorithm, reducing search time by 50%.",
        "Achieved 95% user satisfaction based on feedback."
      ],
      technologies: ["Python", "Machine Learning", "NLP", "KNN"],
      githubUrl: "https://github.com/Aryan556gaur/Roommate_Dekho",
      liveUrl: "https://roommate-dekho.streamlit.app"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">Projects</h2>
        <div className="section-underline mb-12"></div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-base card-hover p-6 flex flex-col"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.period}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-6 flex-grow">
                {project.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                    <p className="text-muted-foreground text-xs leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-10">
          <a 
            href="https://github.com/Aryan556gaur"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={18} />
            More Projects
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
