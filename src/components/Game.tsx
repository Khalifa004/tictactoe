import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinningLine(lines[i]);
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result);
    } else if (!board.includes(null)) {
      setWinner('draw');
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  const cellVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Tic Tac Toe
      </motion.h1>
      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-lg">
        {board.map((cell, index) => (
          <motion.button
            key={index}
            className={`w-24 h-24 text-5xl font-bold flex items-center justify-center rounded-md
              ${cell === 'X' ? 'text-blue-500' : 'text-red-500'}
              ${winningLine?.includes(index) ? 'bg-yellow-200' : 'bg-gray-100'}`}
            onClick={() => handleClick(index)}
            variants={cellVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <AnimatePresence>
              {cell && (
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {cell}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
      <motion.div 
        className="mt-8 text-2xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {winner ? (
          winner === 'draw' ? (
            "It's a draw!"
          ) : (
            `Winner: ${winner}`
          )
        ) : (
          `Next player: ${isXNext ? 'X' : 'O'}`
        )}
      </motion.div>
      <motion.button
        className="mt-4 px-6 py-2 bg-white text-purple-600 rounded-full font-bold text-lg shadow-md hover:bg-purple-100 transition-colors duration-200"
        onClick={resetGame}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Reset Game
      </motion.button>
    </div>
  );
};

export default TicTacToe;