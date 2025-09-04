"use client";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Contest", href: "/contest" },
    { name: "Assessments", href: "/assessments" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`sticky top-0 w-full py-4 border-b border-zinc-700/15 flex items-center justify-between px-6 z-[98] ${theme==='dark'?'bg-black':'bg-white'}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 select-none">
        <h1
          className={`text-xl font-semibold italic ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Quark
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 select-none ${
                theme === "dark"
                  ? "text-zinc-400 hover:text-white"
                  : "text-black hover:text-zinc-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Admin Button */}
        <button
          className={`inline-flex items-center justify-center rounded-md px-4 py-1 border transition-colors cursor-pointer
            ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-400/70 to-purple-400/30 text-white border-zinc-600"
                : "bg-gradient-to-r from-purple-800/70 to-purple-800/30 text-black border-zinc-300 "
            }
          `}
        >
          Admin
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`relative w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
            ${
              theme === "dark"
                ? "border-zinc-600 hover:bg-zinc-700/40"
                : "border-zinc-300 hover:bg-zinc-200/40"
            }
          `}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="w-5 h-5 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
