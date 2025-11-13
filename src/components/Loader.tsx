'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-skysoft via-white to-peach flex items-center justify-center"
    >
      <div className="text-center space-y-8 px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Building2 size={48} className="text-text" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-text">
            SubodhProperties
          </h1>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-md mx-auto space-y-3">
          <div className="relative h-2 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-text to-peach rounded-full"
            />
          </div>

          {/* Percentage Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-muted font-medium">Loading...</span>
            <motion.span
              key={Math.floor(progress)}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-text font-bold text-lg"
            >
              {Math.floor(progress)}%
            </motion.span>
          </motion.div>
        </div>

        {/* Loading Text Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted text-sm"
        >
          Preparing your property experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
