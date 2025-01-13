import React from 'react';
import './IpoCard.css';

const IpoCard = ({ title, priceBand, issueSize, issueType, listingDate, status }) => {
  return (
    <div className="ipo-card">
      <h3 className="ipo-title">{title}</h3>
      <p><strong>Price Band:</strong> {priceBand}</p>
      <p><strong>Issue Size:</strong> {issueSize}</p>
      <p><strong>Issue Type:</strong> {issueType}</p>
      <p><strong>Listing Date:</strong> {listingDate}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

export default IpoCard;
