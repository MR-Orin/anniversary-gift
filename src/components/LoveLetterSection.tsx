import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface LoveLetterSectionProps {
  onComplete: () => void;
}

const LoveLetterSection: React.FC<LoveLetterSectionProps> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterOpened, setIsLetterOpened] = useState(false);

  const letterText = ` Dearest Suku,

We have successfully completed 1 year together 💗 We created so many beautiful memories throughout this year. We broke up many times, but somehow we always found our way back and fixed our relationship. Maybe that means we are truly made for each other hehe :)

You will always be my favorite part of my life, no matter whether we stay together forever or not. Because of you, I experienced the true feeling of love and got the chance to share my love with someone so special. I will always be grateful to you for choosing me as your partner.

I hope you stay with me until my last breath. I just want a beautiful future where you and I can live happily together. Just stay with me until then and never give up on me. If I do something wrong, tell me and I’ll fix it, but please never leave me.

Throughout this year, I hurt you many times with my behavior and my actions, but trust me, none of those were intentional. I’m still learning how to love you properly, and because of that, I made mistakes. If you ever feel that I’m not serious or not putting in enough effort, then that isn’t true at all. I’m simply learning and trying to become better for us.

At the end, I just hope you’ll stay with me in the future and keep holding my hand tightly, no matter how difficult the obstacles we face become 💗

- NONE💗
`;

  const { displayedText, isFinished } = useTypingEffect(letterText, 40, isLetterOpened);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsLetterOpened(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-romantic-pastel/30">
      <AnimatePresence mode="wait">
        {!isLetterOpened ? (
          <motion.div
            key="envelope-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="relative cursor-pointer group"
            onClick={handleOpenEnvelope}
          >
            {/* Envelope Visual */}
            <div className={`relative w-[300px] h-[200px] bg-white border-2 border-primary/20 shadow-2xl transition-all duration-1000 transform ${isOpen ? 'rotate-x-180 opacity-0' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-0 border-t-[100px] border-t-primary/10 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent transition-all duration-500 origin-top group-hover:brightness-110" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-romantic-pink text-4xl animate-bounce">💌</div>
              </div>
              <div className="absolute bottom-4 right-4 font-handwriting text-primary/60">Tap to open</div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter-container"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full max-w-2xl bg-white/90 shadow-2xl rounded-lg p-8 md:p-12 relative overflow-hidden"
            style={{
              backgroundImage: 'url("https://miaoda-site-img.s3cdn.medo.dev/images/KLing_343a39ad-2728-43dd-9e3f-42e76f7d40f9.jpg")',
              backgroundSize: 'cover',
              backgroundBlendMode: 'overlay',
            }}
          >
            {/* Letter Content */}
            <div className="relative z-10 font-handwriting text-lg md:text-2xl text-[#5a4a4a] leading-loose whitespace-pre-wrap">
              {displayedText}
              <span className={`inline-block w-1 h-6 bg-primary ml-1 ${isFinished ? 'opacity-0' : 'animate-pulse'}`} />
            </div>

            {/* Next Button - Revealed after typing */}
            <AnimatePresence>
              {isFinished && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="mt-12 text-center"
                >
                  <Button
                    onClick={onComplete}
                    className="rounded-full px-10 py-6 text-lg font-serif bg-romantic-gold hover:bg-romantic-gold/90 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                  >
                    One Last Question...
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveLetterSection;
