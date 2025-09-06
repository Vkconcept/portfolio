import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
      { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
          
          {/* Logo */}
          <div className={`w-8 h-8 ${isDark ? 'bg-blue-500' : 'bg-blue-600'} rounded flex items-center justify-center z-10`}>
            <span className="text-white font-bold text-sm">&lt;/&gt;</span>
          </div>

          {/* Desktop Links (centered) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:${isDark ? 'text-blue-400' : 'text-blue-600'} transition-colors font-medium`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center space-x-4 z-10">
            {/* Resume */}
          <a
                href="/WILLIAMS VICTOR RESUME.pdf"
                 download           
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium inline-flex items-center gap-2"
                   >
                 Resume
                    </a>


            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg hover:${isDark ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 z-10"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 z-50 bg-gray-900 text-white transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col mt-6 space-y-6 px-6">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transform transition-all duration-500 ease-out ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Resume */}
          <li
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            className={`transform transition-all duration-500 ease-out ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              Resume
            </button>
          </li>

          {/* Theme Toggle */}
          <li
            style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
            className={`transform transition-all duration-500 ease-out ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
