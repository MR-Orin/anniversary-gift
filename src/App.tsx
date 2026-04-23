import React, { useState, useEffect, useRef } from 'react';
import LandingScreen from '@/components/LandingScreen';
import TimelineSection from '@/components/TimelineSection';
import LoveLetterSection from '@/components/LoveLetterSection';
import FinalQuestionSection from '@/components/FinalQuestionSection';
import ThankYouSection from '@/components/ThankYouSection';
import FloatingHearts from '@/components/FloatingHearts';
import { Toaster } from '@/components/ui/sonner';

type Section = 'landing' | 'timeline' | 'letter' | 'question' | 'thankyou';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('landing');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-redirect from thank you back to landing
  useEffect(() => {
    if (currentSection === 'thankyou') {
      const timer = setTimeout(() => {
        setCurrentSection('landing');
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  // Attempt to play music and handle global interactions
  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play()
          .then(() => setIsMusicPlaying(true))
          .catch((err) => console.log('Autoplay blocked, waiting for interaction', err));
      }
    };

    // Try playing immediately
    playMusic();

    // Interaction listeners to bypass autoplay restrictions
    const handleInteraction = () => {
      if (!isMusicPlaying) {
        playMusic();
      }
      // Remove listeners after first interaction
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isMusicPlaying]);

  const startExperience = () => {
    setCurrentSection('timeline');
    // Ensure music starts on the main button click too
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.play().then(() => setIsMusicPlaying(true));
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background selection:bg-primary/30">
      {/* Background Music: Indila - Love Story (Slowed-Reverb) */}
      <audio
        ref={audioRef}
        src="https://miaoda-conversation-file.s3cdn.medo.dev/user-b2ecp0jk82rk/conv-b2eczjdoyyo0/20260419/file-b2esh9g74yrk.mp3"
        loop
        className="hidden"
      />

      {/* Global Background Elements */}
      <FloatingHearts />

      {/* Section Transitions */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        {currentSection === 'landing' && (
          <LandingScreen onContinue={startExperience} />
        )}
        
        {currentSection === 'timeline' && (
          <TimelineSection onComplete={() => setCurrentSection('letter')} />
        )}

        {currentSection === 'letter' && (
          <LoveLetterSection onComplete={() => setCurrentSection('question')} />
        )}

        {currentSection === 'question' && (
          <FinalQuestionSection onComplete={() => setCurrentSection('thankyou')} />
        )}

        {currentSection === 'thankyou' && (
          <ThankYouSection />
        )}
      </main>

      <Toaster />
    </div>
  );
};

export default App;