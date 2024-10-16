import React from 'react';
import { motion } from 'framer-motion';

interface WelcomePageProps {
  startGame: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ startGame }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-6xl font-bold mb-8 text-center text-white"
      >
        Tic Tac Toe
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl mb-12 text-center max-w-md text-white"
      >
        Challenge your friend to a classic game of Tic Tac Toe with a modern twist!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={startGame}
        className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full text-xl shadow-md hover:bg-purple-100 transition-colors duration-200"
      >
        Start Game
      </motion.button>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 text-white text-center"
      >
        Want to play with a friend? Share the link to this page!
      </motion.p>
    </motion.div>
  );
};

export default WelcomePage;