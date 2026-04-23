import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';

interface FinalQuestionSectionProps {
  onComplete: () => void;
}

const FinalQuestionSection: React.FC<FinalQuestionSectionProps> = ({ onComplete }) => {
  const [hoverCount, setHoverCount] = useState(0);

  const handleHover = () => {
    setHoverCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 drop-shadow-md">
          Will you stay with me forever?
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {/* Yes Button - Large and Glowing */}
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="animate-glow rounded-full"
          >
            <Button
              size="lg"
              onClick={onComplete}
              className="px-12 py-8 text-2xl font-serif rounded-full bg-romantic-pink hover:bg-romantic-pink/90 text-white shadow-xl transition-all"
            >
              Yes! Obviously 💖
            </Button>
          </motion.div>

          {/* Of Course Button - Float and Playful */}
          <motion.div
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              x: Math.sin(hoverCount) * 10,
              y: Math.cos(hoverCount) * 10
            }}
            onHoverStart={handleHover}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={onComplete}
              className="px-12 py-8 text-2xl font-serif rounded-full border-2 border-primary/40 text-primary hover:bg-primary/5 shadow-lg transition-all"
            >
              Of course! Why not? 😊
            </Button>
          </motion.div>
        </div>

        {/* Playful Little Note */}
        <AnimatePresence>
          {hoverCount > 3 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-muted-foreground italic mt-8 text-lg"
            >
              You're so persistent... I love that about you! ❤️
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FinalQuestionSection;
