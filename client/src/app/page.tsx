import React from 'react';
import { GoTrophy } from 'react-icons/go';
import { LuBrain } from 'react-icons/lu';
import { FiUsers, FiTrendingUp, FiClock, FiCalendar, FiZap, FiArrowRight } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckSquare } from 'react-icons/bs';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="h-auto w-[90%] mx-auto bg-transparent py-10 z-30">
          <button className="text-white shimmer bg-[linear-gradient(110deg,#000103,45%,#1F1F1F,55%,#000000)] font-light flex gap-2 text-sm rounded-full border border-zinc-800/50 px-5 py-1 mx-auto z-30 mb-6 hover:border-zinc-700/70 transition-colors">
            ✨ Modern Coding Platform
          </button>

          <h1 className="text-center text-5xl md:text-6xl font-sans py-2 md:py-5 relative z-20 font-medium tracking-wide">
            Elevate Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400/70 to-purple-400/30">
              Coding Journey
            </span>
          </h1>

          <p className="text-zinc-400 text-sm md:text-lg mx-auto mt-2 md:mt-0 text-center w-full md:w-3/4">
            Join our contemporary coding platform to participate in engaging programming contests
            and comprehensive knowledge assessments designed to enhance your skills and boost your
            confidence.
          </p>

          <div className="flex justify-center gap-4 py-12">
            <button className="rounded-md border border-zinc-800 px-6 py-3 bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black font-medium cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
              <GoTrophy className="text-lg" />
              Explore Contests
            </button>
            <button className="rounded-md border border-zinc-700/40 px-6 py-3 cursor-pointer bg-zinc-900/35 hover:bg-zinc-800/40 transition-colors flex items-center gap-2">
              <LuBrain className="text-lg" />
              Take Assessment
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
          {/* Active Contests */}
          <div className="flex flex-col items-center justify-center bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 hover:bg-zinc-900/60 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800/70 mb-4">
              <GoTrophy className="text-purple-400 text-2xl" />
            </div>
            <div className="text-2xl font-semibold text-white">2</div>
            <p className="text-zinc-400 text-sm mt-1">Active Contests</p>
          </div>

          {/* Knowledge Assessments */}
          <div className="flex flex-col items-center justify-center bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 hover:bg-zinc-900/60 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800/70 mb-4">
              <LuBrain className="text-blue-400 text-2xl" />
            </div>
            <div className="text-2xl font-semibold text-white">1</div>
            <p className="text-zinc-400 text-sm mt-1">Knowledge Assessments</p>
          </div>

          {/* Active Developers */}
          <div className="flex flex-col items-center justify-center bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 hover:bg-zinc-900/60 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800/70 mb-4">
              <FiUsers className="text-green-400 text-2xl" />
            </div>
            <div className="text-2xl font-semibold text-white">127</div>
            <p className="text-zinc-400 text-sm mt-1">Active Developers</p>
          </div>

          {/* Success Rate */}
          <div className="flex flex-col items-center justify-center bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 hover:bg-zinc-900/60 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800/70 mb-4">
              <FiTrendingUp className="text-orange-400 text-2xl" />
            </div>
            <div className="text-2xl font-semibold text-white">98%</div>
            <p className="text-zinc-400 text-sm mt-1">Success Rate</p>
          </div>
        </section>

        {/* Programming Contests Section */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <GoTrophy className="text-purple-400" /> Programming Contests
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Challenge yourself with curated algorithmic problems
              </p>
            </div>
            <button className="flex items-center gap-2 border border-zinc-800/50 rounded-lg px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800/40 transition-colors">
              View All <FiArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 ">
            {/* Contest Card 1 */}
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 flex flex-col justify-between hover:bg-zinc-900/60 transition-colors group">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-800/70 px-2 py-1 rounded-md">
                  <FiClock /> 120m
                </span>
                <span className="flex items-center gap-1 text-xs text-purple-400 bg-zinc-800/70 px-2 py-1 rounded-md">
                  <AiFillStar className="text-yellow-400" /> Contest
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Algorithm Championship
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Test your algorithmic skills with advanced data structure problems
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-zinc-500 mb-4">
                <span className="flex items-center gap-1">
                  <FiCalendar /> 9/1/2024
                </span>
                <span className="flex items-center gap-1">
                  <FiUsers /> Level 1
                </span>
              </div>

              {/* Button */}
              <button className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                <FiZap /> Start Challenge
              </button>
            </div>

            {/* Contest Card 2 */}
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 flex flex-col justify-between hover:bg-zinc-900/60 transition-colors group">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-800/70 px-2 py-1 rounded-md">
                  <FiClock /> 180m
                </span>
                <span className="flex items-center gap-1 text-xs text-purple-400 bg-zinc-800/70 px-2 py-1 rounded-md">
                  <AiFillStar className="text-yellow-400" /> Contest
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Dynamic Programming Master
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Challenging DP problems for experienced programmers
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-zinc-500 mb-4">
                <span className="flex items-center gap-1">
                  <FiCalendar /> 9/5/2024
                </span>
                <span className="flex items-center gap-1">
                  <FiUsers /> Level 2
                </span>
              </div>

              {/* Button */}
              <button className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                <FiZap /> Start Challenge
              </button>
            </div>
          </div>
        </section>

        {/* Knowledge Assessments Section */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <LuBrain className="text-purple-400" /> Knowledge Assessments
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Evaluate and enhance your theoretical understanding
              </p>
            </div>
            <button className="flex items-center gap-2 border border-zinc-800/50 rounded-lg px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800/40 transition-colors">
              View All <FiArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 ">
            {/* Assessment Card */}
            <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 hover:bg-zinc-900/60 transition-colors group">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-800/70 px-2 py-1 rounded-md">
                    2 Questions
                  </span>
                  <span className="flex items-center gap-1 text-xs text-red-400 bg-zinc-800/70 px-2 py-1 rounded-md">
                    ⭐ Beginner
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Data Structures Fundamentals
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Basic concepts of arrays, linked lists, stacks, and queues
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-zinc-500 mb-4">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Skill Level 1
                </span>
                <span className="flex items-center gap-1">
                  <FiClock /> ~15 min
                </span>
              </div>

              {/* Button */}
              <button className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                <BsCheckSquare className="text-black-400" />
                Begin Assessment
              </button>
            </div>
          </div>
        </section>

        {/* CTA Ready to advance your skills Section */}
        <section className="text-center py-16  mt-12 mb-14 transition-colors bor">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to advance your skills?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already elevating their coding abilities through
            our carefully crafted challenges and assessments.
          </p>
          <button className="flex items-center justify-center gap-2 mx-auto rounded-lg bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            <FiZap /> Get Started Today
          </button>
        </section>
      </div>
    </div>
  );
}
