
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryangaur556@gmail.com",
      href: "mailto:aryangaur556@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6264039881",
      href: "tel:+916264039881"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gwalior, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative AI solutions? Let's discuss your next project or opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently available for internships, freelance projects, and full-time opportunities 
                in AI development, machine learning, and software engineering. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Aryan556gaur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                >
                  <Github size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aryan-gaur-b49550258" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 p-6 rounded-lg border border-green-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full absolute"></div>
                <span className="text-green-400 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                Currently seeking internships and project collaborations in AI/ML
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white transition-colors duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
