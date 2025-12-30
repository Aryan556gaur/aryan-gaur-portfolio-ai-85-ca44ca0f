
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
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

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Aryan556gaur"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aryan-gaur-b49550258"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">Contact Me</h2>
        <div className="section-underline mb-12"></div>

        <div className="max-w-2xl mx-auto text-center">
          {/* Email as primary CTA */}
          <a 
            href="mailto:aryangaur556@gmail.com"
            className="text-xl md:text-2xl font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 mb-8"
          >
            <Mail size={24} />
            aryangaur556@gmail.com
          </a>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="card-base card-hover p-4 text-center group"
              >
                <item.icon 
                  size={20} 
                  className="text-primary mx-auto mb-2" 
                />
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 card-base card-hover group"
                aria-label={link.label}
              >
                <link.icon 
                  size={24} 
                  className="text-muted-foreground group-hover:text-primary transition-colors" 
                />
              </a>
            ))}
          </div>

          {/* Availability */}
          <div className="mt-10 p-4 bg-green-50 border border-green-200 rounded-xl inline-flex items-center gap-3">
            <div className="relative">
              <span className="w-3 h-3 bg-green-500 rounded-full block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full absolute top-0 animate-ping"></span>
            </div>
            <span className="text-green-700 font-medium text-sm">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
