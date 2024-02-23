import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed: number;
  loop?: boolean; // Add a loop prop
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed, loop = true }) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prevDisplayText => prevDisplayText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (loop) { // Check if looping is enabled
      setCurrentIndex(0); // Reset index to loop
      setDisplayText(''); // Reset display text
    }
  }, [currentIndex, speed, text, loop]);

  return <p>{displayText}</p>;
};

export default Typewriter;