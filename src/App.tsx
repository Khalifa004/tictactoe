import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomePage from './components/Welcomepage';
import Game from './components/Game';


const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-900 to-black overflow-hidden">
      <AnimatePresence>
        {!gameStarted ? (
          <WelcomePage key="welcome" startGame={() => setGameStarted(true)} />
        ) : (
          <Game key="game" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;