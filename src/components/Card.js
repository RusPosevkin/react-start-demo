import React from 'react';
import './Card.css';

function Card({ title, subtitle, alt, src }) {
  return (
    <div className="Card">
      <img className="Card-image" alt={alt} src={src} />
      <p className="Card-title">{title}</p>
      <p className="Card-subtitle">{subtitle}</p>
    </div>
  );
}

export default Card;
