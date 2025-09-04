import Link from 'next/link';
import React from 'react';


const Navbar = () => {
  return (
    <div className="sticky top-0 w-full py-4 border-b border-zinc-700/15 backdrop-blur-md text-white flex items-center justify-between px-4 z-[98]">
      <div className="flex items-center gap-2 mx-2 select-none">
        <h1 className="text-xl font-semibold italic">Quark</h1>
      </div>
      <div className="flex gap-8 items-center">
        <div className="space-x-5">
          <Link 
            href="/"
            className="text-zinc-400 hover:text-white transition-colors duration-300 select-none"
          >
            Home
          </Link>
          <p className="text-zinc-400 inline-block cursor-pointer hover:text-white transition-colors duration-300 select-none">
            Contest
          </p>
          <p className="text-zinc-400 hover:text-white transition-colors duration-300 inline-block cursor-pointer select-none">
            Assessments
          </p>
          <p className="text-zinc-400 hover:text-white transition-colors duration-300 inline-block cursor-pointer select-none">
            Contact
          </p>
        </div>
        <button className="inline-flex py-1 items-center justify-center rounded-md  bg-gradient-to-r from-purple-400/70 to-purple-400/30 px-4 text-white transition-colors focus:outline-none border border-zinc-700/40 cursor-pointer">
          Admin
        </button>
      </div>
    </div>
  );
};

export default Navbar;
