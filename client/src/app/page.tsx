"use client"
import React from 'react';
import { GoTrophy } from 'react-icons/go';
import { LuBrain } from 'react-icons/lu';
import { FiUsers, FiTrendingUp, FiClock, FiCalendar, FiZap, FiArrowRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckSquare } from 'react-icons/bs';
import { useTheme } from 'next-themes'

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen top-0 relative ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <div className="h-auto w-[90%] mx-auto bg-transparent py-10 z-30">
          <button className={`shimmer font-light flex gap-2 text-sm rounded-full px-5 py-1 mx-auto z-30 mb-6 transition-colors ${
            theme === 'dark' 
              ? 'text-white bg-[linear-gradient(110deg,#000103,45%,#1F1F1F,55%,#000000)] border border-zinc-800/50 hover:border-zinc-700/70' 
              : 'text-gray-700 bg-[linear-gradient(110deg,#f8f9fa,45%,#e9ecef,55%,#ffffff)] border border-gray-300/50 hover:border-gray-400/70'
          }`}>
            ✨ Modern Coding Platform
          </button>

          <h1 className="text-center text-5xl md:text-6xl font-sans py-2 md:py-5 relative z-20 font-medium tracking-wide">
            Elevate Your{' '}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-purple-400/70 to-purple-400/30'
                  : 'from-purple-900/90 to-purple-800/70'
              }`}
            >
              Coding Journey
            </span>
          </h1>

          <p className={`text-sm md:text-lg mx-auto mt-2 md:mt-0 text-center w-full md:w-3/4 ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
          }`}>
            Join our contemporary coding platform to participate in engaging programming contests
            and comprehensive knowledge assessments designed to enhance your skills and boost your
            confidence.
          </p>

          <div className="flex justify-center gap-4 py-12">
            <button className={`rounded-md px-6 py-3 font-medium cursor-pointer transition-opacity flex items-center gap-2 ${
              theme === 'dark'
                ? 'border border-zinc-800 bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black hover:opacity-90'
                : 'border border-purple-300 bg-gradient-to-r from-purple-900/90 to-purple-800/70 text-white hover:opacity-90'
            }`}>
              <GoTrophy className="text-lg" />
              Explore Contests
            </button>
            <button className={`rounded-md px-6 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
              theme === 'dark'
                ? 'border border-zinc-700/40 bg-zinc-900/35 hover:bg-zinc-800/40 text-white'
                : 'border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}>
              <LuBrain className="text-lg" />
              Take Assessment
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
          {[
            { icon: <GoTrophy className="text-purple-400 text-2xl" />, value: '2', label: 'Active Contests' },
            { icon: <LuBrain className="text-blue-400 text-2xl" />, value: '1', label: 'Knowledge Assessments' },
            { icon: <FiUsers className="text-green-400 text-2xl" />, value: '127', label: 'Active Developers' },
            { icon: <FiTrendingUp className="text-orange-400 text-2xl" />, value: '98%', label: 'Success Rate' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-xl p-6 transition-colors ${
                theme === 'dark'
                  ? 'bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60'
                  : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                theme === 'dark' ? 'bg-zinc-800/70' : 'bg-white shadow-sm'
              }`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{stat.value}</div>
              <p className={`text-sm mt-1 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
              }`}>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Programming Contests Section */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <GoTrophy className="text-purple-400" /> Programming Contests
              </h2>
              <p className={`text-sm mt-1 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
              }`}>
                Challenge yourself with curated algorithmic problems
              </p>
            </div>
            <button className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors ${
              theme === 'dark'
                ? 'border border-zinc-800/50 text-zinc-300 hover:bg-zinc-800/40'
                : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}>
              View All <FiArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[ 
              { title: "Algorithm Championship", time: "120m", date: "9/1/2024", level: "Level 1", desc: "Test your algorithmic skills with advanced data structure problems" },
              { title: "Dynamic Programming Master", time: "180m", date: "9/5/2024", level: "Level 2", desc: "Challenging DP problems for experienced programmers" }
            ].map((contest, idx) => (
              <div key={idx} className={`rounded-xl p-6 flex flex-col justify-between transition-colors group ${
                theme === 'dark'
                  ? 'bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60'
                  : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
              }`}>
                
                <div className="flex justify-between items-center mb-4">
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md ${
                    theme === 'dark'
                      ? 'text-zinc-400 bg-zinc-800/70'
                      : 'text-gray-600 bg-white shadow-sm'
                  }`}>
                    <FiClock /> {contest.time}
                  </span>
                  <span className={`flex items-center gap-1 text-xs text-purple-400 px-2 py-1 rounded-md ${
                    theme === 'dark' ? 'bg-zinc-800/70' : 'bg-white shadow-sm'
                  }`}>
                    <AiFillStar className="text-yellow-400" /> Contest
                  </span>
                </div>

                <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-purple-300'
                    : 'text-gray-900 group-hover:text-purple-800/80'
                }`}>
                  {contest.title}
                </h3>
                <p className={`text-sm mb-6 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                }`}>{contest.desc}</p>

                <div className={`flex justify-between items-center text-xs mb-4 ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
                }`}>
                  <span className="flex items-center gap-1">
                    <FiCalendar /> {contest.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiUsers /> {contest.level}
                  </span>
                </div>

                <button className={`flex items-center justify-center gap-2 w-full rounded-lg py-2 text-sm font-medium transition-opacity ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black hover:opacity-90'
                    : 'bg-gradient-to-r from-purple-900/90 to-purple-800/70 text-white hover:opacity-90'
                }`}>
                  <FiZap /> Start Challenge
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Knowledge Assessments Section */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <LuBrain className="text-purple-400" /> Knowledge Assessments
              </h2>
              <p className={`text-sm mt-1 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
              }`}>
                Evaluate and enhance your theoretical understanding
              </p>
            </div>
            <button className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors ${
              theme === 'dark'
                ? 'border border-zinc-800/50 text-zinc-300 hover:bg-zinc-800/40'
                : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}>
              View All <FiArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`rounded-xl p-6 transition-colors group ${
              theme === 'dark'
                ? 'bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60'
                : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
            }`}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md ${
                    theme === 'dark'
                      ? 'text-zinc-400 bg-zinc-800/70'
                      : 'text-gray-600 bg-white shadow-sm'
                  }`}>
                    2 Questions
                  </span>
                  <span className={`flex items-center gap-1 text-xs text-red-400 px-2 py-1 rounded-md ${
                    theme === 'dark' ? 'bg-zinc-800/70' : 'bg-white shadow-sm'
                  }`}>
                    ⭐ Beginner
                  </span>
                </div>
              </div>

              <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                theme === 'dark'
                  ? 'text-white group-hover:text-purple-300'
                  : 'text-gray-900 group-hover:text-purple-800/80'
              }`}>
                Data Structures Fundamentals
              </h3>
              <p className={`text-sm mb-6 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
              }`}>
                Basic concepts of arrays, linked lists, stacks, and queues
              </p>

              <div className={`flex justify-between items-center text-xs mb-4 ${
                theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
              }`}>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Skill Level 1
                </span>
                <span className="flex items-center gap-1">
                  <FiClock /> ~15 min
                </span>
              </div>

              <button className={`flex items-center justify-center gap-2 w-full rounded-lg py-2 text-sm font-medium transition-opacity ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black hover:opacity-90'
                  : 'bg-gradient-to-r from-purple-900/90 to-purple-800/70 text-white hover:opacity-90'
              }`}>
                <BsCheckSquare />
                Begin Assessment
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 mt-12 mb-14 transition-colors">
          <h2 className={`text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Ready to advance your skills?</h2>
          <p className={`mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
          }`}>
            Join thousands of developers who are already elevating their coding abilities through
            our carefully crafted challenges and assessments.
          </p>
          <button className={`flex items-center justify-center gap-2 mx-auto rounded-lg px-6 py-3 text-sm font-medium transition-opacity ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black hover:opacity-90'
              : 'bg-gradient-to-r from-purple-900/90 to-purple-800/70 text-white hover:opacity-90'
          }`}>
            <FiZap /> Get Started Today
          </button>
        </section>

      </div>
    </div>
  );
}