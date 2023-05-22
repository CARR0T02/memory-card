import React from 'react';

export default function GameCard({ item, handleClick }) {
  return (
    <div className="card" onClick={handleClick.bind(null, item.name)}>
      <img className="card-img" src={item.path} alt={'Image of ' + item.name} />
      <span className="card-content">{item.name}</span>
    </div>
  );
}
