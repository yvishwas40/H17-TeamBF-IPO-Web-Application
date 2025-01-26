import React, { useState } from 'react';
import './FaqItem.css';

const FaqItem = ({ question, answer }) => {
  // State to manage the visibility of the answer
  const [isOpen, setIsOpen] = useState(false);

  // Toggle answer visibility
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question">
        <p>{question}</p>
        <button onClick={toggleAnswer} className="faq-toggle">
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

export default FaqItem;
