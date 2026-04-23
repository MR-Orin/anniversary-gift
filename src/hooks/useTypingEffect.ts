import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number = 50, active: boolean = false) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!active) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, active]);

  return { displayedText, isFinished };
};
