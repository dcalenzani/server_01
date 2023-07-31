'use client'

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "react-feather";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get the current dark mode preference from local storage (if available)
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
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
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <button
      type="button"
      className="fixed right-8 mt-8 lg:top-0 l:right-3 z-50 bg-slate-300 dark:bg-slate-900 opacity-90 rounded-full focus:outline-none hover:bg-slate-200 dark:hover:bg-slate-700 p-3 hover:drop-shadow-[0_0_0.3rem_#ffffff70] dark:hover:drop-shadow-[0_0_0.3rem_#ffffff70] filter grayscale hover:grayscale-2"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};

export default DarkModeToggle;
