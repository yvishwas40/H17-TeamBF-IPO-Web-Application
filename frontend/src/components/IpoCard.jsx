import React from 'react';
import './IpoCard.css';

const IpoCard = ({ logo, title, priceBand, issueSize, issueType, listingDate, openDate, closeDate }) => {
  return (
    
    <div className="ipo-card">
      <div className="ipo-header">
        <img src={logo} alt={`${title} Logo`} className="ipo-logo" />
        <h3 className="ipo-title">{title}</h3>
      </div>
      <div className="ipo-details">
        <div className="ipo-row">
          <div className="ipo-item">
            <p>PRICE BAND:</p>
            <p>{priceBand}</p>
          </div>
          <div className="ipo-item">
            <p>OPEN:</p>
            <p>{openDate}</p>
          </div>
          <div className="ipo-item">
            <p>CLOSE:</p>
            <p>{closeDate}</p>
          </div>
        </div>
        <div className="ipo-row">
          <div className="ipo-item">
            <p>ISSUE SIZE:</p>
            <p>{issueSize}</p>
          </div>
          <div className="ipo-item">
            <p>ISSUE TYPE:</p>
            <p>{issueType}</p>
          </div>
          <div className="ipo-item">
            <p>LISTING DATE:</p>
            <p>{listingDate}</p>
          </div>
        </div>
      </div>
      <div className="ipo-buttons">
        <p className="rhp-btn">RHP</p>
        <p className="drhp-btn">DRHP</p>
      </div>
    </div>
  );
};

export default IpoCard;
