"use client"
import React from 'react';
import { BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FiGithub, FiMail } from 'react-icons/fi';
import { useTheme } from 'next-themes'

const Footer = () => {
    const { theme } = useTheme()
  return (
    <footer className={`w-full border-t ${
      theme === 'dark' 
        ? 'bg-black text-white border-zinc-800/50' 
        : 'bg-gray-50 text-gray-900 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div className="md:col-span-1">
            <h3 className={`text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-purple-400/70 to-purple-400/30'
                : 'from-purple-900/90 to-purple-800/70'
            }`}>
              Quark
            </h3>
            <p className={`text-sm leading-relaxed ${
              theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              Elevate your coding journey with our modern platform designed for competitive
              programming and skill assessment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className={`font-medium mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Platform</h4>
            <ul className={`space-y-2 text-sm ${
              theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Programming Contests
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Knowledge Assessments
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className={`font-medium mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Resources</h4>
            <ul className={`space-y-2 text-sm ${
              theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Community
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  theme === 'dark' 
                    ? 'hover:text-purple-400' 
                    : 'hover:text-purple-600'
                }`}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h4 className={`font-medium mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors group ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-zinc-700/50'
                    : 'bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 shadow-sm'
                }`}
              >
                <BsTwitterX className={`text-sm group-hover:text-white ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                }`} />
              </a>
              <a
                href="#"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors group ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-zinc-700/50'
                    : 'bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 shadow-sm'
                }`}
              >
                <BsLinkedin className={`text-sm group-hover:text-blue-400 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                }`} />
              </a>
              <a
                href="#"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors group ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-zinc-700/50'
                    : 'bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 shadow-sm'
                }`}
              >
                <BsInstagram className={`text-sm group-hover:text-pink-400 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                }`} />
              </a>
              <a
                href="#"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors group ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-zinc-700/50'
                    : 'bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 shadow-sm'
                }`}
              >
                <FiGithub className={`text-sm ${
                  theme === 'dark' 
                    ? 'text-zinc-400 group-hover:text-white' 
                    : 'text-gray-600 group-hover:text-gray-900'
                }`} />
              </a>
            </div>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              <FiMail className="inline mr-2" />
              support@quark.dev
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t py-6 ${
          theme === 'dark' ? 'border-zinc-800/50' : 'border-gray-200'
        }`}>
          <div className={`flex flex-col md:flex-row justify-between items-center text-sm ${
            theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
          }`}>
            <p>&copy; Quark 2025. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className={`transition-colors ${
                theme === 'dark' 
                  ? 'hover:text-purple-400' 
                  : 'hover:text-purple-600'
              }`}>
                Privacy Policy
              </a>
              <a href="#" className={`transition-colors ${
                theme === 'dark' 
                  ? 'hover:text-purple-400' 
                  : 'hover:text-purple-600'
              }`}>
                Terms of Service
              </a>
              <p>
                Made with ❤️ by{' '}
                <a
                  href="https://imdeeep.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    theme === 'dark'
                      ? 'text-purple-400 hover:text-purple-300'
                      : 'text-purple-600 hover:text-purple-700'
                  }`}
                >
                  mandeep.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pb-8">
          <h1 className={`leading-[14rem] bg-clip-text text-transparent text-center text-7xl md:text-[16.5rem] font-sans py-2 md:py-5 relative z-20 font-bold tracking-wider ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-white via-zinc-400 to-zinc-600'
              : 'bg-gradient-to-b from-gray-900 via-gray-600 to-gray-400'
          }`}>
            QUARK
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;