import React from 'react';
import { BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white border-t border-zinc-800/50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8 py-12'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400/70 to-purple-400/30'>
              Quark
            </h3>
            <p className='text-zinc-400 text-sm leading-relaxed'>
              Elevate your coding journey with our modern platform designed for competitive programming and skill assessment.
            </p>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-1'>
            <h4 className='text-white font-medium mb-4'>Platform</h4>
            <ul className='space-y-2 text-sm text-zinc-400'>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Programming Contests</a></li>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Knowledge Assessments</a></li>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Learning Paths</a></li>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Certifications</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className='md:col-span-1'>
            <h4 className='text-white font-medium mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm text-zinc-400'>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Documentation</a></li>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Tutorials</a></li>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Community</a></li>
              <li><a href="#" className='hover:text-purple-400 transition-colors'>Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className='md:col-span-1'>
            <h4 className='text-white font-medium mb-4'>Connect</h4>
            <div className='flex space-x-3 mb-4'>
              <a href="#" className='w-9 h-9 bg-zinc-900/40 rounded-lg border border-zinc-800/50 flex items-center justify-center hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-colors group'>
                <BsTwitterX className='text-zinc-400 group-hover:text-white text-sm' />
              </a>
              <a href="#" className='w-9 h-9 bg-zinc-900/40 rounded-lg border border-zinc-800/50 flex items-center justify-center hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-colors group'>
                <BsLinkedin className='text-zinc-400 group-hover:text-blue-400 text-sm' />
              </a>
              <a href="#" className='w-9 h-9 bg-zinc-900/40 rounded-lg border border-zinc-800/50 flex items-center justify-center hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-colors group'>
                <BsInstagram className='text-zinc-400 group-hover:text-pink-400 text-sm' />
              </a>
              <a href="#" className='w-9 h-9 bg-zinc-900/40 rounded-lg border border-zinc-800/50 flex items-center justify-center hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-colors group'>
                <FiGithub className='text-zinc-400 group-hover:text-white text-sm' />
              </a>
            </div>
            <p className='text-zinc-400 text-sm'>
              <FiMail className='inline mr-2' />
              support@quark.dev
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-zinc-800/50 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500'>
            <p>&copy; Quark 2025. All rights reserved.</p>
            <div className='flex items-center space-x-6 mt-4 md:mt-0'>
              <a href="#" className='hover:text-purple-400 transition-colors'>Privacy Policy</a>
              <a href="#" className='hover:text-purple-400 transition-colors'>Terms of Service</a>
              <p>Made with ❤️ by <a href="https://imdeeep.vercel.app" target='_blank' rel='noopener noreferrer' className='text-purple-400 hover:text-purple-300 transition-colors'>mandeep.</a></p>
            </div>
          </div>
        </div>
        <div className='overflow-hidden pb-8'>
          <h1 className=" leading-[14rem] bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-400 to-secondary text-center text-7xl md:text-[16.5rem] font-sans py-2 md:py-5 relative z-20 font-bold tracking-wider">
            QUARK
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;