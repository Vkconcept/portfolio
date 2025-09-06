import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const TikTokIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={className}
  >
    <defs>
      <linearGradient id="tiktokGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#69C9D0" />
        <stop offset="50%" stopColor="#EE1D52" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
    </defs>
    <path
      fill="url(#tiktokGradient)"
      d="M448,209.3v102.8c0,84.1-68.2,152.3-152.3,152.3S143.4,396.2,143.4,312H179c0,74.5,60.8,135.3,135.3,135.3s135.3-60.8,135.3-135.3V120h-56.6v89.3c0,43.9-35.7,79.6-79.6,79.6s-79.6-35.7-79.6-79.6V0h56.6v209.3h0Z"
    />
  </svg>
);

const SocialLinks = ({ isDark }) => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/vkconcept", label: "GitHub", color: "#181717" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/williams-victor-410946382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn", color: "#0A66C2" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@kingvk.devv", label: "TikTok" }
  ];

  return (
    <div className="flex items-center space-x-4 pt-4">
      {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
        <a 
          key={index}
          href={href}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={label}
          className={`p-3 rounded-lg ${
            isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
          } border ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          } transition-colors`}
        >
          <Icon className="w-6 h-6" style={color ? { color } : {}} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
