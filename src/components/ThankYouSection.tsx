import React from 'react';
import { motion } from 'motion/react';

const ThankYouSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 text-center bg-background selection:bg-primary/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight max-w-4xl mx-auto tracking-wide drop-shadow-sm">
          THANK YOU SO MUCH FOR CHOOSING ME AS YOUR PARTNER ❤️
        </h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-romantic-gold italic font-sans text-xl"
        >
          My world is better with you in it.
        </motion.div>

        {/* Floating Hearts Decoration */}
        <div className="relative h-20 w-full overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -50, opacity: [0, 1, 0] }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute text-romantic-pink/40 text-2xl"
              style={{ left: `${10 + i * 7}%` }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouSection;