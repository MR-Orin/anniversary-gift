import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

interface TimelineItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

const memories: TimelineItem[] = [
  {
    id: 1,
    image: 'https://i.imgur.com/I7eGXmV.jpeg',
    title: 'Where it all started💗',
    description: 'This was the first time you replied to my proposal. I was so nervous, but your message made my heart skip a beat.💗',
    date: 'July 26, 2025',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/hlwWC3z.jpeg',
    title: 'Your wish on my birthday🎂',
    description: 'I will never forget the moment you wished me a happy birthday. Your words were so sweet and heartfelt, it made my day truly special.😶‍🌫️',
    date: 'December 31, 2025',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/b5IV4vh_d.jpeg?maxwidth=520&shape=thumb&fidelity=high',
    title: 'We matched our notes!🫠',
    description: 'Maybe this was the moment I realized we were meant to be. Our notes matched perfectly, and it felt like the universe was giving us a little nudge. It was such a magical moment that I will always cherish.💗',
    date: 'July 07, 2025',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/Crxj7ZS.jpeg',
    title: 'Best Moments🙂‍↔️',
    description: 'This is how you used to dedicate romantic songs to me. I still remember how you would send me those songs, and it always made me feel so loved and appreciated. Those moments were truly special, and I will always hold them close to my heart.💗',
    date: 'August 09, 2025',
  },
  {
    id: 5,
    image: 'https://i.imgur.com/Ze7XcAA.jpeg',
    title: 'Cutest Moment😞',
    description: 'I was mad at you for some reason so to convience me you came up with this cutest two lines. I was so mad at you but when I read those lines, I couldn\'t help but smile. It was such a sweet and thoughtful gesture, and it made me realize how much you care about me. That moment will always be one of my favorites.💗',
    date: 'October 16, 2025',
  },
  {
    id: 6,
    image: 'https://i.imgur.com/OVPjiTR.jpeg',
    title: 'Created Love With Text...',
    description: 'We created a love shape from our texts. It was such a cute and creative way to express our feelings for each other. I will always remember that moment as one of the sweetest and most romantic things we have done together.💗',
    date: 'July 05, 2025',
  },
  {
    id: 7,
    image: 'https://i.imgur.com/dVRYFzn.png',
    title: 'We got virtually Married!😂',
    description: 'That day we got virtually married was such a fun and memorable moment. It was a playful way to celebrate our love and commitment to each other, even if it was just in a virtual setting. I will always look back on that day with fondness and laughter, knowing that it was a unique and special moment in our relationship.💗',
    date: 'September 10, 2025',
  },
  {
    id: 8,
    image: 'https://i.imgur.com/Tax0qik.jpeg',
    title: 'You sent me a gift! 🎁',
    description: 'When I recieved the gift you sent me, I was overwhelmed with joy and gratitude. It was such a thoughtful and sweet gesture that showed how much you care about me. I will always cherish that moment and the gift itself as a symbol of our love and connection.💗',
    date: 'April 14, 2026',
  },
];

interface TimelineSectionProps {
  onComplete: () => void;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ onComplete }) => {
  return (
    <section className="py-20 px-4 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl text-romantic-pink font-serif mb-4">Our Story</h2>
        <p className="text-muted-foreground italic font-sans">Every moment with you is a treasure.</p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block" />

        <div className="space-y-24 md:space-y-32">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 group">
                <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              {/* Node (Center) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-romantic-gold border-4 border-white shadow-md z-20" />
              </div>

              {/* Text Side */}
              <div className={`w-full md:w-1/2 p-6 md:p-10 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-sm text-center ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <span className="text-sm font-sans font-medium text-romantic-gold uppercase tracking-widest block mb-2">
                  {memory.date}
                </span>
                <h3 className="text-2xl font-serif text-primary mb-3">{memory.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-7 bg-romantic-pastel/20 rounded-3xl border-2 border-dashed border-romantic-pink/30 text-center"
      >
        <p className="text-romantic-pink font-serif text-1xl md:text-3xl tracking-wide">
          MESSAGE: We’ve created so many beautiful memories throughout this one year together 🥀… and I swear, I’ll carry every single one of them with me for the rest of my life. Most of those moments exist because of you—your love, your effort, your way of making everything feel special… and I adore you for that.
                  Maybe I’m not always the best at expressing my feelings or creating memories the way you do, but please don’t ever doubt this—I love you with every part of my heart. Even the parts I can’t put into words.
                  All I truly want is this… stay with me. No matter what comes our way, no matter how hard things get, let’s hold onto each other and never let go. Let’s stay strong, stay us, and keep choosing each other until the very end. 💗

        </p>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <Button
          onClick={onComplete}
          className="rounded-full px-12 py-8 text-xl font-serif bg-romantic-pink hover:bg-romantic-pink/90 text-white shadow-lg shadow-romantic-pink/20 transition-all hover:scale-110 active:scale-95 animate-glow"
        >
          Read My Letter 💌
        </Button>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
