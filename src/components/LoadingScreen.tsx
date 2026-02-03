import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  minimumLoadTime?: number;
}

const LoadingScreen = ({ onLoadingComplete, minimumLoadTime = 2500 }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, minimumLoadTime / 10);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 600);
    }, minimumLoadTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete, minimumLoadTime]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-hero"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Logo and Brand */}
          <motion.div
            className="flex flex-col items-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Elegant emblem */}
            <div className="relative">
              <motion.div
                className="w-32 h-32 rounded-full border-2 border-gold/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-28 h-28 rounded-full border border-gold/20" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="font-serif text-4xl font-bold text-gold tracking-wider">P</span>
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl text-cream tracking-widest font-semibold">
                PRIME PRO-TEAM
              </h1>
              <p className="mt-3 text-cream/60 text-sm tracking-[0.3em] uppercase font-sans">
                Public Relations & Branding
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-64 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
            >
              <div className="h-0.5 bg-cream/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-center mt-4 text-cream/40 text-xs tracking-widest uppercase font-sans">
                Loading Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-gold/30" />
              <span className="text-gold/40 text-xs tracking-widest">EST. 2024</span>
              <div className="w-8 h-px bg-gold/30" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
