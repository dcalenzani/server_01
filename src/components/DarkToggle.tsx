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
      className="focus:outline-none hover:bg-gray-200"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};

export default DarkModeToggle;
