
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2.5 + 1.5,
          opacity: Math.random() * 0.4 + 0.4
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first (behind nodes)
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = 0.6 * (1 - distance / 180);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            // Gradient from teal to blue
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y);
            gradient.addColorStop(0, `hsla(200, 80%, 50%, ${opacity})`);
            gradient.addColorStop(1, `hsla(230, 70%, 55%, ${opacity})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        });
      });

      // Draw nodes on top
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw glowing node
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `hsla(210, 90%, 60%, ${particle.opacity})`);
        gradient.addColorStop(0.5, `hsla(220, 80%, 55%, ${particle.opacity * 0.6})`);
        gradient.addColorStop(1, `hsla(230, 70%, 50%, 0)`);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw solid core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210, 85%, 60%, ${particle.opacity + 0.2})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Interactive particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.85 }}
      />

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
            href="https://drive.google.com/file/d/1KY4cWUPVkzxX-ColoiUMxo867BAo6Dk8/view?usp=sharing"
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
