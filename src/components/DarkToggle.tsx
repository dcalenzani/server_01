'use client'

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "react-feather";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = window.localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  useEffect(() => {
    // Retrieve the dark mode preference from local storage
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode ? JSON.parse(savedMode) : false;

    setIsDarkMode(isDark);

    // Add or remove the 'dark' class to the document element based on the current mode
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    // Store the dark mode preference in local storage
    localStorage.setItem("darkMode", isDarkMode.toString());

    // Add or remove the 'dark' class to the document element based on the current mode
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode: any) => !prevIsDarkMode);
  };

  return (
    <button
      type="button"
      className="fixed right-1.5 top-2.5 md:top-3 md:right-3 z-50 bg-slate-100 dark:bg-slate-600 opacity-90 rounded-full focus:outline-none hover:bg-slate-300 dark:hover:bg-slate-700 p-3 hover:drop-shadow-[0_0_0.3rem_#ffffff70] dark:hover:drop-shadow-[0_0_0.3rem_#ffffff70] filter grayscale hover:grayscale-2"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkModeToggle;