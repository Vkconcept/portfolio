import React, { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import ProfileImage from './ProfileImage';

const Hero = ({ isDark }) => {
  const fullName = "Williams Victor.";
  const [typedName, setTypedName] = useState("");
  const [typingDone, setTypingDone] = useState(false); // Track typing completion

  // Typing effect for name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) {
        clearInterval(interval);
        setTypingDone(true); // Typing finished
      }
    }, 150); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content */}
          <div className="space-y-8 overflow-hidden">

            <div className="space-y-2">
              <p
                className={`text-sm uppercase tracking-wider ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                } font-medium`}
              >
                👋 MY NAME IS
              </p>

              {/* Name with typing animation */}
              <h1
                className={`text-5xl lg:text-6xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } leading-tight`}
              >
                {typedName}
                {!typingDone && <span className="inline-block animate-pulse">|</span>} {/* Hide cursor after typing */}
              </h1>
            </div>

            {/* Fade-in animation for other texts */}
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed opacity-0 animate-fadeIn ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                A Frontend Developer focused on building fast, scalable, and maintainable web applications. I care deeply about performance, clean architecture, and delivering seamless user experiences.
              </p>

              <p
                className={`text-lg leading-relaxed opacity-0 animate-fadeIn ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                Proficient in React JS, JavaScript, Tailwind CSS, and Bootstrap building fast, modern, and maintainable web applications.
              </p>
            </div>

            <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <SocialLinks isDark={isDark} />
            </div>

          </div>

          {/* Right Column - Profile Image */}
          <ProfileImage isDark={isDark} />

        </div>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s forwards;
          }
          .animate-pulse {
            animation: pulse 1s infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </main>
  );
};

export default Hero;
