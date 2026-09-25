"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({
  onComplete,
}: BootScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.main
      className="boot-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="boot-content">
        <p>$ java Portfolio</p>
        <p>Loading portfolio...</p>
        <p>Initializing modules...</p>
        <p>Portfolio ready_</p>
      </div>
    </motion.main>
  );
}