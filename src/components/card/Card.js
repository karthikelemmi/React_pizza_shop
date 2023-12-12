import React from 'react';
import './Card.css';

const CardSb = ({ children,variant='verticalimage' }) => {
  return <div className={`card custom-card ${variant}`}>{children}</div>;
};

export default CardSb;