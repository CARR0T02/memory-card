import { useEffect, useState } from 'react';
import GameCard from './GameCard';
import GameHeader from './GameHeader';
import { getRandomItems } from './util';
import uniqid from 'uniqid';

export default function Game() {
  const boardSize = 12;
  const [board, setBoard] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    refreshBoard();
  }, [currScore]);

  const handleClick = (item) => {
    console.log(history);
    if (!history.includes(item)) {
      setHistory([...history, item]);
      setCurrScore((currScore) => currScore + 1);
    } else {
      console.log('new game called');
      newGame();
    }
    refreshBoard();
  };

  const refreshBoard = () => {
    let arr = getRandomItems(boardSize, history);
    setBoard(arr);
  };

  const newGame = () => {
    console.log('called newgame');
    if (currScore > highScore) {
      setHighScore(currScore);
    }
    setCurrScore(0);
    setHistory([]);
  };

  return (
    <div className="game">
      <GameHeader score={currScore} highScore={highScore} />
      <div className="gameboard">
        {board.map((item) => (
          <GameCard key={uniqid()} handleClick={handleClick} item={item} />
        ))}
      </div>
    </div>
  );
}
