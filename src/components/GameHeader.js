import React from 'react';

export default function GameHeader({ score, highScore }) {
  return (
    <div className="header">
      <div>Memory Card Game</div>
      <div>
        Current Score: {score}, High Score: {highScore}
      </div>
    </div>
  );
}
