import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Send } from 'lucide-react';

const Contact = ({ isDark }) => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vkconcept", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/williams-victor", label: "LinkedIn" },
    { 
      icon: () => <img src="https://cdn-icons-png.flaticon.com/512/3046/3046125.png" alt="TikTok" className="w-6 h-6"/>,
      href: "https://www.tiktok.com/@kingvk.devv",
      label: "TikTok"
    },
    { 
      icon: () => <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="w-6 h-6"/>,
      href: "https://wa.me/2348176860084",
      label: "WhatsApp"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Opens Gmail in a new tab with prefilled subject & body
  const openGmail = () => {
    const email = "williamsvikky76@gmail.com";
    const subject = "Hello Williams - Portfolio Inquiry";
    const body = `Hi Williams,%0D%0A%0D%0AI came across your portfolio and I'm impressed with your work!%0D%0A%0D%0AI'd love to discuss:%0D%0A• Collaboration%0D%0A• Job opportunities%0D%0A• Your projects and experience%0D%0A%0D%0ALooking forward to connecting with you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className={`text-sm uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium mb-4`}>
            SEND A MESSAGE
          </p>
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
            Get In Touch
          </h2>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-12`}>
           I'm currently open to new job opportunities and collaborations. My inbox is always open, so whether you have a question, want to work together on a project, or just want to say hi, I'll be happy to respond.
          </p>
        </div>

        {/* Say Hello Button (opens Gmail) */}
        <button
          onClick={openGmail}
          className={`inline-flex items-center gap-3 px-8 py-4 border-2 ${isDark 
            ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' 
            : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'} rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Mail className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
          Say Hello
          <Send className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
        </button>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6 mt-12 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`p-3 rounded-lg ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all duration-300 transform hover:scale-110`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div> 

        {/* Copyright */}
        <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-8`}>
          <p>© 2025 - Williams Victor</p>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className={`flex flex-col items-center space-y-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors duration-300 group`}
          >
            <div className={`p-3 rounded-lg border ${isDark ? 'border-gray-600 group-hover:border-gray-500' : 'border-gray-300 group-hover:border-gray-400'} transition-colors duration-300`}>
              <ArrowUp className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">TOP</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
