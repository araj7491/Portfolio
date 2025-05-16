import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseTime?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  delay = 1000,
  typingSpeed = 100,
  erasingSpeed = 50,
  pauseTime = 2000
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: number;

    if (isPaused) {
      timeout = window.setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isTyping) {
      const text = texts[currentIndex];
      if (currentText.length < text.length) {
        timeout = window.setTimeout(() => {
          setCurrentText(text.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentText.length > 0) {
        timeout = window.setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, isPaused, texts, typingSpeed, erasingSpeed, pauseTime]);

  useEffect(() => {
    // Initial delay before starting to type
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <span className="cursor-blink ml-1 h-6 w-[2px] bg-blue-600 dark:bg-blue-500"></span>
    </span>
  );
};

export default TypeWriter;