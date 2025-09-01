
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-purple-500/20">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Aryan.dev
            </h3>
            <p className="text-gray-400 text-sm">
              AI Developer & Machine Learning Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Aryan556gaur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aryan-gaur-b49550258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:aryangaur556@gmail.com"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made with <Heart size={16} className="text-red-400 mx-1" /> by Aryan Gaur
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            Passionate about building AI solutions that make a difference.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
