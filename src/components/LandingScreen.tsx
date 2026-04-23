import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface LandingScreenProps {
  onContinue: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onContinue }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Fireworks (Simulated with simple animated dots) */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`firework-${i}`}
            className="absolute animate-firework bg-primary/20 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 40}%`,
              animationDelay: `${i * 1.5}s`,
              width: '2px',
              height: '2px',
            }}
          />
        ))}
      </div>

      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`balloon-${i}`}
            className="absolute animate-float-up text-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              '--float-delay': `${i * 2}s`,
              '--float-duration': '12s',
            } as React.CSSProperties}
          >
            <div className="w-8 h-10 bg-primary/40 rounded-full relative flex items-center justify-center">
              <div className="absolute -bottom-2 w-0.5 h-6 bg-primary/20" />
              <span className="text-[10px] text-white">❤️</span>
            </div>
          </div>
        ))}
      </div>

      {/* Intro Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="z-50 bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-primary/20 text-center max-w-md mx-4"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 drop-shadow-sm">
            Happy 1 Year Anniversary ❤️
          </h1>
          <p className="text-muted-foreground mb-10 font-sans tracking-wide">
            A beautiful journey of 365 days, and many more to come.
          </p>
          <Button
            size="lg"
            onClick={onContinue}
            className="rounded-full px-10 py-6 text-lg animate-glow hover:scale-105 transition-all bg-primary text-white hover:bg-primary/90"
          >
            Tap to continue ✨
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default LandingScreen;