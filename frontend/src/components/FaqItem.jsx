import React from 'react';
import './FaqItem.css';

const FaqItem = ({ question }) => {
  return (
    <div className="faq-item">
      <p>{question}</p>
    </div>
  );
};

export default FaqItem;
