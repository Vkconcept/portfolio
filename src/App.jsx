import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section with id="home" for scrolling */}
      <section id="home">
        <Hero isDark={isDark} />
      </section>

      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
};

export default Portfolio;
