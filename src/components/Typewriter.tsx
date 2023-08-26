import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prevDisplayText => prevDisplayText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, speed, text]);

  return <p>{displayText}</p>;
};

export default Typewriter;