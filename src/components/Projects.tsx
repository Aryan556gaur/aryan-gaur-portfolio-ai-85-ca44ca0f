
import React from 'react';
import { ExternalLink, Github, Users, Zap, Target, Star, GitFork, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Federated Learning System",
      description: "Advanced federated learning implementation for distributed machine learning without compromising data privacy across multiple devices and networks.",
      achievements: [
        "Privacy-preserving ML training",
        "Distributed computing architecture", 
        "Secure multi-party computation",
        "Scalable federated optimization"
      ],
      technologies: ["Python", "Federated Learning", "Distributed Systems", "Privacy Tech", "TensorFlow"],
      icon: Target,
      gradient: "from-purple-400 to-pink-400",
      githubStats: {
        stars: 15,
        forks: 8,
        watchers: 12
      },
      githubUrl: "https://github.com/Aryan556gaur/federated",
      liveUrl: "#",
      featured: true
    },
    {
      title: "DharmaDarshan",
      description: "AI-powered spiritual guidance system using Bhagavad Gita and Mahabharata insights for character building and decision-making.",
      achievements: [
        "89% accuracy in answering spiritual queries",
        "60% faster retrieval using LangChain hybrid search",
        "Gamified character-building features",
        "Ancient wisdom meets modern AI"
      ],
      technologies: ["HTML", "NLP", "LangChain", "AI", "Spiritual Computing"],
      icon: Target,
      gradient: "from-violet-400 to-sky-400",
      githubStats: {
        stars: 12,
        forks: 4,
        watchers: 8
      },
      githubUrl: "https://github.com/Aryan556gaur/DharmaDarshan",
      liveUrl: "https://dharmadarshan.netlify.app",
      featured: true
    },
    {
      title: "Roommate Dekho",
      description: "A user-friendly web application helping users find compatible roommates using advanced matching algorithms and preference-based filtering.",
      achievements: [
        "Advanced roommate matching algorithm",
        "User preference-based filtering",
        "Intuitive and responsive interface",
        "Secure user authentication system"
      ],
      technologies: ["Python", "K-Nearest Neighbors", "Web Development", "Algorithm Optimization", "Django"],
      icon: Users,
      gradient: "from-emerald-400 to-sky-400",
      githubStats: {
        stars: 23,
        forks: 8,
        watchers: 15
      },
      githubUrl: "https://github.com/Aryan556gaur/Roommate_Dekho",
      liveUrl: "#",
      featured: true
    },
    {
      title: "AI Bird Detection System",
      description: "Advanced AI system for aviation safety that classified 200+ bird species with 98% accuracy, processing 10,000+ images daily for the Indian Air Force.",
      achievements: [
        "98% accuracy in bird species classification",
        "30% reduction in bird strike incidents", 
        "10,000+ images processed per day",
        "Improved aviation safety operations"
      ],
      technologies: ["Python", "Deep Learning", "Computer Vision", "Aviation Safety", "CNN"],
      icon: Target,
      gradient: "from-cyan-400 to-blue-500",
      githubStats: {
        stars: 18,
        forks: 6,
        watchers: 14
      },
      githubUrl: "https://github.com/Aryan556gaur/iaf",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Sign Language Detection",
      description: "Real-time sign language recognition system using computer vision and machine learning for accessibility and communication.",
      achievements: [
        "Real-time gesture recognition",
        "Multi-language sign support",
        "High accuracy detection model",
        "Accessibility-focused design"
      ],
      technologies: ["Python", "Computer Vision", "ML", "Accessibility", "OpenCV"],
      icon: Users,
      gradient: "from-green-400 to-blue-400",
      githubStats: {
        stars: 5,
        forks: 2,
        watchers: 4
      },
      githubUrl: "https://github.com/Aryan556gaur/Sign-Language-Detection",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Text Summarizer Project",
      description: "Advanced NLP-based text summarization tool using machine learning to extract key insights from large documents.",
      achievements: [
        "Extractive and abstractive summarization",
        "Multi-document processing capability",
        "Interactive Jupyter notebook implementation",
        "Efficient text preprocessing pipeline"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "Jupyter", "NLTK"],
      icon: Zap,
      gradient: "from-orange-400 to-red-400",
      githubStats: {
        stars: 4,
        forks: 1,
        watchers: 3
      },
      githubUrl: "https://github.com/Aryan556gaur/Text-Summarizer-Project",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Smart Traffic Management",
      description: "AI-powered traffic optimization system for intelligent urban traffic flow management and congestion reduction.",
      achievements: [
        "Real-time traffic flow optimization",
        "Computer vision for vehicle detection",
        "Smart signal timing algorithms"
      ],
      technologies: ["AI", "Computer Vision", "Traffic Optimization", "Smart Cities"],
      icon: Zap,
      gradient: "from-blue-400 to-cyan-400",
      githubStats: {
        stars: 7,
        forks: 3,
        watchers: 5
      },
      githubUrl: "https://github.com/Aryan556gaur/SmartTrafficManagement",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative AI solutions that solve real-world problems and create meaningful impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl border border-border/50 hover:border-primary/30 card-hover group overflow-hidden"
            >
              {/* Modern Project Header */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* GitHub Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500" />
                      <span>{project.githubStats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} className="text-sky-400" />
                      <span>{project.githubStats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} className="text-violet-400" />
                      <span>{project.githubStats.watchers}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-foreground">Key Achievements:</h4>
                  {project.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <Zap size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 gradient-primary text-white rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 font-medium"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                  {project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 glass-effect border border-primary/20 text-primary rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Other Notable Projects</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl card-hover border border-border/50 hover:border-primary/30">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon size={20} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Star size={12} className="text-yellow-500" />
                    <span>{project.githubStats.stars}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 glass-effect text-sm rounded-lg hover:bg-primary/10 transition-colors text-center"
                  >
                    <Github size={14} className="inline mr-1" />
                    Code
                  </a>
                  {project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 glass-effect text-sm rounded-lg hover:bg-primary/10 transition-colors text-center"
                    >
                      <ExternalLink size={14} className="inline mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <Github size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Explore More on GitHub</h3>
            <p className="text-muted-foreground mb-6">
              Check out my complete portfolio of projects, contributions, and open-source work. 
              Follow me for the latest updates on AI innovations.
            </p>
            <a 
              href="https://github.com/Aryan556gaur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Github size={20} />
              <span>Follow on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
