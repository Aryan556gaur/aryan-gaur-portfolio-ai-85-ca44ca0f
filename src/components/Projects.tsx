
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "AgentFlow",
      period: "April 2026 – May 2026",
      description: "No-code AI agent platform where users visually create and deploy multi-agent workflows.",
      achievements: [
        "Shrank AI workflow development time by 85% with support for 20+ workflow nodes.",
        "Built a scalable FastAPI execution engine integrating LLMs, external APIs, memory, and tool-calling, powering 50+ agent-task configurations with real-time monitoring."
      ],
      technologies: ["React", "FastAPI", "Redis", "PostgreSQL", "LangChain", "Gemini"],
      githubUrl: "https://github.com/Aryan556gaur/agentflow",
      liveUrl: "http://139.84.159.193/workflows"
    },
    {
      title: "NeuralAttend – Smart Attendance",
      period: "September 2025 – November 2025",
      description: "Face recognition attendance system with a Flask REST API backend and real-time webcam dashboard.",
      achievements: [
        "Built a Flask REST API (10+ endpoints) with a single-page web dashboard for real-time webcam-based face detection and one-click attendance marking.",
        "Optimized a KNN classifier (k=5) on 7,500-feature face encodings for reliable multi-student identification; auto-exports per-day CSV reports."
      ],
      technologies: ["Python", "Flask", "OpenCV", "KNN", "SQLite"],
      githubUrl: "https://github.com/Aryan556gaur/smart_attendance",
      liveUrl: "http://139.84.159.193:8080/"
    },
    {
      title: "Federated Credit System",
      period: "March 2025 – June 2025",
      description: "Privacy-preserving federated learning system for credit scoring across distributed clients.",
      achievements: [
        "Architected distributed training across 25+ client nodes (FedAvg & FedProx), achieving 84% accuracy on non-IID data and improving convergence speed by 15%.",
        "Integrated a differential privacy layer (ε≈1–5, δ=1e-5) lowering data leakage risk by 80%+, and a fairness module narrowing bias gaps by 25%."
      ],
      technologies: ["TensorFlow", "sklearn", "Opacus", "Fairlearn", "DP-accounting"],
      githubUrl: "https://github.com/Aryan556gaur/federated",
      liveUrl: null
    },
    {
      title: "Roommate Dekho App",
      period: "April 2024 – June 2024",
      description: "User-friendly roommate-matching web application powered by ML algorithms.",
      achievements: [
        "Delivered to 50+ users with Flask RESTful endpoints for registration, preferences, and match retrieval, deployed on Vercel.",
        "KNN algorithm shaved search time by 50%."
      ],
      technologies: ["Python", "Flask", "Machine Learning", "KNN"],
      githubUrl: "https://github.com/Aryan556gaur/Roommate_Dekho",
      liveUrl: "https://roommate-dekho.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container-custom" ref={ref}>
        <h2 className={`section-title scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>Projects</h2>
        <div className={`section-underline mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-1`}></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-base card-hover p-6 flex flex-col group relative overflow-hidden scroll-scale-hidden ${isVisible ? 'scroll-scale-visible' : ''} stagger-${index + 2}`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.period}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="space-y-2 mb-6 flex-grow">
                  {project.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                      <p className="text-muted-foreground text-xs leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 scroll-hidden ${isVisible ? 'scroll-visible' : ''} stagger-5`}>
          <a
            href="https://github.com/Aryan556gaur" target="_blank" rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={18} /> More Projects <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
