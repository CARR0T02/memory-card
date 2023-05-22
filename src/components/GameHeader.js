import React from 'react';

export default function GameHeader({ score, highScore }) {
  return (
    <div>
      <div>Memory Card Game</div>
      <div>
        Current Score: {score}, High Score: {highScore}
      </div>
    </div>
  );
}
