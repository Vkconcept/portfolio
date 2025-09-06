import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiVite,
  SiTailwindcss,
  SiGithub,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";

const About = ({ isDark }) => {
  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'JAVASCRIPT', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'REACT', icon: SiReact, color: '#61DAFB' },
    { name: 'GIT', icon: SiGit, color: '#F05032' },
    { name: 'VITE', icon: SiVite, color: '#646CFF' },
    { name: 'TAILWIND', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'GITHUB', icon: SiGithub, color: '#181717' },
    { name: 'BOOTSTRAP', icon: SiBootstrap, color: '#7952B3' },
  ];

  // Animation variants
  const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const iconVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`text-sm uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium mb-2`}>
            — LEARNING PATH
          </p>
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            ABOUT & SKILLS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <motion.div
            className="space-y-6 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Hello 👋 and welcome to my portfolio! I'm Williams Victor, a Frontend Developer passionate about building fast, scalable, and user-friendly web applications.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I focus on clean, maintainable code with modern technologies like React, JavaScript, Tailwind CSS, and Bootstrap to create high-performing interfaces.
            </p>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={iconVariant}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                  variants={{
                    hidden: { x: 50, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent size={48} color={skill.color} />
                  <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
